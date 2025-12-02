import http, { IncomingMessage, Server, ServerResponse } from 'http';


const server: Server = http.createServer((req: IncomingMessage, res: ServerResponse) => {
    console.log("Server is running ..........");

    if (req.url == "/" && req.method == "GET") {
        res.writeHead(200, { "content-type": "application/json" });
        res.end(JSON.stringify({
            message: "request send successfully",
            path: req.url
        }));
    }

    if (req.url == "/api" && req.method == "POST") {
        res.writeHead(200, { "content-type": "application/json" });
        res.end(JSON.stringify({
            message: "request send successfully",
            path: req.url
        }));
    }

    if (req.url == "/api/users" && req.method == "POST") {
        let body = "";

        req.on("data", (chunk) => {
            body += chunk.toString()
        })

        req.on("end", () => {
           try{
             const parsedData = JSON.parse(body);
             console.log(body);
            res.end(JSON.stringify(parsedData))
           }catch(error){
            console.log(error?.message);
           }
        })
    }
})

server.listen(3000, () => {
    console.log(`Server is Running Port ${3000}`);
})