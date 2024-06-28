
import type { TableColumnsType } from 'antd';
import { Badge, Button, Col, Row, Table, Card, Tag } from 'antd';

import IssueTableResponse from '@/models/responses/IssueTableResponse';
import IssuesTableData from '@/data/IssuesTableData';

import AssignedUserView from '@/components/AssignedUser/AssignedUserView';

import { Priorities, Department } from '@/data/Data';
import Status from '@/data/Status';

export default function IssueTable() {

  const columns: TableColumnsType<IssueTableResponse> = [
    {
      title: 'NAME',
      dataIndex: 'name',
      key: 'name',
    },

    {
      title: 'DEPARTMENT',
      dataIndex: 'department',
      key: 'department',
      render(text, item) {
        return (

          <Tag color="hsl(270, 100%, 60%)">
            {Department.find(x => x.id == item.department)!.name}
          </Tag>
        );
      }
    },

    {
      title: 'TRACKING ISSUE',
      dataIndex: 'trackingIssue',
      key: 'trackingIssue',
    },

    {
      title: 'ASSIGN TO',
      dataIndex: 'assignTo',
      key: 'assignTo',
      render: (text, item) => (
        <AssignedUserView users={item.assignTo} />
      )
    },

    {
      title: 'ISSUE DATE',
      dataIndex: 'createdAt',
      key: 'createdAt',
    },
    {
      title: 'PRIORITY',
      dataIndex: 'priority',
      key: 'priority',
      render: (text, item) => {
        return (

          <Tag color={item.priority === 1 ? 'green' : 2 ? 'orange' : 3 ? ' red' : 'cyan'} >
            {Priorities.find(x => x.id == item.priority)!.name}
          </Tag>
        );
      },
    },
    {
      title: 'STATUS',
      dataIndex: 'status',
      key: 'status',
      render: (text, item) => {
        const badgeColor = (status: number) => {
          switch (status) {
            case 1:
              return 'warning';
            case 2:
              return 'processing';
            case 3:
              return 'success';
            case 4:
              return 'error';
            case 5:
              return 'warning';
            case 6:
              return 'success';
            default:
              return 'default';
          }
        };

        return (
          <Badge
            status={badgeColor(item.status)}
            text={Status.find(x => x.id == item.status)!.name}
          />
        );
      },
    },
    {
      title: 'More Details',
      key: 'operation',
      render: (text, item) => (
        <Button type="link" href={`/issues/detail/${item.id}`}>Detail</Button>
      ),
    }
  ];

  return (

    <Row className='xs:grid-cols-2 lg:grid-cols-4'>
      <Col xs={24} lg={24}>
        <Card title="ISSUE LIST">
          <Table
            className="pl-3"
            columns={columns}
            dataSource={IssuesTableData}
            scroll={{ x: 'calc(600px + 50%)', y: 1000 }}
          />
        </Card>
      </Col>
    </Row>

  );
};