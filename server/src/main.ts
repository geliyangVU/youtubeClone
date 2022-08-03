import express from "express";

const PORT = process.env.PORT || 4000;

const app = express()

const server = app.listen(PORT, () =>{
    console.log(`Server Listening to: http://Localhost: ${PORT}`);
})

const signals = ["SIGTERM", "SIGINT"];

function gracefulShutdown(signal :string){
    process.on(signal , async()=>{
        server.close();
        console.log("work is done")
        process.exit(0);
    })
}


for(let i=0; i< signals.length; i++){
    gracefulShutdown(signals[i]);
}

//13.15