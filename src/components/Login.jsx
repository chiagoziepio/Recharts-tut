import React from "react";
import { Form, message, Button, Input } from "antd";
import { BiUser } from "react-icons/bi";
import { Users } from "../data/data";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const onfinish = (values) => {
    const findUser = Users.find(user => user.username === values.username);
    
    if(!findUser){
        message.error("invalid credentials")
        return
    }
    const checkPwd = findUser.password === values.password
    if(!checkPwd){
        message.error("incorrect password")
        return
    }
    switch (findUser.role) {
        case "super-admin":
            navigate("/main/superadminpanel")
            
            break;
    
        case "admin":
            navigate("/main/adminpanel")
            
            break;
    
        case "user":
            navigate("/main")
            
            break;
    
        default:
            break;
    }
  };
  return (
    <div className="flex items-center justify-center bg-[whitesmoke] h-full">
      <Form
        className="!w-[450px] h-auto rounded-[15px] bg-[white] flex flex-col gap-y-[17px] p-[24px]"
        layout="vertical"
        form={form}
        onFinish={onfinish}
      >
        <h3 className="text-center font-bold text-[25px]">Login</h3>
        <Form.Item
          name={"username"}
          label="Username"
          rules={[{ required: true }]}
        >
          <Input
            prefix={<BiUser size={28} />}
            placeholder="Enter name"
            className="h-[47px] bg-gray-300 text-[17px]"
          />
        </Form.Item>
        <Form.Item
          name={"password"}
          label="password"
          rules={[{ required: true }]}
        >
          <Input.Password
            placeholder="**********"
            className="h-[47px] bg-gray-300 text-[17px]"
          />
        </Form.Item>
        <div className="flex justify-center items-center">
          <Form.Item>
            <Button
              htmlType="submit"
              className="bg-green-950 text-white 
                    text-[19px] rounded-[10px] w-[10rem] h-[50px] "
            >
              Login
            </Button>
          </Form.Item>
        </div>
      </Form>
    </div>
  );
};

export default Login;
