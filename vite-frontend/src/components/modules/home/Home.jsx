import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Router
import home from '../../../assets/images/image3.jpg';
import { NavbarMantine } from '../../partials/navbar/NavbarMantine';
import { BackgroundImage, Button, Center, Stack, Title,Text, Collapse } from '@mantine/core';

// Import images for recipes
import ChickenCurry from '../../../assets/images/ChickenCurry.jpg';
import ChickenPizza from '../../../assets/images/ChickenPizza2.jpg';
import ChocolateMuffin from '../../../assets/images/chocolate muffin.jpeg';
import MilkTea from '../../../assets/images/Hot_Milk_Tea.jpg';
import ItalianPasta from '../../../assets/images/spaghetti-carbonara.jpg';
import EggCurry from '../../../assets/images/egg curry.jpg';
import PaneerCurry from '../../../assets/images/paneer-curry.jpg';
import ChickenChowmein from '../../../assets/images/ChickenChowmein.jpg'
import FriedRice from '../../../assets/images/FriedRice.jpg'
import CreamyGarlicChicken from '../../../assets/images/Garlic-Parmesan-Chicken.jpg';
import ChocolateLavaCake from '../../../assets/images/Molten-chocolate-lava-cake.jpg';
import { FaHeart } from 'react-icons/fa';

