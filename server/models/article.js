let mongoose = require('mongoose');

var articleSchema = mongoose.Schema({
  title: String,
  body: String,
  image: String,
  url: {
    type: String,
    unique: true
  },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Article', articleSchema);
