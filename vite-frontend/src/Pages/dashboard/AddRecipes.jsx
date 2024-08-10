

import PostRecipes from "../../components/modules/recipe/PostRecipes"
import { NavbarMantine } from "../../components/partials/navbar/NavbarMantine"

export const AddRecipes = () =>{
    return(
        <> 
        <div className="flex h-screen w-screen ">
      <div className="flex">
        <NavbarMantine />
      </div>
      <div className="flex-1 ml-7xl p-8 w-full ">
       <PostRecipes/>
      </div>
    </div>
    
    
        </>
    )
}
