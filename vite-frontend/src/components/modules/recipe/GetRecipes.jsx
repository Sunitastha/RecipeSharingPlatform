import React, { useEffect, useState } from "react";
import {
  Button,
  Loader,
  Alert,
  Collapse,
  Title,
  Card,
  Image,
  TextInput,
} from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { BookMarkedIcon, BookmarkIcon, UserIcon } from "lucide-react";
import AppLoader from "../../partials/AppLoader";

export const GetRecipes = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  const navigate = useNavigate();

  const capitalizeTitle = (title) =>
    title.replace(/\b\w/g, (char) => char.toUpperCase());

  const getRecipes = async () => {
    setLoading(true);
    try {
      const res = await axios.get("http://localhost:8083/recipe/");
      setRecipes(res.data.data);
    } catch (err) {
      setError("Failed to load recipes.");
    }
    setLoading(false);
  };

  useEffect(() => {
    getRecipes();
  }, []);

  const filteredRecipes = recipes.filter((recipe) =>
    recipe.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="container max-w-6xl mx-auto mt-8">
      <div className="flex items-center my-8">
        <IconSearch size={30} />
        <TextInput
          placeholder="Search a Recipe"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-1/2 ml-2 border border-gray-800 rounded-md"
        />
      </div>

      {loading ? (
        // <div className="flex justify-center">
        <AppLoader />
      ) : // </div>
      error ? (
        <Alert color="red">{error}</Alert>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 m-6">
          {filteredRecipes.map((recipe) => (
            <div
              key={recipe._id}
              className="bg-white rounded-xl border border-gray-200 shadow hover:shadow-2xl transition cursor-pointer overflow-hidden"
              onClick={() => navigate(`/recipes/${recipe._id}`)}
            >
              <img
                src={
                  recipe.image.startsWith("http")
                    ? recipe.image
                    : `http://localhost:8083/file/${recipe.image}`
                }
                className="w-full h-64 object-cover hover:scale-105 transition-transform"
                alt={recipe.title}
              />

              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-800">
                  {capitalizeTitle(recipe.title)}
                </h3>

                <p className="text-sm text-gray-500 mt-1">
                  By {recipe.createdBy?.fullName || "Unknown"}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
