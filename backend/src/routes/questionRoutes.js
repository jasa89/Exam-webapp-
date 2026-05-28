// src/routes/questionRoutes.js
const express = require('express');
const router = express.Router();
const Question = require('../models/questionModel'); // Tuodaan modeli tänne!

// API-reitti: Hae kaikki kysymykset
// Huom: Koska liitämme tämän myöhemmin '/api/questions' -polkuun, tässä riittää pelkkä '/'
router.get('/', async (req, res) => {
  try {
    const questions = await Question.getAll();
    res.json(questions);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Palvelinvirhe kysymyksiä haettaessa' });
  }
});

// API-reitti: Lisää uusi kysymys pankkiin
router.post('/', async (req, res) => {
  const { question, question_type, created_by } = req.body;
  try {
    const newQuestion = await Question.create(question, question_type, created_by);
    res.status(201).json(newQuestion);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Palvelinvirhe kysymystä luodessa' });
  }
});

// API-reitti: Hae yksi kysymys ID:n perusteella
router.get('/:id', async (req, res) => {

  try {

    const question = await Question.getById(
      req.params.id
    );

    if (!question) {

      return res.status(404).json({
        error: 'Question not found'
      });
    }

    res.json(question);

  } catch (err) {

    console.error(err);

    res.status(500).json({
      error: 'Server error while fetching question'
    });
  }
});


// API-reitti: Päivitä kysymys
router.put('/:id', async (req, res) => {

  const {
    question,
    question_type
  } = req.body;

  try {

    const updatedQuestion = await Question.update(
      req.params.id,
      question,
      question_type
    );

    if (!updatedQuestion) {

      return res.status(404).json({
        error: 'Question not found'
      });
    }

    res.json(updatedQuestion);

  } catch (err) {

    console.error(err);

    res.status(500).json({
      error: 'Server error while updating question'
    });
  }
});



// API-reitti: Poista kysymys
router.delete('/:id', async (req, res) => {

  try {

    const deletedQuestion = await Question.delete(
      req.params.id
    );

    if (!deletedQuestion) {

      return res.status(404).json({
        error: 'Question not found'
      });
    }

    res.json({
      message: 'Question deleted successfully'
    });

  } catch (err) {

    console.error(err);

    res.status(500).json({
      error: 'Server error while deleting question'
    });
  }
});



module.exports = router; // Viedään reititin muiden tiedostojen käyttöön