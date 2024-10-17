const express = require('express');
const Tool = require('../models/Tool');
const auth = require('../middleware/auth');

const router = express.Router();

router.post('/', auth, async (req, res) => {
  const tool = new Tool({
    ...req.body,
    user: req.user._id
  });
  try {
    await tool.save();
    res.status(201).send(tool);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.get('/', auth, async (req, res) => {
  try {
    const tools = await Tool.find({ user: req.user._id });
    res.send(tools);
  } catch (error) {
    res.status(500).send();
  }
});

router.patch('/:id', auth, async (req, res) => {
  const updates = Object.keys(req.body);
  try {
    const tool = await Tool.findOne({ _id: req.params.id, user: req.user._id });
    if (!tool) {
      return res.status(404).send();
    }
    updates.forEach((update) => tool[update] = req.body[update]);
    await tool.save();
    res.send(tool);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.delete('/:id', auth, async (req, res) => {
  try {
    const tool = await Tool.findOneAndDelete({ _id: req.params.id, user: req.user._id });
    if (!tool) {
      return res.status(404).send();
    }
    res.send(tool);
  } catch (error) {
    res.status(500).send();
  }
});

module.exports = router;