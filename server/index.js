import express from 'express';
import bodyParser from 'body-parser';
const app = express();
app.use(express.static(__dirname+'/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))
// import routes from './public/index.html';

// app.use('/', routes);

app.listen(8080, ()=>{

	console.log('now on port 8080')	
});