import { LocalRecipes } from "../../components/modules/recipe/LocalRecipes"
import { NavbarMantine } from "../../components/partials/navbar/NavbarMantine"

export const MyLocalRecipes = () =>{
    return(
        <>
        <div className="flex h-screen w-screen">
      <div className="flex ">
        <NavbarMantine />
      </div>
      <div className=" flex-1 ml-7xl p-8 w-full ">
       <LocalRecipes/>
      </div>
    </div>
        </>
    )
}