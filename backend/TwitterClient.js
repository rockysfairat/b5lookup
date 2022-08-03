require("dotenv").config();

const { TwitterApi } = require("twitter-api-v2");

const key = process.env.BEARER_TOKEN;

const client = new TwitterApi(key);

const roClient = client.readOnly;

module.exports = roClient;
