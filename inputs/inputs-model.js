const db = require('../database/dbConfig.js');

module.exports = {
  add,
  find,
  findBy,
  findById,
  update,
  remove,
};

function find() {
  return db('inputs').select('id', 'description', 'location', 'idea');
}

function findBy(filter) {
  return db('inputs').where(filter);
}

async function add(inputs) {
  console.log(inputs)
  // const [id] = await db('inputs').insert(inputs);
  return db('inputs').insert(inputs)
  .then( ids => {
    // console.log(ids)
    const [id] = ids;
  
    return findById(id);
  })
  // return findById(id);
}

function findById(id) {
  return db('inputs')
    .where({ id })
    .first();
}

function update(changes, id) {
    return db('inputs')
        .where('id', Number(id))
        .update(changes);
}

function remove(id) {
    return db('inputs')
        .where("id", id)
        .del();
}