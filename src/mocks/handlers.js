import { rest } from "msw";

export const handlers = [
  rest.get("https://dummyjson.com/products/:productId", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        id: req.params.productId,
        title: "My mocked product",
      })
    );
  }),
];
