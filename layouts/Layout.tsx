import React, { ReactNode } from 'react';
import { Avatar, ConfigProvider, Layout as MainLayout } from 'antd';
import { CiFacebook, CiTwitter, CiLinkedin } from 'react-icons/ci';
import { BsFillArrowLeftCircleFill } from 'react-icons/bs';
import { MdLocationPin, MdEmail, MdSmartphone } from 'react-icons/md';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaTiktok } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';
import dayjs from 'dayjs';
import { useRouter } from 'next/router';

const { Header, Content, Footer } = MainLayout;

const Layout = ({ children }: { children: ReactNode }) => {
  const currentHour = dayjs().hour();
  const router = useRouter();
  return (
    <MainLayout>
      <Header className="px-0 md:px-[50px] bg-white shadow-sm h-28 flex justify-between items-center border-b-[5px] border-primary">
        <div className="flex justify-center items-center">
          <button
            onClick={() => router.back()}
            className="text-5xl text-secondary min-w-[60px]"
          >
            <BsFillArrowLeftCircleFill />
          </button>
          <Image
            src={'/stemuli-black.png'}
            alt="Stemuli Logo"
            width={180}
            height={50}
          />
        </div>
        <div className="flex items-center gap-3">
          {/* <Avatar className='w-12 h-12 flex justify-center items-center bg-primary/40'>
                        <span className="text-primary/80 text-lg font-semibold">N</span>
                    </Avatar> */}
          <div className="">
            {/* <h2 className="my-0 text-xs">Good { currentHour < 10 ? 'morning' : currentHour < 12 ? 'noon' : currentHour < 16 ? 'evening' : 'night' },</h2> */}
            {/* <h1 className="my-0 text-lg hidden sm:block">John Doe</h1> */}
          </div>
        </div>
      </Header>
      <Content> {children} </Content>
      <Footer className="px-[10%] bg-gradient-to-br from-black/90 via-accent/90 to-primary/80">
        <div className="pt-20 md:flex justify-between">
          <div className="md:w-2/5">
            <div className="flex justify-center md:block">
              <Image src={'/stemuli.png'} alt="Logo" width={180} height={50} />
            </div>
            <p className="text-white/80 mt-5 md:w-4/5 leading-5 text-center md:text-left">
              We leverage the power of online communities, AI, and game-based
              learning to provide a metaverse with immersive academic and career
              exploration experiences to take students from where they are to
              their dream job
            </p>
            <div className="flex justify-center md:justify-start gap-x-5 mt-5">
              <Link
                href={'/'}
                className="text-md w-8 h-8 border-2 hover:border-primary transition-all duration-200 flex justify-center items-center rounded-full bg-transparent hover:text-primary text-white/80"
              >
                <FaFacebookF />
              </Link>
              <Link
                href={'/'}
                className="text-md w-8 h-8 border-2 hover:border-primary transition-all duration-200 flex justify-center items-center rounded-full bg-transparent hover:text-primary text-white/80"
              >
                <FaTwitter />
              </Link>
              <Link
                href={'/'}
                className="text-md w-8 h-8 border-2 hover:border-primary transition-all duration-200 flex justify-center items-center rounded-full bg-transparent hover:text-primary text-white/80"
              >
                <FaLinkedinIn />
              </Link>
              <Link
                href={'/'}
                className="text-md w-8 h-8 border-2 hover:border-primary transition-all duration-200 flex justify-center items-center rounded-full bg-transparent hover:text-primary text-white/80"
              >
                <FaTiktok />
              </Link>
            </div>
          </div>
          <div className="flex-1 text-center md:text-left mt-10 md:mt-5">
            <h3 className="text-white text-2xl font-bold">Find jobs</h3>
            <ul className="space-y-2.5 text-white/80 mt-7">
              <li className="">
                <Link href={'/'} className="text-white/80 hover:text-info">
                  Technology jobs
                </Link>
              </li>
              <li className="">
                <Link href={'/'} className="text-white/80 hover:text-info">
                  Google Jobs
                </Link>
              </li>
              <li className="">
                <Link href={'/'} className="text-white/80 hover:text-info">
                  Stemuli jobs
                </Link>
              </li>
              <li className="">
                <Link href={'/'} className="text-white/80 hover:text-info">
                  Accounting jobs
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex-1">
            <h3 className="text-white text-2xl font-bold text-center md:text-left mt-10 md:mt-5">
              Contact Us
            </h3>
            <ul className="space-y-2.5 text-white/80 mt-7">
              <li className="flex justify-center md:justify-start items-center gap-5">
                <div className="text-xl">
                  <MdLocationPin />
                </div>
                <p className="my-0">
                  2001 Ross Ave #700-177,
                  <br /> Dallas, TX 75201
                </p>
              </li>
              <li className="flex justify-center md:justify-start items-center gap-5">
                <div className="text-xl">
                  <MdSmartphone />
                </div>
                <p className="my-0">(406) 555-0120</p>
              </li>
              <li className="flex justify-center md:justify-start items-center gap-5">
                <div className="text-xl">
                  <MdEmail />
                </div>
                <p className="my-0">info@stemuli.net</p>
              </li>
            </ul>
          </div>
        </div>
        <div className="md:flex justify-between text-white/60 border-t border-white/20 pt-6 mt-10">
          <p className="mb-0 text-xs sm:text-sm text-center">
            © 2023 <span className="text-primary">Stemuli</span> | All Rights
            Reserved by <span className="text-primary">Stemuli</span>
          </p>
          <div className="text-xs sm:text-sm text-center mt-2 md:mt-0">
            <span className="pr-5">Terms & Conditions</span>
            <span className="">Privacy Policy</span>
          </div>
        </div>
      </Footer>
    </MainLayout>
  );
};

export default Layout;
