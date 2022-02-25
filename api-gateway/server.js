const express = require("express");
const gateway = require("fast-gateway");
const port = 8080;

const server = gateway({
    routes: [
        {
            prefix: "/order",
            target: "http://localhost:8081",
            hooks: {
                
            }
        },
        {
            prefix: "/payment",
            target: "http://localhost:8082",
            hooks: {

            }
        }
    ]
})

server.get("/my-testing", (req, res) => {
    res.send("API Gateway called.");
})

server.start(port)
    .then(server => {
        console.log(`Api Gateway running on port: ${port}`);
    })