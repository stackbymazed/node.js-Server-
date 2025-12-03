import http, { IncomingMessage, Server, ServerResponse } from 'http';
import { RouteHandler, Routes } from './helper/routehandler';
import "./Routes/index"

const server: Server = http.createServer((req: IncomingMessage, res: ServerResponse) => {
    console.log("Server is running ..........");
    const method = req.method?.toUpperCase() || "";
    const path = req.url || "";
    const MethodMap = Routes.get(method);
    const handler: RouteHandler | undefined = MethodMap?.get(path)

    if (handler) {
        handler(req, res,)
    } else {
        res.writeHead(404, { "content-type": "application/json" });
        res.end(
            JSON.stringify(
                {
                    success: false,
                    message: "content not pound",
                    path,
                }
            )
        )
    }

})

server.listen(3000, () => {
    console.log(`Server is Running Port ${3000}`);
})





    //GET Request
    // if (req.url == "/" && req.method == "GET") {
    //     res.writeHead(200, { "content-type": "application/json" });
    //     res.end(JSON.stringify({
    //         message: "request send successfully",
    //         path: req.url
    //     }));
    // }

    //post 
    // if (req.url == "/api" && req.method == "POST") {
    //     res.writeHead(200, { "content-type": "application/json" });
    //     res.end(JSON.stringify({
    //         message: "request send successfully",
    //         path: req.url
    //     }));
    // }

    //post
    // if (req.url == "/api/users" && req.method == "POST") {
    //     let body = "";

    //     req.on("data", (chunk) => {
    //         body += chunk.toString()
    //     })

    //     req.on("end", () => {
    //         try {
    //             const parsedData = JSON.parse(body);
    //             console.log(body);
    //             res.end(JSON.stringify(parsedData))
    //         } catch (error) {
    //             console.log(error?.message);
    //         }
    //     })
    // }