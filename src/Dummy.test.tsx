import { render, screen } from "@testing-library/react";
import { Dummy } from "./Dummy";

describe("Dummy", () => {
  it("should work !", async () => {
    render(<Dummy />);

    expect(await screen.findByText("Coucou")).toBeInTheDocument();
  });
});
