import { Response } from "express";
import HTTP_RESPONSE_MESSAGES from "../../constants/httpResponseMessages";
export const error = function error(error: any, response: Response) {
  let message;
  if (typeof error === "string") {
    message = error;
  } else if (error.details[0].type === "string.regex.base") {
    const errorId = error.details[0].message.split(" ");
    message = `Invalid ${errorId[0]} ${error.details[0].context.value}`;
  } else if (error.details[0].path.length > 1) {
    message = `${error.details[0].path[0]} ${error.details[0].message}`;
  } else {
    message = error.details[0].message.replace(/\"/g, "").trim() + "!";
    message = message.charAt(0).toUpperCase() + message.slice(1);
  }
  return response.status(error.status || 400).json({
    success: false,
    message: message,
    error: HTTP_RESPONSE_MESSAGES.BAD_REQUEST,
  });
};

export default {
  error,
};