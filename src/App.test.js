
import {fireEvent, render, screen } from "@testing-library/react";
import FeedBackForm from "./components/FeedbackForm";



describe("Feedback form", () => {

  test("checking to see if disbled if range is less than 5", () => {
    const handleSubmit = jest.fn()
    render(<FeedBackForm onSubmit={handleSubmit} />)

    const rangeInput = screen.getByLabelText(/Score:/)
    fireEvent.change(rangeInput, {target: {value: "4"}})

   const submitButton =  screen.getByRole("button")
   fireEvent.click(submitButton)

    expect(handleSubmit).not.toHaveBeenCalled()
    expect(submitButton).toHaveAttribute("disabled")


  })



})


