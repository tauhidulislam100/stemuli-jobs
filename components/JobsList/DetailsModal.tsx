import React from 'react';
import dynamic from 'next/dynamic';
import { Button, Space, Typography } from 'antd';
import { MdOutlineLocationOn, MdOutlineMapsHomeWork, MdWork, MdLocationPin, MdOutlineWorkOutline } from 'react-icons/md';
import { RiExchangeDollarLine } from 'react-icons/ri';
import { CgDollar } from 'react-icons/cg';
import { IoCloseCircleOutline } from 'react-icons/io5';
import { BsCalendar2Date } from 'react-icons/bs';
import { SlGraduation } from 'react-icons/sl';
import Image from 'next/image';
const Modal = dynamic(() => import('antd/lib/modal/Modal'));


const { Title, Paragraph, Text,  } = Typography;

const defaultDesign = (
    <>
        <Title className='text-[32px]'>Software Engineer</Title>
        <div className="flex items-center justify-between mb-10">
            <div className="">
                <h3 className="text-2xl leading-6 font-medium mb-1">Google</h3>
                <h5 className='text-normal font-light'>Technology</h5>
                <Title level={5} className="font-normal text-xl mb-0 mt-5"><span className="font-semibold">Job Location:</span> San Francisco, USA, 94016</Title>
                <Title level={5} className="font-normal text-xl mt-2"><span className="font-semibold">Employment Type:</span> Full Time</Title>
            </div>
            <div className="">
                <Text className='block text-right mb-3'><span className="font-semibold">Application Deadline:</span> 7/3/23</Text>
                <Button size='large' type='primary' className='font-bold text-2xl w-60 h-20'>Apply Now</Button>
            </div>
        </div>
        <Title level={5} >
            Job Description
        </Title>
        <Paragraph className='pl-5 text-[#302f2f]'>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </Paragraph>
        <Title level={5} >
            Key Responsibilities
        </Title>
        <ul className='pl-5 list-disc'>
            {
                Array(5).fill('').map((rpsb:any, idx:number) => <li key={idx} className="">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</li>)
            }
            
        </ul>
        <Title level={5} className="pt-5">
            Additional requirements
        </Title>
        <ul className='pl-5 list-disc'>
            <li className="">Minimum experience requried 1 year</li>
            <li className="">Maximum experience requried 5 year</li>
            <li className="">Educational requirements Bachelors degree</li>
            <li className="">GPA requirement 3.5</li>
        </ul>
        <Title level={5} className="pt-5">
            Skills Desired
        </Title>
        <ul className='pl-5 list-disc'>
            <li className="">Beginner in Java</li>
            <li className="">Intermediate in HTML</li>
        </ul>
        <Title level={5} className="pt-5">
            Salary range
        </Title>
        <ul className='pl-5 list-disc'>
            <li className="">$70,000 - $80,000 USD annually</li>
        </ul>
    </>
);

const mainDesign = (
    <>
        
    </>
);

const DetailsModal = ({ isOpen, onCancel }:{ isOpen:boolean, onCancel?: () => void }) => {
    
    return (
        <Modal 
            open={isOpen}
            width={'80vw'}
            onCancel={onCancel}
            footer={null}
            closeIcon={<IoCloseCircleOutline className='text-2xl hover:text-primary' />}
            className="z-[10000]">
            <div className="p-10 z-[10000]">
                <div className="flex justify-between items-center">
                    <div className="flex gap-5">
                        <div className="relative border w-40 h-28">
                            <Image src={'/stemuli-black.png'} alt="Stemuli Logo" fill className='object-contain' />
                        </div>
                        <div className="text-black/80">
                            <Title className='text-[32px] text-black/80 mb-1'>Software Engineer</Title>
                            <h3 className="text-2xl leading-6 font-medium mb-0">Google <span className="text-xl">Technology</span></h3>
                            <div className="mt-1">
                                <div className="flex gap-1 items-end">
                                    <MdLocationPin className='text-lg text-primary/80' />
                                    <span className="text-xs font-medium">Mountain View, California</span>
                                </div>
                                <div className="mt-1 flex gap-1 items-end">
                                    <MdWork className='text-lg text-primary/80' />
                                    <span className="text-xs font-medium">Full Time</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="">
                        <Text className='block text-right mb-3 text-xs'><span className="font-semibold">Application Deadline:</span> 7/3/23</Text>
                        <Button size='large' type='primary' className='font-bold text-lg w-40 h-14'>Apply Now</Button>
                    </div>
                </div>
                <div className="mt-12 grid gap-20 grid-cols-3 text-black/80">
                    <div className="col-span-2">
                        <Title level={5} >
                            Job Description
                        </Title>
                        <Paragraph className=' text-black/80'>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </Paragraph>
                        <Title level={5} className="mt-10" >
                            Key Responsibilities
                        </Title>
                        <Paragraph className='mt-3 text-black/80'>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </Paragraph>
                        <Title level={5} className="mt-10" >
                            Desired skills
                        </Title>
                        <ul className="mt-3 pl-3 list-disc text-black/80">
                            <li className="">
                                Intermediate in HTML
                            </li>
                            <li className="">
                                Beginner in Java
                            </li>
                        </ul>
                    </div>
                    <div className="">
                        <Title level={5} >
                            Job Details
                        </Title>
                        <ul className="mt-5 divide-y border-y">
                            <li className="flex gap-5 items-center py-4">
                                <div className="text-primary/90"><BsCalendar2Date className='text-2xl' /></div>
                                <div className="">
                                    <h3 className="my-0 font-semibold text-gray-500 tex-xs">Application Deadline</h3>
                                    <span className="font-semibold text-black/80 tex-xs">7/3/23</span>
                                </div>
                            </li>
                            <li className="flex gap-5 items-center py-3">
                                <div className="text-primary/80"><RiExchangeDollarLine className='text-2xl' /></div>
                                <div className="">
                                    <h3 className="my-0 font-semibold text-gray-500 tex-xs">Salary range</h3>
                                    <span className="font-semibold text-black/80 tex-xs">$20,000-$30000<span className='text-gray-500 font-medium'>(annually)</span></span>
                                </div>
                            </li>
                            <li className="flex gap-5 items-center py-3">
                                <div className="text-primary/80"><MdOutlineWorkOutline className='text-2xl' /></div>
                                <div className="">
                                    <h3 className="my-0 font-semibold text-gray-500 tex-xs">Experience</h3>
                                    <span className="font-semibold text-black/80 tex-xs">1-3 years</span>
                                </div>
                            </li>
                            <li className="flex gap-5 items-center py-3">
                                <div className="text-primary"><SlGraduation className='text-2xl' /></div>
                                <div className="">
                                    <h3 className="my-0 font-semibold text-gray-500 tex-xs">Qualification</h3>
                                    <span className="font-semibold text-black/80 tex-xs">Bachelor&apos;s Degree</span>
                                </div>
                            </li>
                            <li className="flex gap-5 items-center py-3">
                                <div className="text-primary/80"><MdOutlineMapsHomeWork className='text-2xl' /></div>
                                <div className="">
                                    <h3 className="my-0 font-semibold text-gray-500 tex-xs">Industry</h3>
                                    <span className="font-semibold text-black/80 tex-xs">Information Technology</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <Button type='primary' size='large' onClick={onCancel} className="w-20 absolute right-5 text-bold"> OK</Button>
            </div>
        </Modal>
    )
}

export default DetailsModal;