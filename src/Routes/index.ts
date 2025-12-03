import { readUsers, writeUsers } from '../helper/fileDb';
import parseBody from '../helper/parseBody';
import AddRoute from '../helper/routehandler';
import SendJson from '../helper/sendJson';

AddRoute("GET", "/", (req, res) => {
    SendJson(res, 200, {
        path: req.url,
        message: "content is pound successfully....."
    }
    )
})


AddRoute("POST", "/api/users", async (req, res) => {
  const body = await parseBody(req);

  // user json read
  const users = readUsers();

  const newUser = {
    ...body,
  };

  users?.push(newUser);

  writeUsers(users);

  SendJson(res, 201, { success: true, data: body });
});