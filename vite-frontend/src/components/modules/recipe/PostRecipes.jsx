import React, { useState, useEffect } from "react";
import {
  Container,
  Title,
  Stack,
  TextInput,
  Button,
  Text,
  Image,
  SimpleGrid,
  Card,
} from "@mantine/core";
import { Dropzone, IMAGE_MIME_TYPE } from "@mantine/dropzone";
import { PostRequest } from "../../../plugins/https";

export const PostRecipes = () => {
  const [recipe, setRecipe] = useState({
    title: "",
    ingredients: "",
    instructions: "",
    image: null,
    createdBy: "",
  });
  const [files, setFiles] = useState([]);
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("user"));
    if (token) {
      setUserId(token._id);
    } else {
      window.location.href = "/home"; // redirect to login/home
    }
  }, []);

  // Handle form input changes
  const handleRecipe = (event) => {
    const { name, value } = event.target;
    setRecipe((prev) => ({ ...prev, [name]: value }));
  };

  // Handle image drop
  const handleDrop = (acceptedFiles) => {
    setFiles(acceptedFiles);
    setRecipe((prev) => ({ ...prev, image: acceptedFiles[0] }));
  };

  // Convert recipe state to FormData
  const convertToFormData = () => {
    const formData = new FormData();
    formData.append("title", recipe.title);
    formData.append("ingredients", recipe.ingredients);
    formData.append("instructions", recipe.instructions);
    formData.append("createdBy", userId);
    if (recipe.image) formData.append("image", recipe.image);
    return formData;
  };

  // Submit recipe
  const addRecipe = async (event) => {
    event.preventDefault();

    if (
      !recipe.title ||
      !recipe.ingredients ||
      !recipe.instructions ||
      !userId
    ) {
      alert("All fields are required");
      return;
    }

    const formData = convertToFormData();

    try {
      const res = await PostRequest("/recipe", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      console.log("Response from server:", res);

      if (res.data && res.data.data) {
        // Reset form and previews after successful upload
        setRecipe({
          title: "",
          ingredients: "",
          instructions: "",
          image: null,
          createdBy: userId,
        });
        setFiles([]);
        alert("Recipe added successfully!");
      } else {
        console.error("Unexpected response structure:", res);
        alert("Unexpected response from server. Please try again.");
      }
    } catch (error) {
      console.error("Error adding recipe:", error);
      alert("Error adding recipe. Please try again.");
    }
  };

  // Generate previews for uploaded images
  const previews = files.map((file, index) => (
    <Image
      key={index}
      src={URL.createObjectURL(file)}
      alt={`Preview ${index + 1}`}
      onLoad={() => URL.revokeObjectURL(file)}
      height={200}
      className="rounded-lg shadow-md"
    />
  ));

  return (
    <section className="my-10">
      <Container
        size="sm"
        className="bg-white p-8 rounded-xl shadow-lg border border-gray-200"
      >
        <Title order={2} align="center" className="mb-6 text-red-600 font-bold">
          Add a New Recipe
        </Title>

        <form onSubmit={addRecipe}>
          <Stack spacing="lg">
            <TextInput
              label="Recipe Title"
              name="title"
              value={recipe.title}
              onChange={handleRecipe}
              placeholder="Enter title"
              required
            />

            <TextInput
              label="Ingredients"
              name="ingredients"
              value={recipe.ingredients}
              onChange={handleRecipe}
              placeholder="Enter ingredients"
              required
            />

            <TextInput
              label="Instructions"
              name="instructions"
              value={recipe.instructions}
              onChange={handleRecipe}
              placeholder="Enter instructions"
              required
            />

            {/* Drag & Drop Image */}
            <Card
              shadow="sm"
              padding="md"
              radius="md"
              withBorder
              className="mt-4"
            >
              <Dropzone
                accept={IMAGE_MIME_TYPE}
                onDrop={handleDrop}
                maxFiles={1}
                className="p-6 border-dashed border-2 border-gray-300 rounded-md hover:border-red-400 transition"
              >
                <Text align="center" className="text-gray-600">
                  Drag image here or click to select
                </Text>
              </Dropzone>

              {previews.length > 0 && (
                <SimpleGrid cols={1} mt="md">
                  {previews}
                </SimpleGrid>
              )}
            </Card>

            <Button
              type="submit"
              fullWidth
              variant="filled"
              className="bg-red-600 hover:bg-red-700"
            >
              Add Recipe
            </Button>
          </Stack>
        </form>
      </Container>
    </section>
  );
};
