const request = require('supertest');
const app = require('../src/index');
describe('GET /time nonzero', () => {
  it('time не равен 0', async () => {
    const res = await request(app).get('/time');
    expect(res.body.time).not.toBe(0);
  });
});
