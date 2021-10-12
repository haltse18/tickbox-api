var Event = require('./event');
const dboperations = require('./dboperations');

//
var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var app = express();
var router = express.Router();

app.use(bodyParser.urlencoded({ extends: true }));
app.use(bodyParser.json());
app.use(cors());
app.use('/api', router);

//
router.use((request, response, next) => {
    console.log('middleware');
    next();
});

router.route('/events').get((request, response) => {
    dboperations.getEvents().then(result => {
        response.json(result[0]);
    })
})

router.route('/events/:id').get((request, response) => {
    dboperations.getEvent(request.params.id).then(result => {
        response.json(result[0]);
    })
});

router.route('/events').post((request, response) => {
    let event = request.body
    console.log('Event requested '+ request.body)
    dboperations.addEvent(event).then(result => {
        response.status(201).json(result);
    })
});
//
var port = process.env.PORT || 8090;
app.listen(port);
console.log('Event api is running at ' + port);

dboperations.getEvents().then(result => {
    console.log(result);
})