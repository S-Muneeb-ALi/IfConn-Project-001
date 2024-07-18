'use client'
import { useRouter } from 'next/navigation';

import React, { useState } from 'react';

import {
  DatabaseOutlined,
  AuditOutlined,
} from '@ant-design/icons';

import { Button, Layout, Menu, MenuProps } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMaximize, faMinimize } from '@fortawesome/free-solid-svg-icons';

const { Sider } = Layout;
const colorPrimary = "hsl(300, 90%, 60%)";

export default function MainSider() {

  const [collapsed, setCollapsed] = useState(true);

  const router = useRouter();

  const items: MenuProps['items'] = [
    {
      key: '/dashboard/issues',
      icon:
        <DatabaseOutlined style={{ color: "hsl(170, 100%, 80%)" }} />,
      label: 'Issue list',
    },
    {
      key: '/dashboard/issues/add',
      icon: <AuditOutlined style={{ color: "hsl(170, 100%, 80%)" }} />,
      label: 'Issue Add',
    },

  ];
  return (
    
    <Sider

      
      trigger={null} collapsible collapsed={collapsed}>

      <div className='flex justify-center mt-10 mb-10 '>
        <Button

          type="text"
          icon={
            collapsed ?
              <FontAwesomeIcon icon={faMaximize} size='lg' />
              :
              <FontAwesomeIcon icon={faMinimize} size='lg' />}

          onClick={() => setCollapsed(!collapsed)}
          style={{
            background: "radial-gradient(circle, hsl(192, 61%, 45%) 0%, hsl(209, 100%, 8%)80% )",
            width: 60,
            height: 60,
            color: 'hsl(170, 100%, 80%)',

          }}
        />
      </div>

      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={['1']}
        items={items}
        onSelect={x => {
          router.push(x.key)
        }} />



    </Sider>
  )
};