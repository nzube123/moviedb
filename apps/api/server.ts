import express from 'express';
import cors from 'cors'
import { PopularMovie } from './app/popular';
import { TopRated } from './app/top-rated';
import { getmoviebyid } from './app/movie';

const port = process.env.PORT || '3001';
const app = express();
app.use(cors());

app.listen(port);
console.log("wow this code is running without any problem");

app.get('/', (req, res, next) => {
    res.send("whatsapp how are u doing");
    next()
})

app.get('/movie/popular', async (req, res) => {
    try {
        console.log(req.originalUrl + Date());
        res.json(await PopularMovie())
    } catch (error) {
        res.status(500).send({ error })
    }
})

app.get('/movie/top-rated', async (req, res) => {
    try {
        res.json(await TopRated());
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