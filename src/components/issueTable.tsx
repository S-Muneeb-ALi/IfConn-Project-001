
import type { TableColumnsType } from 'antd';
import { Badge, Button, Col, Row, Table, Card, Tag } from 'antd';
import IssueResponse from '@/models/responses/IssueResponse';
import IssuesData from '@/data/issues';
import AssignedUserView from '@/components/AssignedUser/AssignedUserView';

export default function IssueTable(){

  const columns: TableColumnsType<IssueResponse> = [
    {
      title: 'Email',
      dataIndex: 'name',
      key: 'name',
    },

    {
      title: 'DEPARTMENT',
      dataIndex: 'department',
      key: 'department',
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
          
          <Tag color={item.priority === 'High' ? 'red' : 'low' ? 'green' : 'medium' ? 'blue' : 'cyan' } >
           {item.priority} 
            </Tag>
        );
      },
    },
    {
      title: 'STATUS',
      dataIndex: 'status',
      key: 'status',
      render: (text, item) => {
        const badgeColor = (status: string) => {
          switch (status) {
            case 'Found':
              return 'error';
            case 'In-Progress':
              return 'warning';
            case 'Completed':
              return 'success';
            default:
              return 'default';
          }
        };
    
        return (
          <Badge
            status={badgeColor(item.status[0])} 
            text={text} 
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
        <Card className=' '>
          <Table
            className="pl-3"
            columns={columns}
            dataSource={IssuesData}
            scroll={{ x: 'calc(600px + 50%)', y: 1000 }}
          />
        </Card>
      </Col>
    </Row>

  );
};