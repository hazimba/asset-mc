import { Form, Input, Button, Row, Col, message } from 'antd';
import axios from 'axios';
import { useCallback, useEffect, useState } from 'react';
import { Employee } from '../../shared/types';

const UserDetailsForm = () => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(true);
  const [isEditMode, setIsEditMode] = useState<boolean>(false);

  const fetchEmployee = useCallback(async () => {
    setLoading(true);
    try {
      const { data } = await axios.get(
        `http://localhost:8000/api/mc/getEmployee/1b7e27e6-87da-460a-9256-47cdc75bade4`,
      );
      form.setFieldsValue(data);
    } catch (err) {
      console.error(err);
      message.error('Error fetching employee');
    } finally {
      setLoading(false);
    }
  }, [form]);

  useEffect(() => {
    fetchEmployee();
  }, [fetchEmployee]);

  const handleFinish = async (values: Employee) => {
    try {
      await axios.patch(
        `http://localhost:8000/api/mc/updateEmployee/1b7e27e6-87da-460a-9256-47cdc75bade4`,
        values,
      );
      message.success('Employee updated');
      await fetchEmployee();
      setIsEditMode(false);
    } catch (err) {
      console.error(err);
      message.error('Error updating employee');
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

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
            <Input placeholder="Enter your name" disabled={!isEditMode} />
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
            <Input placeholder="Enter your email" disabled={!isEditMode} />
          </Form.Item>

          <Form.Item label="Department" name="department" className="mb-6">
            <Input placeholder="Enter your department" disabled={!isEditMode} />
          </Form.Item>
        </Col>

        <Col xs={24} md={12}>
          <Form.Item label="Position" name="position" className="mb-6">
            <Input placeholder="Enter your position" disabled={!isEditMode} />
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
            <Input
              placeholder="Enter your phone number"
              disabled={!isEditMode}
            />
          </Form.Item>

          <Form.Item label="Address" name="address" className="mb-6">
            <Input placeholder="Enter your address" disabled={!isEditMode} />
          </Form.Item>

          {isEditMode ? (
            <></>
          ) : (
            <Form.Item className="mb-0 w-full">
              <Row gutter={8}>
                <Col flex="auto">
                  <Button type="primary" onClick={() => setIsEditMode(true)}>
                    Edit
                  </Button>
                </Col>
              </Row>
            </Form.Item>
          )}

          {isEditMode ? (
            <Form.Item className="mb-0">
              <Row gutter={8}>
                <Col flex="auto">
                  <Button type="primary" htmlType="submit" block>
                    Save Changes
                  </Button>
                </Col>
              </Row>
            </Form.Item>
          ) : (
            <></>
          )}
        </Col>
      </Row>
    </Form>
  );
};

export default UserDetailsForm;
