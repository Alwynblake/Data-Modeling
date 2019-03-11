'use strict';

const Products = require('../models/products.js');

const products = new Products();

const supergoose = require('./supergoose.js');

beforeAll(supergoose.startDB);
afterAll(supergoose.stopDB);

describe('Product Model', () => {
 it('can post() a new product', () => {
    let obj = {entry:'An thing'};
    return products.post(obj)
        .then(entry => {
          Object.keys(obj).forEach(key => {
            expect(entry[key]).toEqual(obj[key]);
          });
        });
 });
  it('can get() a product', () => {
    let obj = {entry:'A second thing'};
    return products.post(obj)
        .then(entry => {
          return products.get(entry._id)
              .then(products => {
                Object.keys(obj).forEach(key => {
                  expect(products[0][key]).toEqual(obj[key]);
              });
          });
        });
  });
});
