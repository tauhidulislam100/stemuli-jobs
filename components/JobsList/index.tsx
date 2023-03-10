import React, { useMemo } from 'react';
import { Button, ConfigProvider, Pagination, Select, Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { FiLoader } from 'react-icons/fi';
import DetailsModal from './DetailsModal';
import {
  useFetchFilterOptionsQuery,
  useFetchJobsQuery,
} from '../../store/features/api';

const defaultFilter = {
  title: '',
  company: '',
  employmentType: '',
  location: '',
};

const JobsList: React.FC = () => {
  const [showModal, setShowModal] = React.useState(false);
  const [modalData, setModalData] = React.useState<{ [key: string]: any }>({});
  const [searchQuery, setSearchQuery] = React.useState({ limit: 5, page: 1 });
  const [filterBy, setFilterBy] = React.useState(defaultFilter);

  const clearFilter = () => setFilterBy(defaultFilter);
  const handleQuery = async (key: string, val: any) => {
    setSearchQuery((prev) => ({ ...prev, [key]: val }));
  };

  const handleFilter = async (key: string, val: any) => {
    setFilterBy((prev) => ({ ...prev, [key]: val }));
    handleQuery('page', 1);
  };

  const { data: jobs, isLoading } = useFetchJobsQuery({
    ...searchQuery,
    ...filterBy,
  });
  const { data: optionsData, isLoading: optionsLoading } =
    useFetchFilterOptionsQuery({ undefined });

  const total = useMemo(() => jobs?._meta.total, [jobs]);
  const jobsList = useMemo(
    () =>
      jobs?.searchResults?.map((job: any, idx: number) => ({
        ...job,
        key: job?.id,
        title: job?.title ?? '-',
        companyName: job?.companyName.title ?? '-',
        address:
          job?.jobLocation
            ?.map((location: any) => `${location.city}, ${location.state}`)
            .join(', ') ?? '-',
        employmentType: job?.employmentType?.join(','),
      })) ?? [],
    [jobs]
  );

  const titleOptions = useMemo(
    () =>
      optionsData?.data?.titles?.map((title: any) => ({
        label: title.title,
        value: title.title,
      })) ?? [],
    [optionsData]
  );
  const companyOptions = useMemo(
    () =>
      optionsData?.data?.company_names?.map((title: any) => ({
        label: title.company,
        value: title.company,
      })) ?? [],
    [optionsData]
  );
  const employTypeOptions = useMemo(
    () =>
      optionsData?.data?.employment_type?.map((title: any) => ({
        label: title.employmentType,
        value: title.employmentType,
      })) ?? [],
    [optionsData]
  );
  const locationOptions = useMemo(
    () =>
      optionsData?.data?.location?.map((title: any) => ({
        label: title.jobLocation,
        value: title.jobLocation,
      })) ?? [],
    [optionsData]
  );

  const modalHandler = (data?: any) => {
    if (data) {
      setModalData(data);
      setShowModal(true);
    } else {
      setShowModal(false);
    }
  };

  const columns: ColumnsType<any> = [
    {
      title: 'Company',
      dataIndex: 'companyName',
      key: 'companyName',
      render: (text) => (
        <span className="font-semibold text-black/80">{text}</span>
      ),
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
      title: 'Industry',
      dataIndex: 'industryTypes',
      key: 'industryTypes',
    },

    {
      title: 'Employment Type',
      dataIndex: 'employmentType',
      key: 'employmentType',
    },
    {
      title: '',
      key: 'id',
      render: (data) => (
        <Button
          onClick={() => modalHandler(data)}
          size="large"
          type="primary"
          className="w-full font-semibold"
        >
          Details
        </Button>
      ),
    },
  ];

  if (isLoading || optionsLoading) {
    return (
      <div className="flex justify-center items-center text-primary text-5xl">
        <FiLoader className="animate-spin" />
      </div>
    );
  }

  return (
    <div className="">
      <div className="w-5/6 mx-auto border-2 border-primary border-b-4 -translate-y-24 bg-white p-10 shadow rounded-lg lg:flex gap-5">
        <div className="flex-1 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          <ConfigProvider
            theme={{
              token: {
                colorPrimaryHover: '#FF6D57',
                colorText: '#777',
                borderRadius: 4,
              },
            }}
          >
            <Select
              bordered
              showSearch
              className="rounded-none"
              value={filterBy.company}
              allowClear
              size="large"
              style={{ width: '100%' }}
              placeholder="Filter company"
              onChange={(v) => handleFilter('company', v as string)}
              options={[
                {
                  label: 'Select Company',
                  value: '',
                },
                ...companyOptions,
              ]}
            />
            <Select
              bordered
              showSearch
              value={filterBy.title}
              allowClear
              size="large"
              style={{ width: '100%' }}
              placeholder="Filter title"
              onChange={(v) => handleFilter('title', v as string)}
              options={[
                {
                  label: 'Select Title',
                  value: '',
                },
                ...titleOptions,
              ]}
            />
            <Select
              bordered
              showSearch
              value={filterBy.employmentType}
              allowClear
              size="large"
              style={{ width: '100%' }}
              placeholder="Filter employment type"
              onChange={(v) => handleFilter('employmentType', v as string)}
              options={[
                {
                  label: 'Select Employment Type',
                  value: '',
                },
                ...employTypeOptions,
              ]}
            />
            <Select
              bordered
              showSearch
              defaultValue={undefined}
              value={filterBy.location}
              allowClear
              size="large"
              style={{ width: '100%' }}
              placeholder="Location filter"
              onChange={(v) => handleFilter('location', v as string)}
              options={[
                {
                  label: 'Select Location',
                  value: '',
                },
                ...locationOptions,
              ]}
            />
          </ConfigProvider>
        </div>
        <Button
          onClick={clearFilter}
          size="large"
          type="primary"
          className="mt-5 lg:mt-0 w-full lg:w-24 font-semibold"
        >
          Clear All
        </Button>
      </div>
      <ConfigProvider
        theme={{
          token: {
            colorBgContainer: '#fff',
            colorFillAlter: '#f7f7f7',
          },
        }}
      >
        <Table
          columns={columns}
          dataSource={jobsList}
          pagination={false}
          onHeaderRow={(columns, index) => {
            console.log(columns);
            return {
              onClick: () => {}, // click header row
            };
          }}
          className=" bg-white border rounded-lg overflow-x-auto min-h-[420px]"
        />
      </ConfigProvider>
      <div className="flex justify-end mt-3">
        <Pagination
          current={searchQuery.page}
          defaultPageSize={5}
          pageSizeOptions={[5, 10, 25, 50]}
          pageSize={searchQuery.limit}
          total={total}
          onChange={(v) => handleQuery('page', v)}
          onShowSizeChange={(_, v) => handleQuery('limit', v)}
        />
      </div>
      {modalData && (
        <DetailsModal
          isOpen={showModal}
          onCancel={() => setShowModal(false)}
          data={modalData}
        />
      )}
    </div>
  );
};

export default JobsList;
