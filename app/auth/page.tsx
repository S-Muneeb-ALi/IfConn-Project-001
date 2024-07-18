'use client'
import React from 'react';
import { useRouter } from 'next/navigation';

import { Button, Card, Checkbox, Divider, Form, FormProps, Image, Input, notification } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faLock } from '@fortawesome/free-solid-svg-icons';

import Link from 'next/link';
import AuthenticationResponse from '@/models/responses/AuthState';
import LoginData from '@/data/LoginData';
import { useStore } from 'zustand';
import useAuthStore from '@/store/useAuthStore';



type FieldType = {
  id: number;
  username: string;
  password: string;
  email: string;
};


async function signInAsync (req: any) {
  const result = await fetch("/api/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(req),
  });

  return await result.json() as Promise<AuthenticationResponse>;
}


export default function Login() {
  const router = useRouter();
  const { signin } = useAuthStore((state) => state);

  const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
    const signinRequest = {
      email: values.email,
      password: values.password,
    }
    
    // const authResponse = await signInAsync(signinRequest);

    if (values.password !== "real") {
      notification.error({ message: "Login Failed", description: "Invalid Username or Password" });
      return;
    }

    const authResponse: AuthenticationResponse = {
      isAuthenticated: true,
      user: {
        id:1,
        email: values.email,
        name: "Muneeb",
      }
    } 
    
    signin(authResponse);
    //localStorage.setItem('auth', JSON.stringify(authState));
    router.push('/dashboard');
  };

  return (
    <div style={{ display: "flex", flexDirection: "row", margin: "auto" }}
    >

      <Card
        style={{
          background: "#87becf4f",
        }}
        className='max-w-3xl border-l-4'
      >
        <Form
          style={{ maxWidth: 2400, marginTop: "50%" }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
        >
          <Form.Item
            className='text-center'
            labelCol={{ span: 14 }}
            wrapperCol={{ span: 24 }}>
            <p className='text-3xl tracking-widest font-semibold text-white'>
              LOGIN
            </p>
          </Form.Item>

          <Form.Item
            name="email"
            
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input
              style={{ background: "none", border: "none", color: "white", borderBottom: "5px solid white " }}
              prefix={<FontAwesomeIcon icon={faUser} size='lg' />}
              placeholder="Email"
            />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password
              style={{ background: "none", border: "none", color: "white", borderBottom: "5px solid white " }}
              prefix={<FontAwesomeIcon icon={faLock} size='lg' />}
              placeholder="Password "
            />
          </Form.Item>

          <Form.Item
            name="remember"
            valuePropName="checked"
            wrapperCol={{ offset: 6, span: 14 }}
          >
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
          <Divider />

          <Form.Item
            className='text-center'
            labelCol={{ span: 14 }}
            wrapperCol={{ span: 24 }}>
            <p className=' text-white'>
              Click here to  <Link href="/auth/signup">Sign Up</Link>
            </p>
          </Form.Item>

        </Form>
      </Card>
      <div
        style={{
          maxWidth: 600,
          maxHeight: 1000,
        }}
        className='flex flex-row invisible sm:visible'
      >
        <Image
          src="/login1.png"
          preview={false}
        />
      </div>
    </div>

  )
};