import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import { ethers } from "ethers";
import HTTP_RESPONSE_MESSAGES from "../constants/httpResponseMessages";
import { generateUUId } from "../utils/ids";
import { updateOne, fetchOne, deleteOne } from "../providers/user";
import { ENV_VARIABLES } from "../configurations/env";
export const getUserNonce = async (request: Request, response: Response) => {
  try {
    const { walletAddress } = request.query;
    if (!walletAddress?.length) {
      return response.status(400).json({
        success: false,
        message: HTTP_RESPONSE_MESSAGES.WALLET_ADDRESS_MISSING,
      });
    }
    const nonce = await generateUUId(12);
    await updateOne({ walletAddress }, { nonce, walletAddress }, { upsert: true, new: true })
    return response.status(200).json({
      success: true,
      message: HTTP_RESPONSE_MESSAGES.NONCE_GENERATED,
      data: { walletAddress, nonce },
    });
  } catch (error) {
    return response.status(500).json({
      success: false,
      message: HTTP_RESPONSE_MESSAGES.INTERNAL_SERVER_ERROR,
      error
    });
  }
}

export const getUserToken = async (request: Request, response: Response) => {
  try {
    let { walletAddress, signature } = request.body;
    if (!walletAddress || !signature) {
      throw new Error('WALLET_ADDRESS_AND_SIGNATURE_REQUIRED')
    }

    walletAddress = walletAddress?.toString()?.toLowerCase();
    const query = { walletAddress: { '$regex': walletAddress, $options: 'i' } };
    const user = await fetchOne(query);
    if (!user) {
      throw new Error('USER_NOT_EXISTS')
    }

    const { nonce, } = user;
    const decodedAddress = ethers.verifyMessage(
      nonce as string,
      signature as string
    );

    if (walletAddress !== decodedAddress.toLowerCase()) { throw new Error('SIGNATURE_VALIDATION_FAILED') };

    const token = jwt.sign({ walletAddress }, ENV_VARIABLES.JWT_SECRET, {
      expiresIn: ENV_VARIABLES.EXPIRES_IN,
    });
    await deleteOne(query);

    return response.status(200).json({
      success: true,
      message: HTTP_RESPONSE_MESSAGES.REQUEST_SUCCESSFULLY,
      data: { walletAddress, token },
    });
  } catch (error: any) {
    return response.status(400).json({
      success: false,
      message: error?.message || HTTP_RESPONSE_MESSAGES.INTERNAL_SERVER_ERROR,
      error
    });
  }
}


const extractTokenFromHeader = async (req: Request,) => {
  if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') {
    return req.headers.authorization.split(' ')[1];
  }
  return undefined;
};
export const validateUserToken = async (
  request: Request,
  response: Response,
) => {
  try {
    let token = await extractTokenFromHeader(request);
    if (!token) {
      return response
        .status(401)
        .json({ success: false, message: 'Token is missing!' });
    }
    token = token as string
    token = token?.replace(/\"/g, "")
    const userData: any = jwt.verify(token, ENV_VARIABLES.JWT_SECRET);
    if (!userData) {
      return response
        .status(401)
        .json({ success: false, message: 'Invalid token, try again!' });
    }
    return response.status(200).json({
      success: true,
      message: HTTP_RESPONSE_MESSAGES.REQUEST_SUCCESSFULLY,
    });
  } catch (error) {
    return response.status(401).json({
      success: false,
      message: HTTP_RESPONSE_MESSAGES.ACCESS_DENIED,
      error: null,
    });
  }
};

export default { getUserNonce, getUserToken, validateUserToken };