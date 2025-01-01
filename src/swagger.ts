import swaggerJsDoc from "swagger-jsdoc"
/**
 * @swagger
 * components:
 *   securitySchemes:
 *     BearerAuth:
 *       type: http
 *       scheme: bearer
 *       bearerFormat: JWT
 *   schemas:
 *     GetUserNonce:
 *       type: object
 *       properties:
 *         walletAddress:
 *           type: string
 *           example: '0x9910705C9F71626B3259f55cD0ab1392A5A50C10'
 *         nonce:
 *           type: string
 *           example: '66e32126-8af8-467d-81ab-9402fd0b1e7d'
 *     GetUserToken:
 *       type: object
 *       properties:
 *         walletAddress:
 *           type: string
 *           example: '0x9910705C9F71626B3259f55cD0ab1392A5A50C10'
 *         token:
 *           type: string
 *           example: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ3YWxsZXRBZGRyZXNzIjoiMHg5OTEwNzA1YzlmNzE2MjZiMzI1OWY1NWNkMGFiMTM5MmE1YTUwYzEwIiwiaWF0IjoxNzIzMTIwODUzLCJleHAiOjE3MjMyMDcyNTN9.k7pRBDF4SXWPyPtzqH08V3mUGiEqinZk3O1nRiWb24s'
 *     GetTwitterUser:
 *       type: object
 *       properties:
 *         _id:
 *           type: string
 *           example: '66af2ecec875b95747b1e988'
 *         creation_date:
 *           type: string
 *           format: date-time
 *           example: 'Tue Aug 06 05:02:41 +0000 2019'
 *         user_id:
 *           type: string
 *           example: '1158604283601813504'
 *         username:
 *           type: string
 *           example: 'noplacetohide'
 *         name:
 *           type: string
 *           example: 'No Place to Hide'
 *         location:
 *           type: string
 *           example: 'Bangalore, India'
 *         profile_pic_url:
 *           type: string
 *           format: uri
 *           example: https://pbs.twimg.com/profile_images/1572215206633435136/QnaHV96Z_normal.jpg
 *         profile_banner_url:
 *           type: string
 *           format: uri
 *           example: https://pbs.twimg.com/profile_images/1572215206633435136/QnaHV96Z_normal.jpg
 *         description:
 *           type: string
 *           example: Time is best teacher, if you don't know anything wait you will learn everything.
 *         external_url:
 *           type: string
 *           format: uri
 *           example: 'http://www.google.com'
 *         follower_count:
 *           type: integer
 *           example: 24
 *         following_count:
 *           type: integer
 *           example: 47
 *         favourites_count:
 *           type: integer
 *           example: 125
 *         number_of_tweets:
 *           type: integer
 *           example: 154
 *         timestamp:
 *           type: integer
 *           example: 1565067761
 *         is_private:
 *           type: boolean
 *           example: false
 *         is_verified:
 *           type: boolean
 *           example: false
 *         bot:
 *           type: boolean
 *           example: false
 *         has_nft_avatar:
 *           type: boolean
 *           example: false
 *         last_sync:
 *           type: string
 *           format: date-time
 *           example: '2024-08-04T07:33:04.399Z'
 *         enable_sync:
 *           type: boolean
 *           example: false
 *         isActive:
 *           type: boolean
 *           example: true
 *         createdAt:
 *           type: string
 *           format: date-time
 *           example: '2024-08-04T07:33:34.536Z'
 *         updatedAt:
 *           type: string
 *           format: date-time
 *           example: '2024-08-04T07:33:34.536Z'
 *         __v:
 *           type: integer
 *           example: 0
 * security:
 *   - BearerAuth: []
 * 
 * @swagger
 *  tags:
 *    name: User
 */
const swaggerSpec = swaggerJsDoc({
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Web3Agent API",
            version: "1.0.0",
            description: "A documentation for Web3Agent API.",
        },
    },

    apis: [
        `${__dirname}/routes/*.js`,
        `${__dirname}/routes/*.ts`,
        `${__dirname}/swagger.js`,
        `${__dirname}/swagger.ts`,
    ],
})

export default swaggerSpec;