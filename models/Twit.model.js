const mongoose = require("mongoose");

const twitSchema = mongoose.Schema({
  text: String,
  like: [{
    type: mongoose.SchemaTypes.ObjectId,
    ref: "User",
  }],
});

const Twit = mongoose.model("Twit", twitSchema);
module.exports = Twit;
