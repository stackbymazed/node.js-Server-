import { IncomingMessage, ServerResponse } from "http";

export type RouteHandler = (req: IncomingMessage, res: ServerResponse) => void;

export const Routes: Map<String, Map<String, RouteHandler>> = new Map()

const AddRoute = (method: string, path: string, handler: RouteHandler) => {
    if (!Routes.has(method)) {
        Routes.set(method, new Map())
    }
    Routes.get(method)!.set(path, handler)
}

export default AddRoute;