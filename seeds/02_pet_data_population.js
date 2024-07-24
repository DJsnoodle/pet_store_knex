/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('pet').del()
  await knex('pet').insert([
    {id: 1, name: 'Siggy', pet_type_id: 2},
    {id: 2, name: 'Athena', pet_type_id: 3},
    {id: 3, name: 'Keagan', pet_type_id: 3},
    {id: 4, name: 'Bubbles', pet_type_id: 4},
  ]);
};
