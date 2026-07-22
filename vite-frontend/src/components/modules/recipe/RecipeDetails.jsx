// import React, { useEffect, useState } from "react";
// import {
//   Loader,
//   Title,
//   Image,
//   Text,
//   Paper,
//   Group,
//   Avatar,
//   Badge,
//   Divider,
//   Alert,
//   Stack,
//   Checkbox,
//   Box,
// } from "@mantine/core";
// import axios from "axios";
// import { useParams } from "react-router-dom";
// import { IconAlertCircle, IconChefHat, IconListCheck, IconBook } from "@tabler/icons-react";
// import { FooterLinks } from "../../partials/footer/FooterLinks";
// import { NavbarMantine } from "../../partials/navbar/NavbarMantine";

// export const RecipeDetails = () => {
//   const { id } = useParams();
//   const [recipe, setRecipe] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   const capitalizeTitle = (title) =>
//     title ? title.replace(/\b\w/g, (char) => char.toUpperCase()) : "";

//   const fetchRecipe = async () => {
//     try {
//       setLoading(true);
//       setError(null);
//       const res = await axios.get(`http://localhost:8083/recipe/${id}`);
//       setRecipe(res.data.data);
//     } catch (err) {
//       setError(err.response?.data?.message || "Failed to load recipe details.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchRecipe();
//   }, [id]);

//   if (loading) {
//     return (
//       <div className="flex flex-col min-h-screen bg-gray-50">
//         <header className="sticky top-0 z-50">
//           <NavbarMantine />
//         </header>
//         <div className="flex-1 flex flex-col justify-center items-center py-20">
//           <Loader color="red" size="lg" />
//           <Text size="sm" c="dimmed" mt="md">
//             Fetching recipe details...
//           </Text>
//         </div>
//         <FooterLinks />
//       </div>
//     );
//   }

//   if (error || !recipe) {
//     return (
//       <div className="flex flex-col min-h-screen bg-gray-50">
//         <header className="sticky top-0 z-50">
//           <NavbarMantine />
//         </header>
//         <main className="flex-1 max-w-2xl mx-auto px-4 py-16 w-full">
//           <Alert
//             icon={<IconAlertCircle size={20} />}
//             title="Error Loading Recipe"
//             color="red"
//             radius="md"
//           >
//             {error || "Recipe not found."}
//           </Alert>
//         </main>
//         <FooterLinks />
//       </div>
//     );
//   }

//   // Parse ingredients into array items if delimited by commas or newlines
//   const ingredientList = recipe.ingredients
//     ? recipe.ingredients.split(/,|\n/).map((item) => item.trim()).filter(Boolean)
//     : [];

//   // Parse instructions into individual steps if delimited by period or newlines
//   const instructionSteps = recipe.instructions
//     ? recipe.instructions.split(/(?<=\.)\s+|\n/).filter(Boolean)
//     : [];

//   const imageUrl = recipe.image?.startsWith("http")
//     ? recipe.image
//     : `http://localhost:8083/file/${recipe.image}`;

//   return (
//     <div className="flex flex-col min-h-screen bg-gray-50">
//       {/* Navbar */}
//       <header className="sticky top-0 left-0 w-full z-50 shadow-sm">
//         <NavbarMantine />
//       </header>

//       {/* Main Content Area */}
//       <main className="flex-1 max-w-5xl w-full mx-auto px-4 py-8 md:py-12">
//         <Paper radius="xl" withBorder className="overflow-hidden shadow-md bg-white">
//           {/* Hero Banner Section */}
//           <div className="grid grid-cols-1 md:grid-cols-12 gap-0">
//             {/* Image Container */}
//             <div className="md:col-span-6 relative h-64 md:h-auto min-h-[300px]">
//               <Image
//                 src={imageUrl}
//                 alt={recipe.title}
//                 fallbackSrc="https://placehold.co/600x400?text=Recipe+Image"
//                 className="w-full h-full object-cover"
//               />
//               <Badge
//                 color="red"
//                 variant="filled"
//                 size="lg"
//                 className="absolute top-4 left-4 shadow-md"
//               >
//                 Featured Dish
//               </Badge>
//             </div>

