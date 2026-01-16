import { useState } from "react";
import { Form, Input, Button, Select } from "antd";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import "./SignUpForm.css";

const { Option } = Select;

function SignUpForm({ onSwitchToLogin }) {
  const [form] = Form.useForm();
  const [countryCode, setCountryCode] = useState("+84");

  const onFinish = async(values) => {
    console.log("Sign Up values:", { ...values, countryCode });
    const response = fetch('https://mindx-mockup-server.vercel.app/api/resources/users?apiKey=69513732fdb0c381f6e2b976',
      {method: 'POST',
      body: JSON.stringify(values),
      headers: {
        'Content-Type': 'application/json'
      }
      });
      form.resetFields();
  };

  return (
    <div className="auth-container">
      <div className="auth-form-wrapper">
        <h1 className="auth-title">Let's get you started</h1>
        <Form
          form={form}
          name="signup"
          onFinish={onFinish}
          layout="vertical"
          className="auth-form"
        >
          <Form.Item
            label="Full name"
            name="fullName"
            rules={[{ required: true, message: "Please enter your full name" }]}
          >
            <Input size="large" placeholder="Enter your full name" />
          </Form.Item>

          <Form.Item
            label="Email address"
            name="email"
            rules={[
              { required: true, message: "Please enter your email" },
              { type: "email", message: "Please enter a valid email" },
            ]}
          >
            <Input size="large" placeholder="yourname@email.com" />
          </Form.Item>

          <Form.Item
            label="Phone number"
            rules={[
              {
                required: true,
                message: "Please enter your phone number",
              },
            ]}
          >
            <Input.Group compact>
              <Select
                value={countryCode}
                onChange={setCountryCode}
                style={{ width: "30%" }}
                size="large"
              >
                <Option value="+84">🇻🇳 +84</Option>
                <Option value="+1">🇺🇸 +1</Option>
                <Option value="+44">🇬🇧 +44</Option>
              </Select>
              <Form.Item
                name="phoneNumber"
                noStyle
                rules={[
                  { required: true, message: "Please enter your phone number" },
                ]}
              >
                <Input
                  style={{ width: "70%" }}
                  size="large"
                  placeholder="0123123123"
                  maxLength={10}
                  minLength={10}
                />
              </Form.Item>
            </Input.Group>
          </Form.Item>

          <Form.Item
            label="Create password"
            name="password"
            rules={[
              { required: true, message: "Please enter your password" },
              {
                min: 8,
                message: "Password must contain a minimum of 8 characters",
              },
              {
                pattern: /[!@#$%^&*(),.?":{}|<>]/,
                message: "Password must contain at least one symbol e.g. @.I",
              },
            ]}
          >
            <Input.Password
              size="large"
              placeholder="Enter your password"
              iconRender={(visible) =>
                visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
              }
            />
          </Form.Item>

          <div className="password-requirements">
            <p>Password must contain a minimum of 8 characters</p>
            <p>Password must contain at least one symbol e.g. @.I</p>
          </div>

          <Form.Item
            label={
              <span>
                Location <span className="optional-text">(Optional)</span>
              </span>
            }
            name="location"
          >
            <Select size="large" placeholder="Select Location" allowClear>
              <Option value="ha-noi">Hà Nội</Option>
              <Option value="ho-chi-minh">Hồ Chí Minh</Option>
              <Option value="da-nang">Đà Nẵng</Option>
              <Option value="hai-phong">Hải Phòng</Option>
              <Option value="can-tho">Cần Thơ</Option>
              <Option value="an-giang">An Giang</Option>
              <Option value="ba-ria-vung-tau">Bà Rịa - Vũng Tàu</Option>
              <Option value="bac-lieu">Bạc Liêu</Option>
              <Option value="bac-kan">Bắc Kạn</Option>
              <Option value="bac-giang">Bắc Giang</Option>
              <Option value="bac-ninh">Bắc Ninh</Option>
              <Option value="ben-tre">Bến Tre</Option>
              <Option value="binh-dinh">Bình Định</Option>
              <Option value="binh-duong">Bình Dương</Option>
              <Option value="binh-phuoc">Bình Phước</Option>
              <Option value="binh-thuan">Bình Thuận</Option>
              <Option value="ca-mau">Cà Mau</Option>
              <Option value="cao-bang">Cao Bằng</Option>
              <Option value="dak-lak">Đắk Lắk</Option>
              <Option value="dak-nong">Đắk Nông</Option>
              <Option value="dien-bien">Điện Biên</Option>
              <Option value="dong-nai">Đồng Nai</Option>
              <Option value="dong-thap">Đồng Tháp</Option>
              <Option value="gia-lai">Gia Lai</Option>
              <Option value="ha-giang">Hà Giang</Option>
              <Option value="ha-nam">Hà Nam</Option>
              <Option value="ha-tinh">Hà Tĩnh</Option>
              <Option value="hai-duong">Hải Dương</Option>
              <Option value="hau-giang">Hậu Giang</Option>
              <Option value="hoa-binh">Hòa Bình</Option>
              <Option value="hung-yen">Hưng Yên</Option>
              <Option value="khanh-hoa">Khánh Hòa</Option>
              <Option value="kien-giang">Kiên Giang</Option>
              <Option value="kon-tum">Kon Tum</Option>
              <Option value="lai-chau">Lai Châu</Option>
              <Option value="lam-dong">Lâm Đồng</Option>
              <Option value="lang-son">Lạng Sơn</Option>
              <Option value="lao-cai">Lào Cai</Option>
              <Option value="long-an">Long An</Option>
              <Option value="nam-dinh">Nam Định</Option>
              <Option value="nghe-an">Nghệ An</Option>
              <Option value="ninh-binh">Ninh Bình</Option>
              <Option value="ninh-thuan">Ninh Thuận</Option>
              <Option value="phu-tho">Phú Thọ</Option>
              <Option value="phu-yen">Phú Yên</Option>
              <Option value="quang-binh">Quảng Bình</Option>
              <Option value="quang-nam">Quảng Nam</Option>
              <Option value="quang-ngai">Quảng Ngãi</Option>
              <Option value="quang-ninh">Quảng Ninh</Option>
              <Option value="quang-tri">Quảng Trị</Option>
              <Option value="soc-trang">Sóc Trăng</Option>
              <Option value="son-la">Sơn La</Option>
              <Option value="tay-ninh">Tây Ninh</Option>
              <Option value="thai-binh">Thái Bình</Option>
              <Option value="thai-nguyen">Thái Nguyên</Option>
              <Option value="thanh-hoa">Thanh Hóa</Option>
              <Option value="thua-thien-hue">Thừa Thiên Huế</Option>
              <Option value="tien-giang">Tiền Giang</Option>
              <Option value="tra-vinh">Trà Vinh</Option>
              <Option value="tuyen-quang">Tuyên Quang</Option>
              <Option value="vinh-long">Vĩnh Long</Option>
              <Option value="vinh-phuc">Vĩnh Phúc</Option>
              <Option value="yen-bai">Yên Bái</Option>
            </Select>
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              size="large"
              block
              className="auth-submit-button"
            >
              Sign Up
            </Button>
          </Form.Item>
        </Form>

        <div className="auth-footer">
          <span>Already a user? </span>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              onSwitchToLogin();
            }}
          >
            Login
          </a>
        </div>
      </div>
    </div>
  );
}

export default SignUpForm;
