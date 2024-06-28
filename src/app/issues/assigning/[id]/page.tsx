'use client'
import React from 'react';


import IssuesData from "@/data/IssuesData";

import { Card, List, Skeleton } from 'antd';
import {
  SettingOutlined,
  EditOutlined,
  EllipsisOutlined,
} from '@ant-design/icons';

interface AssignPageParams {
  params: { id: string }
}


export default function AssigningPage({ params }: AssignPageParams) {

  const item = IssuesData.find(x => x.id.toString() === params.id);
  console.log(item);
  return (
    <List
      grid={{
        gutter: 16,
        xs: 1,
        sm: 2,
        md: 4,
        lg: 4,
        xl: 6,
        xxl: 3,
      }}>
      <List.Item>
        <Card style={{ width: 300, marginTop: 16 }} >
          <h1>{item?.name}</h1>
        </Card>
        <Card
          style={{ width: 300, marginTop: 16 }}
          actions={[
            <SettingOutlined key="setting" />,
            <EditOutlined key="edit" />,
            <EllipsisOutlined key="ellipsis" />,
          ]}
        >

        </Card>
      </List.Item>
    </List>
  )
}



