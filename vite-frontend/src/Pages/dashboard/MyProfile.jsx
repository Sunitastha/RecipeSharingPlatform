import { Box } from "@mantine/core";

import { NavbarMantine } from "../../components/partials/navbar/NavbarMantine";
import { Profile } from "../../components/modules/profile/Profile";
import { FooterLinks } from "../../components/partials/footer/FooterLinks";

export const MyProfile = () => {
  return (
    <div className="flex flex-col h-screen w-screen">
      <div className="flex fixed top-0 left-0 w-full z-50">
        <NavbarMantine />
      </div>
      <div className="flex flex-col mt-4">
        <Profile />
        <FooterLinks />
      </div>
    </div>
  );
};
