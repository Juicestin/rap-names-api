//set up application
const express = require('express')                  // application has access to express
const app = express()                               // using express and storing into app
const PORT = 8000

const rappers = {                                    //object for 21 savage
    '21 savage':{
        'age': 29,
        'birthName': 'Shéyaa Bin Abraham-Joseph',
        'birthLocation': 'London, England'
    },
    'chance the rapper':{
        'age': 29,
        'birthName':'Chancelor Bennett',
        'birthLocation': 'Chicago, Illinois' 
    },
    'dylan':{
        'age': 29,
        'birthName':'Dylan',
        'birthLocation': 'Dylan' 
    }
}

//get request for main page
app.get('/', (request, response)=>{                                     // get requeset to main page (/), requesting and responding
    response.sendFile(__dirname + '/index.html')                        // respond with file, __dirname: start looking for index.html whereever the server.js file is located 
})  

//get request for json
app.get('/api/:rapperName', (request, response)=>{                      //:rapperName part of the api request
    const rappersName = request.params.rapperName.toLowerCase()         //grab query params from the request, convert to lowercase for case sensitivity
    if(rappers[rappersName]){                                           //respond with rapper's information if object exists
        response.json(rappers[rappersName])
    }else{                                                              //else give dylan
        response.json(rappers['dylan'])
    }
})

//server up and running on port 8000git add .
app.listen(process.env.PORT || PORT, ()=>{                                                           // server running heroku's port or PORT 8000 that we defined
    console.log(`The serving is running on port ${PORT}! You better go catch it!`)
})

//any client able to access our server