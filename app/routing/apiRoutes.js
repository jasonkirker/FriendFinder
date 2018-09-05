var bodyParser = require("body-parser");
var friends = require("../data/friends.js")

var router = new express.Router();


router.get("/api/friends", function(req, res) {
    

    console.log(friends);
  
    // for (var i = 0; i < friends.length; i++) {
        return res.json(friends);
    }
    // return res.json(false);
  );

router.post("/api/friends", function(req, res){
    var score = [];
    for(i = 0; i < 10; i++){
    score.push(parseFloat(req.body.scores[i]))
    }
    for(k = 0; k < friends.length; k++){
    for(i = 0; i < 10; i++){
        var totalArray = [];
        Math.abs(score[i] - friends[k].scores[i])
    }
    }
});

module.exports = router;