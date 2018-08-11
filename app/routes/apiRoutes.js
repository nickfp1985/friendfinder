// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on table-data, waitinglist, etc.
// ===============================================================================

let friendData = require("../data/friends");
// var waitListData = require("../data/waitinglistData");


// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
  // API GET Requests
  app.get("/api/friends", function(req, res) {
    res.json(friendData);
  });

  // API POST Requests
  app.post("/api/friends", function(req, res) {
    // server will respond to requests and let users know if they have a match or not
    for (let i = 0; friendData.length; i++) {
      if (friendData.scores[i] === newFriend.scores[i]) {
        
      }
    }
  });

  // ---------------------------------------------------------------------------
  // clear out the table while working with the functionality

  // app.post("/api/clear", function() {
  //   // Empty out the arrays of data
  //   friendData = [];

  //   console.log(friendData);
  // });
};
