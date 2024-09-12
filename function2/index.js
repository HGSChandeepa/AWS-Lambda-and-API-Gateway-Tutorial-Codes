const { MongoClient } = require("mongodb");

const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri);

exports.handler = async (event) => {
  try {
    const { apiKey } = JSON.parse(event.body);
    //print api key
    console.log(apiKey);

    if (!apiKey) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: "API key is required" }),
      };
    }

    // Connect to MongoDB
    await client.connect();
    const database = client.db("DB Name");
    const collection = database.collection("Collectio Name");

    console.log("Connected to the database" + apiKey);

    // Find the usage plan by API key
    const usagePlan = await collection.findOne({ api_key: apiKey });

    if (!usagePlan) {
      return {
        statusCode: 404,
        body: JSON.stringify({ error: "Usage plan not found" }),
      };
    }

    return {
      statusCode: 200,
      body: JSON.stringify(usagePlan),
    };
  } catch (error) {
    console.error("Error fetching usage plan:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Internal server error" }),
    };
  } finally {
    await client.close();
  }
};
