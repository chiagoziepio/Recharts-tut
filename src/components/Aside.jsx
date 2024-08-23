import React, { useContext } from "react";
import { BiMenu } from "react-icons/bi";
import { context } from "../Utils/context";
import { NavLink } from "react-router-dom";
import { PiWarehouseFill } from "react-icons/pi";
import { MdManageHistory } from "react-icons/md";
import { SiAwssecretsmanager } from "react-icons/si";
import { HiHome } from "react-icons/hi2";
const Aside = () => {
  const { user } = useContext(context);
  

  return (
    <div className="sm:w-[15%]">
      <div className="flex items-center flex-col gap-y-[15px]">
        <BiMenu size={30}  className="cursor-pointer"/>
        <div className="flex flex-col w-full p-[7px] gap-y-[15px]">
          <NavLink to="/main" className="flex w-full gap-x-[7px]">
            <HiHome size={22} className="cursor-pointer" />
            <p>Home</p>
          </NavLink>
          <NavLink to="/main/dashbord" className="flex w-full gap-x-[7px]">
            <PiWarehouseFill size={22}/>
            <p>Dashboard</p>
          </NavLink>
          {user.length ? (
            <div>
              {user.map((p) => (
                <div key={p.role}>
                  {p.role === "admin" && (
                     <NavLink to="/main/adminpanel" className="flex w-full gap-x-[7px]">
                     <MdManageHistory size={22} className="cursor-pointer"/>
                     <p>Admin panel</p>
                   </NavLink>
                  )}
                  {p.role === "super-admin" && (
                    <div className="flex flex-col gap-y-[15px]">
                      <NavLink to="/main/adminpanel" className="flex w-full gap-x-[7px]">
                     <MdManageHistory size={22} className="cursor-pointer"/>
                     <p>Admin panel</p>
                   </NavLink>
                   <NavLink to="/main/superadminpanel" className="flex w-full gap-x-[7px]">
                     <SiAwssecretsmanager size={22} className="cursor-pointer"/>
                     <p>Super-Admin panel</p>
                   </NavLink>
                    </div>
                  )}
                </div>
              ))}
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default Aside;
