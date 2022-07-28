import { rest } from "msw";
import users from "../data/users";
import posts from "../data/posts";
import { nanoid } from '@reduxjs/toolkit'

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
  rest.post("/posts", (req, res, ctx) => {
    const data = req.body
    data.date = new Date().toISOString()
    data.id = nanoid()
    data.user = parseFloat(data.user)
    data.reactions = {thumbsUp: 0, hooray: 0, heart: 0, rocket: 0, eyes: 0} 
    console.log(data)
    return res(
      // ctx.delay(2000),
      ctx.json(data)
      );
  }),
];