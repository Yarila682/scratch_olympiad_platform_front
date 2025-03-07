import { Modal, Button, Form, Input } from 'antd';
import { useState, useEffect } from 'react';
import { EventDetailsHttp } from '@/__generated__/graphql';

interface EventModalEditableContentProps {
  event: EventDetailsHttp;
  //onSave: (event: EventDetailsHttp) => void;
  isVisible: boolean
  
}

function EventModalEditableContent({ event, isVisible }: EventModalEditableContentProps) {
  const [form] = Form.useForm();

  const [isModalVisible, setIsModalVisible] = useState(isVisible);



//   const showModal = () => {
//     setIsModalVisible(true);
//   };

  useEffect(() => {
    if (isVisible){
        setIsModalVisible(isVisible);   
    }else{
        setIsModalVisible(true);   
    }
   
    console.log("useEffect"  + isModalVisible);
  }, [isVisible]);



  const handleCancel = () => {
    isVisible  = false;
    setIsModalVisible(false);
    //console.log("handleCancel"  + isModalVisible);

  };

  const handleOk = () => {
    form
      .validateFields()
      .then((values) => {
       // onSave(values);
      })
      .catch((errorInfo) => {
        console.log('Validate Failed:', errorInfo);
      });

      setIsModalVisible(false);
  };

  return (
    <Modal
      title="Edit Event"
      open={isModalVisible}
      onOk={handleOk}
      onCancel={handleCancel}
    >
      <Form form={form} initialValues={event}>
        <Form.Item name="name" label="Name" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item name="description" label="Description" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item name="startDate" label="Start Date" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item name="endDate" label="End Date" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        {/* Add any other necessary fields here */}
      </Form>
    </Modal>
  );
}

export default EventModalEditableContent;
