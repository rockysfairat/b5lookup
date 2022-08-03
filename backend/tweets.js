const roClient = require("./TwitterClient.js");

let MySearchQuery = "Babylon 5";

const recentTweets = async (searchQuery) => {
  try {
    await roClient.v2
      .search(searchQuery, { "media.fields": "url" })
      .then((val) => console.log(val.data));
  } catch (e) {
    console.error(e);
  }
};

recentTweets(MySearchQuery);

module.exports = recentTweets;
