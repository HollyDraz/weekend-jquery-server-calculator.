const express = require('express');
const app = express();
const port = process.env.PORT || 5001;

//must be added before the get and post routes
app.use(express.urlencoded({extended: true}));
app.use(express.static('server/public'));

// need a get to grab the info of my calc 
//and then need it to POST the results and equation on my DOM 






// keep at the bottom 
app.listen(port, ( ) => {
    console.log("listening on port", port)

});

