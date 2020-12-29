const request = require('supertest');


describe('GET /users', function () {
    it('get json with a list of all users', function (done) {
        request('https://reqres.in/api')
            .get('/users')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done);
    });
});

describe('GET /user/:id', function () {
    it('get json with a single user', function (done) {
        request('https://reqres.in/api')
            .get('/users/2')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done);
    });
});


describe('GET /user/:id', function () {
    it('get json with a json user not found', function (done) {
        request('https://reqres.in/api')
            .get('/users/idisnonexisting')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(404)
            .expect('{}') 
            .end((err) => {
                if (err) return done(err);
                done();
            });
    });
});

describe('POST /users', function () {
    let data = {
        'id': '500',
        'name': 'Vik',
        'job': 'engineer'
    }
    it('respond with 201 created', function (done) {
        request('https://reqres.in/api')
            .post('/users')
            .send(data)
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(201)            
            .end((err) => {
                if (err) return done(err);
                done();

            });
    });
});

// Encapsulate GET user, GET users, POST user, PUT/PATCH and DELETE user calls into UserAPI object
describe('PATCH /users', function () {
    let data = {
        'id': '500',
        'name': 'Vik',
        'job': 'QAengineer'
    }
    it('update the users job', function (done) {
        request('https://reqres.in/api')
        .patch('/api/users')
            .send(data)
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200)
            .end((err) => {
                if (err) return done(err);
                done();
            });
    });
});
describe('DELETE /users', function () {
    let data = {
        'id': '500',
        'name': 'Vik',
        'job': 'QAengineer'
    }
    it('update the users job', function (done) {
        request('https://reqres.in/api')
        .patch('/api/users')
            .send(data)
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200)
            .end((err) => {
                if (err) return done(err);
                done();
            });
    });
});