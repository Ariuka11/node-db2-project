
exports.up = async function(knex) {
    await knex.schema.createTable("Cars", (table) => {
        // table.integer("id").notNull(),unique().primary()
        table.increments("id")
        table.text("make").notNull()
        table.text("model").notNull()
        table.float("year").notNull()
        table.float("mileage").notNull()
    })
};

exports.down = async function(knex) {
  await knex.schema.dropTableIfExists("Cars")
};
