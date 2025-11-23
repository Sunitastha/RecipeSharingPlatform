// import PostRecipes from "../../components/modules/recipe/PostRecipes";
import { RecipesAdd } from "../../components/modules/recipe/RecipesAdd";
import { FooterLinks } from "../../components/partials/footer/FooterLinks";
import { NavbarMantine } from "../../components/partials/navbar/NavbarMantine";

export const AddRecipes = () => {
  return (
    <div className="flex flex-col h-screen w-screen">
      <div className="flex fixed top-0 left-0 w-full z-50">
        <NavbarMantine />
      </div>
      <div className="flex flex-col mt-4">
        <RecipesAdd />
        <FooterLinks />
      </div>
    </div>
  );
};