//             {/* Header Meta Content */}
//             <div className="md:col-span-6 p-6 md:p-10 flex flex-col justify-center">
//               <Group gap="xs" mb="xs">
//                 <Avatar color="red" radius="xl" size="md">
//                   {(recipe.createdBy?.fullName || "U").charAt(0).toUpperCase()}
//                 </Avatar>
//                 <Box>
//                   <Text size="sm" fw={600} className="text-gray-900 leading-tight">
//                     {recipe.createdBy?.fullName || "Unknown Chef"}
//                   </Text>
//                   <Text size="xs" c="dimmed">
//                     Recipe Author
//                   </Text>
//                 </Box>
//               </Group>

//               <Title order={1} className="text-2xl md:text-3xl font-extrabold text-gray-900 mt-2 mb-4">
//                 {capitalizeTitle(recipe.title)}
//               </Title>

//               <Group gap="sm">
//                 <Badge variant="light" color="gray" leftSection={<IconChefHat size={14} />}>
//                   Easy Prep
//                 </Badge>
//                 <Badge variant="light" color="red">
//                   Community Favorite
//                 </Badge>
//               </Group>
//             </div>
//           </div>

//           <Divider />

//           {/* Details Grid (Ingredients & Instructions) */}
//           <div className="p-6 md:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8">
//             {/* Left Column: Interactive Ingredients Checklist */}
//             <div className="lg:col-span-5 bg-gray-50/80 p-6 rounded-2xl border border-gray-100">
//               <Group gap="xs" mb="md">
//                 <IconListCheck size={22} className="text-red-600" />
//                 <Title order={3} size="h4" className="text-gray-900 font-bold">
//                   Ingredients
//                 </Title>
//               </Group>

//               <Stack gap="sm">
//                 {ingredientList.length > 0 ? (
//                   ingredientList.map((item, idx) => (
//                     <Checkbox
//                       key={idx}
//                       label={item}
//                       color="red"
//                       size="sm"
//                       className="cursor-pointer"
//                     />
//                   ))
//                 ) : (
//                   <Text size="sm" c="dimmed">
//                     {recipe.ingredients}
//                   </Text>
//                 )}
//               </Stack>
//             </div>

//             {/* Right Column: Numbered Instruction Steps */}
//             <div className="lg:col-span-7">
//               <Group gap="xs" mb="md">
//                 <IconBook size={22} className="text-red-600" />
//                 <Title order={3} size="h4" className="text-gray-900 font-bold">
//                   Cooking Instructions
//                 </Title>
//               </Group>

//               <Stack gap="md">
//                 {instructionSteps.length > 0 ? (
//                   instructionSteps.map((step, idx) => (
//                     <Paper key={idx} p="md" radius="md" withBorder className="bg-white border-gray-200">
//                       <Group align="flex-start" gap="sm" wrap="nowrap">
//                         <span className="flex items-center justify-center min-w-[28px] h-7 rounded-full bg-red-100 text-red-700 font-bold text-xs shrink-0">
//                           {idx + 1}
//                         </span>
//                         <Text size="sm" className="text-gray-800 leading-relaxed pt-0.5">
//                           {step}
//                         </Text>
//                       </Group>
//                     </Paper>
//                   ))
//                 ) : (
//                   <Text size="sm" className="text-gray-700 leading-relaxed whitespace-pre-line">
//                     {recipe.instructions}
//                   </Text>
//                 )}
//               </Stack>
//             </div>
//           </div>
//         </Paper>
//       </main>

//       {/* Footer */}
//       <FooterLinks />
//     </div>
//   );
// };

import { useEffect, useState } from "react";
import {
  Loader,
  Title,
  Image,
  Text,
  Paper,
  Group,
  Avatar,
  Badge,
  Divider,
  Alert,
  Stack,
  Checkbox,
  Box,
} from "@mantine/core";
import axios from "axios";
import { useParams } from "react-router-dom";
import {
  IconAlertCircle,
  IconChefHat,
  IconListCheck,
  IconBook,
} from "@tabler/icons-react";
import { FooterLinks } from "../../partials/footer/FooterLinks";
import { NavbarMantine } from "../../partials/navbar/NavbarMantine";

