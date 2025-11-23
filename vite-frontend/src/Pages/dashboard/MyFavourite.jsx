import React from "react";

import { NavbarMantine } from "../../components/partials/navbar/NavbarMantine";
import { Favourite } from "../../components/modules/favorite/Favourite";
import { FooterLinks } from "../../components/partials/footer/FooterLinks";

export const MyFavorite = () => {
  return (
    <div className="flex flex-col h-screen w-screen">
      <div className="flex fixed top-0 left-0 w-full z-50">
        <NavbarMantine />
      </div>
      <div className="flex flex-col mt-4">
        <Favourite />
        <FooterLinks />
      </div>
    </div>
  );
};
