const { ObjectId } = require('mongoose').Types;
const { Thoughts } = require('../models');

module.exports = {
  async getThoughts(req, res) {
    try {
      const thoughts = await Thought.find();

      const thoughtObj = {
        thoughts
      };

      res.json(thoughtObj);
    } catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  },
}