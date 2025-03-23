// Ensure the correct path to your User model
const User = require("../Model/UserModel"); // ✅ Ensure correct path

// 🟢 Get All Users
const getAllUsers = async (req, res, next) => {
    try {
        const users = await User.find(); // Retrieve all users from the database
        if (!users || users.length === 0) {
            return res.status(404).json({ message: "No users found" });
        }
        return res.status(200).json({ users });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: "Server error", error: err.message });
    }
};

// 🟢 Add a New User
const addUsers = async (req, res, next) => {
    const { name, email, age, address } = req.body; // Destructure fields from the request body

    if (!name || !email || !age || !address) {
        return res.status(400).json({ message: "All fields are required" });
    }

    try {
        const newUser = new User({ name, email, age, address });
        await newUser.save(); // Save the new user to the database
        return res.status(201).json(newUser); // Return the created user
    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: "Error adding user", error: err.message });
    }
};

// 🟢 Get a User by ID
const getById = async (req, res, next) => {
    const id = req.params.id; // Get user ID from request parameters
    let user;
    try {
        user = await User.findById(id); // Find the user by ID
    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: "Error retrieving user", error: err.message });
    }

    if (!user) {
        return res.status(404).json({ message: "User not found" }); // If no user is found
    }

    return res.status(200).json({ user }); // Return the found user
};

// 🟢 Update User by ID
const updateUser = async (req, res, next) => {
    const id = req.params.id; // Get the user ID from request parameters
    const { name, email, age, address } = req.body; // Destructure the updated user data from request body

    let updatedUser;
    try {
        updatedUser = await User.findByIdAndUpdate(id, 
            { name, email, age, address }, 
            { new: true } // Return the updated user object
        );
    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: "Error updating user", error: err.message });
    }

    if (!updatedUser) {
        return res.status(404).json({ message: "Unable to update user details" });
    }

    return res.status(200).json({ updatedUser }); // Return the updated user
};

//delete user
const deleteUser = async (req, res, next) => {
    const id = req.params.id;
    
    let user;
    try{
        user = await User.findByIdAndDelete(id);
    }catch (err){
        console.log(err);
    }
    if (!user) {
        return res.status(404).json({ message: "Unable to detele user details" });
    }

    return res.status(200).json({ user }); // Return the delete user
}


module.exports = { getAllUsers, addUsers, getById, updateUser, deleteUser }; // Export the controller functions
