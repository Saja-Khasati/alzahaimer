
import 'dotenv/config'
import express from 'express';
import initApp from './src/module/app.router.js';
import bodyParser from 'body-parser';

// Middleware
const app = express();
app.use(bodyParser.json());


const PORT = process.env.PORT || 3000;
app.use(express.urlencoded({extended:false}))


initApp(app,express);

app.listen(PORT,()=>{
    console.log(`server is running .... ${PORT}`);
})


