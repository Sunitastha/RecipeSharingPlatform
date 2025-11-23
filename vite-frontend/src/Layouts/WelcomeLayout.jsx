import { Route, Routes } from "react-router-dom";
import { CoverPage } from "../components/modules/cover/CoverPage";
import { SignIn } from "../Pages/auth/SignIn";
import { SignUp } from "../Pages/auth/SignUp";
import { ShowRecipes } from "../Pages/dashboard/ShowRecipes";
import { MyProfile } from "../Pages/dashboard/MyProfile";
import { MyFavorite } from "../Pages/dashboard/MyFavourite";
import { Myhome } from "../Pages/dashboard/Myhome";
import { LogOut } from "../Pages/dashboard/LogOut";
import { RecipeDetails } from "../components/modules/recipe/RecipeDetails";
import { AddRecipes } from "../Pages/dashboard/AddRecipes";
import { PostRecipes } from "../components/modules/recipe/PostRecipes";
import { PasswordChange } from "../Pages/dashboard/PasswordChange";

export const WelcomeLayout = () => {
  return (
    <Routes>
      <Route path="/" element={<CoverPage />} />
      <Route path="/sign-in" element={<SignIn />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/change-password" element={<PasswordChange />} />
      <Route path="/recipes-add" element={<AddRecipes />} />
      <Route path="/fetch" element={<ShowRecipes />} />
      <Route path="/profile" element={<MyProfile />} />
      <Route path="/favourite" element={<MyFavorite />} />
      <Route path="/log-out" element={<LogOut />} />
      <Route path="/recipes/:id" element={<RecipeDetails />} />
      <Route path="/add" element={<PostRecipes />} />
      {/* <Route path="/localrecipes" element={<MyLocalRecipes />} /> */}
      {/* <Route path="/recipesdata" element={<Recipes />} /> */}
      <Route path="/home" element={<Myhome />} />{" "}
      {/* Catch-all route for unmatched paths */}
    </Routes>
  );
};
