import { Response } from "express";

//  RESPONSE HANDLER
export const result = (
  res: Response,
  data = { message: "Ok", data: {} },
  statusCode = 200
) => {
  res.status(statusCode).json(data);
};

export const accepted = (
  res: Response,
  data = { message: "Accepted", data: {} }
) => {
  data.message = "Accepted";
  return res.status(202).json(data);
};

export const created = (
  res: Response,
  data = { message: "Accepted", data: {} }
) => {
  return res.status(201).json(data);
};

// ERROR HANDLER

export const error = (
  res: Response,
  data = { message: "Server Error", error: {} },
  statusCode = 500
) => {
  return res.status(statusCode).json(data);
};

export const errorResponse = (
  res: Response,
  data = { message: "Server Error", error: {} },
  statusCode = 500
) => {
  return res.status(statusCode).json(data);
};

export const notFound = (
  res: Response,
  data = { message: "Not Found", error: {} },
  statusCode = 404
) => {
  return res.status(statusCode).json(data).end();
};

export const unauthorized = (
  res: Response,
  data = { message: "Unauthorized", error: {} },
  statusCode = 401
) => {
  return res.status(statusCode).json(data);
};

export const forbidden = (
  res: Response,
  data = { message: "Forbidden", error: {} },
  statusCode = 403
) => {
  return res.status(statusCode).json(data);
};

export const badRequest = (
  res: Response,
  data = { message: "Bad Request", error: {} },
  statusCode = 400
) => {
  return res.status(statusCode).json(data);
};

export const unsupportedAction = (
  res: Response,
  data = { message: "Unsupported Action", error: {} },
  statusCode = 405
) => {
  return res.status(statusCode).json(data);
};

export const invalid = (
  res: Response,
  data = { message: "Unprocessable Entity", error: {} },
  statusCode = 422
) => {
  return res.status(statusCode).json(data);
};
