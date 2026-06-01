//question.test.js
const request = require('supertest')
const chai = require('chai')

const expect = chai.expect

const app = require('../src/server')

// Api call test to get all questions from db
describe('Questions API', () => {

  it('should return all questions', async () => {

    const res = await request(app)
      .get('/api/questions')

    expect(res.status).to.equal(200)

    expect(res.body).to.be.an('array')

  })

// test to crate new question to database
  it('should create a new question', async () => {

  const newQuestion = {

    question: 'What is Node.js?',

    question_type: 'text',

    created_by: 1
  }

  const res = await request(app)

    .post('/api/questions')

    .send(newQuestion)

  expect(res.status).to.equal(201)

  expect(res.body).to.have.property('question')

  expect(res.body.question)
    .to.equal('What is Node.js?')

})


})
