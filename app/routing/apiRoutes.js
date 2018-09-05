var bodyParser = require("body-parser");
var friends = require("../data/friends.js")

var router = new express.Router();


router.get("/api/friends", function(req, res) {
    

    console.log(friends);
 

module.exports = router;