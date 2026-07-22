import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import {
  Avatar,
  Badge,
  Box,
  Button,
  Paper,
  Text,
  Title,
  Image,
  Group,
  Stack,
  Divider,
} from "@mantine/core";
import {
  IconMail,
  IconPhone,
  IconUser,
  IconLock,
  IconChefHat,
  IconArrowRight,
} from "@tabler/icons-react";
import AppLoader from "../../partials/AppLoader";

export const Profile = () => {
  const [userDetails, setUserDetails] = useState({});
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const capitalizeTitle = (title) =>
    title ? title.replace(/\b\w/g, (char) => char.toUpperCase()) : "";

  const getInitials = (fullName) => {
    if (!fullName) return "U";
    return fullName
      .split(" ")
      .map((part) => part.charAt(0).toUpperCase())
      .join("")
      .slice(0, 2);
  };

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
          setRecipes(response.data.data || []);
        } catch (err) {
          console.error("Error fetching recipes:", err);
          setError("Failed to load your recipes.");
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
      <div className="flex h-screen justify-center items-center bg-gray-50">
        <AppLoader />
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex h-screen justify-center items-center bg-gray-50 text-red-600 font-medium">
        {error}
      </div>
    );
  }

  return (
    <div className="flex flex-col bg-gray-50 min-h-screen py-10 px-4 sm:px-6 lg:px-8 mt-10">
      <div className="max-w-7xl mx-auto w-full flex flex-col lg:flex-row gap-8">
        
        {/* LEFT COLUMN: PROFILE CARD */}
        <Paper
          radius="md"
          p="xl"
          withBorder
          className="w-full lg:w-1/3 bg-white shadow-sm border-gray-200 flex flex-col items-center h-fit"
        >
          {/* Avatar & Header */}
          <Avatar
            color="red"
            radius="xl"
            size={110}
            className="shadow-md font-bold text-2xl border-4 border-red-50"
          >
            {getInitials(userDetails.fullName)}
          </Avatar>

          <Title order={2} className="text-xl font-bold text-gray-900 mt-4 text-center">
            {userDetails.fullName || "User Profile"}
          </Title>
          <Text size="sm" c="dimmed" className="mb-4">
            @{userDetails.username || "username"}
          </Text>

          <Badge color="red" variant="light" radius="xl" size="sm" mb="lg">
            Recipe Creator
          </Badge>

          <Divider className="w-full my-2" />

          {/* User Meta Information Grid */}
          <Stack gap="xs" className="w-full mt-4">
            <Paper p="xs" radius="md" bg="gray.0" className="border border-gray-100">
              <Group gap="xs">
                <IconUser size={18} className="text-red-500" />
                <Box>
                  <Text size="xs" c="dimmed" fw={600} tt="uppercase">
                    Gender
                  </Text>
                  <Text size="sm" fw={600} className="text-gray-800 capitalize">
                    {userDetails.gender || "Not specified"}
                  </Text>
                </Box>
              </Group>
            </Paper>

            <Paper p="xs" radius="md" bg="gray.0" className="border border-gray-100">
              <Group gap="xs">
                <IconPhone size={18} className="text-red-500" />
                <Box>
                  <Text size="xs" c="dimmed" fw={600} tt="uppercase">
                    Phone
                  </Text>
                  <Text size="sm" fw={600} className="text-gray-800">
                    {userDetails.phone || "N/A"}
                  </Text>
                </Box>
              </Group>
            </Paper>

            <Paper p="xs" radius="md" bg="gray.0" className="border border-gray-100">
              <Group gap="xs">
                <IconMail size={18} className="text-red-500" />
                <Box className="overflow-hidden">
                  <Text size="xs" c="dimmed" fw={600} tt="uppercase">
                    Email
                  </Text>
                  <Text size="sm" fw={600} className="text-gray-800 truncate">
                    {userDetails.email || "N/A"}
                  </Text>
                </Box>
              </Group>
            </Paper>
          </Stack>

          {/* Action Button */}
          <Button
            component={Link}
            to="/change-password"
            color="red"
            variant="light"
            fullWidth
            radius="md"
            mt="xl"
            leftSection={<IconLock size={16} />}
            className="font-semibold"
          >
            Change Password
          </Button>
        </Paper>

        {/* RIGHT COLUMN: USER'S RECIPES */}
        <Paper
          radius="md"
          p={{ base: "md", sm: "xl" }}
          withBorder
          className="flex-1 bg-white shadow-sm border-gray-200"
        >
          <Group justify="space-between" align="center" mb="xl">
            <Group gap="xs">
              <IconChefHat size={28} className="text-red-600" />
              <Title order={2} className="text-2xl font-extrabold text-gray-900">
                My Recipes
              </Title>
            </Group>
            <Badge color="gray" variant="subtle" size="lg" radius="xl">
              {recipes.length} {recipes.length === 1 ? "Recipe" : "Recipes"}
            </Badge>
          </Group>

          {/* Recipe Grid */}
          {recipes.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {recipes.map((recipe) => {
                const imageUrl = recipe.image?.startsWith("http")
                  ? recipe.image
                  : `http://localhost:8083/file/${recipe.image}`;

                return (
                  <Paper
                    key={recipe._id}
                    radius="lg"
                    withBorder
                    className="overflow-hidden shadow-xs hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer group bg-white border-gray-200 flex flex-col justify-between"
                    onClick={() => navigate(`/recipe/${recipe._id}`)}
                  >
                    <div>
                      {/* Recipe Image Banner */}
                      <div className="relative h-44 overflow-hidden">
                        <Image
                          src={imageUrl}
                          alt={recipe.title}
                          fallbackSrc="https://placehold.co/600x400?text=Recipe+Image"
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
                        <Badge
                          color="red"
                          variant="filled"
                          size="xs"
                          radius="xl"
                          className="absolute top-3 left-3 shadow-sm font-bold uppercase"
                        >
                          My Creation
                        </Badge>
                      </div>

                      {/* Content */}
                      <Box p="md">
                        <Title
                          order={3}
                          className="text-gray-900 text-base font-bold line-clamp-1 group-hover:text-red-600 transition-colors"
                        >
                          {capitalizeTitle(recipe.title)}
                        </Title>
                        {recipe.ingredients && (
                          <Text size="xs" c="dimmed" className="line-clamp-2 mt-1">
                            {recipe.ingredients}
                          </Text>
                        )}
                      </Box>
                    </div>

                    {/* Footer link */}
                    <Box px="md" pb="md" pt="0">
                      <Divider my="xs" color="gray.1" />
                      <Group justify="space-between" align="center">
                        <Text size="xs" fw={600} color="red" className="flex items-center gap-1">
                          View Details <IconArrowRight size={14} />
                        </Text>
                      </Group>
                    </Box>
                  </Paper>
                );
              })}
            </div>
          ) : (
            <Paper p="xl" radius="lg" bg="gray.0" className="flex text-center justify-center border border-dashed border-gray-300 my-8">
              <IconChefHat size={48} className="mx-auto text-gray-400 mb-2" />
              <Text fw={600} className="text-gray-700">
                No recipes posted yet
                
                <p className="text-gray-400">Share your delicious culinary creations with the community!</p>
              </Text>
              
            </Paper>
          )}
        </Paper>

      </div>
    </div>
  );
};

export default Profile;