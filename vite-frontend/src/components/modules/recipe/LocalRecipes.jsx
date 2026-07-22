import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Alert,
  Button,
  Card,
  Collapse,
  Loader,
  TextInput,
  Title,
  Image,
  Text,
  Badge,
  Group,
  Avatar,
  ActionIcon,
  Stack,
  Divider,
  Paper,
  Box,
} from "@mantine/core";
import {
  IconSearch,
  IconSend,
  IconHeart,
  IconHeartFilled,
  IconMessageCircle,
  IconBookmark,
  IconBookmarkFilled,
  IconChevronDown,
  IconChevronUp,
  IconClock,
} from "@tabler/icons-react";

// Image Imports
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

export const LocalRecipes = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [expandedInstructions, setExpandedInstructions] = useState({});
  const [expandedComments, setExpandedComments] = useState({});
  const [likes, setLikes] = useState({});
  const [comments, setComments] = useState({});
  const [newComments, setNewComments] = useState({});
  const [searchQuery, setSearchQuery] = useState("");
  const [favourites, setFavourites] = useState({});

  const [localRecipes] = useState([
    {
      id: "1",
      title: "Chocolate Lava Cake",
      ingredients:
        "Semisweet chocolate, Unsalted butter, Eggs, Egg yolks, Sugar, Flour, Salt.",
      instructions:
        "Melt chocolate and butter. Whisk eggs, yolks, and sugar. Fold egg mixture into chocolate. Gently fold in flour. Bake at 450°F for 8-10 minutes. Serve hot.",
      createdBy: "sofiya",
      fullName: "Sofiya Doe",
      email: "sofiya@gmail.com",
      image: ChocolateLavaCake,
      createdAt: "2024-05-13",
    },
    {
      id: "2",
      title: "Paneer Curry",
      ingredients:
        "Paneer, Onions, Tomatoes, Ginger-Garlic Paste, Spices, Fresh Cream, Cilantro.",
      instructions:
        "Saute onions, ginger-garlic paste, and chilies. Add tomatoes and spices. Cook until oil separates. Add paneer cubes and water, then simmer.",
      createdBy: "siya",
      fullName: "Siya Doe",
      email: "siya@gmail.com",
      image: PaneerCurry,
      createdAt: "2024-06-12",
    },
    {
      id: "3",
      title: "Pasta Carbonara",
      ingredients:
        "Spaghetti, Eggs, Parmesan cheese, Pancetta/Bacon, Garlic, Black Pepper.",
      instructions:
        "Cook pasta. Whisk eggs and Parmesan. Cook pancetta until crispy with garlic. Combine hot pasta with egg mixture off-heat, stir quickly, and season.",
      createdBy: "siya",
      fullName: "Siya Doe",
      email: "siya@gmail.com",
      image: ItalianPasta,
      createdAt: "2023-06-12",
    },
    {
      id: "4",
      title: "Creamy Garlic Parmesan Chicken",
      ingredients:
        "Chicken breasts, Garlic, Heavy cream, Parmesan cheese, Parsley, Breadcrumbs.",
      instructions:
        "Brown chicken breasts in oil. Prepare cream, garlic, and Parmesan sauce in the same skillet. Return chicken to pan and simmer until coated.",
      createdBy: "john",
      fullName: "John Doe",
      email: "john@gmail.com",
      image: CreamyGarlicChicken,
      createdAt: "2024-04-10",
    },
    {
      id: "5",
      title: "Spicy Chicken Curry",
      ingredients:
        "Chicken, Onions, Tomatoes, Ginger, Garlic, Curry Powder, Garam Masala, Yogurt.",
      instructions:
        "Marinate chicken with spices and yogurt. Saute onions, garlic, and ginger until golden. Add tomatoes and marinated chicken, cover and cook until tender.",
      createdBy: "alex",
      fullName: "Alex Smith",
      email: "alex@gmail.com",
      image: ChickenCurry,
      createdAt: "2024-03-22",
    },
    {
      id: "6",
      title: "Cheesy Chicken Pizza",
      ingredients:
        "Pizza dough, Shredded chicken, Mozzarella cheese, Marinara sauce, Bell peppers, Red onion.",
      instructions:
        "Roll out pizza dough. Spread marinara sauce evenly. Top with shredded chicken, veggies, and mozzarella cheese. Bake at 425°F for 15-20 minutes until crust is golden.",
      createdBy: "sofiya",
      fullName: "Sofiya Doe",
      email: "sofiya@gmail.com",
      image: ChickenPizza,
      createdAt: "2024-02-18",
    },
    {
      id: "7",
      title: "Double Chocolate Muffin",
      ingredients:
        "Flour, Cocoa powder, Chocolate chips, Sugar, Milk, Eggs, Butter, Baking powder.",
      instructions:
        "Mix dry ingredients together. Whisk eggs, milk, and melted butter separately. Combine wet and dry ingredients, fold in chocolate chips, and bake at 375°F for 18 minutes.",
      createdBy: "emma",
      fullName: "Emma Watson",
      email: "emma@gmail.com",
      image: ChocolateMuffin,
      createdAt: "2024-01-05",
    },
    {
      id: "8",
      title: "Masala Milk Tea",
      ingredients:
        "Black tea leaves, Milk, Water, Cardamom, Ginger, Cloves, Sugar.",
      instructions:
        "Boil water with crushed cardamom and ginger. Add tea leaves and let steep. Add milk and sugar, bring to a boil twice, then strain into tea cups.",
      createdBy: "siya",
      fullName: "Siya Doe",
      email: "siya@gmail.com",
      image: MilkTea,
      createdAt: "2024-05-01",
    },
    {
      id: "9",
      title: "Egg Curry Special",
      ingredients:
        "Boiled eggs, Onions, Tomato puree, Garlic-ginger paste, Turmeric, Cumin, Garam masala.",
      instructions:
        "Lightly fry boiled eggs until golden. Prepare onion-tomato gravy with aromatic spices. Simmer fried eggs in the gravy for 10 minutes.",
      createdBy: "john",
      fullName: "John Doe",
      email: "john@gmail.com",
      image: EggCurry,
      createdAt: "2023-11-14",
    },
    {
      id: "10",
      title: "Chicken Chowmein",
      ingredients:
        "Egg noodles, Chicken strips, Soy sauce, Vinegar, Cabbage, Carrots, Bell peppers, Garlic.",
      instructions:
        "Boil noodles and stir-fry chicken strips. Saute chopped vegetables over high heat. Toss noodles, chicken, and vegetables with soy sauce and vinegar.",
      createdBy: "alex",
      fullName: "Alex Smith",
      email: "alex@gmail.com",
      image: ChickenChowmein,
      createdAt: "2023-12-09",
    },
    {
      id: "11",
      title: "Classic Fried Rice",
      ingredients:
        "Cooked rice, Peas, Carrots, Eggs, Soy sauce, Green onions, Sesame oil, Garlic.",
      instructions:
        "Scramble eggs and set aside. Saute garlic and vegetables. Add cold cooked rice, soy sauce, and scrambled eggs. Stir-fry over high heat for 5 minutes.",
      createdBy: "emma",
      fullName: "Emma Watson",
      email: "emma@gmail.com",
      image: FriedRice,
      createdAt: "2024-04-02",
    },
  ]);

  const toggleExpandInstructions = (index) => {
    setExpandedInstructions((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  const toggleExpandComments = (index) => {
    setExpandedComments((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  const handleLike = (index) => {
    setLikes((prev) => ({
      ...prev,
      [index]: {
        count: (prev[index]?.count || 100) + (prev[index]?.isLiked ? -1 : 1),
        isLiked: !prev[index]?.isLiked,
      },
    }));
  };

  const handleFavourite = (index) => {
    setFavourites((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  const handleCommentChange = (index, value) => {
    setNewComments((prev) => ({ ...prev, [index]: value }));
  };

  const handleCommentSubmit = (index) => {
    if (!newComments[index]?.trim()) return;
    setComments((prev) => ({
      ...prev,
      [index]: [...(prev[index] || []), newComments[index]],
    }));
    setNewComments((prev) => ({ ...prev, [index]: "" }));
  };

  const handleRecipeClick = (id) => {
    navigate(`/recipes/${id}`);
  };

  const filteredRecipes = localRecipes.filter((recipe) => {
    const titleLowerCase = recipe.title.toLowerCase();
    const searchWords = searchQuery.toLowerCase().split(" ");
    return searchWords.some((word) => titleLowerCase.includes(word));
  });

  return (
    <div className="max-w-full mx-auto px-4 py-8">
      {/* Search Header Section */}
      <Paper
        radius="md"
        p="xl"
        className="bg-gradient-to-r from-red-50 to-orange-50 border border-red-100 my-10 shadow-sm"
      >
        <Stack align="center" gap="xs">
          <Title
            order={1}
            className="text-gray-900 font-extrabold tracking-tight text-center"
          >
            Explore <span className="text-red-600">Local Recipes</span>
          </Title>
          <Text c="dimmed" size="sm" className="text-center max-w-md">
            Discover community-shared dishes, step-by-step guides, and culinary
            inspiration.
          </Text>

          <div className="w-full max-w-xl mt-4">
            <TextInput
              placeholder="Search by recipe name or ingredient..."
              size="md"
              radius="xl"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              leftSection={<IconSearch size={20} className="text-gray-400" />}
              rightSection={
                <Button
                  color="red"
                  radius="xl"
                  size="xs"
                  className="mr-1 bg-red-600 hover:bg-red-700"
                >
                  Search
                </Button>
              }
            />
          </div>
        </Stack>
      </Paper>

      {/* Grid Content */}
      {loading && (
        <div className="flex justify-center my-12">
          <Loader color="red" size="lg" />
        </div>
      )}

      {error && (
        <Alert color="red" title="Error Loading Recipes">
          {error}
        </Alert>
      )}

      {!loading && !error && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredRecipes.map((recipe, index) => {
            const isLiked = likes[index]?.isLiked;
            const likeCount = likes[index]?.count || 100;
            const isFav = favourites[index];
            const recipeComments = comments[index] || [];

           return (
  <Card
    key={recipe.id || index}
    padding="0"
    radius="md"
    withBorder
    className="hover:-translate-y-1.5 hover:shadow-xl transition-all duration-300 flex flex-col justify-between bg-white border-gray-100 overflow-hidden group w-100 h-70"
  >
    <div>
      {/* Card Header & Floating Overlay Actions */}
      <div
        className="relative overflow-hidden cursor-pointer"
        onClick={() => handleRecipeClick(recipe.id)}
      >
        <div className="h-80">
<Image
  src={recipe.image}
  alt={recipe.title || "Recipe Image"}
  fallbackSrc="https://placehold.co/600x400?text=Food+Image"
  className="w-full h-full group-hover:scale-105 transition-transform duration-500 ease-out object-cover "
/>
        </div>
       
        {/* Soft gradient overlay for contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 opacity-80 group-hover:opacity-60 transition-opacity duration-300" />

        {/* Top Floating Badge */}
        <Badge
          color="red"
          variant="filled"
          size="sm"
          radius="xl"
          className="absolute top-3 left-3 shadow-sm uppercase tracking-wider font-bold"
        >
          Community Recipe
        </Badge>

        {/* Top Floating Bookmark Button */}
        {/* <ActionIcon
          variant={isFav ? "filled" : "blur"}
          color={isFav ? "red" : "dark"}
          radius="xl"
          size="md"
          className="absolute top-3 right-3 backdrop-blur-md bg-white/20 hover:bg-white/40 border border-white/30 transition-all"
          onClick={(e) => {
            e.stopPropagation();
            handleFavourite(index);
          }}
        >
          {isFav ? (
            <IconBookmarkFilled size={18} className="text-white" />
          ) : (
            <IconBookmark size={18} className="text-white" />
          )}
        </ActionIcon> */}

        {/* Title Overlay / Quick Meta */}
        <div className="absolute bottom-3 left-4 right-4">
          <Group gap="xs" align="center" className="text-white/90">
            <IconClock size={13} />
            <Text size="xs" fw={500}>
              {recipe.createdAt || "Recently added"}
            </Text>
          </Group>
        </div>
      </div>

      {/* Main Content Area */}
      <Box p="lg">
        {/* Author Info */}
        <Group justify="space-between" align="center" mb="xs">
          <Group gap="xs">
            <Avatar
              color="red"
              radius="xl"
              size="sm"
              className="font-bold border border-red-100"
            >
              {recipe.fullName?.charAt(0)?.toUpperCase() || "U"}
            </Avatar>
            <div>
              <Text size="xs" fw={700} className="text-gray-900 leading-none">
                {recipe.fullName || "Anonymous Chef"}
              </Text>
              <Text size="xs" c="dimmed" className="mt-0.5">
                @{recipe.createdBy || "community"}
              </Text>
            </div>
          </Group>
        </Group>

        {/* Clickable Title */}
        <Title
          order={3}
          onClick={() => handleRecipeClick(recipe.id)}
          className="text-gray-900 text-lg font-bold mt-1 mb-2 cursor-pointer hover:text-red-600 transition-colors line-clamp-1"
        >
          {recipe.title}
        </Title>

        {/* Ingredient Badges/Tags */}
        <Box mb="md">
          <Text
            size="xs"
            fw={700}
            c="dimmed"
            tt="uppercase"
            mb={6}
            className="tracking-wider"
          >
            Main Ingredients
          </Text>
          <Group gap={6}>
            {(recipe.ingredients || "")
              .split(",")
              .filter(Boolean)
              .slice(0, 3)
              .map((ing, i) => (
                <Badge
                  key={i}
                  variant="light"
                  color="gray"
                  size="xs"
                  radius="sm"
                  className="capitalize font-normal"
                >
                  {ing.trim()}
                </Badge>
              ))}
            {(recipe.ingredients || "").split(",").filter(Boolean).length > 3 && (
              <Badge variant="subtle" color="gray" size="xs" radius="sm">
                +{(recipe.ingredients || "").split(",").filter(Boolean).length - 3} more
              </Badge>
            )}
          </Group>
        </Box>

        {/* Collapsible Instructions Drawer */}
        <Collapse in={expandedInstructions[index]}>
          <Paper p="sm" radius="md" bg="red.0" className="my-3 border border-red-100">
            <Text size="xs" fw={700} c="red" tt="uppercase" mb={4}>
              Cooking Steps
            </Text>
            <Text size="xs" className="text-gray-700 whitespace-pre-line leading-relaxed">
              {recipe.instructions}
            </Text>
          </Paper>
        </Collapse>

        <Button
          variant="subtle"
          color="red"
          size="xs"
          onClick={() => toggleExpandInstructions(index)}
          rightSection={
            expandedInstructions[index] ? (
              <IconChevronUp size={14} />
            ) : (
              <IconChevronDown size={14} />
            )
          }
          className="p-0 h-auto hover:bg-transparent font-semibold text-red-600"
        >
          {expandedInstructions[index] ? "Hide Instructions" : "Quick View Instructions"}
        </Button>
      </Box>
    </div>

    {/* Footer Action Bar */}
    <Box px="lg" pb="lg">
      <Divider mb="sm" color="gray.1" />
      <Group justify="space-between" align="center">
        <Group gap={6}>
          <Button
            variant={isLiked ? "light" : "subtle"}
            color="red"
            size="xs"
            radius="xl"
            onClick={() => handleLike(index)}
            leftSection={
              isLiked ? <IconHeartFilled size={16} /> : <IconHeart size={16} />
            }
            className="font-medium"
          >
            {likeCount}
          </Button>

          <Button
            variant="subtle"
            color="gray"
            size="xs"
            radius="xl"
            onClick={() => toggleExpandComments(index)}
            leftSection={<IconMessageCircle size={16} />}
            className="font-medium text-gray-600"
          >
            {recipeComments?.length || 0}
          </Button>
        </Group>

        <Text
          size="xs"
          c="dimmed"
          className="cursor-pointer hover:underline"
          onClick={() => handleRecipeClick(recipe.id)}
        >
          Details &rarr;
        </Text>
      </Group>

      {/* Comments Collapse */}
      <Collapse in={expandedComments[index]}>
        <Stack gap="xs" mt="sm" className="pt-3 border-t border-gray-100">
          <div className="flex gap-2">
            <TextInput
              placeholder="Add a comment..."
              size="xs"
              radius="md"
              className="flex-1"
              value={newComments[index] || ""}
              onChange={(e) => handleCommentChange(index, e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleCommentSubmit(index)}
            />
            <ActionIcon
              color="red"
              variant="filled"
              size="md"
              radius="md"
              onClick={() => handleCommentSubmit(index)}
            >
              <IconSend size={14} />
            </ActionIcon>
          </div>

          {recipeComments?.length > 0 && (
            <Stack gap={6} mt="xs" className="max-h-32 overflow-y-auto pr-1">
              {recipeComments.map((comment, commentIdx) => (
                <Paper
                  key={commentIdx}
                  p="xs"
                  radius="sm"
                  bg="gray.0"
                  className="border border-gray-100"
                >
                  <Text size="xs" fw={600} className="text-gray-800 leading-tight">
                    You
                  </Text>
                  <Text size="xs" className="text-gray-600 mt-0.5">
                    {comment}
                  </Text>
                </Paper>
              ))}
            </Stack>
          )}
        </Stack>
      </Collapse>
    </Box>
  </Card>
);
          })}
        </div>
      )}
    </div>
  );
};