// Import Local Mock Data Images
import ChickenCurry from "../../../assets/images/ChickenCurry.jpg";
import ChickenPizza from "../../../assets/images/ChickenPizza2.jpg";
import ChocolateMuffin from "../../../assets/images/chocolate muffin.jpeg";
import MilkTea from "../../../assets/images/Hot_Milk_Tea.jpg";
import ItalianPasta from "../../../assets/images/spaghetti-carbonara.jpg";
import EggCurry from "../../../assets/images/egg curry.jpg";
import PaneerCurry from "../../../assets/images/paneer-curry.jpg";
import ChickenChowmein from "../../../assets/images/ChickenChowmein.jpg";
import FriedRice from "../../../assets/images/FriedRice.jpg";
import CreamyGarlicChicken from "../../../assets/images/Garlic-Parmesan-Chicken.jpg";
import ChocolateLavaCake from "../../../assets/images/Molten-chocolate-lava-cake.jpg";

// Static Recipes Array
const STATIC_RECIPES = [
  {
    id: "1",
    title: "Chocolate Lava Cake",
    ingredients: "Semisweet chocolate, Unsalted butter, Eggs, Egg yolks, Sugar, Flour, Salt.",
    instructions: "Melt chocolate and butter. Whisk eggs, yolks, and sugar. Fold egg mixture into chocolate. Gently fold in flour. Bake at 450°F for 8-10 minutes. Serve hot.",
    fullName: "Sofiya Doe",
    createdBy: "sofiya",
    image: ChocolateLavaCake,
  },
  {
    id: "2",
    title: "Paneer Curry",
    ingredients: "Paneer, Onions, Tomatoes, Ginger-Garlic Paste, Spices, Fresh Cream, Cilantro.",
    instructions: "Saute onions, ginger-garlic paste, and chilies. Add tomatoes and spices. Cook until oil separates. Add paneer cubes and water, then simmer.",
    fullName: "Siya Doe",
    createdBy: "siya",
    image: PaneerCurry,
  },
  {
    id: "3",
    title: "Pasta Carbonara",
    ingredients: "Spaghetti, Eggs, Parmesan cheese, Pancetta/Bacon, Garlic, Black Pepper.",
    instructions: "Cook pasta. Whisk eggs and Parmesan. Cook pancetta until crispy with garlic. Combine hot pasta with egg mixture off-heat, stir quickly, and season.",
    fullName: "Siya Doe",
    createdBy: "siya",
    image: ItalianPasta,
  },
  {
    id: "4",
    title: "Creamy Garlic Parmesan Chicken",
    ingredients: "Chicken breasts, Garlic, Heavy cream, Parmesan cheese, Parsley, Breadcrumbs.",
    instructions: "Brown chicken breasts in oil. Prepare cream, garlic, and Parmesan sauce in the same skillet. Return chicken to pan and simmer until coated.",
    fullName: "John Doe",
    createdBy: "john",
    image: CreamyGarlicChicken,
  },
  {
    id: "5",
    title: "Spicy Chicken Curry",
    ingredients: "Chicken, Onions, Tomatoes, Ginger, Garlic, Curry Powder, Garam Masala, Yogurt.",
    instructions: "Marinate chicken with spices and yogurt. Saute onions, garlic, and ginger until golden. Add tomatoes and marinated chicken, cover and cook until tender.",
    fullName: "Alex Smith",
    createdBy: "alex",
    image: ChickenCurry,
  },
  {
    id: "6",
    title: "Cheesy Chicken Pizza",
    ingredients: "Pizza dough, Shredded chicken, Mozzarella cheese, Marinara sauce, Bell peppers, Red onion.",
    instructions: "Roll out pizza dough. Spread marinara sauce evenly. Top with shredded chicken, veggies, and mozzarella cheese. Bake at 425°F for 15-20 minutes until crust is golden.",
    fullName: "Sofiya Doe",
    createdBy: "sofiya",
    image: ChickenPizza,
  },
  {
    id: "7",
    title: "Double Chocolate Muffin",
    ingredients: "Flour, Cocoa powder, Chocolate chips, Sugar, Milk, Eggs, Butter, Baking powder.",
    instructions: "Mix dry ingredients together. Whisk eggs, milk, and melted butter separately. Combine wet and dry ingredients, fold in chocolate chips, and bake at 375°F for 18 minutes.",
    fullName: "Emma Watson",
    createdBy: "emma",
    image: ChocolateMuffin,
  },
  {
    id: "8",
    title: "Masala Milk Tea",
    ingredients: "Black tea leaves, Milk, Water, Cardamom, Ginger, Cloves, Sugar.",
    instructions: "Boil water with crushed cardamom and ginger. Add tea leaves and let steep. Add milk and sugar, bring to a boil twice, then strain into tea cups.",
    fullName: "Siya Doe",
    createdBy: "siya",
    image: MilkTea,
  },
  {
    id: "9",
    title: "Egg Curry Special",
    ingredients: "Boiled eggs, Onions, Tomato puree, Garlic-ginger paste, Turmeric, Cumin, Garam masala.",
    instructions: "Lightly fry boiled eggs until golden. Prepare onion-tomato gravy with aromatic spices. Simmer fried eggs in the gravy for 10 minutes.",
    fullName: "John Doe",
    createdBy: "john",
    image: EggCurry,
  },
  {
    id: "10",
    title: "Chicken Chowmein",
    ingredients: "Egg noodles, Chicken strips, Soy sauce, Vinegar, Cabbage, Carrots, Bell peppers, Garlic.",
    instructions: "Boil noodles and stir-fry chicken strips. Saute chopped vegetables over high heat. Toss noodles, chicken, and vegetables with soy sauce and vinegar.",
    fullName: "Alex Smith",
    createdBy: "alex",
    image: ChickenChowmein,
  },
  {
    id: "11",
    title: "Classic Fried Rice",
    ingredients: "Cooked rice, Peas, Carrots, Eggs, Soy sauce, Green onions, Sesame oil, Garlic.",
    instructions: "Scramble eggs and set aside. Saute garlic and vegetables. Add cold cooked rice, soy sauce, and scrambled eggs. Stir-fry over high heat for 5 minutes.",
    fullName: "Emma Watson",
    createdBy: "emma",
    image: FriedRice,
  },
];

