const User = require("../models/User.model");
const Twit = require("../models/Twit.model")
module.exports.userController = {
  addUser: async (req, res) => {
    try {
      const Userrr = await User.create({
        name: req.body.name,
      });

      res.json(Userrr);
    } catch (error) {
      res.json("error");
    }
  },

  getUser: async (req, res) => {
    try {
      const getUserrr = await User.findById(req.params.id).populate("save");
      res.json(getUserrr);
    } catch (error) {
      res.json(error);
    }
  },

  delUser: async (req, res) => {
    try {
      const delUserrr = await User.findByIdAndDelete(req.params.id);
      res.json(delUserrr);
    } catch (error) {
      res.json(error);
    }
  },

  usSaves: async (req, res) => {
    try {
        const savUser = await User.findByIdAndUpdate(req.params.userid, {$push:{save: req.params.twitid}})
        ;
      res.json(savUser);
    } catch (error) {
      res.json(error);
    }
  },
};
