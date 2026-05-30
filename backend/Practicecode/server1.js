import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());

app.get('/', (req, res) => {
  res.send([
    { id: 1, name: 'monu1', about: 'the great monu1' },
    { id: 2, name: 'monu2', about: 'the great monu2' },
    { id: 3, name: 'monu3', about: 'the great monu3' }
  ]);
});

app.listen(8000, () => {
  console.log('Backend running on http://localhost:8000');
});