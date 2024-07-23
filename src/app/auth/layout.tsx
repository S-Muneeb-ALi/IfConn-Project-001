import React from 'react';
import { Content } from "antd/es/layout/layout";
import { Layout } from "antd";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <Layout style={{ background: "linear-gradient(145deg, hsl(180, 100%, 45%) , hsl(300, 100%, 30%))" }}>
      <Content style={{
        overflow: 'hidden',
        overflowY: "auto", height: 'calc(100dvh)',
        margin: "auto", alignContent: "center",
        justifyContent: "center",
        borderRadius: "20px",

      }}>

        {children}

      </Content>

    </Layout>
  )

}
