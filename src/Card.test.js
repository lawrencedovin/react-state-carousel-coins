import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Card from "./Card";

it('should render Card component', () => {
    render(<Card />);
})

it('matches snapshot', () => {
    const { asFragment } = render(<Card />);
    expect(asFragment()).toMatchSnapshot();
})

it('should show props passed in', () => {
    const { getByText } = render(<Card caption="i'm a card" src="google.com" currNum={1} totalNum={3}/>)
    const caption = getByText("i'm a card");
    const imgText = getByText("Image 1 of 3.");
    expect(caption).toHaveClass("Card-title");
    expect(caption).toBeInTheDocument();
    expect(imgText).toHaveClass("Card-small");
    expect(imgText).toBeInTheDocument();
})