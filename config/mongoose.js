
const mongoose = require('mongoose')


mongoose.connect(process.env.MONGODB_URI)


//require the connection to check if it is succefully connection 
const db = mongoose.connection;

//error
db.on('error', console.error.bind(console, 'error connection to mongoDB'));

// up and running print message
db.once('open', function () {
	console.log('Succefully connected to database :: mongoDB');
})

module.exports = db;
