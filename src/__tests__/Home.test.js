/* eslint-disable testing-library/no-render-in-setup */
/* eslint-disable testing-library/no-debugging-utils */
import React from "react";
import axios from "axios";
import imageService from "../services/images";
import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import ImageCreate from "../pages/ImageCreate";
import { MemoryRouter } from "react-router-dom";

jest.mock("axios");
beforeEach(() => {
  render(<ImageCreate />, { wrapper: MemoryRouter });
  axios.get.mockClear();
});

test("good response", () => {
  axios.get.mockImplementation(() => Promise.resolve({ data: {} }));
});
