'use client'
import { useRouter } from 'next/navigation';

import React, { useState } from 'react';

import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  DatabaseOutlined,
  AuditOutlined,
} from '@ant-design/icons';

import { Button, Layout, Menu, MenuProps } from 'antd';

const { Sider } = Layout;
const colorPrimary = "#ac46ff";

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


        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
          items={items}
          onSelect={x => {
            router.push(x.key)
          }} />
        <div>
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              backgroundColor: colorPrimary,
              fontSize: '16px',
              marginLeft: 25,
              marginTop: 10,
            }}
          />
        </div>

      </Sider>


  )

};