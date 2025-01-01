import jwt from "jsonwebtoken";
import { Response, NextFunction } from "express";
import { ethers } from "ethers";
import { fetchOne } from "../providers/user";

import { ENV_VARIABLES } from "../configurations/env";

import HTTP_RESPONSE_MESSAGES from "../constants/httpResponseMessages";
import { CustomRequest } from "../types/customRequest";
const extractTokenFromHeader = async (req: CustomRequest,) => {
  if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') {
    return req.headers.authorization.split(' ')[1];
  }
  return undefined;
};
export const validateAccess = async (
  request: CustomRequest,
  response: Response,
  next: NextFunction
) => {
  try {
    let token = await extractTokenFromHeader(request);
    if (!token) {
      return response
        .status(401)
        .json({ message: 'TOKEN_IS_MISSING' });
    }
    token = token as string
    token = token?.replace(/\"/g, "")
    const userData: any = jwt.verify(token, ENV_VARIABLES.JWT_SECRET);
    if (!userData) {
      return response
        .status(401)
        .json({ message: 'INVALID_TOKEN_TRY_AGAIN' });
    }
    request.walletAddress = userData?.walletAddress;
    next();
  } catch (error) {
    return response.status(401).json({
      success: false,
      message: HTTP_RESPONSE_MESSAGES.ACCESS_DENIED,
      error: null,
    });
  }
};

export default validateAccess;