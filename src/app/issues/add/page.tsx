'use client';

import React, { useState } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import {
  Button,
  Card,
  Col,
  DatePicker,
  Form,
  Input,
  Radio,
  Row,
  Select,
  Upload,
} from 'antd';
import { template } from '@/data/issues';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

const { TextArea } = Input;

const normFile = (e: any) => {
  if (Array.isArray(e)) {
    return e;
  }
  return e?.fileList;
};


export interface AddProps {

}


export default function AddPage({ }: AddProps) {
  const [description, setDescription] = useState(template);

  const [form] = Form.useForm();


  return (
    <Card style={{ boxShadow: "0 5px 10px hsl(0deg 0% 0% / 15%)" }}>
      <Row gutter={20}>
        <Col xs={24} md={16}>
          <Form
            form={form}
            labelCol={{ span: 24 }}
            wrapperCol={{ span: 24 }}
            layout="horizontal"
            initialValues={{
              description: template
            }}

          >
            <h1 className=' 
            text-center 
            font-serif
            font-bold 
            text-3xl	
            underline 
            underline-offset-8
          decoration-sky-500'
            >

              ISSUE FORM

            </h1>
            <Row gutter={20} className='text-2xl' >
              <Col xs={24}>
                <Form.Item label="Priority"
                  name="priority"
                  rules={[{
                    required: true
                  }]}>
                  <Radio.Group buttonStyle="solid">
                    <Radio.Button value="Low"> Low </Radio.Button>
                    <Radio.Button value="Medium"> Medium </Radio.Button>
                    <Radio.Button value="High"> High </Radio.Button>
                    <Radio.Button value="Very High"> Very High </Radio.Button>
                  </Radio.Group>
                </Form.Item>
              </Col>

              <Col xs={24} md={8}>
                <Form.Item label="Status"
                  name="Status"
                  rules={[{
                    required: true
                  }]}>
                  <Select
                    placeholder="Select Status"
                   
                    options={[
                      { value: 'In-Progress', label: 'In-Progress' },
                      { value: 'Found', label: 'Found' },
                      { value: 'Completed', label: 'Completed' },
                    ]}
                  />
                </Form.Item>
              </Col>


              <Col xs={24} md={8}>
                <Form.Item label="Issue Date"
                  name="issueDate"
                  rules={[{
                    required: true
                  }]}>
                  <DatePicker
                    style={{ width: "100%" }}
                    format="DD MMM YYYY"
                  />
                </Form.Item>
              </Col>

              <Col xs={24}>
                <Form.Item label="Issue Details"
                  name="description"
                  rules={[{
                    required: true
                  }]}>
                  <TextArea rows={12} onChange={x => setDescription(x.target.value)} />
                </Form.Item>
              </Col>

              <Col xs={24}>
                <Form.Item label="Upload" getValueFromEvent={normFile}>

                  <p className='text-lg'>Please provide picture in PNG , JPG or JPEG format.</p>
                  <Upload listType="picture-card">
                    <button style={{ border: 0, background: 'none' }} type="button">
                      <PlusOutlined />
                      <div style={{ marginTop: 8 }}>ScreenShot</div>
                    </button>
                  </Upload>
                </Form.Item>
              </Col>

            </Row>

            <Form.Item>
              <Button className='mt-10' type='primary' htmlType='submit'>Submit</Button>
            </Form.Item>

          </Form>
        </Col>

        <Col xs={24} md={8}>
          <Markdown
            remarkPlugins={[remarkGfm]}
            className={"markdown-viewer"}>
            {description}
          </Markdown>
        </Col>
      </Row>
    </Card>
  );
}