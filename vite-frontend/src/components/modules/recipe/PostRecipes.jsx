

// import React, { useState, useEffect } from "react";
// import { Container, Title, Stack, TextInput, Button, Text, Image, SimpleGrid, Card } from "@mantine/core";
// import { Dropzone, IMAGE_MIME_TYPE } from "@mantine/dropzone";
// import { PostRequest } from "../../../plugins/https";

// export const PostRecipes = () => {
//     const [recipes, setRecipes] = useState([]);
//     const [recipe, setRecipe] = useState({
//         title: "",
//         ingredients: "",
//         instructions: "",
//         image: null,
//         imageUrl: "",
//         createdBy: "",
//     });
//     const [files, setFiles] = useState([]);
//     const [userId, setUserId] = useState(null);

//     useEffect(() => {
//         const userData = JSON.parse(localStorage.getItem("user"));
//         if (userData) {
//             setUserId(userData._id); // Assuming userData contains _id field for user ID
//         } else {
//             navigate("/home"); // Handle user not logged in scenario
//         }
//     }, []);

//     const handleRecipe = (event) => {
//         const { name, value } = event.target;
//         setRecipe(prevRecipe => ({
//             ...prevRecipe,
//             [name]: value,
//         }));
//     };
//     const handleDrop = (acceptedFiles) => {
//         setFiles(acceptedFiles);
//         setRecipe(prevRecipe => ({
//             ...prevRecipe,
//             image: acceptedFiles[0], // Store the file object in recipe.image
//             imageUrl: "", // Clear imageUrl when file is dropped
//         }));
//     };

//     const previews = files.map((file, index) => (
//         <Image
//             key={index}
//             src={URL.createObjectURL(file)}
//             alt={`Preview ${index + 1}`}
//             onLoad={() => URL.revokeObjectURL(file)}
//             height={200}
//         />
//     ));

//     const convertToFormData = (obj) => {
//         const formData = new FormData();
//         formData.append("title", recipe.title);
//         formData.append("ingredients", recipe.ingredients);
//         formData.append("instructions", recipe.instructions);
//         formData.append("createdBy", userId);
//         if (recipe.image) {
//             formData.append("image", recipe.image);
//         } else if (recipe.imageUrl) {
//             formData.append("imageUrl", recipe.imageUrl);
//         }
//         return formData;
//     };

//     const addRecipe = async (event) => {
//         event.preventDefault();

//         // Validate all required fields
//         if (!recipe.title || !recipe.ingredients || !recipe.instructions || !userId) {
//             alert("All fields are required");
//             return;
//         }

//         const formData = convertToFormData();

//         try {
//             const res = await PostRequest("/recipe", formData, {
//                 headers: {
//                     "Content-Type": "multipart/form-data",
//                     "Authorization": `Bearer ${localStorage.getItem('token')}`
//                 },
//             });
//             console.log("Response from server:", res);

//             if (res.data && res.data.data) {
//                 // Update recipes state with new recipe data

//                 // Recipe added successfully
//             setRecipes([...recipes, res.data.data]);
//                 setRecipe({
//                     title: "",
//                     ingredients: "",
//                     instructions: "",
//                     image: null,
//                     imageUrl: "",
//                     createdBy: "",
//                 });
//                 setFiles([]);
//                 alert("Recipe added successfully!");
//             } else {
//                 console.error("Unexpected response structure:", res);
//                 alert("Unexpected response from server. Please try again.");
//             }
//         } catch (error) {
//             console.error("Error adding recipe:", error);
//             alert("Error adding recipe. Please try again.");
//         }
//     };

//     return (
//         <section className="my-sm">
//             <Container size="sm" className="m-sm p-sm rounded-lg shadow-lg border-2 border-black-600 border-opacity-100 bg-red-50">
//                 <Title order={2} align="center" className="mb-sm">
//                     Add a New Recipe
//                 </Title>
//                 <form onSubmit={addRecipe}>
//                     <Stack spacing="xl">
//                         <TextInput
//                             label="Recipe Title"
//                             name="title"
//                             value={recipe.title}
//                             onChange={handleRecipe}
//                             placeholder="Title"
//                             required
//                         />
//                         <TextInput
//                             label="Ingredients"
//                             name="ingredients"
//                             value={recipe.ingredients}
//                             onChange={handleRecipe}
//                             placeholder="Ingredients"
//                             required
//                         />
//                         <TextInput
//                             className="my-sm"
//                             label="Instructions"
//                             name="instructions"
//                             value={recipe.instructions}
//                             onChange={handleRecipe}
//                             placeholder="Instructions"
//                             required
//                         />
//                         <div>
//                             {/* <Card shadow="sm" padding="md" radius="md" withBorder className="my-md">
//                                 <Dropzone accept={IMAGE_MIME_TYPE} onDrop={setFiles} maxFiles={1}>
//                                     <Text align="center">
//                                         <svg className="w-[31px] h-[31px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
//                                             <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.4" d="m3 16 5-7 6 6.5m6.5 2.5L16 13l-4.286 6M14 10h.01M4 19h16a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Z"/>
//                                         </svg>
//                                         Drop image here or click to select
//                                     </Text>
//                                 </Dropzone>
//                                 <SimpleGrid cols={1} mt={previews.length > 0 ? "xl" : 0}>
//                                     {previews}
//                                 </SimpleGrid>
//                             </Card> */}
//                             <TextInput
//                                 className="my-sm"
//                                 label="Image URL (optional)"
//                                 name="imageUrl"
//                                 value={recipe.imageUrl}
//                                 onChange={handleRecipe}
//                                 placeholder="Enter image URL"
//                             />
//                         </div>
//                         <Button type="submit" fullWidth variant="filled" color="#DE1738">
//                             Add Recipe
//                         </Button>
//                     </Stack>
//                 </form>
//             </Container>
//         </section>
//     );
// };


