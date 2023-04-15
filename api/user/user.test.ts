import {describe, expect, test} from '@jest/globals';
import supertest from 'supertest';
import app from '../../app';

const request = supertest(app);

describe("User endpoint", ()=>{
    describe('GET /api/user/filterbyuser', ()=>{
        test('should response with a 200 status code to find all user', async () => {
            const response = await request.get('/api/user/filterbyuser')
            expect(response.status).toEqual(200)
        })

        test('should respond with object with list of user', async () => {
            const response = await request.get('/api/user/filterbyuser');
            expect(response.body).toEqual(expect.arrayContaining([
                expect.objectContaining({
                    message: expect.any(Object),
                })
            ]))
        });
        test('should response with a 404 status to incorrect endpoint', async () => {
            const response = await request.get('/api/user/filterbyusers')
            expect(response.status).toEqual(404)
        })
    })
    describe('POST /api/user/authenticate', ()=>{
        test('should response with a 404 status code to peticion without body', async () => {
            const response = await request.post('/api/user/authenticate')
            expect(response.status).toEqual(500)
        })
        test('should response with a 200 status code to peticion with any body with email password ', async () => {
            const auth = { email:"any", password:"any"}
            const response = await request.post('/api/user/authenticate').send(auth)
            expect(response.status).toEqual(200)
        })
        test('should respond with object with array of clients to correct email password', async () => {
            const auth = { email:"jbuen123@gmail.com", password:"any" }
            const response = await request.post('/api/user/authenticate').send(auth)
            
            expect(response.body).toEqual(expect.arrayContaining([
                expect.objectContaining({
                    message: expect.any(Object),
                })
            ]))
        });
    })

    describe('POST /  createOneUser', ()=>{
        test('should response with a 500 status code to incorrect body', async () => {
            const create = { input:"any"}
            const response = await request.post('/api/user').send(create)
            expect(response.status).toEqual(500)
        })
        test('should response with a 200 status code to correct peticion with all input', async () => {
            const create = { email:"jbuen123@gmail.com", type:"ADMIN", password:"123" }
            const response = await request.post('/api/user').send(create)
            expect(response.body).toEqual(expect.arrayContaining([
                expect.objectContaining({
                    message: expect.any(Object),
                })
            ]))
        })
    })
})


