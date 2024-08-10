// import React, { useEffect, useState } from "react";
// import { Button, Loader, Alert, Collapse, Title, Card, Image, TextInput, Avatar } from "@mantine/core";
// import { FaHeart, FaComment, FaStar, FaBookmark } from "react-icons/fa";
// import axios from "axios";
// import { IconSearch, IconSend } from "@tabler/icons-react";


// export const GetRecipes = () => {
//   const [recipes, setRecipes] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const [expandedInstructions, setExpandedInstructions] = useState({});
//   const [expandedComments, setExpandedComments] = useState({});
//   const [expandedUserData, setExpandedUserData] = useState({});
//   const [likes, setLikes] = useState({});
//   const [comments, setComments] = useState({});
//   const [newComments, setNewComments] = useState({});
//   const [favourites, setFavourites] = useState({});
//   const [searchQuery, setSearchQuery] = useState(""); // State for search query

//   const getRecipes = async () => {
   
//     setLoading(true);
//     setError(null);
//     try {
//       const res = await axios.get("http://localhost:8083/recipe/");
//       setRecipes(res.data.data);
//     } catch (error) {
//       setError("Error fetching recipes. Please try again later.");
//       console.error("Error fetching recipes:", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     getRecipes();
//   }, []);

//   const toggleExpandInstructions = (index) => {
//     setExpandedInstructions((prevState) => ({
//       ...prevState,
//       [index]: !prevState[index],
//     }));
//   };

//   const toggleExpandComments = (index) => {
//     setExpandedComments((prevState) => ({
//       ...prevState,
//       [index]: !prevState[index],
//     }));
//   };

//   const toggleExpandUserData = (index) => {
//     setExpandedUserData((prevState) => ({
//       ...prevState,
//       [index]: !prevState[index],
//     }));
//   };

//   const handleLike = (index) => {
//     setLikes((prevState) => ({
//       ...prevState,
//       [index]: (prevState[index] || 100) + 1,
//     }));
//   };

//   const handleCommentChange = (index, e) => {
//     setNewComments((prevState) => ({
//         ...prevState,
//         [index]: e.target.value,
//     }));
// };

// const handleCommentSubmit = (index) => {
//   if (!newComments[index]) return;
//   setComments((prevState) => ({
//       ...prevState,
//       [index]: [...(prevState[index] || []), newComments[index]],
//   }));
//   setNewComments((prevState) => ({
//       ...prevState,
//       [index]: '',
//   }));
// };
//   const handleFavourite = (index) => {
//     setFavourites((prevState) => ({
//       ...prevState,
//       [index]: !prevState[index],
//     }));
//   };

//   const handleSearchChange = (e) => {
//     setSearchQuery(e.target.value);
//   };

//   // Function to generate shortcut name
//   const getShortcutName = (fullName) => {
//     if (!fullName) return '';
//     const names = fullName.split(' ');
//     return names.map(name => name[0].toUpperCase()).join('');
//   };

//   const filteredRecipes = recipes.filter((recipe) => {
//     // Convert the recipe title to lowercase
//     const titleLowerCase = recipe.title.toLowerCase();
    
//     // Split the search query into words and convert to lowercase
//     const searchWords = searchQuery.toLowerCase().split(' ');
  
//     // Check if any word in the search query is included in the recipe title
//     return searchWords.some((word) => titleLowerCase.includes(word));
//   });

//   return (
//     <div className="container mx-auto mt-8">
//       <div className="flex justify-left items-center my-4">
//         <IconSearch size={30} color="black" className="mt-xl mr-2" />
//         <TextInput
//           placeholder="Search a Recipe"
//           type="text"
//           name="search"
//           value={searchQuery}
//           onChange={handleSearchChange}
//           className="w-1/2 text-white border-2 border-green-200 border-opacity-40"
//         />
//         <Button
//           type="submit"
//           variant="filled"
//           color="#F22952"
//           className="ml-2"
//         >
//           Search
//         </Button>
//       </div>

//       {loading && <Loader />}
//       {error && <Alert color="red">{error}</Alert>}
      
