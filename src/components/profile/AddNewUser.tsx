import { Button, Col, Form, Input, message, Row } from 'antd';
import { Employee } from '../../shared/types';
import axios from 'axios';

const AddNewUser = () => {
  const [form] = Form.useForm();

  const handleFinish = async (values: Employee) => {
    try {
      await axios.post(
        `http://localhost:8000/api/mc/addEmployee`,
        values,
      );
      message.success('Employee updated');
    } catch (err) {
      console.error(err);
      message.error('Error updating employee');
    }
  };

  return (
    <Form
      form={form}
      layout="vertical"
      onFinish={handleFinish}
      className="flex gap-4"
    >
      <Row gutter={24} className="w-full">
        <Col xs={24} md={12}>
          <Form.Item
            label="Name"
            name="name"
            rules={[{ required: true, message: 'Please enter your name' }]}
            className="mb-6"
          >
            <Input placeholder="Enter your name" />
          </Form.Item>

          <Form.Item
            label="Email"
            name="email"
            rules={[
              { required: true, message: 'Please enter your email' },
              { type: 'email', message: 'Invalid email address' },
            ]}
            className="mb-6"
          >
            <Input placeholder="Enter your email" />
          </Form.Item>

          <Form.Item label="Department" name="department" className="mb-6">
            <Input placeholder="Enter your department" />
          </Form.Item>
        </Col>

        <Col xs={24} md={12}>
          <Form.Item label="Position" name="position" className="mb-6">
            <Input placeholder="Enter your position" />
          </Form.Item>

          <Form.Item
            label="Phone"
            name="phone"
            rules={[
              {
                pattern: /^\+?[0-9\s-]{7,16}$/,
                message: 'Invalid phone number',
              },
            ]}
            className="mb-6"
          >
            <Input placeholder="Enter your phone number" />
          </Form.Item>

          <Form.Item label="Address" name="address" className="mb-6">
            <Input placeholder="Enter your address" />
          </Form.Item>

          <Form.Item className="mb-0">
            <Row gutter={8}>
              <Col flex="auto">
                <Button type="primary" htmlType="submit" block>
                  Save Changes
                </Button>
              </Col>
            </Row>
          </Form.Item>
        </Col>
      </Row>
    </Form>
  );
};
export default AddNewUser;
