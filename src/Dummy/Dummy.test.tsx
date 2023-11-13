import { render, screen } from "@testing-library/react";
import { Dummy } from "./Dummy";
import { server } from "../mocks/server";
import { rest } from "msw";

describe("Dummy", () => {
  it("should work !", async () => {
    render(<Dummy />);

    await screen.findByText("My mocked product");
  });

  it("should load or error", async () => {
    server.use(
      rest.get("https://dummyjson.com/products/:productId", (req, res, ctx) => {
        return res(ctx.status(400));
      })
    );

    render(<Dummy />);

    expect(await screen.findByText("error")).toBeInTheDocument();
  });
});
