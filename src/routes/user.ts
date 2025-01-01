import { Router } from "express";
import controller from "../controllers/user-nonce";
const userNonceRouter: Router = Router();
/**
 * @swagger
 * /api/v1/user/user-nonce:
 *   get:
 *     summary: This route return nonce for given wallet address
 *     tags: [User]
 *     parameters:
 *       - in: query
 *         name: walletAddress
 *         schema:
 *           type: string
 *         required: true
 *         description: User's wallet address
 *         example: '0x9910705C9F71626B3259f55cD0ab1392A5A50C10'
 *     responses:
 *       200:
 *         description: User list based on username
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Nonce has been generated!
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 data:
 *                   type: object
 *                   $ref: '#/components/schemas/GetUserNonce'
 */
userNonceRouter.get("/user-nonce", controller.getUserNonce);

/**
 * @swagger
 * /api/v1/user/token:
 *   post:
 *     summary: This route return token after validating signature using walletAddress
 *     tags: [User]
 *     requestBody:
 *       description: walletAddress and signature is required
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               walletAddress:
 *                 type: string
 *                 example: '0x9910705C9F71626B3259f55cD0ab1392A5A50C10'
 *                 required: true
 *               signature:
 *                 type: string
 *                 example: '0x6282d309ada45ba69902115ab8095ba3db704926062652104df7671ca90438d81cf0addc4918aa1a69909dc99c1d660538030dc7d6f638886ee9d6e21c61b1c51b'
 *                 required: true
 *     responses:
 *       200:
 *         description: User list based on username
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Request successful
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 data:
 *                   type: object
 *                   $ref: '#/components/schemas/GetUserToken'
 */
userNonceRouter.post("/token", controller.getUserToken);

/**
 * @swagger
 * /api/v1/user/validate-token:
 *   get:
 *     summary: This route validate user's token.
 *     tags: [User]
 *     security:
 *       - BearerAuth: []
 *     responses:
 *       200:
 *         description: Success message if token is valid
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Request successful
 *                 success:
 *                   type: boolean
 *                   example: true
*       401:
 *         description: This is one of failure.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Token is missing!
 *                 success:
 *                   type: boolean
 *                   example: false
 */
userNonceRouter.get('/validate-token', controller.validateUserToken)
export default userNonceRouter;