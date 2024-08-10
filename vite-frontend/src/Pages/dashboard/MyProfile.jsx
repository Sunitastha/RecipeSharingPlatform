import { Box } from "@mantine/core";

import { NavbarMantine } from "../../components/partials/navbar/NavbarMantine";
import { Profile } from "../../components/modules/profile/Profile";


export const MyProfile = () => {
  return (
    <>
     <div className="flex h-screen w-screen">
      <div className="flex ">
        <NavbarMantine />
      </div>
      <div className=" flex-1 ml-7xl p-8 w-full ">
       <Profile/>
      </div>
    </div>

          
        
        
      
    </>
  );
};
