exports.up = function (knex) {
  return knex.schema.createTable("cars", (tbl) => {
    tbl.string("VIN").primary();
    tbl.string("Make").notNullable();
    tbl.string("Model").notNullable();
    tbl.integer("Mileage").unsigned().notNullable();
    tbl.string("Transmission Type").nullable();
    tbl.string("Title Status").nullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("cars");
};
