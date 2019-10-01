// target module
const sut = require('./users');
const httpMocks = require('node-mocks-http');

const wait = () => new Promise(resolve => (setTimeout(() => resolve(), 1)));

// mocks
jest.mock('../libs/db');
const {queryAsync} = require('../libs/db');

describe('unit tests of users', () => {
	it('if throw error return 500 status code', async () => {
    queryAsync.mockImplementation(() => {
      return new Promise((resolve, reject) => {
        return reject(new Error());
      })
    });
    const res = httpMocks.createResponse();
		const req = httpMocks.createRequest({
			method: 'GET',
			url: '/'
    });
    sut(req,res);
    await wait();
		expect(res.statusCode).toBe(500);
	});
});