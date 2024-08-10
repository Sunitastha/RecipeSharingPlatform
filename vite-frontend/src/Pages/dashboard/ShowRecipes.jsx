import { BackgroundImage } from "@mantine/core";
import { NavbarMantine } from "../../components/partials/navbar/NavbarMantine";
import { GetRecipes } from "../../components/modules/recipe/GetRecipes";

export const ShowRecipes = () => {
  return (
    <>
      <section className="flex h-screen w-screen">
        <div  className="flex">
          <NavbarMantine />
        </div>
        <main className="flex-1 ml-7xl p-8 w-full ">
          <GetRecipes />
        </main>
      </section>
    </>
  );
};
