'use strict';

var app = require('../..');
import request from 'supertest';

var newThing;

describe('Story API:', function () {

  describe('GET /api/things', function () {
    var things;

    beforeEach(function (done) {
      request(app)
        .get('/api/things')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          things = res.body;
          done();
        })
    });

    it('should respond with JSON array', function () {
      things.should.be.instanceOf(Array);
    });

  });

  describe('POST /api/things', function () {
    beforeEach(function (done) {
      request(app)
        .post('/api/things')
        .send({
          name: 'New Story',
          info: 'This is the brand new story!!!'
        })
        .expect(201)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          newThing = res.body;
          done();
        })
    });

    it('should respond with the newly created story', function () {
      newThing.name.should.equal('New Story');
      newThing.info.should.equal('This is the brand new story!!!');
    });

  });

  describe('GET /api/things/:id', function () {
    var story;

    beforeEach(function (done) {
      request(app)
        .get('/api/things/' + newThing._id)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          story = res.body;
          done();
        })
    });

    afterEach(function () {
      story = {};
    });

    it('should respond with the requested story', function () {
      story.name.should.equal('New Story');
      story.info.should.equal('This is the brand new story!!!');
    });

  });

  describe('PUT /api/things/:id', function () {
    var updatedThing;

    beforeEach(function (done) {
      request(app)
        .put('/api/things/' + newThing._id)
        .send({
          name: 'Updated Story',
          info: 'This is the updated story!!!'
        })
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function (err, res) {
          if (err) {
            return done(err);
          }
          updatedThing = res.body;
          done();
        });
    });

    afterEach(function () {
      updatedThing = {};
    });

    it('should respond with the updated story', function () {
      updatedThing.name.should.equal('Updated Story');
      updatedThing.info.should.equal('This is the updated story!!!');
    });

  });

  describe('DELETE /api/things/:id', function () {

    it('should respond with 204 on successful removal', function (done) {
      request(app)
        .delete('/api/things/' + newThing._id)
        .expect(204)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          done();
        })
    });

    it('should respond with 404 when story does not exist', function (done) {
      request(app)
        .delete('/api/things/' + newThing._id)
        .expect(404)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          done();
        })
    });

  });

});
