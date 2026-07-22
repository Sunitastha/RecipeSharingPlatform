import { NavbarMantine } from "../../components/partials/navbar/NavbarMantine";
import { Home } from "../../components/modules/home/Home";
import { FooterLinks } from "../../components/partials/footer/FooterLinks";
import { GetRecipes } from "../../components/modules/recipe/GetRecipes";
import { LocalRecipes } from "../../components/modules/recipe/LocalRecipes";

export const Myhome = () => {
  return (
    <div className="flex flex-col h-screen max-w-8xl">
      <div className="flex fixed top-0 left-0 w-full z-50">
        <NavbarMantine />
      </div>
      <div className="flex flex-col mt-4">
        {/* <GetRecipes /> */}
        <LocalRecipes/>
        <FooterLinks />
      </div>
    </div>
  );
};
