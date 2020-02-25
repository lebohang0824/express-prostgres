describe("Testing express end points", () => {

	const axios = require('axios');
	const readline = require('readline');

	const form = require('./html-form');
	const success = require('./html-success');

	it('Should render form', async () => {
		const res = await axios.get('http://127.0.0.1:3000/new_visit');

		expect(res.data).toEqual(form);
	});

	it('Should post form', async () => {

		const visitor = {
			name: 'John Blues',
			age: 19,
			date: '1/8/2000',
			time: '12:00:00',
			assistant: 'Lebohang Mokoena',
			comments: 'No Comment'
		}

		const res = await axios.post('http://127.0.0.1:3000/new_visit', visitor);

		let id = res.data.match(/\d+/g)[2];

		expect(res.data).toEqual(success(
				id, visitor.name, visitor.age, visitor.date, visitor.time, visitor.assistant, visitor.comments
			));	
	});

});