const { MongoClient } = require('mongodb');

// Connection URI
const uri = 'mongodb://localhost:27017'; // Replace with your MongoDB URI

// Database Name
const dbName = 'used_car_db';

// Collection Names
const carCollectionName = 'cars';
const userCollectionName = 'users';

async function main() {
    // Create a new MongoClient
    const client = new MongoClient(uri, { useUnifiedTopology: true });

    try {
        // Connect to the MongoDB server
        await client.connect();

        console.log('Connected to MongoDB');

        // Get a reference to the database
        const db = client.db(dbName);

        // Insert a new car document
        const carCollection = db.collection(carCollectionName);
        const newCar = { make: 'Toyota', model: 'Corolla', year: 2018, price: 15000 };
        const insertResult = await carCollection.insertOne(newCar);
        console.log('Inserted new car:', insertResult.insertedId);

        // Find all cars
        const cars = await carCollection.find({}).toArray();
        console.log('All cars:', cars);

        // Insert a new user document
        const userCollection = db.collection(userCollectionName);
        const newUser = { name: 'John Doe', email: 'john@example.com', location: 'New York' };
        const userInsertResult = await userCollection.insertOne(newUser);
        console.log('Inserted new user:', userInsertResult.insertedId);

        // Find all users
        const users = await userCollection.find({}).toArray();
        console.log('All users:', users);
    } catch (error) {
        console.error('Error:', error);
    } finally {
        // Close the connection
        await client.close();
        console.log('Disconnected from MongoDB');
    }
}

// Call the main function
main().catch(console.error);
