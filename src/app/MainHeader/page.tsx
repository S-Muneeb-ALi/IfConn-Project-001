'use client'

import React,{useState} from 'react';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,

} from '@ant-design/icons';



import { Button, Layout  } from 'antd';

const colorPrimary = "#ac46ff";

const { Header } = Layout;
export default function MainHeader() {
  const [collapsed, setCollapsed] = useState(false);

  return(
    <Header 
    
    style={{ padding: 0, background: colorPrimary }}>
    <Button
      type="text"
      icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
      onClick={() => setCollapsed(!collapsed)}
      style={{
        fontSize: '16px',
        width: 64,
        height: 64,
      }}
    />
  </Header>
    
  )

}