const { Users } = require('../models')
const db = require('../db')

const getAllUsers = async (req, res) => {
  try {
    const users = await Users.find({})
    res.json(users)
  } catch (error) {
    console.error(error)
    res.status(500).send('Error fetching users')
  }
}

const getUserByEmail = async (req, res) => {
  try {
    console.log(req.params.email)
      const userEmail = await Users.find( {'email': req.params.email})
      if (userEmail) {
          return res.json(userEmail);
      }
      return res.status(404).send('email not found');
  } catch (error) {
      return res.status(500).send(error.message);
  }
}

const getUserById = async (req, res) => {
  try {
    console.log(`gettting id`)
    console.log(req.params.id)
    const id = req.params.id
    const user = await Users.findById(id)
    if (!user) throw new Error('404 User not found')
    res.json(user)
  } catch (error) {
    console.error(error)
    res.status(404).send('User not found')
  }
}

const createUser = async (req, res) => {
  try {
      const user = new Users({
        name: 'username4',
        address: '126 fake street',
        email: 'fakeemail.com',
        phoneNumber: 5555555558,
        password:`123`})
      await user.save()
      return res.status(201).json({
          user,
      });
  } catch (error) {
      return res.status(500).json({ error: error.message })
  }
}


const updateUser = async (req, res) => {
    try {
        let { id } = req.params;
        let user = await Users.findByIdAndUpdate(id, req.body, { new: true })
        if (user) {
            return res.status(200).json(user)
        }
        throw new Error("user not found")
    } catch (error) {
        return res.status(500).send(error.message);
    }
}


const deleteUser= async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await Users.findByIdAndDelete(id)
        if (deleted) {
            return res.status(200).send("user has been deleted");
        }
        throw new Error("user not found");
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

module.exports = {
  getAllUsers,
  getUserById,
  getUserByEmail,
  createUser,
  updateUser,
  deleteUser
}