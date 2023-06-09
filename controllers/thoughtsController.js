const { User, Thoughts } = require('../models')

module.exports = {
    async getThoughts(req, res) {
        try {
          const thoughts = await Thoughts.find()
          res.json(thoughts)
        } catch (err) {
            res.status(500).json(err)
        }
    },
    async getSingleThoughts(req, res) {
        try {
          const thoughts = await Thoughts.findOne()
          res.json(thoughts)
        } catch (err) {
            res.status(500).json(err)
        }
    },
}