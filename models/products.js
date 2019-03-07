'use strict';



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
  
  post(entry) {
    let newEntry = new schema(entry);
    return newEntry.save();
  }

  put(id, entry) {
    return schema.findByIdAndUpdate(id, entry, {new:true});
  }

  delete(id) {
    return schema.findByIdAndDelete(id);

  }

}

module.exports = Products;
