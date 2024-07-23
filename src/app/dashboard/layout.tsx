import { Content } from "antd/es/layout/layout";
import { Layout } from "antd";


import MainSider from "./MainSider/page";
import MainHeader from "./MainHeader/page";
import React from "react";
import AuthorizeAccessOnly from "@/components/auth/AuthorizeAccessOnly";

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <Layout hasSider>
      <AuthorizeAccessOnly />
      
      <MainSider />

      <Layout>
        <MainHeader />
        <Content style={{ overflow: 'hidden', overflowY: "auto", height: 'calc(100dvh - 64px)', padding: 24, borderRadius: "20px", }}>

          {children}

        </Content>

      </Layout>
    </Layout>
  );
}
