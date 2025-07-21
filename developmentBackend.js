import express from 'express';
import cors from 'cors';
import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

const PORT = 8000;
const app = express();

app.use(cors());
app.use(express.json());

app.get('/stock-prices', async (req, res) => {
  try {
    const symbols = process.env.STOCK_SYMBOLS.split(',');
    const API_KEY = process.env.FINNHUB_API_KEY;
    
    const promises = symbols.map(symbol =>
      axios.get(`https://finnhub.io/api/v1/quote?symbol=${symbol}&token=${API_KEY}`)
        .then(response => ({
          symbol,
          price: response.data.c
        }))
    );
    
    const stockPrices = await Promise.all(promises);
    res.json(stockPrices);
  } catch (error) {
    console.error('Error fetching stock prices:', error);
    res.status(500).json({ error: 'Failed to fetch stock prices' });
  }
});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));