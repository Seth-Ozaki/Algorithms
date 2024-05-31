/* ===================
   ==== B O N U S ====
   ===================
*/

/*
Given a table name string and an object whose key value pairs represent column names and values for the columns
return a SQL insert statement string
Tip: string interpolation (using back ticks, the key to the left of num 1 key)
Bonus: after solving it, write a 2nd solution focusing on functional programming using built in methods
*/

const table = "users";

const insertData1 = { first_name: "John", last_name: "Doe" };
const expectedA = "INSERT INTO users (first_name, last_name) VALUES ('John', 'Doe');";


// Bonus:
const insertData2 = {
    first_name: "John",
    last_name: "Doe",
    age: 30,
    is_admin: false,
};
const expectedB =
    "INSERT INTO users (first_name, last_name, age, is_admin) VALUES ('John', 'Doe', 30, -1);";

// R.I.O.T.
// DRIVER 🚗
// PRESENTER 🧑‍🏫
// NAVIGATOR 🧭
function insert(tableName, columnValuePairs) {
    let key = [];
    let value = [];

    for (let i in columnValuePairs) {
        key.push(i);
        let index = columnValuePairs[i];
        if (typeof index === "string") {
            value.push(`'${index}'`);
        } else {
            value.push(typeof index === "boolean" ? (index ? 1 : -1) : index);
        }
    }

    key = key.join(', ');
    value = value.join(', ');

    return `INSERT into ${tableName} (${key}) VALUES (${value})`;
}

console.log(insert(table, insertData1));
console.log(insert(table, insertData2));
