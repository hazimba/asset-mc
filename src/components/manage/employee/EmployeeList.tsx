import { Modal, Row, Table, Popconfirm, Button } from 'antd';
import { useEffect, useState } from 'react';
import { UserAddOutlined } from '@ant-design/icons';
import type { Employee } from '../../../shared/types';
import AddNewUser from '../../profile/AddNewUser';

const EmployeeList = () => {
  const [dataSource, setEmployees] = useState([]);
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [openDeleteModal, setOpenDeleteModal] = useState<boolean>(false);

  const fetchEmployees = async () => {
    try {
      const response = await fetch('http://localhost:8000/api/mc/getEmployees');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setEmployees(data);
    } catch (error) {
      console.error('Error fetching employees:', error);
    }
  };

  useEffect(() => {
    fetchEmployees();
  }, []);

  const onSuccess = () => {
    fetchEmployees();
  };

  const handleDelete = async (id: string) => {
    try {
      const response = await fetch(
        `http://localhost:8000/api/mc/deleteEmployee/${id}`,
        {
          method: 'DELETE',
        },
      );
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      await response.json();
      onSuccess();
    } catch (error) {
      console.error('Error deleting employee:', error);
    }
  };

  const ActionButtons = ({ record }: { record: Employee }) => {
    const [openModal, setOpenModal] = useState(false);

    return (
      <span className="flex gap-2">
        <Button onClick={() => setOpenModal(true)} className="text-blue-500">
          Edit
        </Button>
        <Popconfirm
          title="Are you sure you want to delete this employee?"
          onConfirm={() => {
            if (record._id) {
              handleDelete(record._id);
            }
          }}
          trigger={'click'}
          onCancel={() => setOpenDeleteModal(false)}
          okText="Yes"
          cancelText="No"
        >
          <Button color="default" danger variant="link">
            Delete
          </Button>
        </Popconfirm>

        <Modal
          open={openModal}
          onCancel={() => setOpenModal(false)}
          title="Edit Employee"
          footer={null}
        >
          <AddNewUser
            setOpenModal={setOpenModal}
            id={record._id}
            onSuccess={onSuccess}
          />
        </Modal>
      </span>
    );
  };

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Department',
      dataIndex: 'department',
      key: 'department',
    },
    {
      title: 'Position',
      dataIndex: 'position',
      key: 'position',
    },
    {
      title: 'Actions',
      key: 'actions',
      render: (_, record: Employee) => <ActionButtons record={record} />,
    },
  ];

  return (
    <div className="flex flex-col w-full p-4">
      <Row className="mb-4  flex items-center justify-between">
        <h1 className="text-2xl font-bold">Employee List</h1>
        <UserAddOutlined onClick={() => setOpenModal(true)} />
        <Modal
          open={openModal}
          onCancel={() => setOpenModal(false)}
          title="Add New Employee"
          footer={null}
        >
          <AddNewUser setOpenModal={setOpenModal} />
        </Modal>
      </Row>
      <Table
        rowKey="_id"
        bordered
        size="middle"
        dataSource={dataSource}
        columns={columns}
      />
    </div>
  );
};
export default EmployeeList;
