import { Button, Form, Input, notification, Select } from 'antd';
import { useMutation, useQuery } from '@apollo/client';
//import { GET_EVENTS } from '@/graphql/query';
import { CREATE_EVENT} from '@/graphql/mutations';
import { handlingGraphqlErrors } from '@/utils';
import { EventCreationFormInputs } from './EventCreationForm.types';
import { NewEvent } from '@/__generated__/graphql';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { EVENTS_PAGE_ROUTE } from '@/consts';

const { Option } = Select;

function EventCreationModule() {
    const [form] = Form.useForm();
    const navigate = useNavigate();

    const [selectedType, setSelectedType] = useState<string | null>(null);

    const [createEvent, { loading }] = useMutation<{ CreateEvent: Response }, { input: NewEvent }>(
        CREATE_EVENT,
        {
            onCompleted: () => {
                notification.success({
                    message: 'Success!',
                    description: 'Event created successfully.',
                });
                navigate(EVENTS_PAGE_ROUTE);
            },
            onError: (error) => {
                handlingGraphqlErrors(error)
            },
        }
    );

    const onFinish = (inputs: EventCreationFormInputs) => {
        createEvent({
          variables: {
            input: {
              name: inputs.name,
              description: inputs.description,
              startDate: inputs.startDate,
              endDate: inputs.endDate,
              // Add any other necessary fields here
            },
          },
        });
      };
    

    const handleTypeChange = (value: string) => {
        setSelectedType(value);
    };

    return (
        <Form onFinish={onFinish} form={form}>
          <Form.Item name="name" rules={[{ required: true, message: 'Please enter the event name!' }]}>
            <Input placeholder="Event Name" size="middle" />
          </Form.Item>
          <Form.Item name="description" rules={[{ required: true, message: 'Please enter the event description!' }]}>
            <Input.TextArea placeholder="Event Description" size="middle" />
          </Form.Item>
          <Form.Item name="startDate" rules={[{ required: true, message: 'Please enter the event start date!' }]}>
            <Input placeholder="Event Start Date" size="middle" />
          </Form.Item>
          <Form.Item name="endDate" rules={[{ required: true, message: 'Please enter the event end date!' }]}>
            <Input placeholder="Event End Date" size="middle" />
          </Form.Item>
          {/* Add any other necessary form fields here */}
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Create Event
            </Button>
          </Form.Item>
        </Form>
      );
}

export default EventCreationModule;
