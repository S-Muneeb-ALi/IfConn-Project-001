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
      key: '/issues',
      icon: <DatabaseOutlined />,
      label: 'Issue list',
    },
    {
      key: '/issues/add',
      icon: <AuditOutlined />,
      label: 'Issue Add',
    },

  ];
  return (
    <Sider

      trigger={null} collapsible collapsed={collapsed}>

      <div className='flex justify-center mt-10 mb-10'>
        <Button
          type="text"
          icon={
            collapsed ?
              <FontAwesomeIcon icon={faMaximize} size='lg' />
              :
              <FontAwesomeIcon icon={faMinimize} size='lg' />}

          onClick={() => setCollapsed(!collapsed)}
          style={{
            backgroundColor: colorPrimary,
            width: 40,
            height: 40,
            color: 'hsl(300, 100%, 25%)',

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