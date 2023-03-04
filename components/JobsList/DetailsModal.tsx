import React from 'react';
import dynamic from 'next/dynamic';
import { Button, Space, Typography } from 'antd';
import {
  MdOutlineLocationOn,
  MdOutlineMapsHomeWork,
  MdWork,
  MdLocationPin,
  MdOutlineWorkOutline,
} from 'react-icons/md';
import { RiExchangeDollarLine } from 'react-icons/ri';
import { CgDollar } from 'react-icons/cg';
import { IoCloseCircleOutline } from 'react-icons/io5';
import { BsCalendar2Date } from 'react-icons/bs';
import { SlGraduation } from 'react-icons/sl';
import Image from 'next/image';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import dayjs from 'dayjs';
import Link from 'next/link';
import { useMediaQuery } from 'react-responsive';
dayjs.extend(customParseFormat);
const Modal = dynamic(() => import('antd/lib/modal/Modal'));

const { Title, Paragraph, Text } = Typography;

const DetailsModal = ({
  isOpen,
  onCancel,
  data,
}: {
  isOpen: boolean;
  onCancel?: () => void;
  data: { [key: string]: any };
}) => {
  console.log('Data from modal:', data);
  const isMobile = useMediaQuery({ maxWidth: '900px' });
  console.log('onMobile: => ', isMobile);

  return (
    <Modal
      open={isOpen}
      onCancel={onCancel}
      footer={null}
      closeIcon={
        <IoCloseCircleOutline className="text-2xl hover:text-primary" />
      }
      className="w-[95vw] md:w-[90vw] lg:-w-[95vw] top-5 md:top-[10%] lg:top-[20%] z-[10000]"
    >
      <div className="md:p-10 z-[10000]">
        <div className="md:flex justify-between items-center">
          <div className="md:flex gap-5">
            <div className="relative border border-primary/80 rounded w-full md:w-40 h-28">
              <Image
                src={'/company_name.png'}
                alt="Stemuli Logo"
                fill
                className="object-contain"
              />
            </div>
            <div className="text-black/80">
              <Title className="mt-5 md:mt-0 text-2xl 2xl:text-[32px] text-black/80 mb-1">
                {data?.title}
              </Title>
              <h3 className="text-md md:text-lg 2xl:text-2xl leading-6 font-medium mb-0">
                {data?.companyName}
              </h3>
              <div className="mt-2">
                <div className="flex gap-1 items-end">
                  <MdLocationPin className="text-lg text-primary/80" />
                  <span className="text-xs font-medium">{data?.address}</span>
                </div>
                <div className="mt-1 flex gap-1 items-end">
                  <MdWork className="text-lg text-primary/80" />
                  <span className="text-xs font-medium">
                    {data?.employmentType}
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-5 md:mt-0">
            <Text className="hidden md:block text-right mb-3 text-xs">
              <span className="font-semibold">Application Deadline:</span>{' '}
              {dayjs(data?.lastDateToApply, 'DD-MM-YYYY').isValid()
                ? dayjs(data?.lastDateToApply, 'DD-MM-YYYY').format('M/D/YY')
                : '-'}
            </Text>
            <Link target={'_blank'} href={data?.applyUrl}>
              <Button
                size="large"
                type="primary"
                className="w-full md:w-40 font-bold text-lg h-14"
              >
                Apply Now
              </Button>
            </Link>
          </div>
        </div>
        <div className="mt-12 md:grid gap-20 grid-cols-3 text-black/80">
          <div className="col-start-3">
            <Title level={5}>Job Details</Title>
            <ul className="mt-5 divide-y border-y">
              <li className="flex gap-5 items-center py-4">
                <div className="text-primary/90">
                  <BsCalendar2Date className="text-2xl" />
                </div>
                <div className="">
                  <h3 className="my-0 font-semibold text-gray-500 tex-xs">
                    Application Deadline
                  </h3>
                  <span className="font-semibold text-black/80 tex-xs">
                    {dayjs(data?.lastDateToApply, 'DD-MM-YYYY').isValid()
                      ? dayjs(data?.lastDateToApply, 'DD-MM-YYYY').format(
                          'M/D/YY'
                        )
                      : '-'}
                  </span>
                </div>
              </li>
              <li className="flex gap-5 items-center py-3">
                <div className="text-primary/80">
                  <RiExchangeDollarLine className="text-2xl" />
                </div>
                <div className="">
                  <h3 className="my-0 font-semibold text-gray-500 tex-xs">
                    Salary range
                  </h3>
                  <span className="font-semibold text-black/80 tex-xs">
                    {data?.salary?.minSalary ? (
                      <>
                        ${data?.salary?.minSalary}-${data?.salary?.maxSalary}
                        <span className="text-gray-500 font-medium">
                          (
                          {data?.salary?.type === 'Annual'
                            ? 'annually'
                            : 'monthly'}
                          )
                        </span>
                      </>
                    ) : (
                      '-'
                    )}
                  </span>
                </div>
              </li>
              <li className="flex gap-5 items-center py-3">
                <div className="text-primary/80">
                  <MdOutlineWorkOutline className="text-2xl" />
                </div>
                <div className="">
                  <h3 className="my-0 font-semibold text-gray-500 tex-xs">
                    Experience
                  </h3>
                  <span className="font-semibold text-black/80 tex-xs">
                    {data.minExperienceRequired}-{data?.maxExperienceRequired}
                  </span>
                </div>
              </li>
              <li className="flex gap-5 items-center py-3">
                <div className="text-primary">
                  <SlGraduation className="text-2xl" />
                </div>
                <div className="">
                  <h3 className="my-0 font-semibold text-gray-500 tex-xs">
                    Qualification
                  </h3>
                  <span className="font-semibold text-black/80 tex-xs">
                    Bachelor&apos;s Degree
                  </span>
                </div>
              </li>
              <li className="flex gap-5 items-center py-3">
                <div className="text-primary/80">
                  <MdOutlineMapsHomeWork className="text-2xl" />
                </div>
                <div className="">
                  <h3 className="my-0 font-semibold text-gray-500 tex-xs">
                    Industry
                  </h3>
                  <span className="font-semibold text-black/80 tex-xs capitalize">
                    {data?.industryTypes?.join(', ')}
                  </span>
                </div>
              </li>
            </ul>
          </div>
          <div className="row-start-1 col-start-1 col-end-3 col-span-2">
            <Title level={5}>Job Description</Title>
            <Paragraph className=" text-black/80">{data.description}</Paragraph>
            <Title level={5} className="mt-10">
              Key Responsibilities
            </Title>
            <ul className="mt-3 pl-3 list-disc text-black/80">
              {data?.keyResponsibilities?.map((skill: any, idx: number) => (
                <li key={`${idx}_required_skill`} className="">
                  {/* {skill.level} in {skill.title} */}
                  {skill}
                </li>
              ))}
            </ul>
            <Title level={5} className="mt-10">
              Desired skills
            </Title>
            <ul className="mt-3 pl-3 list-disc text-black/80">
              {data?.requiredSkills?.map((skill: any, idx: number) => (
                <li key={`${idx}_required_skill`} className="">
                  {skill.level} in {skill.title}
                </li>
              ))}
            </ul>
            <Title level={5} className="mt-10">
              Benefits
            </Title>
            <ul className="mt-3 pl-3 list-disc text-black/80">
              {data?.benefits?.map((benefit: any, idx: number) => (
                <li key={`${idx}_required_skill`} className="">
                  {JSON.stringify(benefit)}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <Button
          type="primary"
          size="large"
          onClick={onCancel}
          className="ml-5 md:ml-auto w-full md:w-20 md:absolute bottom-2 md:bottom-auto right-5 text-bold"
        >
          {' '}
          OK
        </Button>
      </div>
    </Modal>
  );
};

export default DetailsModal;
