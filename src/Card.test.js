import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Card from "./Card";

it('should render Card component', () => {
    render(<Card />);
})

it('should show props passed in', () => {
    const { getByText } = render(<Card caption="i'm a card" src="google.com" currNum={1} totalNum={3}/>)
    const h4 = getByText("i'm a card");
    expect(h4).toHaveClass("Card-title");
})