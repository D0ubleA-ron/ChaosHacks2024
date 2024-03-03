import express from 'express';
import fetch from 'node-fetch';
import cors from 'cors';

const app = express();
const PORT = 3001;

app.use(express.json());
app.use(cors()); // Add this line to enable CORS

app.get('/search', async (req, res) => {
    try {
        const {  endAddress, latitude, longitude } = req.query;
        const response = await fetch(`https://serpapi.com/search.json?engine=google_maps_directions&start_coords=${latitude},${longitude}&end_addr=${endAddress}&hl=en&&api_key=6efdec7c0736a882e98400a1275087e1626d551f335907b5b903ca83e557bfc6`);
        const data = await response.json();
        res.json(data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.listen(PORT, () => {
    console.log(`Proxy server is running on port ${PORT}`);
});
