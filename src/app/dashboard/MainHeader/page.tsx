'use client'
import { useRouter } from 'next/navigation';
import React from 'react';

import {
  UserOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Button, Col, Layout, Row } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import useAuthStore from '@/store/useAuthStore';

const { Header } = Layout;
const items: MenuProps['items'] = [

  {
    key: 1,
    icon:
      <UserOutlined style={{ color: "hsl(170, 100%, 80%)" }} />,
    label: (
      <a href="/dashboard/issues">
        Issue Add
      </a>
    ),
  },


];

export default function MainHeader() {
  const { signout } = useAuthStore(state => state);

  const router = useRouter();
  return (

    <Header >

      <Row style={{ padding: 0, display: "flex", justifyContent: "flex-end" }}>

        <Col >
          <Button
            onClick={() => {
              signout();
              router.push('/auth');
            }}
            icon={<FontAwesomeIcon icon={faRightFromBracket} />}
            style=
            {{
              fontSize: "20px",
              fontWeight: "bold",
              marginRight: "20px",
              color: "hsl(170, 100%, 80%)",
              background: "radial-gradient(circle, hsl(192, 61%, 45%) 0%, hsl(209, 100%, 8%)100% )",
              border: "none",
            }}
          >
            LOG-OUT
          </Button>
        </Col>

      </Row>
    </Header>


  );
}