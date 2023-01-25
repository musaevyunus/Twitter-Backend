const Comment = require("../models/Comment.model");

module.exports.commentController = {
  addCom: async (req, res) => {
    try {
      const Comm = await Comment.create({
        text: req.body.text,
        user: req.body.user,
        toTwit: req.body.toTwit,
      });

      res.json(Comm);
    } catch (error) {
      res.json("error");
    }
  },

  getCom: async (req, res) => {
    try {
      const getCommm = await Comment.find().populate("user toTwit");
      res.json(getCommm);
    } catch (error) {
      res.json(error);
    }
  },

  deleteCom: async (req, res) => {
    try {
      const delCom = await Comment.findByIdAndDelete(req.params.id);
      res.json(delCom);
    } catch (error) {
      res.json(error);
    }
  },
};
