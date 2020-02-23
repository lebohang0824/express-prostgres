describe("Testing express end points", () => {

	const axios = require('axios');
	const readline = require('readline');

	const form = require('./html-form');
	const success = require('./html-success');

	it('Should render form', async () => {
		const res = await axios.get('http://127.0.0.1:3000/')

		expect(res.data).toEqual(form);
	});

	it('Should post form', async () => {

		const visitor = {
			name: 'Portia Mkhabela',
			age: 19,
			date: '1/8/2000',
			time: '12:00:00',
			assistant: 'Lebohang Mokoena',
			comments: 'No Comment'
		}

		const res = await axios.post('http://127.0.0.1:3000/', visitor)

		expect(res.data).toEqual(success(
				1, visitor.name, visitor.age, visitor.date, visitor.time, visitor.assistant, visitor.comments
			));
	});

});