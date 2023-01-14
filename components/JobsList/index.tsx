import React, { useMemo } from 'react';
import { Button, Row, Select, Space, Table, Tag } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import Link from 'next/link';
import type { SelectProps } from 'antd';
import { FiLoader } from 'react-icons/fi';
import { JobsDataType } from '@types';
import { title } from 'process';
import DetailsModal from './DetailsModal';
import { jobsData } from '../../dummydata';
import JobCard from './JobCard';
import Image from 'next/image';
import { useFetchFilterOptionsQuery, useFetchJobsQuery } from '../../store/features/api';


const JobsList:React.FC = () => {

  const [showModal, setShowModal] = React.useState(false);
  const [filterBy, setFilterBy] = React.useState({
    title: '',
    company: '',
    employmentType: '',
    location: ''
  });

  const handleFilter = async ( key:string, val:any ) => {
    setFilterBy(prev => ({...prev, [key]: val }));
  };

  const { data:jobs, isLoading } = useFetchJobsQuery({limit: 5, page: 1, ...filterBy});
  const { data:optionsData, isLoading:optionsLoading } = useFetchFilterOptionsQuery({undefined});

  const jobsList = useMemo(()=> jobs?.searchResults?.map((job:any, idx:number) => ({
          key: idx + 1, 
          title: job.title,
          companyName: job.companyName.title,
          address: job.jobLocation.map((location:any) => `${location.city}, ${location.state}`).join(', '),
          minExperienceRequired: job.minExperienceRequired,
          employmentType: job.employmentType.join(',')
  })) ?? [] ,[jobs]);

  const titleOptions = useMemo(() => optionsData?.data?.titles?.map((title:any) => ({label: title.title, value: title.title})) ?? [],[optionsData])
  const companyOptions = useMemo(() => optionsData?.data?.company_names?.map((title:any) => ({label: title.company, value: title.company})) ?? [],[optionsData])
  const employTypeOptions = useMemo(() => optionsData?.data?.employment_type?.map((title:any) => ({label: title.employmentType, value: title.employmentType})) ?? [],[optionsData])
  const locationOptions = useMemo(() => optionsData?.data?.location?.map((title:any) => ({label: title.jobLocation, value: title.jobLocation})) ?? [],[optionsData])
  
  const modalHandler = (data?:any) => {
    if(data){
      console.log("Modal data: => ", data);
    }
    setShowModal(prev => !prev);
  };

const columns: ColumnsType<any> = [
  {
    title: 'Company',
    dataIndex: 'companyName',
    key: 'companyName',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Opportunity Title',
    dataIndex: 'title',
    key: 'title',
  },
  {
    title: 'Location',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'Minimum Experience',
    dataIndex: 'minExperienceRequired',
    key: 'minExperienceRequired',
  },
 
  {
    title: 'Employment Type',
    dataIndex: 'employmentType',
    key: 'employmentType',
  },
  {
    title: 'Descriptoin Preview',
    dataIndex: 'id',
    key: 'id',
    render: (data) => <Button onClick={() => modalHandler(data)} size="large" type='primary' className='w-28 font-semibold' >Preview</Button>
  },
];

  if(isLoading || optionsLoading){
    return (
      <div className="flex justify-center items-center text-primary text-5xl">
        <FiLoader className='animate-spin' />
      </div>
    )
  }

  return (
    <div className="">
      <div className="-translate-y-24 bg-white p-10 shadow rounded-lg w-5/6 mx-auto flex gap-5">
          <Select 
                  bordered
                  showSearch
                  className='rounded-none'
                  allowClear
                  size='large'
                  style={{ width: '100%' }}
                  placeholder="Filter company"
                  onChange={(v) => handleFilter('company',v as string)}
                  options={companyOptions} />
          <Select 
                  bordered
                  showSearch
                  allowClear
                  size='large'
                  style={{ width: '100%' }}
                  placeholder="Filter title"
                  onChange={(v) => handleFilter('title',v as string)}
                  options={titleOptions} />
          <Select 
                  bordered
                  showSearch
                  allowClear
                  size='large'
                  style={{ width: '100%' }}
                  placeholder="Filter employment type"
                  onChange={(v) => handleFilter('employmentType',v as string)}
                  options={employTypeOptions} />
          <Select 
                  bordered
                  showSearch
                  allowClear
                  size='large'
                  style={{ width: '100%' }}
                  placeholder="Location filter"
                  onChange={(v) => handleFilter('location',v as string)}
                  options={locationOptions} />
        </div>

      <Table 
        columns={columns} 
        dataSource={jobsList}
         />
      <DetailsModal isOpen={showModal} onCancel={modalHandler} />
      {/* <div className="grid grid-cols-5">
        <div className="col-span-2 space-y-4">
          {
            jobsData.searchResults.map((job, idx) => <JobCard key={`job_id_${idx}`} />)
          }
        </div>
        <div className="">

        </div>
      </div> */}
    </div>
  )
};

export default JobsList;