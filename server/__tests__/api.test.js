const request = require('supertest');
const mongoose = require('mongoose');
const { app, connectToMongo } = require('../index.js');

const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/mydb';

beforeAll(async () => {
    process.env.MONGO_URI = MONGO_URI; // Ensure it exists
    await connectToMongo();            // Call explicit connect
});

afterAll(async () => {
    await mongoose.connection.close();
});

describe('GET /messages', () => {
    it('should return an array of messages', async () => {
        const res = await request(app).get('/messages');
        expect(res.statusCode).toBe(200);
        expect(Array.isArray(res.body)).toBe(true);
        expect(res.body[0]).toHaveProperty('text');
    });
});
