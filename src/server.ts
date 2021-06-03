import express, { response } from 'express';

const app = express();

app.get("/", (request, response)=>{
    return response.json({message: "uiui" });
});

app.post("/", (request, response) =>{
    return response.json({message: "aai aii"})
});

app.listen(3333, () => console.log("Server is running!"));

