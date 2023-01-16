import '../styles/globals.css';
import 'antd/dist/reset.css';
import type { AppProps } from 'next/app';
import { Layout } from '../layouts';
import { ConfigProvider } from 'antd';
import { StyleProvider } from '@ant-design/cssinjs';
import { Provider } from 'react-redux';
import { store } from '../store';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <ConfigProvider
    theme={{
      token: {
        colorPrimary: '#FF6D57',
      },
    }}>
      <StyleProvider  hashPriority='high'>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </StyleProvider>
    </ConfigProvider>
    </Provider>
  )
}
