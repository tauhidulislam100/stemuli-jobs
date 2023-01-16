import React, { ReactNode } from 'react';
import { Avatar, Layout as MainLayout } from 'antd';
import { CiFacebook, CiTwitter, CiLinkedin } from 'react-icons/ci';
import { MdLocationPin, MdEmail, MdSmartphone } from 'react-icons/md';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaTiktok } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';

const { Header, Content, Footer } = MainLayout;

const Layout = ({ children }:{ children:ReactNode }) => {

    return (
        <MainLayout>
            <Header className='bg-white shadow-sm h-24 flex justify-between items-center border-b-[5px] border-primary'>
                <div className="">
                    <Image src={'/stemuli-black.png'} alt="Stemuli Logo" width={180} height={50} />
                </div>
                <div className="flex items-center gap-3">
                    <Avatar className='w-14 h-14 flex justify-center items-center bg-primary/40'>
                        <span className="text-primary/80 text-lg font-semibold">N</span>
                    </Avatar>
                    <div className="">
                        <h2 className="my-0 text-xs">Good morning,</h2>
                        <h1 className="my-0 text-lg">John Doe</h1>
                    </div>
                </div>
            </Header>
            <Content> { children } </Content>
            <Footer className='px-[10%] bg-gradient-to-br from-accent via-accent/80 to-accent/90'>
                <div className=" py-5 flex justify-between">
                    <div className="w-2/5">
                        <div className="">
                            <Image src={'/stemuli.png'} alt="Logo" width={180} height={50} />
                        </div>
                        <p className="text-white/80 mt-5 w-4/5 leading-5">
                            We leverage the power of online communities, AI, and game-based learning to provide a metaverse with immersive academic and career exploration experiences to take students from where they are to their dream job
                        </p>
                        <div className="flex gap-x-5 mt-5">
                            <Link href={'/'} className="text-md w-8 h-8 border-2 hover:border-primary transition-all duration-200 flex justify-center items-center rounded-full bg-transparent hover:text-primary text-white/80">
                                <FaFacebookF />
                            </Link>
                            <Link href={'/'} className="text-md w-8 h-8 border-2 hover:border-primary transition-all duration-200 flex justify-center items-center rounded-full bg-transparent hover:text-primary text-white/80">
                                <FaTwitter />
                            </Link>
                            <Link href={'/'} className="text-md w-8 h-8 border-2 hover:border-primary transition-all duration-200 flex justify-center items-center rounded-full bg-transparent hover:text-primary text-white/80">
                                <FaLinkedinIn />
                            </Link>
                            <Link href={'/'} className="text-md w-8 h-8 border-2 hover:border-primary transition-all duration-200 flex justify-center items-center rounded-full bg-transparent hover:text-primary text-white/80">
                                <FaTiktok />
                            </Link>
                        </div>
                    </div>
                    <div className="flex-1">
                        <h3 className="text-white text-2xl font-bold">Find jobs</h3>
                        <ul className="space-y-2.5 text-white/80 mt-7">
                            <li className="">Technology jobs</li>
                            <li className="">Google Jobs</li>
                            <li className="">Stemuli jobs</li>
                            <li className="">Accounting jobs</li>
                        </ul>
                    </div>
                    <div className="flex-1">
                        <h3 className="text-white text-2xl font-bold">Contact Us</h3>
                        <ul className="space-y-2.5 text-white/80 mt-7">
                            <li className="flex items-center gap-5">
                                <div className="text-xl">
                                    <MdLocationPin />
                                </div>
                                <p className="my-0">
                                    2001 Ross Ave #700-177,<br/> Dallas, TX 75201
                                </p>
                            </li>
                            <li className="flex items-center gap-5">
                                <div className="text-xl">
                                    <MdSmartphone />
                                </div>
                                <p className="my-0">
                                    (406) 555-0120
                                </p>
                            </li>
                            <li className="flex items-center gap-5">
                                <div className="text-xl">
                                    <MdEmail />
                                </div>
                                <p className="my-0">
                                    info@stemuli.net
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="flex justify-between text-white/60 border-t border-white/20 pt-10 mt-5">
                    <p className="">
                    © 2023 <span className="text-primary">Stemuli</span> | All Rights Reserved by <span className="text-primary">Stemuli</span>
                    </p>
                    <div className="">
                        <span className="pr-5">Terms & Conditions</span>
                        <span className="">Privacy Policy</span>
                    </div>
                </div>
            </Footer>
        </MainLayout>
    )
}

export default Layout;