import { NavbarMantine } from "../../components/partials/navbar/NavbarMantine";
import { Home } from "../../components/modules/home/Home";
import { FooterLinks } from "../../components/partials/footer/FooterLinks";
import { GetRecipes } from "../../components/modules/recipe/GetRecipes";

export const Myhome = () => {
  return (
    <div className="flex flex-col h-screen w-screen">
      <div className="flex fixed top-0 left-0 w-full z-50">
        <NavbarMantine />
      </div>
      <div className="flex flex-col mt-4">
        <GetRecipes />
        <FooterLinks />
      </div>
    </div>
  );
};