export const Home = () => {
  const [likes, setLikes] = useState({});
  const [expandedInstructions, setExpandedInstructions] = useState({});
  // Example data for featured recipes and popular recipes
  const featuredRecipes = [
    {
      title: 'Classic Milk Tea',
      ingredients: '2 cups water, 2 black tea bags (or 2 teaspoons loose leaf black tea), 1 cup milk, 2 tablespoons sugar (adjust to taste), Optional: 1/2 teaspoon vanilla extract or cardamom pods',
      instructions: 'Bring 2 cups of water to a boil. Add tea bags or loose tea, steep for 3-5 minutes. Heat 1 cup of milk until hot. Remove tea bags, add 2 tablespoons sugar, stir to dissolve. Mix in the hot milk. Add optional flavorings if desired.',
      createdBy: 'harry',
      fullName:'Harry Doe',
      email:'siya@gmail.com',
      gender:'female',
      image: MilkTea,
      createdAt: '2024-06-12',
  },
    {
      title: 'Egg Curry',
      ingredients: 'Main Ingredients: Eggs, Onions, Tomatoes, Ginger-Garlic Paste, Green Chilies, Spices: Turmeric Powder, Red Chili Powder, Coriander Powder, Cumin Powder, Garam Masala, Salt, Additional Ingredients: Oil, Water, Fresh Cilantro (for garnish)',
      instructions: 'Saute onions, ginger-garlic paste, and green chilies. Add tomatoes and cook until soft. Add spices and cook until oil separates. Add boiled eggs and water. Simmer until the curry thickens. Garnish with fresh cilantro before serving.',
      createdBy: 'john',
      fullName:'john doe',
      email:'john@gmail.com',
      gender:'male',
      image: EggCurry,
      createdAt: '2023-06-16',
  },
  {
    title:"Fried Rice",
    ingredients:"Cooked rice,Oil,Eggs,Vegetables (e.g. carrots, peas, onions, garlic), Seasonings (e.g. soy sauce, oyster sauce, sesame oil),Protein (e.g. shrimp, pork, chicken)",
    instructions:"Heat oil in a wok or skillet. Add eggs and cook until fully cooked. Add vegetables and cook until tender-crisp. Add cooked rice and stir-fry for 2-3 minutes. Add seasonings and stir-fry for another minute. Serve hot.",
    createdBy:"sofiya",
    fullName:'Sofiya Doe',
    email:'sofiya@gmail.com',
    gender:'female',
    image:FriedRice,
    createdAt:"2024-06-12"
},
{
  title: 'Chocolate muffin',
  ingredients: '1 and 3/4 cups all-purpose flour, 3/4 cup cocoa powder, 1 tsp baking powder, 1 tsp baking soda, 1/2 tsp salt, 2 large eggs, 1 cup granulated sugar, 1/2 cup vegetable oil, 1 tsp vanilla extract,1 cup buttermilk, 1 cup chocolate chips',
  instructions: 'In a bowl, whisk together the flour, cocoa powder, baking powder, baking soda. In a large bowl, beat the eggs and sugar together until light and fluffy. Add the vegetable oil and vanilla extract to the egg mixture and beat until combined. Gradually mix in the dry ingredients and the buttermilk, alternating between the two and mixing until just combined. Fold in the chocolate chips. Using a spoon or cookie scoop, divide the batter evenly among the muffin cups, filling each about 2/3 full. Bake for 18-20 minutes, or until a toothpick inserted into the center of a muffin comes out clean.',
  createdBy: 'sofiya',
  fullName:'Sofiya Doe',
  email:'sofiya@gmail.com',
  gender:'female',
  image: ChocolateMuffin,
  createdAt: '2024-06-12'
},

  {
    title: 'Pasta Carbonara',
    ingredients: '8 oz (250g) spaghetti or other pasta, 4 large eggs, 1 cup grated Parmesan cheese, plus extra for serving, 6 slices of pancetta or bacon, chopped, 2 cloves garlic, minced, Salt and freshly ground black pepper, to taste, Fresh parsley, chopped, for garnish (optional)',
    instructions: 'Cook the pasta according to package instructions. In a bowl, whisk together eggs and Parmesan cheese. In a skillet, cook pancetta or bacon until crispy. Add garlic and cook until fragrant. Drain pasta and add it to the skillet. Remove from heat and quickly stir in egg mixture. Season with salt and pepper. Serve immediately, garnished with parsley and extra Parmesan.',
    createdBy: 'siya',
    fullName:'siya doe',
    email:'siya@gmail.com',
    gender:'female',
    image: ItalianPasta,
    createdAt: '2023-06-12'
},
{
  title: "Creamy Garlic Parmesan Chicken",
  ingredients:'1 pound boneless, skinless chicken breasts,2 cloves garlic, minced,1 cup heavy cream,1/2 cup grated Parmesan cheese,1/4 cup chopped fresh parsley,Salt and pepper to taste,1/4 cup breadcrumbs (optional)',
  instructions: 'Preheat oven to 375°F (190°C). In a large skillet, heat 2 tablespoons of olive oil over medium-high heat. Add the chicken and cook until browned on both sides, about 5-6 minutes. Remove the chicken from the skillet and set aside. In the same skillet, add the minced garlic and cook for 1 minute, until fragrant. Pour in the heavy cream and bring to a simmer. Reduce the heat to medium-low and let the cream simmer for 2-3 minutes, until slightly thickened. Stir in the Parmesan cheese until melted and smooth. Add the cooked chicken back to the skillet and spoon the creamy garlic sauce over the top. Sprinkle with parsley and breadcrumbs (if using). Serve hot and enjoy!',
  createdBy: 'john',
  fullName:'john doe',
  email:'john@gmail.com',
  gender:'male',
  image: CreamyGarlicChicken,
  createdAt: '2024-04-10',
 
},

  ];

  const popularRecipes = [
    {
      title: 'Paneer Curry',
      ingredients: 'Main Ingredients: Paneer (Indian cottage cheese), Onions, Tomatoes, Ginger-Garlic Paste, Green Chilies, Spices: Turmeric Powder, Red Chili Powder, Coriander Powder, Cumin Powder, Garam Masala, Salt, Additional Ingredients: Oil, Water, Fresh Cream (optional), Fresh Cilantro (for garnish)',
      instructions: 'Saute onions, ginger-garlic paste, and green chilies. Add tomatoes and cook until soft. Add spices and cook until oil separates. Add paneer cubes and water. Simmer until the curry thickens. Optionally, add fresh cream for richness. Garnish with fresh cilantro before serving.',
      createdBy: 'siya',
      fullName:'siya doe',
      email:'siya@gmail.com',
      gender:'female',
      image: PaneerCurry,
      createdAt: '2024-06-12'
  },
 
  
  {
    title: 'Pizza',
    ingredients: '2 ¼ tsp active dry yeast, 1 ½ cups warm water, 3 ½ to 4 cups all-purpose flour, 2 tbsp olive oil, 2 tsp sugar, 2 tsp salt, 1 can (15 oz) tomato sauce, 2 cloves garlic, minced, 1 tsp dried oregano, 1 tsp dried basil, 1 tsp sugar, Salt and pepper to taste, 2 cups shredded mozzarella cheese, 1 cup sliced pepperoni or other meat, 1 cup sliced vegetables (bell peppers, onions, mushrooms, olives), Fresh basil leaves (optional), Grated Parmesan cheese (optional)',
    instructions: 'Make the dough: Dissolve 2 ¼ tsp yeast and 2 tsp sugar in 1 ½ cups warm water. Let sit 5 minutes. Combine 3 ½ cups flour and 2 tsp salt. Add yeast mixture and 2 tbsp olive oil. Mix and knead until smooth. Let dough rise in an oiled bowl, covered, for 1-1 ½ hours. Prepare the sauce: Combine 1 can tomato sauce, 2 minced garlic cloves, 1 tsp each oregano, basil, and sugar. Season with salt and pepper. Simmer 10-15 minutes. Preheat oven to 475°F (245°C). Assemble the pizza: Divide dough in half, roll out each portion. Spread sauce, add cheese and toppings. Bake: Bake for 10-15 minutes until crust is golden and cheese is bubbly.',
    createdBy: 'john',
    fullName:'john doe',
    email:'john@gmail.com',
    gender:'male',
    image: ChickenPizza,
    createdAt: '2024-06-12',
},
  
  {
      title: 'Chicken Curry',
      ingredients: 'Main Ingredients: Chicken 1.5 to 2 pounds (approximately 700-900 grams), cut into pieces (bone-in or boneless as preferred). Marinade: Yogurt: 1/2 cup, Turmeric Powder: 1/2 teaspoon, Salt: 1/2 teaspoon. For the Curry: Oil: 2-3 tablespoons (vegetable oil, ghee, or coconut oil), Onions: 2 medium, finely chopped, Ginger-Garlic Paste: 2 tablespoons (1 tablespoon ginger, 1 tablespoon garlic, finely minced or ground into a paste), Tomatoes: 2 medium, finely chopped or pureed, Green Chilies: 2, slit lengthwise (optional, for extra heat). Spices: Turmeric Powder: 1/2 teaspoon, Red Chili Powder: 1 teaspoon (adjust to taste), Coriander Powder: 1 tablespoon, Cumin Powder: 1 teaspoon, Garam Masala: 1 teaspoon, Salt: to taste. Additional Ingredients: Water: 1-2 cups (adjust based on desired consistency), Fresh Cilantro: a handful, chopped (for garnish). Optional: Coconut Milk or Cream: 1/2 cup for a richer, creamier curry. Whole Spices: 1 bay leaf, 2-3 cloves, 1-2 green cardamom pods, and a small piece of cinnamon stick for additional flavor.',
      instructions: 'Marinate the Chicken: In a bowl, mix the chicken pieces with yogurt, turmeric, and salt. Let it marinate for at least 30 minutes to 1 hour. Prepare the Curry Base: Heat the oil in a large pan or pot over medium heat. Add the whole spices (if using) and let them sizzle for a few seconds until fragrant. Add the chopped onions and sauté until golden brown. Add the ginger-garlic paste and green chilies (if using), and sauté for another 2-3 minutes until the raw smell disappears. Add the chopped tomatoes and cook until they soften and the oil starts to separate from the mixture. Add Spices: Add turmeric, red chili powder, coriander powder, and cumin powder. Cook the spices for 1-2 minutes, stirring continuously to avoid burning. Cook the Chicken: Add the marinated chicken pieces to the pot and mix well with the spice mixture. Cook the chicken on medium-high heat until it is browned on all sides. Simmer the Curry: Add water (and coconut milk or cream if using) to the pot, enough to cover the chicken. Bring the mixture to a boil, then reduce the heat to low, cover the pot, and let it simmer for 20-30 minutes until the chicken is cooked through and tender. Finish and Garnish: Stir in the garam masala and adjust salt to taste. Garnish with fresh cilantro before serving.',
      createdBy: 'john',
      fullName:'john doe',
      email:'john@gmail.com',
      gender:'male',
      image: ChickenCurry,
      createdAt: '2024-06-12'
  },
  {
      title:"Chicken Chowmein",
      ingredients:"1 pound boneless, skinless chicken breast or thighs, 2 tablespoons vegetable oil, 1 onion, chopped,2 cloves garlic, minced,1 cup mixed vegetables (e.g., bell peppers, carrots, broccoli), 2 cups cooked noodles (e.g., chow mein noodles), 2 tablespoons soy sauce, 1 tablespoon oyster sauce (optional), Salt and pepper to taste, Scallions, chopped (optional)",
      instructions:"Cook the noodles according to the package instructions. Drain and set aside. Heat the oil in a wok or large skillet over medium-high heat. Add the chicken and cook until browned, about 5 minutes. Add the onion and garlic to the wok and cook until the onion is translucent. Add the mixed vegetables and cook until they are tender-crisp. Add the cooked noodles, soy sauce, and oyster sauce (if using) to the wok. Stir-fry everything together for about 2 minutes. Season with salt and pepper to taste. Garnish with chopped scallions (if using) and serve hot.",
      createdBy:"sunita01",
      fullName:"sunita shrestha",
      email:'sunitashrestha2057@gmail.com',
      gender:'female',
      image:ChickenChowmein,
      createdAt:"2024-06-12"
  },
  
  ];
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
    <div className="bg-custom-gradient min-h-screen">
     
      <div className="flex">

<BackgroundImage src={home} style={{ height: '100vh' }}>
      <Center style={{ height: '100%' }}>
        <Stack align="center">
          <Title order={2} style={{ color: 'black'}}> 
          Discover Delicious Recipes
          </Title>
          {/* textShadow: '0 2px 4px rgba(0,0,0,0.5)' */}
          <Title order={3} style={{ color: 'black' }}>
          Explore a world of flavors with our community's best recipes.
          </Title>
          {/* <Text size="xl" align="center" style={{ color: 'white', marginBottom: '2rem' }}>
          Explore a world of flavors with our community's best recipes.
          </Text> */}
          <div>
            <Link to="/localrecipes">
              <Button variant="filled" color="#E70000" style={{ marginRight: '2rem' }}>
              Browse Recipes
              </Button>
            </Link>
            <Link to="/add">
              <Button variant="filled" color="#138808">
              Submit a Recipe
              </Button>
            </Link>
          </div>
        </Stack>
      </Center>
    </BackgroundImage>
      </div>

      {/* Featured Recipes Section */}
      <section className="bg-white py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Featured Recipes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredRecipes.map((recipe, index) => (
              // <Link to={`/recipe/${recipe.id}`} key={recipe.id} className="hover:opacity-75">
                <div className="bg-gray-100 p-4 rounded-lg shadow-md cursor-pointer">
                  <img src={recipe.image} alt={recipe.title} className="rounded-lg mb-4 " />
                  <h3 className="text-xl font-bold mb-2 text-center">{recipe.title}</h3>
                  <p className="font-semibold mb-2">By {recipe.fullName}</p>
                  <p className="text-gray-700"><strong className='text-black'>Ingredients:</strong>{recipe.ingredients}</p>
                  <Collapse in={expandedInstructions[index]}>
                  <p className="text-gray-700"><strong className='text-black'>Instructions:</strong>{recipe.instructions}</p>
                  </Collapse>
                  <div className="text-gray-500 mt-4 cursor-pointer font-bold" 
              onClick={() => toggleExpandInstructions(index)}>
                {expandedInstructions[index] ? "See Less..." : "See More..."}
              </div>
              <div className="mt-4 flex space-x-4">
              <button 
              className="flex items-center space-x-1 "
                onClick={() => handleLike(index)}
                >
                  <FaHeart  
                  style={{
                    borderColor: likes[index] ? '#E52B50' : 'black',
                      color: likes[index] ? '#E01E4E' : '#F88379'
                  }}
                  size={30} />
                   <span>{likes[index] || 100}</span>
                  </button>
              
                </div>
                </div>
                ))}
              {/* </Link> */}
            
            
          </div>
        </div>
      </section>

      {/* Popular Recipes Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Popular Recipes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {popularRecipes.map((recipe,index) => (
              // <Link to={`/recipe/${recipe.id}`} key={recipe.id} className="hover:opacity-75">
              <div className="bg-gray-100 p-4 rounded-lg shadow-md cursor-pointer">
              <img src={recipe.image} alt={recipe.title} className="rounded-lg mb-4" />
              <h3 className="text-xl font-semibold mb-2">{recipe.title}</h3>
              <p className="text-gray-600 mb-2">by {recipe.fullName}</p>
              <Collapse in={expandedInstructions[index]}>
              <p className="text-gray-700"><strong className='text-black'>Ingredients:</strong>{recipe.ingredients}</p>
            
                  <p className="text-gray-700"><strong className='text-black'>Instructions:</strong>{recipe.instructions}</p>
                  </Collapse>
                  <div className="text-gray-500 mt-4 cursor-pointer font-bold" 
              onClick={() => toggleExpandInstructions(index)}>
                {expandedInstructions[index] ? "See Less..." : "See More..."}
              </div>
              <div className="mt-4 flex space-x-4">
              <button 
              className="flex items-center space-x-1 "
                onClick={() => handleLike(index)}
                >
                  <FaHeart  
                  style={{
                    borderColor: likes[index] ? '#E52B50' : 'black',
                      color: likes[index] ? '#E01E4E' : '#F88379'
                  }}
                  size={30} />
                   <span>{likes[index] || 100}</span>
                  </button>
              
                </div>
            </div>
              ))}
              {/* </Link> */}
          
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