//       {!loading && !error && (
//         <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {filteredRecipes.map((recipe, index) => (
//             <Card key={index} shadow="lg" padding="xl" radius="md" withBorder className="mb-4 mx-auto px-4">
//               {recipe.image && (
//                <div className="w-full h-full overflow-hidden rounded-lg">
//                <Image
//                src={recipe.image.startsWith("https://") 
//                 ? recipe.image 
//                 : recipe.image.endsWith(".jpg") || 
//                   recipe.image.endsWith(".png") || 
//                   recipe.image.endsWith(".jpeg") 
//                   ? recipe.image 
//                   : `http://localhost:8083/file/${recipe?.image}`
//               }
//               alt={recipe.title}
//               className="object-cover w-full h-full"
//                fit="cover"
//                // style={{ borderRadius: "0.5rem" }}
//              />
//              </div>
//               )}
//               <Title order={3} className="text-center">
//                 {recipe.title}
//               </Title>
              
//               <div className="flex text-md font-bold">
//                 <div className="text-lg font-bold text-red-500 ml-1">
//                   {recipe.createdBy?.fullName || recipe.fullName}
//                 </div>
//               </div>

//               <div className="text-md font-bold">Ingredients:</div>
//               <p className="text-md text-gray-600">{recipe.ingredients}</p>

              
//               <Collapse in={expandedInstructions[index]}>
               

//                 <div className="text-lg font-bold mt-4 mb-2">Instructions:</div>
//                 <p className="text-md text-gray-600">{recipe.instructions}</p>
//               </Collapse>
//               <div className="text-gray-500 mt-4 cursor-pointer font-bold" 
//                    onClick={() => toggleExpandInstructions(index)}>
//                 {expandedInstructions[index] ? "See Less..." : "See More..."}
//               </div>

//               <div className="mt-4 flex space-x-4">
//                 <button 
//                   className="flex items-center space-x-1"
//                   onClick={() => handleLike(index)}
//                 >
//                   <FaHeart 
//                     style={{
//                       borderColor: likes[index] ? '#E52B50' : 'black',
//                       color: likes[index] ? '#E01E4E' : '#F88379'
//                     }}
//                     size={30}
//                   />
//                   <span>{likes[index] || 100}</span>
//                 </button>
              
//                 <button 
//                 className="flex items-center space-x-1 pr-2xl"
//                 onClick={() => toggleExpandComments(index)}
//                 >
//                   <FaComment  
//                   style={{ borderColor: 'black', 
//                     color: comments[index] ? '#006400' : '#ACE1AF'
//                   }}
//                    size={30} />
//                   <span>
//                     {(comments[index] && comments[index].length) || 0}
//                     </span>
//                 </button>
              
//                 <button
//                   className="flex items-center space-x-1"
//                   onClick={() => handleFavourite(index)}
//                 >
//                   <FaBookmark 
//                     style={{
//                       borderColor: favourites[index] ? ' #F89880 ' : 'green',
//                       color: favourites[index] ? '#e34234' : ' #FEE8E2 '
//                     }}  
//                     size={30}
//                     className="flex ml-10 justify-end align end"
//                   />
//                 </button>
//               </div>

//               <Collapse  in={expandedComments[index]}>
//                 <div className="mt-4">
//                   <input
//                     type="text"
//                     value={newComments[index] || ""}
//                     onChange={(e) => handleCommentChange(index, e)}
//                     placeholder="Write a comment..."
//                     className="w-full p-2 border rounded"
//                   />
//               <Button 
//                 className="mt-2"
//                 onClick={() => handleCommentSubmit(index)}
//                 variant="filled" 
//                 color="#F22952"
//                >
//                {<IconSend  size={16}  />}
//             </Button >
//                 </div>
//                 {comments[index] && comments[index].length > 0 && (
//                   <div className="mt-4">
//                     <div className="text-lg font-bold">{recipe.createdBy?.fullName}</div>
//                     <div className="mt-2 space-y-2">
//                       {comments[index].map((comment, commentIndex) => (
//                         <div key={commentIndex} className="p-2 border rounded">
//                           {comment}
//                         </div>
//                       ))}
//                     </div>
//                   </div>
//                 )}
//               </Collapse >
//             </Card>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };


