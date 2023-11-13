import { render, screen } from "@testing-library/react";
import { Dummy } from "./Dummy";
import { server } from "../mocks/server";
import { rest } from "msw";

describe("Dummy", () => {
  it("should display product title", async () => {
    render(<Dummy />);

    await screen.findByText(/My mocked product/);
  });

  it("should display error", async () => {
    server.use(
      rest.get("https://dummyjson.com/products/:productId", (req, res, ctx) => {
        return res(ctx.status(400));
      })
    );

    render(<Dummy />);

    expect(await screen.findByText(/Error/)).toBeInTheDocument();
  });

  it("should display loader", async () => {
    server.use(
      rest.get("https://dummyjson.com/products/:productId", (req, res, ctx) => {
        return res(ctx.status(200), ctx.json({}), ctx.delay("infinite"));
      })
    );

    render(<Dummy />);

    expect(await screen.findByText(/Loading.../)).toBeInTheDocument();
    expect(screen.queryByText(/My mocked product/)).toBeNull();
  });
});
