import React, { useEffect, useState } from "react";
import { Loader, Title, Image } from "@mantine/core";
import axios from "axios";
import { useParams } from "react-router-dom";
import { UserIcon } from "lucide-react";
import { FooterLinks } from "../../partials/footer/FooterLinks";
import { NavbarMantine } from "../../partials/navbar/NavbarMantine";

export const RecipeDetails = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(false);

  const capitalizeTitle = (title) =>
    title.replace(/\b\w/g, (char) => char.toUpperCase());

  const fetchRecipe = async () => {
    setLoading(true);
    const res = await axios.get(`http://localhost:8083/recipe/${id}`);
    setRecipe(res.data.data);
    setLoading(false);
  };

  useEffect(() => {
    fetchRecipe();
  }, []);

  if (loading || !recipe) return <Loader className="mt-20 mx-auto" />;

  return (
    <div className="flex flex-col min-h-screen w-full bg-gray-50">
      {/* Navbar */}
      <div className="fixed top-0 left-0 w-full z-50">
        <NavbarMantine />
      </div>

      {/* Main Content */}
      <div className="mt-20 px-6 md:px-20 py-10">
        <div className="bg-white shadow-lg rounded-xl p-6 flex flex-col md:flex-row gap-6">
          {/* Recipe Image */}
          <Image
            src={
              recipe.image.startsWith("http")
                ? recipe.image
                : `http://localhost:8083/file/${recipe.image}`
            }
            height={200}
            width={200}
            fit="cover"
            radius="md"
            className="shadow-md w-[220px] h-[220px] object-cover rounded-md"
          />

          {/* Right Content */}
          <div className="flex flex-col justify-start">
            {/* User + Title */}
            <div className="flex items-center gap-2 text-gray-600">
              <UserIcon size={20} className="text-gray-500" />
              <span className="text-sm">
                By {recipe.createdBy?.fullName || "Unknown"}
              </span>
            </div>

            <Title order={2} className="mt-2 text-3xl font-bold text-gray-900">
              {capitalizeTitle(recipe.title)}
            </Title>

            {/* Ingredients */}
            <div className="mt-6">
              <Title order={4} className="text-xl font-semibold text-gray-800">
                Ingredients
              </Title>
              <p className="text-gray-700 mt-2 leading-relaxed">
                {recipe.ingredients}
              </p>
            </div>

            {/* Instructions */}
            <div className="mt-6">
              <Title order={4} className="text-xl font-semibold text-gray-800">
                Instructions
              </Title>
              <p className="text-gray-700 mt-2 leading-relaxed whitespace-pre-line">
                {recipe.instructions}
              </p>
            </div>
          </div>
        </div>
      </div>

      <FooterLinks />
    </div>
  );
};
