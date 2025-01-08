import express from 'express';
import cors from 'cors';
import Routes from './Routes';

const app = express();

app.use(express.json());


app.use(cors({
  origin: 'https://controlefinancas7.netlify.app'
}));



app.get('/', (req, res) => {
    console.log('Rota inicial acessada');
    res.send('Hello World, chove em SP');
});


app.use(Routes);

export default app;
