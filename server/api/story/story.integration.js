//FIXME write tests for stories
//'use strict';
//
//var app = require('../..');
//import request from 'supertest';
//
//var newStory;
//
//describe('Story API:', function () {
//
//  describe('GET /api/storys', function () {
//    var storys;
//
//    beforeEach(function (done) {
//      request(app)
//        .get('/api/storys')
//        .expect(200)
//        .expect('Content-Type', /json/)
//        .end((err, res) => {
//          if (err) {
//            return done(err);
//          }
//          storys = res.body;
//          done();
//        })
//    });
//
//    it('should respond with JSON array', function () {
//      storys.should.be.instanceOf(Array);
//    });
//
//  });
//
//  describe('POST /api/storys', function () {
//    beforeEach(function (done) {
//      request(app)
//        .post('/api/storys')
//        .send({
//          name: 'New Story',
//          info: 'This is the brand new story!!!'
//        })
//        .expect(201)
//        .expect('Content-Type', /json/)
//        .end((err, res) => {
//          if (err) {
//            return done(err);
//          }
//          newStory = res.body;
//          done();
//        })
//    });
//
//    it('should respond with the newly created story', function () {
//      newStory.name.should.equal('New Story');
//      newStory.info.should.equal('This is the brand new story!!!');
//    });
//
//  });
//
//  describe('GET /api/storys/:id', function () {
//    var story;
//
//    beforeEach(function (done) {
//      request(app)
//        .get('/api/storys/' + newStory._id)
//        .expect(200)
//        .expect('Content-Type', /json/)
//        .end((err, res) => {
//          if (err) {
//            return done(err);
//          }
//          story = res.body;
//          done();
//        })
//    });
//
//    afterEach(function () {
//      story = {};
//    });
//
//    it('should respond with the requested story', function () {
//      story.name.should.equal('New Story');
//      story.info.should.equal('This is the brand new story!!!');
//    });
//
//  });
//
//  describe('PUT /api/storys/:id', function () {
//    var updatedStory;
//
//    beforeEach(function (done) {
//      request(app)
//        .put('/api/storys/' + newStory._id)
//        .send({
//          name: 'Updated Story',
//          info: 'This is the updated story!!!'
//        })
//        .expect(200)
//        .expect('Content-Type', /json/)
//        .end(function (err, res) {
//          if (err) {
//            return done(err);
//          }
//          updatedStory = res.body;
//          done();
//        });
//    });
//
//    afterEach(function () {
//      updatedStory = {};
//    });
//
//    it('should respond with the updated story', function () {
//      updatedStory.name.should.equal('Updated Story');
//      updatedStory.info.should.equal('This is the updated story!!!');
//    });
//
//  });
//
//  describe('DELETE /api/storys/:id', function () {
//
//    it('should respond with 204 on successful removal', function (done) {
//      request(app)
//        .delete('/api/storys/' + newStory._id)
//        .expect(204)
//        .end((err, res) => {
//          if (err) {
//            return done(err);
//          }
//          done();
//        })
//    });
//
//    it('should respond with 404 when story does not exist', function (done) {
//      request(app)
//        .delete('/api/storys/' + newStory._id)
//        .expect(404)
//        .end((err, res) => {
//          if (err) {
//            return done(err);
//          }
//          done();
//        })
//    });
//
//  });
//
//});
