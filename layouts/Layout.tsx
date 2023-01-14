import React, { ReactNode } from 'react';
import { Layout as MainLayout } from 'antd';
import Image from 'next/image';

const { Header, Content, Footer } = MainLayout;

const Layout = ({ children }:{ children:ReactNode }) => {

    return (
        <MainLayout>
            <Header className='bg-white shadow-sm h-24 flex items-center'>
                <Image src={'/stemuli.png'} alt="Stemuli Logo" width={180} height={50} />
            </Header>
            <Content> { children } </Content>
            <Footer className='text-center'>© 2023 Stemuli | All Rights Reserved by Stemuli</Footer>
        </MainLayout>
    )
}

export default Layout;