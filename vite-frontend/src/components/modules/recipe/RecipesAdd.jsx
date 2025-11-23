import { Box, Button, Title } from "@mantine/core";
import { Link } from "react-router-dom";
import home from "../../../assets/images/image3.jpg";

export const RecipesAdd = () => {
  return (
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
  );
};
