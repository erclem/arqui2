const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const app = express();

//settings
app.set('port', process.env.PORT || 3000);
app.set('host','192.168.0.4');

//middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(cors({origin: 'http://localhost:4200'}));

//routes
app.use("/api/msjs",require("./routes/msjs"));

//starting
app.listen(app.get('port'),app.get('host'), () =>{
    console.log(`Server on port ${app.get('port')}`);
});
