import express from 'express';
import cors from 'cors'
import { Movies } from './app/popular';
import { Rated } from './app/top-rated';
import { getmoviebyid } from './app/movie';

const app = express();
app.use(cors());

app.listen('3001');
console.log("wow this code is running without any problem");

app.get('/', (req, res, next) => {
    res.send("whatsapp how are u doing");
    next()
})

app.get('/movie/popular', (req, res) => {
    try {
        console.log(req.originalUrl + Date());
        res.json(Movies)
    } catch (error) {
        res.status(500).send({ error })
    }
})

app.get('/movie/top-rated', (req, res) => {
    try {
        res.json(Rated);
        console.log(req.originalUrl + Date());

    } catch (error) {
        res.status(500).send({ error })
    }
})

app.get('/movie/movie/:id', async (req, res) => {
    const { id } = req.params
    try {
        const moviebyid = await getmoviebyid(parseInt(id, 10));
        res.json(moviebyid)
    } catch (error) {
        res.status(500).send({ error: error })
    }
})