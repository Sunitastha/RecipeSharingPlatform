import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { Avatar, Card, Collapse, Title, Image } from "@mantine/core";
import AppLoader from "../../partials/AppLoader";

export const Profile = () => {
  const [userDetails, setUserDetails] = useState({});
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const capitalizeTitle = (title) =>
    title.replace(/\b\w/g, (char) => char.toUpperCase());

  useEffect(() => {
    const fetchUserProfile = async () => {
      const userData = JSON.parse(localStorage.getItem("user"));
      if (userData) {
        setUserDetails(userData);

        try {
          setLoading(true);
          const response = await axios.get(
            `http://localhost:8083/Recipe/getRecipesByUserId/${userData._id}`
          );
          console.log("Recipe response:", response.data);
          setRecipes(response.data.data);
        } catch (err) {
          console.error("Error fetching recipes:", err);
          setError("Error fetching recipes");
        } finally {
          setLoading(false);
        }
      } else {
        navigate("/home");
      }
    };

    fetchUserProfile();
  }, [navigate]);

  if (loading) {
    return (
      <div className="flex h-screen justify-center items-center">
        <AppLoader />
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex h-screen justify-center items-center">{error}</div>
    );
  }

  const getInitials = (fullName) => {
    if (!fullName) return "";
    const nameParts = fullName.split(" ");
    const initials = nameParts
      .map((part) => part.charAt(0).toUpperCase())
      .join("");
    return initials;
  };
  return (
    // <div className="bg-white p-6 rounded-lg shadow-lg text-left">
    //   <div className="flex justify-center items-center min-h-screen bg-gray-100 p-6">
    //     <div className="bg-white w-full max-w-lg rounded-2xl shadow-xl p-8 border border-gray-200">
    //       <h1 className="text-3xl font-bold text-gray-900 text-center mb-6">
    //         Profile
    //       </h1>

    //       {userDetails && (
    //         <div key={userDetails._id} className="flex flex-col items-center">
    //           <Avatar
    //             color="green"
    //             radius="xl"
    //             size={90}
    //             className="cursor-pointer shadow-md mb-5 hover:scale-105 transition-transform"
    //           >
    //             {getInitials(userDetails.fullName)}
    //           </Avatar>

    //           <div className="w-full space-y-3">
    //             <div className="flex justify-between bg-gray-50 p-3 rounded-lg">
    //               <span className="text-gray-500 font-medium">Username:</span>
    //               <span className="font-semibold text-gray-900">
    //                 {userDetails.username}
    //               </span>
    //             </div>

    //             <div className="flex justify-between bg-gray-50 p-3 rounded-lg">
    //               <span className="text-gray-500 font-medium">Full Name:</span>
    //               <span className="font-semibold text-gray-900">
    //                 {userDetails.fullName}
    //               </span>
    //             </div>

    //             <div className="flex justify-between bg-gray-50 p-3 rounded-lg">
    //               <span className="text-gray-500 font-medium">Gender:</span>
    //               <span className="font-semibold text-gray-900">
    //                 {userDetails.gender}
    //               </span>
    //             </div>

    //             <div className="flex justify-between bg-gray-50 p-3 rounded-lg">
    //               <span className="text-gray-500 font-medium">Phone:</span>
    //               <span className="font-semibold text-gray-900">
    //                 {userDetails.phone}
    //               </span>
    //             </div>

    //             <div className="flex justify-between bg-gray-50 p-3 rounded-lg">
    //               <span className="text-gray-500 font-medium">Email:</span>
    //               <span className="font-semibold text-gray-900">
    //                 {userDetails.email}
    //               </span>
    //             </div>
    //           </div>
    //         </div>
    //       )}

    //       <div className="flex justify-center mt-8">
    //         <Link
    //           to="/change-password"
    //           className="px-5 py-2 rounded-lg bg-green-600 text-white font-semibold shadow hover:bg-green-700 transition"
    //         >
    //           Change Password
    //         </Link>
    //       </div>
    //     </div>
    //   </div>

    //   <hr className="my-6 border-gray-300" />
    //   <h2 className="text-2xl font-bold mb-2 flex justify-center text-gray-600">
    //     My Recipes:
    //   </h2>
    //   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    //     {recipes.length > 0 ? (
    //       recipes.map((recipe, index) => (
    //         <div
    //           key={recipe._id}
    //           shadow="lg"
    //           padding="lg"
    //           radius="md"
    //           className="cursor-pointer transition hover:shadow-2xl shadow-sm rounded-md border border-gray-200 p-2"
    //           onClick={() => navigate(`/recipes/${recipe._id}`)}
    //         >
    //           <Image
    //             src={
    //               recipe.image.startsWith("http")
    //                 ? recipe.image
    //                 : `http://localhost:8083/file/${recipe.image}`
    //             }
    //             fit="cover"
    //             radius="md"
    //             className="w-[100px] h-[400px] object-cover hover:scale-[1.02]"
    //           />
    //           <div className="flex flex-col justify-between">
    //             <Title
    //               order={2}
    //               className="mt-3 text-xl font-semibold text-gray-600 "
    //             >
    //               {capitalizeTitle(recipe.title)}
    //             </Title>

    //             <div className="flex items-center mt-2 space-x-2">
    //               {/* Bookmark Icon */}
    //               {/* <BookmarkIcon
    //                           className="text-gray-500 hover:text-red-500 cursor-pointer transition"
    //                           size={20}
    //                         /> */}

    //               {/* USER ICON + USERNAME */}
    //               {/* <div className="flex items-center space-x-1">
    //                           <UserIcon size={18} className="text-gray-500" />
    //                           <span className="text-gray-600 text-sm">
    //                             {recipe.createdBy?.fullName || "Unknown"}
    //                           </span>
    //                         </div> */}
    //             </div>
    //           </div>
    //         </div>
    //       ))
    //     ) : (
    //       <p>No recipes found.</p>
    //     )}
    //   </div>
    // </div>
    <div className="flex flex-col bg-gray-100 min-h-screen py-12 px-6">
      {/* MAIN CARD */}
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-10">
        {/* LEFT: PROFILE */}
        <div className="flex-shrink-0 flex flex-col items-center lg:items-start gap-4 w-full lg:w-1/3  p-8   bg-white rounded-3xl shadow-md border border-gray-200">
          <Avatar color="green" radius="xl" size={120} className="shadow-md">
            {getInitials(userDetails.fullName)}
          </Avatar>

          <p className="text-xl font-semibold text-gray-800">
            {userDetails.fullName}
          </p>
          <p className="text-gray-500">{userDetails.username}</p>

          {/* INFO GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4 w-full">
            {[
              ["Gender", userDetails.gender],
              ["Phone", userDetails.phone],
              ["Email", userDetails.email],
            ].map(([label, value], i) => (
              <div
                key={i}
                className="bg-gray-50 rounded-xl p-3 border border-gray-200 shadow-sm"
              >
                <p className="text-gray-500 text-sm font-medium">{label}</p>
                <p className="text-gray-900 font-semibold mt-1">{value}</p>
              </div>
            ))}
          </div>

          <Link
            to="/change-password"
            className="mt-6 px-5 py-2 rounded-lg bg-green-600 text-white font-semibold hover:bg-green-700 shadow-md transition"
          >
            Change Password
          </Link>
        </div>

        {/* RIGHT: MY RECIPES */}
        <div className="flex-1 bg-white rounded-3xl shadow-md border border-gray-200  p-8 lg:p-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center lg:text-left">
            My Recipes
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
            {recipes.length > 0 ? (
              recipes.map((recipe) => (
                <div
                  key={recipe._id}
                  className="bg-gray-50 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition cursor-pointer overflow-hidden"
                  onClick={() => navigate(`/recipes/${recipe._id}`)}
                >
                  <img
                    src={
                      recipe.image.startsWith("http")
                        ? recipe.image
                        : `http://localhost:8083/file/${recipe.image}`
                    }
                    className="w-full h-40 object-cover rounded-t-2xl"
                    alt={recipe.title}
                  />

                  <div className="p-3">
                    <h3 className="text-lg font-semibold text-gray-800">
                      {capitalizeTitle(recipe.title)}
                    </h3>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-gray-600 text-center">No recipes found.</p>
            )}
          </div>
        </div>
      </div>
    </div>

    // <div className="flex flex-col">
    //   {/* PROFILE CARD */}
    //   <div className="max-w-4xl mx-auto px-6 py-10">
    //     <h1 className="text-4xl font-extrabold text-gray-800 text-center mb-10 tracking-wide">
    //       Profile
    //     </h1>

    //     {userDetails && (
    //       <div className="flex flex-col items-center">
    //         <Avatar
    //           color="green"
    //           radius="xl"
    //           size={110}
    //           className="cursor-pointer shadow-xl mb-6 hover:scale-110 transition-transform duration-300"
    //         >
    //           {getInitials(userDetails.fullName)}
    //         </Avatar>

    //         {/* INFO BOXES */}
    //         <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full mt-4">
    //           {[
    //             ["Username", userDetails.username],
    //             ["Full Name", userDetails.fullName],
    //             ["Gender", userDetails.gender],
    //             ["Phone", userDetails.phone],
    //             ["Email", userDetails.email],
    //           ].map(([label, value], i) => (
    //             <div
    //               key={i}
    //               className="flex flex-col p-5 rounded-2xl bg-white shadow-md border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
    //             >
    //               <span className="text-sm text-gray-500 font-medium">
    //                 {label}
    //               </span>
    //               <span className="mt-1 text-lg font-semibold text-gray-900">
    //                 {value}
    //               </span>
    //             </div>
    //           ))}
    //         </div>
    //       </div>
    //     )}

    //     <div className="flex justify-center mt-10">
    //       <Link
    //         to="/change-password"
    //         className="px-6 py-3 rounded-xl bg-green-600 text-white font-semibold text-lg shadow-md hover:bg-green-700 hover:shadow-lg transition-all duration-300"
    //       >
    //         Change Password
    //       </Link>
    //     </div>
    //   </div>

    //   {/* DIVIDER */}
    //   <div className="max-w-6xl mx-auto">
    //     <hr className="my-10 border-gray-300" />

    //     <h2 className="text-2xl font-bold text-center mb-6 text-gray-700">
    //       My Recipes
    //     </h2>

    //     {/* RECIPES GRID */}
    //     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    //       {recipes.length > 0 ? (
    //         recipes.map((recipe) => (
    //           <div
    //             key={recipe._id}
    //             className="bg-white rounded-xl border border-gray-200 shadow hover:shadow-2xl transition cursor-pointer overflow-hidden"
    //             onClick={() => navigate(`/recipes/${recipe._id}`)}
    //           >
    //             <img
    //               src={
    //                 recipe.image.startsWith("http")
    //                   ? recipe.image
    //                   : `http://localhost:8083/file/${recipe.image}`
    //               }
    //               className="w-full h-64 object-cover hover:scale-105 transition-transform"
    //               alt={recipe.title}
    //             />

    //             <div className="p-4">
    //               <h3 className="text-xl font-semibold text-gray-800">
    //                 {capitalizeTitle(recipe.title)}
    //               </h3>

    //               {/* <p className="text-sm text-gray-500 mt-1">
    //                 By {recipe.createdBy?.fullName || "Unknown"}
    //               </p> */}
    //             </div>
    //           </div>
    //         ))
    //       ) : (
    //         <p className="text-gray-600">No recipes found.</p>
    //       )}
    //     </div>
    //   </div>
    // </div>
  );
};

export default Profile;
