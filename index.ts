import { Hitchhiker } from "lib/hitchhiker";
import { IContext } from "lib/interfaces";

const app = new Hitchhiker();

const PORT = 8080

function getBase() {
  return new Response("Hello");
}

function getHi() {
  return new Response("Hi");
}

function getId({request}: IContext) {
  return new Response(`Route has ID of ${request.url.split("/").pop()}`);
}

function getReadId({request}: IContext) {
  const splitArr = request.url.split("/");
  splitArr.pop();
  const id = splitArr.pop();
  return new Response(`Reading record with ID of ${id}`);
}

app.get("/", getBase).get("/hi", getHi).get("/:id", getId).get("/:id/article", getReadId).listen(PORT);
console.log(`App is running at URL ${app.url}`)