import React, { useEffect, useState } from "react";
import { Button, Loader, Alert, Collapse, Title, Card, Image, TextInput, Avatar } from "@mantine/core";
import { FaHeart, FaComment, FaStar, FaBookmark } from "react-icons/fa";
import axios from "axios";
import { IconSearch, IconSend } from "@tabler/icons-react";

export const GetRecipes = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [expandedInstructions, setExpandedInstructions] = useState({});
  const [expandedComments, setExpandedComments] = useState({});
  const [expandedUserData, setExpandedUserData] = useState({});
  const [likes, setLikes] = useState({});
  const [comments, setComments] = useState({});
  const [newComments, setNewComments] = useState({});
  const [favourites, setFavourites] = useState({});
  const [searchQuery, setSearchQuery] = useState(""); // State for search query

  const getRecipes = async () => {
    setLoading(true);
    setError(null);
    try {
      const [recipeRes, constantRes] = await Promise.all([
        axios.get("http://localhost:8083/recipe/"),
        axios.get("http://localhost:8083/recipesConstant")
      ]);
      const combinedRecipes = [...recipeRes.data.data, ...constantRes.data];
      setRecipes(combinedRecipes);
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

  const toggleExpandComments = (index) => {
    setExpandedComments((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  const toggleExpandUserData = (index) => {
    setExpandedUserData((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  // const handleLike = (index) => {
  //   setLikes((prevState) => ({
  //     ...prevState,
  //     [index]: (prevState[index] || 100) + 1,
  //   }));
  // };

  const handleLike = (index) => {
    // Check if already liked
    if (likes[index]) {
      // Unlike if already liked
      setLikes((prevState) => {
        const newLikes = { ...prevState };
        delete newLikes[index];
        return newLikes;
      });
    } else {
      // Like if not already liked
      setLikes((prevState) => ({
        ...prevState,
        [index]: (prevState[index] || 200) + 1,
      }));
    }
  };

  const handleCommentChange = (index, e) => {
    setNewComments((prevState) => ({
        ...prevState,
        [index]: e.target.value,
    }));
  };

  const handleCommentSubmit = (index) => {
    if (!newComments[index]) return;
    setComments((prevState) => ({
        ...prevState,
        [index]: [...(prevState[index] || []), newComments[index]],
    }));
    setNewComments((prevState) => ({
        ...prevState,
        [index]: '',
    }));
  };

  const handleFavourite = (index) => {
    setFavourites((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Function to generate shortcut name
  const getShortcutName = (fullName) => {
    if (!fullName) return '';
    const names = fullName.split(' ');
    return names.map(name => name[0].toUpperCase()).join('');
  };

  const filteredRecipes = recipes.filter((recipe) => {
    // Convert the recipe title to lowercase
    const titleLowerCase = recipe.title.toLowerCase();
    
    // Split the search query into words and convert to lowercase
    const searchWords = searchQuery.toLowerCase().split(' ');
  
    // Check if any word in the search query is included in the recipe title
    return searchWords.some((word) => titleLowerCase.includes(word));
  });

  return (
    <div className="container mx-auto mt-8">
      <div className="flex justify-left items-center my-4">
        <IconSearch size={30} color="black" className="mt-xl mr-2" />
        <TextInput
          placeholder="Search a Recipe"
          type="text"
          name="search"
          value={searchQuery}
          onChange={handleSearchChange}
          className="w-1/2 text-white border-2 border-green-200 border-opacity-40"
        />
        <Button
          type="submit"
          variant="filled"
          color="#F22952"
          className="ml-2"
        >
          Search
        </Button>
      </div>

      {loading && <Loader />}
      {error && <Alert color="red">{error}</Alert>}
      
      {!loading && !error && (
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredRecipes.map((recipe, index) => (
            <Card key={index} shadow="lg" padding="xl" radius="md" withBorder className="mb-4 mx-auto px-4">
              {recipe.image && (
               <div className="w-full h-full overflow-hidden rounded-lg">
               <Image
               src={recipe.image.startsWith("https://") 
                ? recipe.image 
                : recipe.image.endsWith(".jpg") || 
                  recipe.image.endsWith(".png") || 
                  recipe.image.endsWith(".jpeg") 
                  ? recipe.image 
                  : `http://localhost:8083/file/${recipe?.image}`
              }
              alt={recipe.title}
              className="object-cover w-full h-full"
               fit="cover"
               // style={{ borderRadius: "0.5rem" }}
             />
             </div>
              )}
              <Title order={3} className="text-center">
                {recipe.title}
              </Title>
              
              <div className="flex text-md font-bold">
                <div className="text-lg font-bold text-red-500 ml-1">
                  {recipe.createdBy?.fullName || recipe.fullName}
                </div>
              </div>

              <div className="text-md font-bold">Ingredients:</div>
              <p className="text-md text-gray-600">{recipe.ingredients}</p>

              
              <Collapse in={expandedInstructions[index]}>
                <div className="text-lg font-bold mt-4 mb-2">Instructions:</div>
                <p className="text-md text-gray-600">{recipe.instructions}</p>
              </Collapse>
              <div className="text-gray-500 mt-4 cursor-pointer font-bold" 
                   onClick={() => toggleExpandInstructions(index)}>
                {expandedInstructions[index] ? "See Less..." : "See More..."}
              </div>
              {/* Display like button with count */}
              <div className="mt-4 flex items-center space-x-4">
                <button 
                  className="flex items-center space-x-1"
                  onClick={() => handleLike(index)}
                >
                  <FaHeart 
                    style={{
                      color: likes[index] ? '#E01E4E' : '#F88379',
                      cursor: 'pointer',
                    }}
                    size={30}
                  />
                  <span>{likes[index] || 200}</span>
                </button>
              </div>

              {/* <div className="mt-4 flex space-x-4">
                <button 
                  className="flex items-center space-x-1"
                  onClick={() => handleLike(index)}
                >
                  <FaHeart 
                    style={{
                      borderColor: likes[index] ? '#E52B50' : 'black',
                      color: likes[index] ? '#E01E4E' : '#F88379'
                    }}
                    size={30}
                  />
                  <span>{likes[index] || 100}</span>
                </button> */}
              
                {/* <button 
                className="flex items-center space-x-1 pr-2xl"
                onClick={() => toggleExpandComments(index)}
                >
                  <FaComment  
                  style={{ borderColor: 'black', 
                    color: comments[index] ? '#006400' : '#ACE1AF'
                  }}
                   size={30} />
                  <span>
                    {(comments[index] && comments[index].length) || 0}
                    </span>
                </button> */}
              
                {/* <button
                  className="flex items-center space-x-1"
                  onClick={() => handleFavourite(index)}
                >
                  <FaBookmark 
                    style={{
                      borderColor: favourites[index] ? ' #F89880 ' : 'green',
                      color: favourites[index] ? '#e34234' : ' #FEE8E2 '
                    }}  
                    size={30}
                    className="flex ml-10 justify-end align end"
                  />
                </button> */}
              {/* </div> */}

              {/* <Collapse  in={expandedComments[index]}>
                <div className="mt-4">
                  <input
                    type="text"
                    value={newComments[index] || ""}
                    onChange={(e) => handleCommentChange(index, e)}
                    placeholder="Write a comment..."
                    className="w-full p-2 border rounded"
                  />
              <Button 
                className="mt-2"
                onClick={() => handleCommentSubmit(index)}
                variant="filled" 
                color="#F22952"
               >
               {<IconSend  size={16}  />}
            </Button >
                </div>
                {comments[index] && comments[index].length > 0 && (
                  <div className="mt-4">
                    <div className="text-lg font-bold">{recipe.createdBy?.fullName}</div>
                    <div className="mt-2 space-y-2">
                      {comments[index].map((comment, commentIndex) => (
                        <div key={commentIndex} className="p-2 border rounded">
                          {comment}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </Collapse > */}
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};