export const RecipeDetails = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const capitalizeTitle = (title) =>
    title ? title.replace(/\b\w/g, (char) => char.toUpperCase()) : "";

  const loadRecipeData = async () => {
    try {
      setLoading(true);
      setError(null);

      // 1. Check if ID matches local static recipes first
      const localMatch = STATIC_RECIPES.find(
        (item) => String(item.id) === String(id)
      );

      if (localMatch) {
        setRecipe(localMatch);
        return;
      }

      // 2. Fetch from API if not found locally
      const res = await axios.get(`http://localhost:8083/recipe/${id}`);
      setRecipe(res.data.data);
    } catch (err) {
      setError(err.response?.data?.message || "Failed to load recipe details.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadRecipeData();
  }, [id]);

  if (loading) {
    return (
      <div className="flex flex-col min-h-screen bg-gray-50">
        <header className="sticky top-0 z-50">
          <NavbarMantine />
        </header>
        <div className="flex-1 flex flex-col justify-center items-center py-20">
          <Loader color="red" size="lg" />
          <Text size="sm" c="dimmed" mt="md">
            Fetching recipe details...
          </Text>
        </div>
        <FooterLinks />
      </div>
    );
  }

  if (error || !recipe) {
    return (
      <div className="flex flex-col min-h-screen bg-gray-50">
        <header className="sticky top-0 z-50">
          <NavbarMantine />
        </header>
        <main className="flex-1 max-w-2xl mx-auto px-4 py-16 w-full">
          <Alert
            icon={<IconAlertCircle size={20} />}
            title="Error Loading Recipe"
            color="red"
            radius="md"
          >
            {error || "Recipe not found."}
          </Alert>
        </main>
        <FooterLinks />
      </div>
    );
  }

  // Parse ingredients into array items if delimited by commas or newlines
  const ingredientList = recipe.ingredients
    ? recipe.ingredients.split(/,|\n/).map((item) => item.trim()).filter(Boolean)
    : [];

  // Parse instructions into individual steps if delimited by period or newlines
  const instructionSteps = recipe.instructions
    ? recipe.instructions.split(/(?<=\.)\s+|\n/).filter(Boolean)
    : [];

  // Resolve dynamic vs static image source safely
  // const imageUrl =
  //   typeof recipe.image === "string"
  //     ? recipe.image.startsWith("http")
  //       ? recipe.image
  //       : `http://localhost:8083/file/${recipe.image}`
  //     : recipe.image;

  // Resolve author name across static object and API user object
  const authorName =
    typeof recipe.createdBy === "object"
      ? recipe.createdBy?.fullName
      : recipe.fullName || recipe.createdBy || "Unknown Chef";

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Navbar */}
      <header className="sticky top-0 left-0 w-full z-50 shadow-sm">
        <NavbarMantine />
      </header>

      {/* Main Content Area */}
      <main className="flex-1 max-w-5xl w-full mx-auto px-4 py-8 md:py-12">
        <Paper radius="md" withBorder className="overflow-hidden shadow-md bg-white">
          {/* Hero Banner Section */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-0">
            {/* Image Container */}
            <div className="md:col-span-6 relative h-64 md:h-auto min-h-[300px]">
              <Image
                src={recipe.image}
                alt={recipe.title}
                fallbackSrc="https://placehold.co/600x400?text=Recipe+Image"
                className="w-full h-full object-cover"
              />
              <Badge
                color="red"
                variant="filled"
                size="lg"
                className="absolute top-4 left-4 shadow-md"
              >
                Featured Dish
              </Badge>
            </div>

            {/* Header Meta Content */}
            <div className="md:col-span-6 p-6 md:p-10 flex flex-col justify-center">
              <Group gap="xs" mb="xs">
                <Avatar color="red" radius="xl" size="md">
                  {authorName.charAt(0).toUpperCase()}
                </Avatar>
                <Box>
                  <Text size="sm" fw={600} className="text-gray-900 leading-tight">
                    {authorName}
                  </Text>
                  <Text size="xs" c="dimmed">
                    Recipe Author
                  </Text>
                </Box>
              </Group>

              <Title order={1} className="text-2xl md:text-3xl font-extrabold text-gray-900 mt-2 mb-4">
                {capitalizeTitle(recipe.title)}
              </Title>

              <Group gap="sm">
                <Badge variant="light" color="gray" leftSection={<IconChefHat size={14} />}>
                  Easy Prep
                </Badge>
                <Badge variant="light" color="red">
                  Community Favorite
                </Badge>
              </Group>
            </div>
          </div>

          <Divider />

          {/* Details Grid (Ingredients & Instructions) */}
          <div className="p-6 md:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Left Column: Interactive Ingredients Checklist */}
            <div className="lg:col-span-5 bg-gray-50/80 p-6 rounded-2xl border border-gray-100">
              <Group gap="xs" mb="md">
                <IconListCheck size={22} className="text-red-600" />
                <Title order={3} size="h4" className="text-gray-900 font-bold">
                  Ingredients
                </Title>
              </Group>

              <Stack gap="sm">
                {ingredientList.length > 0 ? (
                  ingredientList.map((item, idx) => (
                    <Checkbox
                      key={idx}
                      label={item}
                      color="red"
                      size="sm"
                      className="cursor-pointer"
                    />
                  ))
                ) : (
                  <Text size="sm" c="dimmed">
                    {recipe.ingredients}
                  </Text>
                )}
              </Stack>
            </div>

            {/* Right Column: Numbered Instruction Steps */}
            <div className="lg:col-span-7">
              <Group gap="xs" mb="md">
                <IconBook size={22} className="text-red-600" />
                <Title order={3} size="h4" className="text-gray-900 font-bold">
                  Cooking Instructions
                </Title>
              </Group>

              <Stack gap="md">
                {instructionSteps.length > 0 ? (
                  instructionSteps.map((step, idx) => (
                    <Paper key={idx} p="md" radius="md" withBorder className="bg-white border-gray-200">
                      <Group align="flex-start" gap="sm" wrap="nowrap">
                        <span className="flex items-center justify-center min-w-[28px] h-7 rounded-full bg-red-100 text-red-700 font-bold text-xs shrink-0">
                          {idx + 1}
                        </span>
                        <Text size="sm" className="text-gray-800 leading-relaxed pt-0.5">
                          {step}
                        </Text>
                      </Group>
                    </Paper>
                  ))
                ) : (
                  <Text size="sm" className="text-gray-700 leading-relaxed whitespace-pre-line">
                    {recipe.instructions}
                  </Text>
                )}
              </Stack>
            </div>
          </div>
        </Paper>
      </main>

      {/* Footer */}
      <FooterLinks />
    </div>
  );
};