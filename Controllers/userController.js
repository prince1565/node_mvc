const  User = require( '../Model/user');

// Create a new user
 const createUser = async (req, res) => {
    console.log(req.body);
    
  try {
    const { name, emailaddress, contactno } = req.body;
    const user = await User.create({ name, emailaddress, contactno });
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ message: 'Error creating user', error });
  }
};

// Get all users
const getUsers = async (req, res) => {
  try {
    const users = await User.findAll();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving users', error });
  }
};

// Update a user
 const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, email, password } = req.body;
    await User.update({ name, email, password }, { where: { id } });
    res.status(200).json({ message: 'User updated successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error updating user', error });
  }
};

// Delete a user
 const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    await User.destroy({ where: { id } });
    res.status(200).json({ message: 'User deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting user', error });
  }
};


module.exports = {
    createUser,
    getUsers,
    updateUser,
    deleteUser
  };