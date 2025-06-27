import { Button, Col, Form, Input, message, Row } from 'antd';
import { Employee } from '../../shared/types';
import axios from 'axios';
import { useEffect } from 'react';

interface AddNewUserProps {
  setOpenModal?: (open: boolean) => void;
  id?: string; // Optional, if you want to pass an ID for editing
  onSuccess?: () => void; // Optional callback for success
  onError?: (error: any) => void; // Optional callback for error handling
  isEditMode?: boolean; // Optional prop to determine if it's in edit mode
  initialValues?: Employee; // Optional initial values for the form
  onFetchEmployee?: (id: string) => Promise<Employee>; // Optional function to fetch
}

const AddNewUser = ({ setOpenModal, id, onSuccess }: AddNewUserProps) => {
  const [form] = Form.useForm();
  const isEditMode = Boolean(id);
  // to fetch after create user
  console.log('isEditMode:', isEditMode);
  useEffect(() => {
    if (isEditMode && id) {
      const fetchEmployee = async () => {
        try {
          const { data } = await axios.get(
            `http://localhost:8000/api/mc/getEmployee/${id}`,
          );
          form.setFieldsValue(data);
        } catch (err) {
          console.error(err);
          message.error('Error fetching employee');
        }
      };
      fetchEmployee();
    }
  }, [id, isEditMode, form, setOpenModal]);

  const fetchEmployee = async () => {
    try {
      axios.get(`http://localhost:8000/api/mc/getEmployee/`);
    } catch (error) {
      console.error('Error fetching employee:', error);
      message.error('Error fetching employee');
    }
  };

  useEffect(() => {
    fetchEmployee();
  }, [id, isEditMode, form]);

  const handleFinish = async (values: Employee) => {
    try {
      if (isEditMode && id) {
        await axios.patch(
          `http://localhost:8000/api/mc/updateEmployee/${id}`,
          values,
        );
        message.success('Employee updated');
      } else {
        message.success('Employee added');
        await axios.post(`http://localhost:8000/api/mc/addEmployee`, values);
      }
      form.resetFields();
      setOpenModal?.(false);
      onSuccess?.();
    } catch (err) {
      console.error(err);
      message.error('Error add employee');
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
