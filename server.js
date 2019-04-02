let express = require('express');
let app = express()
l//et port = 7777;
let port = process.env.PORT;
if (port == null || port == "") {
  port = 8000;
}
app.use(express.urlencoded({extended : true}));
app.use(express.json());

//this were Im creating routes
require('./app/routing/apiRoutes')(app);
require('./app/routing/htmlRoutes')(app);





app.listen(port, function(){
    console.log("App listening on port 8000");

})
