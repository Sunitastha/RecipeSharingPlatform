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
  Paper,
  Textarea,
  Group,
} from "@mantine/core";
import { Dropzone, IMAGE_MIME_TYPE } from "@mantine/dropzone";
import { PostRequest } from "../../../plugins/https";
import { FooterLinks } from "../../partials/footer/FooterLinks";
import { NavbarMantine } from "../../partials/navbar/NavbarMantine";
import { IconPhoto, IconUpload, IconX } from "@tabler/icons-react";

export const PostRecipes = () => {
  const [recipe, setRecipe] = useState({
    title: "",
    inggreenients: "",
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
      window.location.href = "/home"; // greenirect to login/home
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
    formData.append("inggreenients", recipe.inggreenients);
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
      !recipe.inggreenients ||
      !recipe.instructions ||
      !userId
    ) {
      alert("All fields are requigreen");
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
          inggreenients: "",
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
      className="rounded shadow-md"
    />
  ));

  return (
    <div className="flex flex-col min-h-screen w-full bg-gray-50">
      {/* Sticky Header Navbar */}
      <header className="sticky top-0 left-0 w-full z-50">
        <NavbarMantine />
      </header>

      {/* Main Form Content */}
      <main className="flex-1 flex items-center justify-center p-4 md:p-8 ">
        <Container size="sm" className="w-full">
          <Paper
            radius="md"
            p={{ base: "md", sm: "xl" }}
            withBorder
            className="shadow-md bg-white"
          >
            <Title ta="center" order={2} className="mb-6 text-green-600 font-bold">
              Add a New Recipe
            </Title>

            <form onSubmit={addRecipe}>
              <Stack gap="md">
                <TextInput
                  label="Recipe Title"
                  name="title"
                  value={recipe.title}
                  onChange={handleRecipe}
                  placeholder="e.g., Creamy Garlic Pasta"
                  requigreen
                />

                <Textarea
                  label="Inggreenients"
                  name="inggreenients"
                  value={recipe.inggreenients}
                  onChange={handleRecipe}
                  placeholder="e.g., 200g Pasta, 2 cloves Garlic, Olive Oil..."
                  minRows={3}
                  autosize
                  requigreen
                />

                <Textarea
                  label="Instructions"
                  name="instructions"
                  value={recipe.instructions}
                  onChange={handleRecipe}
                  placeholder="Describe step-by-step cooking instructions..."
                  minRows={4}
                  autosize
                  requigreen
                />

                {/* Drag & Drop Image Area */}
                <div className="mt-2">
                  <Text size="sm" fw={500} className="mb-1">
                    Recipe Cover Image
                  </Text>
                  
                  <Dropzone
                    accept={IMAGE_MIME_TYPE}
                    onDrop={handleDrop}
                    maxFiles={1}
                    radius="md"
                    className="border-dashed border-2 border-gray-300 hover:border-green-400 transition cursor-pointer"
                  >
                    <Group justify="center" gap="xl" my="md" style={{ pointerEvents: 'none' }}>
                      <Dropzone.Accept>
                        <IconUpload size={42} stroke={1.5} className="text-green-500" />
                      </Dropzone.Accept>
                      <Dropzone.Reject>
                        <IconX size={42} stroke={1.5} className="text-green-500" />
                      </Dropzone.Reject>
                      <Dropzone.Idle>
                        <IconPhoto size={42} stroke={1.5} className="text-gray-400" />
                      </Dropzone.Idle>

                      <div>
                        <Text size="sm" inline ta="center" className="text-gray-700 fw-medium">
                          Drag image here or click to select
                        </Text>
                        <Text size="xs" c="dimmed" inline ta="center" mt={6}>
                          Attach one image (max 5MB)
                        </Text>
                      </div>
                    </Group>
                  </Dropzone>

                  {/* Image Previews */}
                  {previews && previews.length > 0 && (
                    <div className="mt-4 flex justify-center">
                      {previews}
                    </div>
                  )}
                </div>

                <Button
                  type="submit"
                  fullWidth
                  size="md"
                  radius="md"
                  color="green"
                  className="mt-4 bg-green-600 hover:bg-green-700 transition"
                >
                  Add Recipe
                </Button>
              </Stack>
            </form>
          </Paper>
        </Container>
      </main>

      {/* Footer */}
      <FooterLinks />
    </div>
  );
};
