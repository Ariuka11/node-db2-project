
exports.seed = async function(knex) {
    await knex("cars").truncate()
    await knex("cars").insert([
      {make: 'honda', model: 'civic', year: 2013, mileage: 70000},
      {make: 'toyota', model: 'corolla', year: 2011, mileage: 100000},
      {make: 'kia', model: 'rio', year: 2015, mileage: 40000},
      {make: 'hyundai', model: 'elantra', year: 2011, mileage: 172000},
      {make: 'nissan', model: 'altima', year: 2012, mileage: 90000},
      {make: 'subaru', model: 'forester', year: 2013, mileage: 54700}
    ])  
};
