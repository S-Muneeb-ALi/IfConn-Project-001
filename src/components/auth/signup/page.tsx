'use client'
import React from 'react';
import { faHouse, faLock, faMailBulk, faMobileScreen, faSquareEnvelope, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  Card, Col, Form, Input, Row, Select, Image } from 'antd';
import Link from 'next/link';

const { Option } = Select;

export default function SignUp() {
  const genders = ['male', 'female', 'other'];
  return (
    <div style={{ margin: "auto"}} >
      <Card
        className=' max-w-3xl signup-page '
        style={{

          minWidth: 1000,
          borderRadius: "10px",
          background: "#87becf4f",
        
        }}
      >
        <div className='flex gap-40 justify-between '>
          <Form style={{ maxWidth: 2400 }}>
            <Row gutter={16}>
              <Col xs={24} md={24}>

                <Form.Item
                  className='text-center'
                >
                  <p className='text-3xl tracking-widest font-semibold text-white pb-10'>
                    SIGN UP
                  </p>
                </Form.Item>

              </Col>
            </Row>
            <Row gutter={16}>

              <Col xs={24} md={12}>

                <Form.Item
                  name="First Name"
                  tooltip="What do you want others to call you?"
                  rules={[{ required: true, message: 'Please input your first name!' }]}
                >
                  <Input
                    className="input--dark input--bordered"
                    prefix={<FontAwesomeIcon icon={faUser} />}
                    placeholder="First Name" />
                </Form.Item>

              </Col>
              <Col xs={24} md={12}>

                <Form.Item
                  name="Last Name"
                  tooltip="What do you want others to call you?"
                  rules={[{ message: 'Please input your Last name!' }]}
                >
                  <Input
                    className="input--dark input--bordered"

                    placeholder="Last Name" />
                </Form.Item>

              </Col>
            </Row>

            <Row gutter={16}>
              <Col xs={24} md={24}>

                <Form.Item
                  name="email"
                  rules={[
                    {
                      type: 'email',
                      message: 'The input is not valid E-mail!',
                    },
                    {
                      required: true,
                      message: 'Please input your E-mail!',
                    },
                  ]}
                >
                  <Input
                    className="input--dark input--bordered"
                    prefix={<FontAwesomeIcon icon={faSquareEnvelope} />}
                    placeholder="Email          App123@example.com" />
                </Form.Item>

              </Col>
            </Row>
            <Row gutter={16}>
              <Col xs={24} md={24}>

                <Form.Item
                  name="residence"
                  rules={[
                    { type: 'string', required: true, message: 'Please input your habitual residence!' },
                  ]}
                >
                  <Input
                    className="input--dark input--bordered"

                    prefix={<FontAwesomeIcon icon={faHouse} />}
                    placeholder="Residence Address" />
                </Form.Item>

              </Col>
            </Row>
            <Row gutter={16}>
              <Col xs={24} md={12}>

                <Form.Item
                  name="password"
                  rules={[{ required: true, message: 'Please input your password!' }]}
                  hasFeedback
                >
                  <Input.Password
                    className="input--dark input--bordered"

                    prefix={<FontAwesomeIcon icon={faLock} />}
                    placeholder="Password"
                  />
                </Form.Item>

              </Col>

              <Col xs={24} md={12}>
                <Form.Item
                  name="confirm"
                  dependencies={['password']}
                  hasFeedback
                  rules={[
                    {
                      required: true,
                      message: 'Please confirm your password!',
                    },
                    ({ getFieldValue }) => ({
                      validator(_, value) {
                        if (!value || getFieldValue('password') === value) {
                          return Promise.resolve();
                        }
                        return Promise.reject(new Error('The passwords that you entered do not match!'));
                      },
                    }),
                  ]}
                >
                  <Input.Password
                    className="input--dark input--bordered"

                    prefix={<FontAwesomeIcon icon={faLock} />}
                    placeholder="Confirm Password"
                  />
                </Form.Item>

              </Col>
            </Row>
            <Row gutter={16}>
              <Col xs={24} md={12}>

                <Form.Item
                  name="phone"
                  rules={[{ required: true, message: 'Please input your phone number!' }]}
                >
                  <Input
                    className="input--dark input--bordered"

                    prefix={<FontAwesomeIcon icon={faMobileScreen} />}
                    placeholder="Phone Number"
                  />
                </Form.Item>

              </Col>
              <Col xs={24} md={12}>

                <Form.Item
                  name="gender"
                  rules={[{ required: true, message: 'Please select gender!' }]}
                >
                  <Select placeholder="Please Select Gender">
                    <Option value="male">Male</Option>
                    <Option value="female">Female</Option>
                    <Option value="other">Other</Option>
                  </Select>
                </Form.Item>

              </Col>
            </Row>
            <Row>
              <Col span={24}>

                <Form.Item>
                  <Link
                    style={{
                      marginLeft: "20%",
                      minWidth: "20%",
                      color: "hsl(276, 100%, 25%)",
                      background: "linear-gradient(90deg, hsl(330, 100%, 80%),hsl(300, 100%, 60%)"
                    }} href={'../signup'}                    >
                    Register
                  </Link>
                </Form.Item>

              </Col>
            </Row>
          </Form>

          <div className='flex flex-1  self-center invisible md:visible '>
            <Image
              src='/signup1.png'
              preview={false}
              width={300}
              height={300}
              style={{ borderRadius: "10px" }}
            />
          </div>
        </div>

      </Card>
    </div>

  )

}