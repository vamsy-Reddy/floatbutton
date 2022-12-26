import React, { useState } from "react";
import "antd/dist/antd.css";
import "./index.css";
import { PlusOutlined } from "@ant-design/icons";
import { Select, Row, Col } from "antd";
import { Button, Modal, Form, DatePicker } from "antd";

const BookingModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { RangePicker } = DatePicker;
  const [form] = Form.useForm();

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => form.submit();

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <Button
        type="primary"
        shape="circle"
        size="large"
        className="floatingBtn"
        icon={<PlusOutlined />}
        onClick={showModal}
      ></Button>
      <Modal
        title="Booking Info"
        open={isModalOpen}
        onOk={handleOk}
        okButtonProps={{
          children: "Custom OK"
        }}
        okText="Done"
        onCancel={handleCancel}
        cancelButtonProps={{ style: { display: "none" } }}
      >
        <Form
          form={form}
          style={{ overflow: "hidden" }}
          layout="vertical"
          name="basic"
          labelCol={{
            span: 24
          }}
          wrapperCol={{
            span: 24
          }}
          // initialValues={{
          //   remember: true,
          // }}
        >
          <Row gutter={36}>
            <Col>
              <Form.Item
                style={{ paddingLeft: 10 }}
                label="Room Type"
                name="room_type_id"
                rules={[
                  {
                    required: true,
                    message: "Invalid Value"
                  },
                  { whitespace: true }
                ]}
              >
                <Select
                  showSearch
                  filterOption={(input, option) =>
                    (option?.label ?? "")
                      .toLowerCase()
                      .includes(input.toLowerCase())
                  }
                  options={[
                    {
                      value: "Deluxe",
                      label: "Deluxe"
                    },

                    {
                      value: "Suite",
                      label: "Suite"
                    },

                    {
                      value: "Normal",
                      label: "Normal"
                    }
                  ]}
                  style={{ width: 200 }}
                />
              </Form.Item>
            </Col>
            <Col>
              <Form.Item
                label="Room No"
                name="room_number"
                rules={[
                  {
                    required: true,
                    message: "Invalid Value"
                  },
                  { whitespace: true }
                ]}
              >
                <Select
                  showSearch
                  filterOption={(input, option) =>
                    (option?.label ?? "")
                      .toLowerCase()
                      .includes(input.toLowerCase())
                  }
                  options={[
                    {
                      value: "101",
                      label: "101"
                    },

                    {
                      value: "102",
                      label: "102"
                    },

                    {
                      value: "103",
                      label: "103"
                    }
                  ]}
                  style={{ width: 200 }}
                />
              </Form.Item>
            </Col>
          </Row>
          <Form.Item
            style={{ paddingLeft: 10 }}
            label="Check-In  &  Check-Out"
            name="time_in_&_out"
            rules={[
              {
                required: true,
                message: "Invalid Value"
              }
            ]}
          >
            <RangePicker showTime format="Do MMMM YYYY,h:mm a" />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};
export default BookingModal;
