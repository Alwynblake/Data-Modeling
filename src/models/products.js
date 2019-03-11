'use strict';

// const schema = require('./products.schema.js');

const schema = {
};

class Products {

  constructor() {
    this.database = [];
  }

  get(id) {
    let queryObject = id ? {id} : {};
    return schema.find(queryObject);
  }

  post(record) {
    let newEntry = new schema(entry);
    return newEntry.save();
  }

  put(id, record) {
    return schema.findByIdAndUpdate(id, entry, {new:true});
  }

  delete(id) {
    return schema.findByIdAndDelete(id);

  }

}

module.exports = Products;
