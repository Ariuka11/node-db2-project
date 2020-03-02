
exports.seed = async function(knex) {
    await knex("cars").truncate()
    await knex("cars").insert([
      {make: 'toyota', model: 'corolla', year: 2011, mileage: 100000, transmission: 'auto'},
      {make: 'honda', model: 'civic', year: 2013, mileage: 70000, transmission: 'auto'},
      {make: 'kia', model: 'rio', year: 2015, mileage: 40000, transmission: 'auto'},
      {make: 'hyundai', model: 'elantra', year: 2011, mileage: 172000, transmission: 'auto'},
      {make: 'nissan', model: 'altima', year: 2012, mileage: 90000,  title : 'salvage' },
     {make: 'subaru', model: 'forester', year: 2013, mileage: 54700, title : 'clean' }
   ])  
};
