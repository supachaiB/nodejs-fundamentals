const axios = require('axios');

async function helloAsync() {
    return "Hello Async!";
}

//await and async function
async function testAsyncFunction() {
    const msg = await helloAsync();
    console.log("Async function result:", msg)
}

async function main() {
    await testAsyncFunction();
}

main();