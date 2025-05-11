const fs = require('fs');
const path = './proverbs.json';

function readData() {
  return JSON.parse(fs.readFileSync(path));
}

function writeData(data) {
  fs.writeFileSync(path, JSON.stringify(data, null, 2));
}

exports.getAllProverbs = (req, res) => {
  const data = readData();
  const { category } = req.query;
  if (category) {
    return res.json(data.filter(p => p.category === category));
  }
  res.json(data);
};

exports.getProverbById = (req, res) => {
  const data = readData();
  const proverb = data.find(p => p.id === parseInt(req.params.id));
  if (!proverb) return res.status(404).json({ message: 'Proverb not found' });
  res.json(proverb);
};

exports.createProverb = (req, res) => {
  const data = readData();
  const newProverb = { id: Date.now(), ...req.body };
  data.push(newProverb);
  writeData(data);
  res.status(201).json(newProverb);
};

exports.updateProverb = (req, res) => {
  const data = readData();
  const index = data.findIndex(p => p.id === parseInt(req.params.id));
  if (index === -1) return res.status(404).json({ message: 'Proverb not found' });
  data[index] = { ...data[index], ...req.body };
  writeData(data);
  res.json(data[index]);
};

exports.deleteProverb = (req, res) => {
  let data = readData();
  data = data.filter(p => p.id !== parseInt(req.params.id));
  writeData(data);
  res.json({ message: 'Proverb deleted successfully' });
};

exports.getRandomProverb = (req, res) => {
  const data = readData();
  const random = data[Math.floor(Math.random() * data.length)];
  res.json(random);
};
