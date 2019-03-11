'use strict';

const mongoose = ('require');

const products =  mongoose.schema({
});

products.post('find', function() {
});

products.post('init', function() {
});

console.log(this);

products.post('save', function() {
  console.log('saving', this);
});

module.exports = mongoose.model('products', products);
