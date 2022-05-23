/* eslint-disable testing-library/no-render-in-setup */
/* eslint-disable testing-library/no-debugging-utils */
import React from "react";
import axios from "axios";
import imageService from "../services/images";
import "@testing-library/jest-dom/extend-expect";
import { render, screen, fireEvent } from "@testing-library/react";
import ImageCreate from "../pages/ImageCreate";
import { MemoryRouter } from "react-router-dom";
jest.mock("axios");
beforeEach(() => {
  render(<ImageCreate />, { wrapper: MemoryRouter });
  axios.get.mockClear();
});
test("renders ImageCreate title", () => {
  const linkElement = screen.getByText(/create image/i);
  expect(linkElement).toBeInTheDocument();
});

test("has id", () => {
  const existsId = screen.getByTestId(/create-image/i);
  expect(existsId).toBeInTheDocument();
});

test("should renders the form elements", () => {
  const userInputEl = screen.getByPlaceholderText("Name");
  const submitEl = screen.getByRole("button", { name: /submit/i });
  expect(userInputEl).toBeInTheDocument();
  expect(submitEl).toBeInTheDocument();
});

test("If we don't pass image it throws an error", async () => {
  const message = "no files were uploaded.";
  axios.post.mockRejectedValueOnce(new Error(message));

  const result = imageService.post({ imageName: "pipo" });

  // const userInputEl = screen.getByPlaceholderText("Name");
  // const submitEl = screen.getByRole("button", { name: /submit/i });
  // fireEvent.change(userInputEl, { target: { value: "cat" } });
  // fireEvent.click(submitEl);
  // const errorMessage = await screen.findByText(/no files were uploaded/i);
  expect(axios.post).toHaveBeenCaledWith(imageService.baseUrl);
  expect(result).toEqual([]);
  // screen.debug();
});
