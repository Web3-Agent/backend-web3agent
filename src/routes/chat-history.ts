import { Router } from "express";
import controllers from "../controllers/chat-history";
import validator from "../middlewares/requestValidators/chat-history";
import validateAccess from "../middlewares/validateToken";
const ChatHistoryRouter: Router = Router();

ChatHistoryRouter.post(
    "/",
    // validateAccess,
    validator.chatHistoryRequestValidation,
    controllers.createChatHistory
);
ChatHistoryRouter.get(
    "/",
    // validateAccess,
    controllers.getChatHistory
);
ChatHistoryRouter.delete(
    "/:_id",
    // validateAccess,
    controllers.deleteChatHistory
);

export default ChatHistoryRouter;