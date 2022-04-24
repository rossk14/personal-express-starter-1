import express, { Request, Response } from 'express';
import path from 'path';
// import Logger from './config/logger';
import { RegisterRoutes } from './generated/routes/routes';
// import fs from 'fs';

// -------------------firing express app
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:false}));

// host our docs and setup cors on them to allow the swagger-ui container to access the json
var cors = require('cors');
app.use(cors());
app.use('/docs', express.static(path.join(__dirname, 'generated/docs')));

// -------------------routes
// let tsoa handle the remainder of our routes
RegisterRoutes(app);

// --------------------Listen
const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=>{
  console.log(`Server running on PORT ${ PORT }`);
});
