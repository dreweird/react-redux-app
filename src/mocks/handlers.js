import { rest } from "msw";
import users from "../data/users";
import posts from "../data/posts";

export const handlers = [
  rest.get("/users", (req, res, ctx) => {
    return res(ctx.json(users));
  }),

  rest.get("/posts", (req, res, ctx) => {
    return res(
      // ctx.delay(2000),
      ctx.json(posts)
      );
  }),
];