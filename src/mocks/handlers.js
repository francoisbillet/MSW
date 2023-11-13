import { rest } from "msw";

export const handlers = [
  rest.get("https://dummyjson.com/products/:productId", (req, res, ctx) => {
    console.log(req.params.productId);
    return res(
      ctx.json({
        id: 1,
        title: "Test",
      })
    );
  }),
];