import React, { useState, useEffect } from "react";
import { Container, Title, Stack, TextInput, Button, Text, Image, SimpleGrid, Card } from "@mantine/core";
import { Dropzone, IMAGE_MIME_TYPE } from "@mantine/dropzone";
import { PostRequest } from "../../../plugins/https";

const PostRecipes = () => {
    const [recipe, setRecipe] = useState({
        title: "",
        ingredients: "",
        instructions: "",
        image: null,
        imageUrl: "",
        createdBy: "",
    });
    const [files, setFiles] = useState([]);
    const [userId, setUserId] = useState(null);

    useEffect(() => {
        const token = JSON.parse(localStorage.getItem("user"));
        if (token) {
            setUserId(token._id); // Assuming user ID is stored in token._id
        } else {
            navigate("/home"); // Handle user not logged in scenario
        }
    }, []);

    const handleRecipe = (event) => {
        const { name, value } = event.target;
        setRecipe(prevRecipe => ({
            ...prevRecipe,
            [name]: value,
        }));
    };

    const handleDrop = (acceptedFiles) => {
        setFiles(acceptedFiles);
        setRecipe(prevRecipe => ({
            ...prevRecipe,
            image: acceptedFiles[0], // Store the file object in recipe.image
            imageUrl: "", // Clear imageUrl when file is dropped
        }));
    };

    const convertToFormData = () => {
        const formData = new FormData();
        formData.append("title", recipe.title);
        formData.append("ingredients", recipe.ingredients);
        formData.append("instructions", recipe.instructions);
        formData.append("createdBy", userId);
        if (recipe.image) {
            formData.append("image", recipe.image);
        } else if (recipe.imageUrl) {
            formData.append("imageUrl", recipe.imageUrl);
        }
        return formData;
    };

    const addRecipe = async (event) => {
        event.preventDefault();

        if (!recipe.title || !recipe.ingredients || !recipe.instructions || !userId) {
            alert("All fields are required");
            return;
        }

        const formData = convertToFormData();

        try {
            const res = await PostRequest("/recipe", formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                    "Authorization": `Bearer ${localStorage.getItem('token')}`
                },
            });
            console.log("Response from server:", res);
            if (res.data && res.data.data) {
                setRecipe({
                    title: "",
                    ingredients: "",
                    instructions: "",
                    image: null,
                    imageUrl: "",
                    createdBy: "",
                });
                setFiles([]);
                alert("Recipe added successfully!");
            } else {
                console.error("Unexpected response structure:", res);
                alert("Recipe added successfully!");
            }
        } catch (error) {
            console.error("Error adding recipe:", error);
            alert("Error adding recipe. Please try again.");
        }
    };

    const previews = files.map((file, index) => (
        <Image
            key={index}
            src={URL.createObjectURL(file)}
            alt={`Preview ${index + 1}`}
            onLoad={() => URL.revokeObjectURL(file)}
            height={200}
        />
    ));

    return (
        <section className="my-sm">
            <Container size="sm" className="m-sm p-sm rounded-lg shadow-lg border-2 border-black-600 border-opacity-100 ">
                <Title order={2} align="center" className="mb-sm">
                    Add a New Recipe
                </Title>
                <form onSubmit={addRecipe}>
                    <Stack spacing="xl">
                        <TextInput
                            label="Recipe Title"
                            name="title"
                            value={recipe.title}
                            onChange={handleRecipe}
                            placeholder="Title"
                            required
                            autoComplete="off"
                        />
                        <TextInput
                            label="Ingredients"
                            name="ingredients"
                            value={recipe.ingredients}
                            onChange={handleRecipe}
                            placeholder="Ingredients"
                            required
                             autoComplete="off"
                        />
                        <TextInput
                            className="my-sm"
                            label="Instructions"
                            name="instructions"
                            value={recipe.instructions}
                            onChange={handleRecipe}
                            placeholder="Instructions"
                            required
                             autoComplete="off"
                        />
                        <div>
                             <Card shadow="sm" padding="md" radius="md" withBorder className="my-md">
                                <Dropzone accept={IMAGE_MIME_TYPE} onDrop={setFiles} maxFiles={1}>
                                     <Text align="center">
                                         <svg className="w-[31px] h-[31px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                             <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.4" d="m3 16 5-7 6 6.5m6.5 2.5L16 13l-4.286 6M14 10h.01M4 19h16a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Z"/>
                                         </svg>
                                         Drop image here or click to select
                                     </Text>
                                 </Dropzone>
                                 <SimpleGrid cols={1} mt={previews.length > 0 ? "xl" : 0}>
                                     {previews}
                                 </SimpleGrid>
                             </Card>
                   
                            <TextInput
                                className="my-sm"
                                label="Image URL (optional)"
                                name="imageUrl"
                                value={recipe.imageUrl}
                                onChange={handleRecipe}
                                placeholder="Enter image URL"
                                 autoComplete="off"
                            />
                        </div>
                        <Button type="submit" fullWidth variant="filled" color="#DE1738">
                            Add Recipe
                        </Button>
                    </Stack>
                </form>
            </Container>
        </section>
    );
};

export default PostRecipes;
