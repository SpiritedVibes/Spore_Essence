const {Mushrooms} = require(`../models`)
const db = require('../db')

const getAllMushrooms = async (req ,res) => {
    try 
    {
    const mushrooms = await Mushrooms.find({})
    res.json(mushrooms)
    } catch (error) {
        console.error(error)
        res.send(`Error fetching mushrooms`)
    }
}

const getMushroomById = async (req,res) => {
    try {
        const id = req.params.id
        const mushroom = await Mushrooms.findById(id)
        if (!mushroom) throw new Error(`404 mushroom not found`)
            res.json(mushroom)
    } catch (error) {
        console.error(error)
        res.send(`mushroom not found`)
    }
}

const getMushroomByType = async (req, res) => {
    try { 
        const mushroom = await Mushrooms.find( {'type': req.params.type})
        console.log(mushroom)
        if (bike) {
            return res.json(msuhroom);
        }
        return res.status(404).send('mushroom type not found');
    } catch (error) {
        return res.status(500).send(error.message);
    }
  }

  const createMushroom = async (req, res) => {
    try {
        const mushroom = new Mushrooms(req.body)
        await mushroom.save()
        return res.status(201).json({mushroom,});
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
  }
  
  
  const updateMushroom = async (req, res) => {
      try {
          let { id } = req.params;
          let mushroom = await Mushrooms.findByIdAndUpdate(id, req.body, { new: true })
          if (mushroom) {
              return res.status(200).json(bike)
          }
          throw new Error("mushroom not found")
      } catch (error) {
          return res.status(500).send(error.message);
      }
  }
  
  
  const deleteMushroom= async (req, res) => {
      try {
          const { id } = req.params;
          const deleted = await Mushrooms.findByIdAndDelete(id)
          if (deleted) {
              return res.status(200).send("Mushroom has been deleted");
          }
          throw new Error("mushroom not found");
      } catch (error) {
          return res.status(500).send(error.message);
      }
  }
  
  module.exports = {
    getAllMushrooms,
    getMushroomById,
    getMushroomByType,
    createMushroom,
    updateMushroom,
    deleteMushroom
  }