
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Avatar, Card, Collapse, Title, Image } from '@mantine/core';

export const Profile = () => {
    const [userDetails, setUserDetails] = useState({});
    const [recipes, setRecipes] = useState([]);
    const [expandedInstructions, setExpandedInstructions] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        console.log("Recipes state is");
        console.log(recipes);
    }, [recipes]);

    useEffect(() => {
        const fetchUserProfile = async () => {
            const userData = JSON.parse(localStorage.getItem("user"));
            if (userData) {
                setUserDetails(userData);

                try {
                    const response = await axios.get(`http://localhost:8083/Recipe/getRecipesByUserId/${userData._id}`);
                    console.log("Recipe response:", response.data);
                    setRecipes(response.data.data);
                } catch (err) {
                    console.error("Error fetching recipes:", err);
                    setError("Error fetching recipes");
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
        return <div className='flex h-screen justify-center items-center'>Loading...</div>;
    }

    if (error) {
        return <div className='flex h-screen justify-center items-center'>{error}</div>;
    }
    const toggleExpandInstructions = (index) => {
        setExpandedInstructions((prevState) => ({
          ...prevState,
          [index]: !prevState[index],
        }));
      };
    

    const getInitials = (fullName) => {
        if (!fullName) return '';
        const nameParts = fullName.split(' ');
        const initials = nameParts.map(part => part.charAt(0).toUpperCase()).join('');
        return initials;
    };
    return (
        <div className='bg-white p-6 rounded-lg shadow-lg text-left'>
            <h1 className='text-2xl font-bold m-4'>Profile</h1>
            {userDetails && (
                <div key={userDetails._id} className='m-4'>
                    <Avatar
                        color="red"
                        radius="xl"
                        size={70}
                        className="cursor-pointer hover:bg-gray-100"
                    >
                        {getInitials(userDetails.fullName)}
                    </Avatar>
                    <p className='text-gray-700'><strong className='text-black'>Username:</strong> {userDetails.username}</p>
                    <p className='text-gray-700'><strong className='text-black'>Full Name:</strong> {userDetails.fullName}</p>
                    <p className='text-gray-700'><strong className='text-black'>Gender:</strong> {userDetails.gender}</p>
                    <p className='text-gray-700'><strong className='text-black'>Phone:</strong> {userDetails.phone}</p>
                    <p className='text-gray-700'><strong className='text-black'>Email:</strong> {userDetails.email}</p>
                </div>
            )}
            <hr className="my-6 border-gray-300" />
            <h2 className='text-xl font-bold mb-2'>My Recipes:</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                {recipes.length > 0 ? (
                    recipes.map((recipe, index) => (
                        <Card key={index} className="bg-gray-100 p-4 rounded-lg shadow-md">
                            <Image src={recipe.image} alt={recipe.title} className="object-cover w-full h-full" fit="cover" />
                            <Title className="text-xl font-bold mb-2 text-center">{recipe.title}</Title>
                            <p className="text-gray-700"><strong className='text-black'>Ingredients:</strong> {recipe.ingredients}</p>

                            <Collapse in={expandedInstructions[index]}>
                            <p className="text-gray-700"><strong className='text-black'>Instructions:</strong> {recipe.instructions}</p>
                            </Collapse>
                            <div className="text-gray-500 mt-4 cursor-pointer font-bold" 
                   onClick={() => toggleExpandInstructions(index)}>
                {expandedInstructions[index] ? "See Less..." : "See More..."}
              </div>
                        </Card>
                    ))
                ) : (
                    <p>No recipes found.</p>
                )}
            </div>
        </div>
    );
};

export default Profile;
