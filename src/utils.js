import request from 'superagent';
const URL = 'https://shrouded-eyrie-68702.herokuapp.com/';

export async function getTodos(token) {
    const response = await request
    .get(`${URL}api/todos`)
    .set('Authorization', token)
    
    return response.body
}
export async function updateTodos(id, completed, token) {
    const response = await request
    .put(`${URL}api/todos/${id}`)
    .send({completed: completed})
    .set('Authorization', token)
    
    return response.body
}
export async function createTodos(todo,  token) {
    const response = await request
    .post(`${URL}api/todos`)
    .send({todo})
    .set('Authorization', token)
    
    return response.body
}
export async function login(email, password) {
    const response = await request
    .post(`${URL}auth/signin`)
    .send({ email: email , password: password })

    return response.body
}
export async function signup(email, password) {
    const response = await request
    .post(`${URL}auth/signup`)
    .send({ email: email, password : password })

    return response.body
}