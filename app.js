// app.js
import express from 'express';
import Calculator from './calculator.js';
import MemoryService from './memoryService.js';

const app = express();
const calculator = new Calculator();
const memoryService = new MemoryService();

app.use(express.json());

app.post('/api/add', (req, res) => {
  const { a, b } = req.body;
  res.json({ result: calculator.add(a, b) });
});

app.post('/api/subtract', (req, res) => {
  const { a, b } = req.body;
  res.json({ result: calculator.subtract(a, b) });
});

app.post('/api/multiply', (req, res) => {
  const { a, b } = req.body;
  res.json({ result: calculator.multiply(a, b) });
});

app.post('/api/divide', (req, res) => {
  const { a, b } = req.body;
  try {
    const result = calculator.divide(a, b);
    res.json({ result });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

app.post('/api/performOperation', (req, res) => {
  const { op, a, b } = req.body;
  try {
    const result = memoryService.performOperation(op, a, b);
    res.json({ result });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

app.get('/api/getMemory', (req, res) => {
  res.json({ memory: memoryService.getMemory() });
});

export default app;
