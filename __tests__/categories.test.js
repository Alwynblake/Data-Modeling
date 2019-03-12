const Categories = require('../categories.js');
const Categories = new Categories();

describe('Categories Model', () => {
  it('can post() a new category', () => {
    let obj = {name:'Test category'};
    return teams.post(obj)
        .then(entry => {
          Object.keys(obj).forEach(key =>{
            expect(entry[0][key]).toEqual(obj[key]);
          });
        })
        .catch(e => console.error('ERR', e) );
  });

  it('can get() a category', () => {
    let obj = {name:'Test Category'};
    return categories.post(obj)
        .then(entry => {
          return teams.get(entry._id)
              .then(team => {
                Object.keys(obj).forEach(key =>{
                  expect(team[0][key]).toEqual(obj[key]);
                });
              });
        });
  });

});