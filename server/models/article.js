let mongoose = require('mongoose');

let { UPLOAD_DIR } = require('../constants');

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

articleSchema.methods.imageUrl = () => {
  return `${UPLOAD_DIR}/${this.image}`;
};

module.exports = mongoose.model('Article', articleSchema);
