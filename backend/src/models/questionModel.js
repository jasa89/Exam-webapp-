
// src/models/questionModel.js
const pool = require('../db/db'); // Tuodaan äsken luotu tietokantayhteys

const Question = {
  // Hae kaikki kysymykset tehtäväpankista
  getAll: async () => {
    const result = await pool.query('SELECT * FROM questions ORDER BY question_id DESC');
    return result.rows;
  },

  // Hae yksi kysymys ID:n perusteella
  getById: async (id) => {
    const result = await pool.query('SELECT * FROM questions WHERE question_id = $1', [id]);
    return result.rows[0];
  },
// Päivitä kysymys
update: async (id, questionText, questionType) => {

  const result = await pool.query(
    `
    UPDATE questions
    SET
      question = $1,
      question_type = $2
    WHERE question_id = $3
    RETURNING *
    `,
    [questionText, questionType, id]
  )

  return result.rows[0]
},

// Poista kysymys
delete: async (id) => {

  const result = await pool.query(
    'DELETE FROM questions WHERE question_id = $1 RETURNING *',
    [id]
  )

  return result.rows[0]
},

  // Luo uusi kysymys pankkiin
  create: async (questionText, questionType, createdBy) => {
    const result = await pool.query(
      'INSERT INTO questions (question, question_type, created_by) VALUES ($1, $2, $3) RETURNING *',
      [questionText, questionType, createdBy]
    );
    return result.rows[0];
  }
};


module.exports = Question;