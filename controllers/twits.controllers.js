const Twit = require("../models/Twit.model");

module.exports.twitController = {
  addTwit: async (req, res) => {
    try {
      const Twittt = await Twit.create({
        text: req.body.text,
        user: req.params.user,
      });

      res.json(Twittt);
    } catch (error) {
      res.json("error");
    }
  },

  getTwit: async (req, res) => {
    try {
      const getTwittt = await Twit.find().populate('like');
      res.json(getTwittt);
    } catch (error) {
      res.json(error);
    }
  },

  delTwit: async (req, res) => {
    try {
      const delTwittt = await Twit.findByIdAndDelete(req.params.id);
      res.json(delTwittt);
    } catch (error) {
      res.json(error);
    }
  },

  addLikes: async (req, res) => {
    try {
      const addLik = await Twit.findByIdAndUpdate(req.params.id,
        {
            text: req.body.text,
            user: req.params.user,
            $push: {like: req.body.like}
          });
      res.json(addLik);
    } catch (error) {
      res.json(error);
    }
  },
};
