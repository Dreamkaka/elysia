import { Elysia } from "elysia";

const app = new Elysia()

.get("/", () => "Hello Elysia")
.get("/user/:id", ({ params }) => `Hello, ${params.id}!`)
.get("/lol", () => "hello lol") 


.listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
