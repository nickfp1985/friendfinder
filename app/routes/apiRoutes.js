let friendsData = require("../data/friends");

module.exports = function(app) {
  
  app.get("/api/friends", function(req, res) {
    res.json(friendsData);
  });

  // API POST Requests
  app.post("/api/friends", function (req, res) {
    // server will respond to requests and let users know if they have a match or not

    let friendX = req.body;
    let numArray = [];

    friendX.scores.forEach(function (score) {
      numArray.push(score * 1);
    })

    friendX.scores = numArray;

    let friendDiffs = [];

    friendsData.forEach(function (friend) {

      let totalDiffs = 0;

      for (let i = 0; i < friend.scores.length; i++) {
          totalDiffs += Math.abs(friend.scores[i] - friendX.scores[i]);
      }

      friendDiffs.push(totalDiffs);
    })

    let finalNumber = 100;
    let finalIndex = 0;

    friendDiffs.forEach(function (number, index) {
        if (number <= finalNumber) {
            finalNumber = number;
            finalIndex = index;
        }
    });

    let match = friendsData[finalIndex];
    friendsData.push(friendX);
    res.json(match);

  });

  // ---------------------------------------------------------------------------
  // clear out the table

  // app.post("/api/clear", function() {
  //   // Empty out the arrays of data
  //   friendData = [];

  //   console.log(friendData);
  // });
};
