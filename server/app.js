const express = require('express');
const { graphqlHTTP } = require('express-graphql'); 
const app = express();
const cors = require('cors');
const mongoose = require('mongoose')
const schema = require('./schema/schema')

//allow cross origin req

app.use(cors());

//connect to mongo db
const url = '';
mongoose.connect(url, {useNewUrlParser:true,useUnifiedTopology: true }, function(err, db) {
    if(err) {
        console.log(err);
    }
    else {
        console.log('connected to ' + url);
        db.close();
    }
});

mongoose.connection.once('open',() => {
    console.log("connected")
})

app.use('/graphql',graphqlHTTP({
    schema,
    graphiql:true
}));

app.listen(40000,() => {
    console.log('listening')
})