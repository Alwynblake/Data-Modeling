'use strict';

const uuid = require('uuid/v4');
class Categories {

  constructor() {
    this.database = [];
  }

  get(_id) {
    let queryObject = _id ? {_id} : {}
  }
  
  post(record) {
    entry.id = uuid();
    let entry = this.sanitize(entry);
    if ( record.id ) {this.database.push(entry); }
    return Promise.resolve(entry);
  }

  put(_id, entry) {
    let entry = this.sanitize(entry);
    if ( record.id ) { this.database = this.database.map((item) => (item.id === id) ? record : item  ); }
    return Promise.resolve(record);
  }

  delete(_id) {
    this.database = this.database.filter((entry) => entry.id !== id );
    return Promise.resolve();
  }

  santitize(entry) {


    let valid = true;
    let record = {};

    Object.keys(schema).forEach( field => {
      if ( schema[field].required ) {
        if (entry[field]) {
          record[field] = entry[field];
        } else {
          valid = false;
        }
      }
      else {
        record[field] = entry[field];
      }
    });

    return valid ? record : undefined;
  }

}

module.exports = Categories;
