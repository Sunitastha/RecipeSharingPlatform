import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"; // Import Link from React Router
import home from "../../../assets/images/image3.jpg";
import { NavbarMantine } from "../../partials/navbar/NavbarMantine";
import {
  BackgroundImage,
  Button,
  Center,
  Stack,
  Title,
  Text,
  Collapse,
  Box,
} from "@mantine/core";

// Import images for recipes
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
import { FaHeart } from "react-icons/fa";

export const Home = () => {
  const [likes, setLikes] = useState({});
  const [expandedInstructions, setExpandedInstructions] = useState({});
  // Example data for featured recipes and popular recipes
  const featuredRecipes = [
    {
      id: 1,
      title: "Classic Milk Tea",
      ingredients:
        "2 cups water, 2 black tea bags (or 2 teaspoons loose leaf black tea), 1 cup milk, 2 tablespoons sugar (adjust to taste), Optional: 1/2 teaspoon vanilla extract or cardamom pods",
      instructions:
        "Bring 2 cups of water to a boil. Add tea bags or loose tea, steep for 3-5 minutes. Heat 1 cup of milk until hot. Remove tea bags, add 2 tablespoons sugar, stir to dissolve. Mix in the hot milk. Add optional flavorings if desired.",
      createdBy: "harry",
      fullName: "Harry Doe",
      email: "siya@gmail.com",
      gender: "female",
      image: MilkTea,
      createdAt: "2024-06-12",
    },
    {
      id: 2,
      title: "Egg Curry",
      ingredients:
        "Main Ingredients: Eggs, Onions, Tomatoes, Ginger-Garlic Paste, Green Chilies, Spices: Turmeric Powder, Red Chili Powder, Coriander Powder, Cumin Powder, Garam Masala, Salt, Additional Ingredients: Oil, Water, Fresh Cilantro (for garnish)",
      instructions:
        "Saute onions, ginger-garlic paste, and green chilies. Add tomatoes and cook until soft. Add spices and cook until oil separates. Add boiled eggs and water. Simmer until the curry thickens. Garnish with fresh cilantro before serving.",
      createdBy: "john",
      fullName: "john doe",
      email: "john@gmail.com",
      gender: "male",
      image: EggCurry,
      createdAt: "2023-06-16",
    },
    {
      id: 3,
      title: "Fried Rice",
      ingredients:
        "Cooked rice,Oil,Eggs,Vegetables (e.g. carrots, peas, onions, garlic), Seasonings (e.g. soy sauce, oyster sauce, sesame oil),Protein (e.g. shrimp, pork, chicken)",
      instructions:
        "Heat oil in a wok or skillet. Add eggs and cook until fully cooked. Add vegetables and cook until tender-crisp. Add cooked rice and stir-fry for 2-3 minutes. Add seasonings and stir-fry for another minute. Serve hot.",
      createdBy: "sofiya",
      fullName: "Sofiya Doe",
      email: "sofiya@gmail.com",
      gender: "female",
      image: FriedRice,
      createdAt: "2024-06-12",
    },
    {
      id: 4,
      title: "Chocolate muffin",
      ingredients:
        "1 and 3/4 cups all-purpose flour, 3/4 cup cocoa powder, 1 tsp baking powder, 1 tsp baking soda, 1/2 tsp salt, 2 large eggs, 1 cup granulated sugar, 1/2 cup vegetable oil, 1 tsp vanilla extract,1 cup buttermilk, 1 cup chocolate chips",
      instructions:
        "In a bowl, whisk together the flour, cocoa powder, baking powder, baking soda. In a large bowl, beat the eggs and sugar together until light and fluffy. Add the vegetable oil and vanilla extract to the egg mixture and beat until combined. Gradually mix in the dry ingredients and the buttermilk, alternating between the two and mixing until just combined. Fold in the chocolate chips. Using a spoon or cookie scoop, divide the batter evenly among the muffin cups, filling each about 2/3 full. Bake for 18-20 minutes, or until a toothpick inserted into the center of a muffin comes out clean.",
      createdBy: "sofiya",
      fullName: "Sofiya Doe",
      email: "sofiya@gmail.com",
      gender: "female",
      image: ChocolateMuffin,
      createdAt: "2024-06-12",
    },

    {
      id: 5,
      title: "Pasta Carbonara",
      ingredients:
        "8 oz (250g) spaghetti or other pasta, 4 large eggs, 1 cup grated Parmesan cheese, plus extra for serving, 6 slices of pancetta or bacon, chopped, 2 cloves garlic, minced, Salt and freshly ground black pepper, to taste, Fresh parsley, chopped, for garnish (optional)",
      instructions:
        "Cook the pasta according to package instructions. In a bowl, whisk together eggs and Parmesan cheese. In a skillet, cook pancetta or bacon until crispy. Add garlic and cook until fragrant. Drain pasta and add it to the skillet. Remove from heat and quickly stir in egg mixture. Season with salt and pepper. Serve immediately, garnished with parsley and extra Parmesan.",
      createdBy: "siya",
      fullName: "siya doe",
      email: "siya@gmail.com",
      gender: "female",
      image: ItalianPasta,
      createdAt: "2023-06-12",
    },
    {
      id: 6,
      title: "Creamy Garlic Parmesan Chicken",
      ingredients:
        "1 pound boneless, skinless chicken breasts,2 cloves garlic, minced,1 cup heavy cream,1/2 cup grated Parmesan cheese,1/4 cup chopped fresh parsley,Salt and pepper to taste,1/4 cup breadcrumbs (optional)",
      instructions:
        "Preheat oven to 375°F (190°C). In a large skillet, heat 2 tablespoons of olive oil over medium-high heat. Add the chicken and cook until browned on both sides, about 5-6 minutes. Remove the chicken from the skillet and set aside. In the same skillet, add the minced garlic and cook for 1 minute, until fragrant. Pour in the heavy cream and bring to a simmer. Reduce the heat to medium-low and let the cream simmer for 2-3 minutes, until slightly thickened. Stir in the Parmesan cheese until melted and smooth. Add the cooked chicken back to the skillet and spoon the creamy garlic sauce over the top. Sprinkle with parsley and breadcrumbs (if using). Serve hot and enjoy!",
      createdBy: "john",
      fullName: "john doe",
      email: "john@gmail.com",
      gender: "male",
      image: CreamyGarlicChicken,
      createdAt: "2024-04-10",
    },
  ];

  const popularRecipes = [
    {
      id: 7,
      title: "Paneer Curry",
      ingredients:
        "Main Ingredients: Paneer (Indian cottage cheese), Onions, Tomatoes, Ginger-Garlic Paste, Green Chilies, Spices: Turmeric Powder, Red Chili Powder, Coriander Powder, Cumin Powder, Garam Masala, Salt, Additional Ingredients: Oil, Water, Fresh Cream (optional), Fresh Cilantro (for garnish)",
      instructions:
        "Saute onions, ginger-garlic paste, and green chilies. Add tomatoes and cook until soft. Add spices and cook until oil separates. Add paneer cubes and water. Simmer until the curry thickens. Optionally, add fresh cream for richness. Garnish with fresh cilantro before serving.",
      createdBy: "siya",
      fullName: "siya doe",
      email: "siya@gmail.com",
      gender: "female",
      image: PaneerCurry,
      createdAt: "2024-06-12",
    },

    {
      id: 8,
      title: "Pizza",
      ingredients:
        "2 ¼ tsp active dry yeast, 1 ½ cups warm water, 3 ½ to 4 cups all-purpose flour, 2 tbsp olive oil, 2 tsp sugar, 2 tsp salt, 1 can (15 oz) tomato sauce, 2 cloves garlic, minced, 1 tsp dried oregano, 1 tsp dried basil, 1 tsp sugar, Salt and pepper to taste, 2 cups shredded mozzarella cheese, 1 cup sliced pepperoni or other meat, 1 cup sliced vegetables (bell peppers, onions, mushrooms, olives), Fresh basil leaves (optional), Grated Parmesan cheese (optional)",
      instructions:
        "Make the dough: Dissolve 2 ¼ tsp yeast and 2 tsp sugar in 1 ½ cups warm water. Let sit 5 minutes. Combine 3 ½ cups flour and 2 tsp salt. Add yeast mixture and 2 tbsp olive oil. Mix and knead until smooth. Let dough rise in an oiled bowl, covered, for 1-1 ½ hours. Prepare the sauce: Combine 1 can tomato sauce, 2 minced garlic cloves, 1 tsp each oregano, basil, and sugar. Season with salt and pepper. Simmer 10-15 minutes. Preheat oven to 475°F (245°C). Assemble the pizza: Divide dough in half, roll out each portion. Spread sauce, add cheese and toppings. Bake: Bake for 10-15 minutes until crust is golden and cheese is bubbly.",
      createdBy: "john",
      fullName: "john doe",
      email: "john@gmail.com",
      gender: "male",
      image: ChickenPizza,
      createdAt: "2024-06-12",
    },

    {
      id: 9,
      title: "Chicken Curry",
      ingredients:
        "Main Ingredients: Chicken 1.5 to 2 pounds (approximately 700-900 grams), cut into pieces (bone-in or boneless as preferred). Marinade: Yogurt: 1/2 cup, Turmeric Powder: 1/2 teaspoon, Salt: 1/2 teaspoon. For the Curry: Oil: 2-3 tablespoons (vegetable oil, ghee, or coconut oil), Onions: 2 medium, finely chopped, Ginger-Garlic Paste: 2 tablespoons (1 tablespoon ginger, 1 tablespoon garlic, finely minced or ground into a paste), Tomatoes: 2 medium, finely chopped or pureed, Green Chilies: 2, slit lengthwise (optional, for extra heat). Spices: Turmeric Powder: 1/2 teaspoon, Red Chili Powder: 1 teaspoon (adjust to taste), Coriander Powder: 1 tablespoon, Cumin Powder: 1 teaspoon, Garam Masala: 1 teaspoon, Salt: to taste. Additional Ingredients: Water: 1-2 cups (adjust based on desired consistency), Fresh Cilantro: a handful, chopped (for garnish). Optional: Coconut Milk or Cream: 1/2 cup for a richer, creamier curry. Whole Spices: 1 bay leaf, 2-3 cloves, 1-2 green cardamom pods, and a small piece of cinnamon stick for additional flavor.",
      instructions:
        "Marinate the Chicken: In a bowl, mix the chicken pieces with yogurt, turmeric, and salt. Let it marinate for at least 30 minutes to 1 hour. Prepare the Curry Base: Heat the oil in a large pan or pot over medium heat. Add the whole spices (if using) and let them sizzle for a few seconds until fragrant. Add the chopped onions and sauté until golden brown. Add the ginger-garlic paste and green chilies (if using), and sauté for another 2-3 minutes until the raw smell disappears. Add the chopped tomatoes and cook until they soften and the oil starts to separate from the mixture. Add Spices: Add turmeric, red chili powder, coriander powder, and cumin powder. Cook the spices for 1-2 minutes, stirring continuously to avoid burning. Cook the Chicken: Add the marinated chicken pieces to the pot and mix well with the spice mixture. Cook the chicken on medium-high heat until it is browned on all sides. Simmer the Curry: Add water (and coconut milk or cream if using) to the pot, enough to cover the chicken. Bring the mixture to a boil, then reduce the heat to low, cover the pot, and let it simmer for 20-30 minutes until the chicken is cooked through and tender. Finish and Garnish: Stir in the garam masala and adjust salt to taste. Garnish with fresh cilantro before serving.",
      createdBy: "john",
      fullName: "john doe",
      email: "john@gmail.com",
      gender: "male",
      image: ChickenCurry,
      createdAt: "2024-06-12",
    },
    {
      id: 10,
      title: "Chicken Chowmein",
      ingredients:
        "1 pound boneless, skinless chicken breast or thighs, 2 tablespoons vegetable oil, 1 onion, chopped,2 cloves garlic, minced,1 cup mixed vegetables (e.g., bell peppers, carrots, broccoli), 2 cups cooked noodles (e.g., chow mein noodles), 2 tablespoons soy sauce, 1 tablespoon oyster sauce (optional), Salt and pepper to taste, Scallions, chopped (optional)",
      instructions:
        "Cook the noodles according to the package instructions. Drain and set aside. Heat the oil in a wok or large skillet over medium-high heat. Add the chicken and cook until browned, about 5 minutes. Add the onion and garlic to the wok and cook until the onion is translucent. Add the mixed vegetables and cook until they are tender-crisp. Add the cooked noodles, soy sauce, and oyster sauce (if using) to the wok. Stir-fry everything together for about 2 minutes. Season with salt and pepper to taste. Garnish with chopped scallions (if using) and serve hot.",
      createdBy: "sunita01",
      fullName: "sunita shrestha",
      email: "sunitashrestha2057@gmail.com",
      gender: "female",
      image: ChickenChowmein,
      createdAt: "2024-06-12",
    },
  ];
  const [recipes, setRecipes] = useState([]);
  // const [loading, setLoading] = useState(false);
  //const [error, setError] = useState(null);
  const getRecipes = async () => {
    setLoading(true);
    setError(null);
    try {
      // const [recipeRes, constantRes] = await Promise.all([
      //   axios.get("http://localhost:8083/recipe/"),
      //   axios.get("http://localhost:8083/recipesConstant")
      // ]);
      // const combinedRecipes = [...recipeRes.data.data, ...constantRes.data];
      // setRecipes(combinedRecipes);
      const res = await axios.get("http://localhost:8083/recipe/");
      setRecipes(res.data.data);
    } catch (error) {
      setError("Error fetching recipes. Please try again later.");
      console.error("Error fetching recipes:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getRecipes();
  }, []);

  const toggleExpandInstructions = (index) => {
    setExpandedInstructions((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };
  const handleLike = (index) => {
    setLikes((prevState) => ({
      ...prevState,
      [index]: (prevState[index] || 100) + 1,
    }));
  };

  return (
    <div className="min-h-screen">
      <Box className="min-h-[80vh] flex items-center bg-gray-50 p-6 md:p-12">
        {/* Inner flex container: Sets up the main split layout (text | image) */}
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
          {/* === LEFT SIDE: Text and Call-to-Action (CTA) === */}
          <div className="flex flex-col justify-center w-full md:w-1/2 p-4">
            <Title
              order={1} // Larger, more impactful title
              className="text-5xl md:text-6xl font-extrabold mb-4 text-green-600"
              style={{
                // color: "#E70000",
                textShadow: "2px 2px 4px rgba(0,0,0,0.1)",
              }} // Bold red color with subtle shadow
            >
              Discover Your Next Favorite Dish
            </Title>

            <Title
              order={3}
              className="text-xl md:text-2xl text-gray-700 pb-4 mb-8 font-light"
            >
              Explore a world of authentic flavors, curated by our passionate
              community of home chefs.
            </Title>

            <div className="flex space-x-4 align-center px-10">
              {/* <Link to="/localrecipes">
                <Button
                  variant="outline"
                  // size="lg" // Larger button
                  color="#E70000" // Use a strong primary color (Red)
                  className="hover:shadow-lg transition duration-300" // Add hover effect
                >
                  Browse Recipes
                </Button>
              </Link> */}
              <Link to="/add">
                <Button
                  variant="outline" // Outline button for secondary CTA
                  // size="lg"
                  color="#138808" // Secondary color (Green)
                  className="hover:bg-green-50 transition duration-300"
                >
                  Submit Your Recipe
                </Button>
              </Link>
            </div>
          </div>

          <div className="flex w-full md:w-1/2 justify-center p-4">
            <img
              src={home}
              alt="Delicious food display, home cooking"
              // Attractive styling: Large, slightly rounded image with a depth effect
              className="w-full h-auto max-w-xl object-cover rounded-3xl shadow-2xl transition duration-500 ease-in-out hover:scale-[1.02]"
            />
          </div>
        </div>
      </Box>

      {/* Popular Recipes Section */}
      <section className="bg-gray-50 py-16">
        {" "}
        {/* Light background for the whole section */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-extrabold mb-12 text-center text-gray-800">
            Popular Recipes <span className="text-red-500">This Week</span>
          </h2>

          {/* Responsive Grid Layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
            {popularRecipes.map((recipe, index) => (
              // Wrap the card in Link for navigation (uncomment in your actual file)
              // <Link to={`/recipe/${recipe.id}`} key={recipe.id}>

              <div
                key={recipe.id || index}
                // --- Enhanced Card Styles ---
                className="group bg-white rounded-xl overflow-hidden shadow-xl hover:shadow-2xl 
                       transition duration-300 transform hover:-translate-y-1 cursor-pointer 
                       border border-gray-100"
              >
                {/* Image Section */}
                <div className="w-full h-48 overflow-hidden">
                  <img
                    src={recipe.image}
                    alt={recipe.title}
                    className="w-full h-full object-cover transition duration-300 group-hover:scale-105" // Hover Zoom
                  />
                </div>

                {/* Text Content */}
                <div className="p-5">
                  <h3 className="text-xl font-bold mb-1 text-gray-900 truncate">
                    {recipe.title}
                  </h3>

                  <p className="font-medium text-sm mb-3 text-red-600">
                    <span className="text-gray-500">by</span> {recipe.fullName}
                  </p>

                  {/* Collapsible Content Section */}
                  <Collapse in={expandedInstructions[index]}>
                    <div className="text-sm space-y-2 pt-2 border-t border-gray-100 mt-2">
                      <p className="text-gray-700">
                        <strong className="text-gray-900">Ingredients:</strong>
                        {recipe.ingredients}
                      </p>

                      <p className="text-gray-700">
                        <strong className="text-gray-900">Instructions:</strong>
                        {recipe.instructions}
                      </p>
                    </div>
                  </Collapse>

                  {/* See More/Less Toggle */}
                  <div
                    className="text-red-500 hover:text-red-700 mt-3 cursor-pointer text-sm font-semibold"
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleExpandInstructions(index);
                    }} // Stop propagation
                  >
                    {expandedInstructions[index] ? "See Less" : "See More..."}
                  </div>

                  {/* Actions: Likes & View Button */}
                  <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between">
                    <button
                      className="flex items-center space-x-2 text-gray-500 hover:text-red-500 transition duration-150"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleLike(index);
                      }} // Stop propagation
                    >
                      <FaHeart
                        // Improved color logic using Tailwind classes
                        className={
                          likes[index]
                            ? "text-red-500"
                            : "text-gray-300 group-hover:text-red-300"
                        }
                        size={22}
                      />
                      <span className="font-semibold text-lg text-gray-700">
                        {likes[index] || 100}
                      </span>
                    </button>

                    {/* View Recipe Button */}
                    <Link
                      to={`/recipe/${recipe.id}`}
                      onClick={(e) => e.stopPropagation()}
                    >
                      <button className="bg-red-600 text-white px-3 py-1.5 rounded-lg text-sm font-semibold hover:bg-red-700 transition duration-150">
                        View Recipe
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
              // </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Recipes Section */}
      <section className="bg-gray-50 py-16">
        {" "}
        {/* Use a very light gray background for contrast */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-extrabold mb-12 text-center text-gray-800">
            Featured Recipes <span className="text-red-600">You'll Love</span>
          </h2>

          {/* Responsive Grid with better gap */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
            {featuredRecipes.map((recipe, index) => (
              // Wrap the entire card in Link for better UX (assuming recipe.id exists)
              // Ensure you uncomment the <Link> tag in your actual component
              // <Link to={`/recipe/${recipe.id}`} key={recipe.id}>

              <div
                key={recipe.id || index}
                className="group bg-white rounded-xl overflow-hidden shadow-xl hover:shadow-2xl 
                       transition duration-300 transform hover:-translate-y-1 cursor-pointer 
                       border border-gray-100" // Add border for definition
              >
                {/* Image Section */}
                <div className="w-full h-48 overflow-hidden">
                  <img
                    src={recipe.image}
                    alt={recipe.title}
                    className="w-full h-full object-cover transition duration-300 group-hover:scale-105" // Hover scale effect
                  />
                </div>

                {/* Text Content */}
                <div className="p-5">
                  <h3 className="text-2xl font-bold mb-1 text-gray-900 truncate">
                    {recipe.title}
                  </h3>

                  <p className="font-semibold text-sm mb-3 text-red-600">
                    <span className="text-gray-500">By</span> {recipe.fullName}
                  </p>

                  {/* Ingredients & Instructions */}
                  <div className="text-sm space-y-2 text-gray-600">
                    <p>
                      <strong className="text-gray-800">Ingredients: </strong>
                      {/* Truncate ingredients here if too long, or limit characters */}
                      {recipe.ingredients.substring(0, 50) +
                        (recipe.ingredients.length > 50 ? "..." : "")}
                    </p>

                    <Collapse in={expandedInstructions[index]}>
                      <p>
                        <strong className="text-gray-800">
                          Instructions:{" "}
                        </strong>
                        {recipe.instructions}
                      </p>
                    </Collapse>
                  </div>

                  {/* See More/Less Toggle */}
                  <div
                    className="text-red-500 hover:text-red-700 mt-3 cursor-pointer text-sm font-semibold"
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleExpandInstructions(index);
                    }} // Stop propagation to prevent card click
                  >
                    {expandedInstructions[index]
                      ? "See Less..."
                      : "See More..."}
                  </div>

                  {/* Actions: Likes */}
                  <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between">
                    <button
                      className="flex items-center space-x-2 text-gray-500 hover:text-red-500 transition duration-150"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleLike(index);
                      }} // Stop propagation
                    >
                      <FaHeart
                        // Use standard Tailwind/React colors for better consistency
                        className={
                          likes[index] ? "text-red-500" : "text-gray-300"
                        }
                        size={22}
                      />
                      <span className="font-semibold text-lg">
                        {likes[index] || 100}
                      </span>
                    </button>

                    {/* Optional: Add a View Recipe button here for clarity */}
                    <Link
                      to={`/recipe/${recipe.title}`}
                      onClick={(e) => e.stopPropagation()}
                    >
                      <button className="bg-red-600 text-white px-3 py-1.5 rounded-lg text-sm font-semibold hover:bg-red-700 transition duration-150">
                        View Details
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
              // </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Footer Component */}
      {/* Example:
      <Footer />
      */}
    </div>
  );
};
