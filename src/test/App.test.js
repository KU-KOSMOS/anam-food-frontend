import React from "react";
import { render } from "@testing-library/react";
import App from "../App.js";

test("App.js Intro Page", () => {
    const page = render(<App />);
    page.getByText("안암 뭐먹지? 프로젝트");

    expect(page.container).toHaveTextContent("안암 뭐먹지? 프로젝트")
});
