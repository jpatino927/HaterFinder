let express = require('express');
let app = express()
let port = 8000;
app.use(express.urlencoded({extended : true}));
app.use(express.json());

//this were Im creating routes
require('./app/routing/apiRoutes')(app);
require('./app/routing/htmlRoutes')(app);





app.listen(port, function(){
    console.log("App listening on port 8000");

})
