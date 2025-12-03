import { ServerResponse } from "http";

const SendJson = (res: ServerResponse, statusCode: number, data: any) => {
    res.writeHead(statusCode, { "content-type": "application/json" });
    res.end(JSON.stringify(data));
}

export default SendJson;