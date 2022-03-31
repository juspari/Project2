var express = require('express');
var app = express();
const PORT = process.env.PORT || 8081;

app.use(express.static("./public"));

app.set("view engine","ejs");

app.get("/", function(request,response){
    var content = {
        heading: "WEATHER APP",
        text: "Search for a city:"
    };
    response.render('pages/index', content);
})

app.listen(PORT, function(){
    console.log("Listening to port: " + PORT);
});
