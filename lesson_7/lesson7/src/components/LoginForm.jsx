import { Form, Input, Button, Select } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import './SignUpForm.css';
import { useState, useForm, useEffect } from 'react';

const { Option } = Select;

function LoginForm({ onSwitchToSignUp }) {
  const [form] = Form.useForm();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onFinish = async(values) => {
    console.log('Login values:', values);
    setEmail(values.emailOrPhone);
    setPassword(values.password);
  }

  useEffect(() => {
    const fetchUsers = async () => {
      if (!email || !password) return;

        const response = await fetch(
          'https://mindx-mockup-server.vercel.app/api/resources/users?apiKey=69513732fdb0c381f6e2b976',
          {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
            },
          }
        );

        const data = await response.json();
        const users = data.data.data;
        console.log(users);
        const validUser = users.find((user) => user.email == email && user.password == password)

        if (validUser) {
          alert("dang nhap thanh cong")
        }
        else
          alert("dang nhap khong thanh cong")
    };
    fetchUsers();
    form.resetFields();
  }, [email,password]);

  return (
    <div className="auth-container">
      <div className="auth-form-wrapper">
        <h1 className="auth-title">Welcome back</h1>
        <Form
          form={form}
          name="login"
          onFinish={onFinish}
          layout="vertical"
          className="auth-form"
        >
          <Form.Item
            label="Email address or Phone number"
            name="emailOrPhone"
            rules={[{ required: true, message: 'Please enter your email or phone number' }]}
          >
            <Input size="large" placeholder="yourname@email.com or phone number" />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: 'Please enter your password' }]}
          >
            <Input.Password
              size="large"
              placeholder="Enter your password"
              iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
            />
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              size="large"
              block
              className="auth-submit-button"
            >
              Login
            </Button>
          </Form.Item>
        </Form>

        <div className="auth-footer">
          <span>Don't have an account? </span>
          <a href="#" onClick={(e) => { e.preventDefault(); onSwitchToSignUp(); }}>
            Sign Up
          </a>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;

