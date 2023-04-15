import {describe, expect, test} from '@jest/globals';
import supertest from 'supertest';
import app from '../../app';

const request = supertest(app);

describe("Topic endpoint", ()=>{
    describe('GET /api/topic/filterAllTopic', ()=>{
        test('should response with a 200 status code filter Topic', async () => {
            const response = await request.get('/api/topic/filterAllTopic')
            expect(response.status).toEqual(200)
        })

        test('should respond with object with list Topic to empty filter', async () => {
            const response = await request.get('/api/topic/filterAllTopic');
            expect(response.body).toEqual(expect.arrayContaining([
                expect.objectContaining({
                    message: expect.any(Object),
                })
            ]))
        });
        test('should response with a 404 status to not exist endpoint', async () => {
            const response = await request.get('/api/topic/filterAllTopics')
            expect(response.status).toEqual(404)
        })
    })
    describe('POST /api/topic', ()=>{
        test('should response with a 404 status code empty request', async () => {
            const response = await request.post('/api/topic')
            expect(response.status).toEqual(500)
        })
        test('should respond with object with array of topics to correct email password', async () => {
            const create = { name:"motos", urlImage:"any",categories:"ADMIN" }
            const response = await request.get('/api/topic').send(create)
            expect(response.body).toEqual(expect.arrayContaining([
                expect.objectContaining({
                    message: expect.any(Object),
                })
            ]))
        });
    })

    describe('DELETE /api/topic/:topicId', ()=>{
        test('should response with a 500 to peticions wit not req.params', async () => {
            const topicId = 1
            const response = await request.delete('/api/topic')
            expect(response.status).toEqual(500)
        })
        test('should response with a 200 status to req.params that exist', async () => {
            const topicId = 1
            const response = await request.delete(`/api/topic/${topicId}`)
            expect(response.body).toEqual(expect.arrayContaining([
                expect.objectContaining({
                    message: expect.any(Object),
                })
            ]))
        })
    })
})

