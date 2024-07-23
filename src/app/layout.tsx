import { AntdRegistry } from '@ant-design/nextjs-registry';
import "./globals.css";
import { Content } from "antd/es/layout/layout";
import { ConfigProvider, Layout } from "antd";
import React from 'react';

const colorPrimary = "#ac46ff";
const colorInfo = "#ac46ff";


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <html lang="en">
      <body>
        <AntdRegistry>
          <ConfigProvider

            theme={{
              "token": {
                colorPrimary,
                colorInfo,
              }
            }}>
              <Layout>
                {children}
              </Layout>
          </ConfigProvider>
        </AntdRegistry>
      </body >
    </html >
  );

}
