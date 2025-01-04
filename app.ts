import express from 'express';
import cors from 'cors';
import Routes from './Routes';

const app = express();

app.use(express.json());

// Configurações CORS
const corsOptions = {
    origin: ['https://controlefinanceiro7.netlify.app'], // Origem permitida (ajuste conforme necessário)
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Métodos HTTP permitidos
    allowedHeaders: ['Content-Type', 'Authorization'], // Cabeçalhos permitidos
    credentials: true, // Permitir envio de cookies/credenciais
};

// Middleware de logs para monitorar requisições
app.use((req, res, next) => {
    console.log('Requisição recebida:');
    console.log('Método:', req.method);
    console.log('URL:', req.url);
    console.log('Headers:', req.headers);
    next();
});

// Aplicando o middleware CORS com as opções configuradas
app.use(cors(corsOptions));
app.options('*', cors(corsOptions)); // Para lidar com requisições pré-flight (OPTIONS)

// Rota principal para teste
app.get('/', (req, res) => {
    console.log('Rota inicial acessada');
    res.send('Hello World, chove em SP');
});

// Rotas da aplicação
app.use(Routes);

export default app;
