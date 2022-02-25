const express = require("express");
const app = express();
const port = 8081;

app.get('/order-list', (req, res) => {
    let response = {
        data: {
            item: [
                {
                    id: 1,
                    name: 'order1'
                },
                {
                    id: 2,
                    name: 'order2'
                }
            ]
        }
    }
    res.status(200).json(response);
})

app.get("/", (req, res) => {
    res.send({message: "Order service called."});
})

app.listen(port, () => {
    console.log(`Order service is listening on PORT: ${port}`);
})