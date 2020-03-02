
exports.up = async function(knex) {
    await knex.schema.createTable("Cars", (table) => {
        // table.integer("id").notNull(),unique().primary()
        table.increments("id")
        table.text("Make").notNull()
        table.text("Model").notNull()
        table.float("Year").notNull()
        table.float("Mileage").notNull()
    })
};

exports.down = async function(knex) {
  await knex.schema.dropTableIfExists("Cars")
};
