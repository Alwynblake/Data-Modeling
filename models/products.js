'use strict';



const schema = require ('../models/products-schema.js');

class Products {

  constructor() {
    this.database = [];
  }

  get(_id) {
    let queryObject = id ? {id} : {};
    return schema.find(queryObject);
  }
  
  post(entry) {
    let newEntry = new schema(entry);
    return newEntry.save();
  }

  put(_id, entry) {
    return schema.findByIdAndUpdate(id, entry, {new:true});
  }

  delete(_id) {
    return schema.findByIdAndDelete(id);

  }

}

module.exports = Products;
