/* eslint-disable linebreak-style */
const { describe, test, request } = require('supertest');
const app = require('../app');

describe('Test Router', () => {
  test('GET Route /, status 200, content-type html', (done) => {
    request(app)
      .get('/')
      .expect(200)
      .expect('Content-Type', /html/)
      .end((err, res) => {
        if (err) return done(err);
        return done();
      });
  });

  test('GET Route /jlkjg, status 404, content-type html', (done) => {
    request(app)
      .get('/jlkjg')
      .expect(404)
      .expect('Content-Type', /html/)
      .end((err, res) => {
        if (err) return done(err);
        return done();
      });
  });
});
