const Recipe = require("./schema"); // Import your Recipe model here

const getAll = async (req, res) => {
  try {
    const data = await Recipe.find({}).populate(
      "createdBy",
      "fullName username email gender"
    );
    res.status(200).send({
      status: 200,
      message: "Data retrieved",
      data: data,
    });
  } catch (error) {
    res.status(500).send({
      status: 500,
      message: "Error retrieving data",
      error: error.message,
    });
  }
};

const getById = async (req, res) => {
  try {
    const data = await Recipe.findById(req.params.id).populate(
      "createdBy",
      "fullName username email gender"
    );
    if (data) {
      res.status(200).send({
        status: 200,
        message: "Data retrieved",
        data: data,
      });
    } else {
      res.status(404).send({
        status: 404,
        message: "Data not found",
      });
    }
  } catch (error) {
    res.status(500).send({
      status: 500,
      message: "Error retrieving data",
      error: error.message,
    });
  }
};
// const getRecipesByUserId = async (req, res) => {
//     try {
//         console.log(req.params);
//         const {userId }= req.params; // Extract userId from request parameters
//         const recipes = await Recipe.find({ createdBy: userId }).populate('createdBy', 'fullName username email gender'); // Populate createdBy field with user details

//         if (!recipes) {
//             return res.status(404).send({
//                 status: 404,
//                 message: 'No recipes found for the user'
//             });
//         }

//         res.status(200).send({
//             status: 200,
//             message: 'Recipes retrieved',
//             data: recipes
//         });
//     } catch (error) {
//         res.status(500).send({
//             status: 500,
//             message: 'Error retrieving recipes',
//             error: error.message
//         });
//     }
// };

const getRecipesByUserId = async (req, res) => {
  try {
    const userId = req.params.userId;
    const recipes = await Recipe.find({ createdBy: userId }).populate(
      "createdBy",
      "fullName username email gender"
    );

    if (!recipes) {
      return res.status(404).send({
        status: 404,
        message: "No recipes found for the user",
      });
    }

    res.status(200).send({
      status: 200,
      message: "Recipes retrieved",
      data: recipes,
    });
  } catch (error) {
    res.status(500).send({
      status: 500,
      message: "Error retrieving recipes",
      error: error.message,
    });
  }
};

// const create = async (req, res) => {
//     // console.log("Request body:", req.body);
//     console.log("CreatedBy:", req.body.createdBy);
//     try {
//         const { title, ingredients, instructions, imageUrl,createdBy} = req.body;

//         if (!title || !ingredients || !instructions ||!createdBy) {
//             return res.status(400).send({
//                 status: 400,
//                 message: 'All fields are required'
//             });
//         }

//         // Handle image upload or use URL
//         let image = '';
//         if (req.file) {
//             image = `/uploads/${req.file.filename}`;
//         } else if (imageUrl) {
//             image = imageUrl;
//         }

//   // Create new recipe object
//         const recipeData = {
//             title,
//             ingredients,
//             instructions,
//             createdBy,  // Assign userId from decoded token to createdBy field
//             image,
//         };
// // Save recipe to database
//         const data = await Recipe.create(recipeData);
//         res.status(201).send({
//             status: 201,
//             message:'Recipe created successfully',
//             data: data
//         });
//     } catch (error) {
//         console.error("Error creating recipe:", error);
//         res.status(400).send({
//             status: 400,
//             message: 'Error creating recipe',
//             error: error.message
//         });
//     }
// };
const create = async (req, res) => {
  try {
    const { title, ingredients, instructions, imageUrl, createdBy } = req.body;

    if (!title || !ingredients || !instructions || !createdBy) {
      return res.status(400).send({
        status: 400,
        message: "All fields are required",
      });
    }

    // Handle image upload
    let image = "";

    if (req.file) {
      image = req.file.filename; // ✅ ONLY store filename
    } else if (imageUrl) {
      image = imageUrl; // optional URL
    }

    const recipeData = {
      title,
      ingredients,
      instructions,
      createdBy,
      image, // filename stored
    };

    const data = await Recipe.create(recipeData);

    res.status(201).send({
      status: 201,
      message: "Recipe created successfully",
      data: data,
    });
  } catch (error) {
    console.error("Error creating recipe:", error);
    res.status(400).send({
      status: 400,
      message: "Error creating recipe",
      error: error.message,
    });
  }
};

const update = async (req, res) => {
  try {
    await Recipe.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).send({
      status: 200,
      message: "Data updated",
    });
  } catch (error) {
    res.status(400).send({
      status: 400,
      message: "Error updating data",
      error: error.message,
    });
  }
};

const remove = async (req, res) => {
  try {
    await Recipe.findByIdAndDelete(req.params.id);
    res.status(200).send({
      status: 200,
      message: "Data deleted",
    });
  } catch (error) {
    res.status(400).send({
      status: 400,
      message: "Error deleting data",
      error: error.message,
    });
  }
};

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove,
  getRecipesByUserId,
};
