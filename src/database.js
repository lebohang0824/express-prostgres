require('dotenv').config();

const Client = require("pg").Client;
const client = new Client();

client.connect()

const createVisitorsTable = async () => {

	const sql = `
		CREATE TABLE IF NOT EXISTS visitors (
		    id SERIAL PRIMARY KEY,
			    name varchar(255),
			    age int,
			    date_of_visit date,
			    time_of_visit time,
			    assistant varchar(255),
			    comments text
			);
	`;

	const res = await client.query(sql);

}

const addNewVisitor = async (visitor_name, visitor_age, date_of_visit, time_of_visit, assistant, comments) => {

	await createVisitorsTable();

	const sql = `
		INSERT 
		INTO visitors 
		(name, age, date_of_visit, time_of_visit, assistant, comments) 
		VALUES ($1, $2, $3, $4, $5, $6) RETURNING *
	`;
	
	const data = [visitor_name, visitor_age, date_of_visit, time_of_visit, assistant, comments];

	const res = await client.query(sql, data);
	
	// Results
	return res.rows
}

module.exports = addNewVisitor;