import React, { useContext, useEffect } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { context } from "../Utils/context";
import { useNavigate } from "react-router-dom";
import { message } from "antd";
import { IoIosArrowRoundUp } from "react-icons/io";
import { IoIosArrowRoundDown } from "react-icons/io";
const AdminPanel = () => {
  const navigate = useNavigate();
  const { user } = useContext(context);
  //console.log(user);
  
  

  useEffect(() => {
    if (!user.length) {
      message.error("not logged in");
      navigate("/");
      return;
    } else {
      const userRole = user.map((p) => p.role);
      if (userRole === "user") {
        message.warning("not authorized");
        navigate("/main/dashbord");
        return;
      }
    }
  }, []);
  const data = [
    {
      name: "proposed",
      sales: 4000,
      gains: 2400,
      amt: 2400,
    },
    {
      name: "decrease",
      sales: 3000,
      gains: 1398,
      amt: 2210,
    },
    {
      name: "increase",
      sales: 2000,
      gains: 9800,
      amt: 2290,
    },
    {
      name: "active user",
      sales: 2780,
      gains: 3908,
      amt: 2000,
    },
    {
      name: "non-active user",
      sales: 1890,
      gains: 4800,
      amt: 2181,
    },
    {
      name: "new user",
      sales: 2390,
      gains: 3800,
      amt: 2500,
    },
    {
      name: "deleted users",
      sales: 3490,
      gains: 4300,
      amt: 2100,
    },
  ];
  return (
    <div className="h-full">
      <div className="h-full">
        <h3 className="font-bold text-[37px] my-[15px]">Admin panel</h3>
        <div className="">
          <div className="flex flex-col sm:flex-row flex-wrap gap-3 w-full justify-evenly mb-5">
            <div className=" max-w-[200px] w-[100%] sm:w-[25%] h-[200px] rounded-[15px] flex flex-col justify-center items-center bg-[green]  ">
              <p className="font-bold text-[26px] ">Active Users</p>
              <span className="text-[20px]">1000</span>
              <span className="flex items-center">
                2% <IoIosArrowRoundUp size={17} />
              </span>
            </div>
            <div className=" max-w-[200px] w-[100%] sm:w-[25%] h-[200px] rounded-[15px] flex flex-col justify-center items-center bg-[#ffff0062]  ">
              <p className="font-bold text-[26px] text-center">
                Non-active Users
              </p>
              <span className="text-[20px]">200</span>
              <span className="flex items-center">
                4% <IoIosArrowRoundDown size={17} />
              </span>
            </div>
            <div className=" max-w-[200px] w-[100%] sm:w-[25%] h-[200px] rounded-[15px] flex flex-col justify-center items-center bg-[#8000805e]  ">
              <p className="font-bold text-[26px] ">New Users</p>
              <span className="text-[20px]">500</span>
              <span className="flex items-center ">
                7% <IoIosArrowRoundUp size={17} />
              </span>
            </div>
            <div className=" max-w-[200px] w-[100%] sm:w-[25%] h-[200px] rounded-[15px] flex flex-col justify-center items-center bg-[#b222226c]  ">
              <p className="font-bold text-[26px] text-center">Deleted Users</p>
              <span className="text-[20px]">100</span>
              <span className="flex items-center">
                2% <IoIosArrowRoundDown size={17} />
              </span>
            </div>
          </div>
          <div className="h-[400px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart
                width={600}
                height={500}
                data={data}
                margin={{
                  top: 10,
                  right: 30,
                  left: 0,
                  bottom: 0,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Area
                  type="monotone"
                  dataKey="sales"
                  stackId="1"
                  stroke="#8884d8"
                  fill="#8884d8"
                />
                <Area
                  type="monotone"
                  dataKey="gains"
                  stackId="1"
                  stroke="#82ca9d"
                  fill="#82ca9d"
                />
                <Area
                  type="monotone"
                  dataKey="amt"
                  stackId="1"
                  stroke="#ffc658"
                  fill="#ffc658"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;
