import { Card } from 'antd';
import React from 'react';
import { BsThreeDotsVertical } from 'react-icons/bs';

const JobCard = () => {

    return (
        <Card hoverable className='border'>
            <div className="flex justify-between">
                <div className="">
                    <h1 className="my-0 font-bold text-lg">Full Stack Developer</h1>
                    <h4 className="my-0">One Stop Swap, Inc.</h4>
                    <h5 className="my-0">Remote</h5>
                </div>
                <div className="">
                    <BsThreeDotsVertical />
                </div>
            </div>
            <p className="text-xs mt-2">
                If you require alternative methods of application or screening, you must approach the employer directly to request this as Indeed is not responsible for the employer&apos;s application process.
            </p>
        </Card>
    )
}

export default JobCard;