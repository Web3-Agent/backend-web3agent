import { Router, Response } from "express";
import controllers from "../controllers/compile-contract";
import validator from "../middlewares/requestValidators/compile-contract";
import validateAccess from "../middlewares/validateToken";
import { CustomRequest } from "../types/customRequest";
import { getTransactionDetailsByHash } from "../controllers/transaction-details";
import { getBlockDetailsByNumber } from "../controllers/block-details";
import { getGasPrice } from "../controllers/gas-price";
import { getTokenBalanceForAddress } from "../controllers/token-balance";
import { getLatestTokenList } from "../controllers/tokenList";
import { getTokenScore } from "../controllers/token-score";
import { getBlockchains } from "../controllers/blockchain";
import { getPoolLiquidityScore } from "../controllers/pool-liquidity-score";
import { getTopGainerTokens } from "../controllers/top-gainer-token";
import { getTopLosersTokens } from "../controllers/top-losers-token";
import { getDexInformation } from "../controllers/dex-information";
import { getMarketCapByDay, getSmartContractVerifiedStats, getStats, getTokenInfoBySymbol, getTransactionsCountByDay } from '../controllers/controller'
import { fetchLatestNews, fetchTrendingTokens, fetchCryptoPanicData } from "../controllers/market-data";
const DataApiRouter: Router = Router();

const ACTIONS = {
    BLOCK_DETAILS_BY_BLOCK_NUMBER: 'BLOCK_DETAILS_BY_BLOCK_NUMBER',
    TRANSACTION_DETAILS_BY_HASH: 'TRANSACTION_DETAILS_BY_HASH',
    GAS_PRICE: 'GAS_PRICE',
    TOKEN_BALANCE_FOR_ADDRESS: 'TOKEN_BALANCE_FOR_ADDRESS',
    LATEST_TOKEN_LIST: 'LATEST_TOKEN_LIST',
    TOKEN_SCORE: 'TOKEN_SCORE',
    BLOCKCHAIN_LIST: 'BLOCKCHAIN_LIST',
    POOL_LIQUIDITY_SCORE: 'POOL_LIQUIDITY_SCORE',
    TOP_GAINER_TOKENS: 'TOP_GAINER_TOKENS',
    TOP_LOSER_TOKENS: 'TOP_LOSER_TOKENS',
    FETCH_DEX_INFORMATION: 'FETCH_DEX_INFORMATION',
    BLOCKSCOUT_TRANSACTION_INFORMATION: "BLOCKSCOUT_TRANSACTION_INFORMATION",
    BLOCKSCOUT_MARKET_CAP_INFORMATION: "BLOCKSCOUT_MARKET_CAP_INFORMATION",
    BLOCKSCOUT_STATS: "BLOCKSCOUT_STATS",
    BLOCKSCOUT_SYMBOL_INFORMATION: "BLOCKSCOUT_SYMBOL_INFORMATION",
    VERIFIED_SMART_CONTRACTS_COUNTERS: "VERIFIED_SMART_CONTRACTS_COUNTERS",
    TOP_TRENDING_TOKENS: "TOP_TRENDING_TOKENS",
    TOP_LATEST_NEWS: "TOP_LATEST_NEWS"
}

const navigateController = (request: CustomRequest, response: Response) => {
    try {
        const { body } = request;
        const { action } = body;
        switch (action) {
            case ACTIONS.BLOCK_DETAILS_BY_BLOCK_NUMBER:
                return getBlockDetailsByNumber(request, response);
            case ACTIONS.TRANSACTION_DETAILS_BY_HASH:
                return getTransactionDetailsByHash(request, response);
            case ACTIONS.GAS_PRICE:
                return getGasPrice(request, response);
            case ACTIONS.TOKEN_BALANCE_FOR_ADDRESS:
                return getTokenBalanceForAddress(request, response);
            case ACTIONS.LATEST_TOKEN_LIST:
                return getLatestTokenList(request, response);
            case ACTIONS.TOKEN_SCORE:
                return getTokenScore(request, response);
            case ACTIONS.BLOCKCHAIN_LIST:
                return getBlockchains(request, response);
            case ACTIONS.POOL_LIQUIDITY_SCORE:
                return getPoolLiquidityScore(request, response);
            case ACTIONS.TOP_GAINER_TOKENS:
                return getTopGainerTokens(request, response);
            case ACTIONS.TOP_LOSER_TOKENS:
                return getTopLosersTokens(request, response);
            case ACTIONS.FETCH_DEX_INFORMATION:
                return getDexInformation(request, response);
            case ACTIONS.BLOCKSCOUT_TRANSACTION_INFORMATION:
                return getTransactionsCountByDay(request, response);
            case ACTIONS.BLOCKSCOUT_MARKET_CAP_INFORMATION:
                return getMarketCapByDay(request, response);
            case ACTIONS.BLOCKSCOUT_STATS:
                return getStats(request, response);
            case ACTIONS.BLOCKSCOUT_SYMBOL_INFORMATION:
                return getTokenInfoBySymbol(request, response);
            case ACTIONS.VERIFIED_SMART_CONTRACTS_COUNTERS:
                return getSmartContractVerifiedStats(request, response);
            case ACTIONS.TOP_TRENDING_TOKENS:
                return fetchTrendingTokens(request, response);
            case ACTIONS.TOP_LATEST_NEWS:
                return fetchCryptoPanicData(request, response);
            default:
                return response.status(400).json({
                    success: false,
                    message: 'UNKNOWN_REQUEST'
                })
        }
    } catch (error) {
        return response.status(400).json({
            success: false,
            message: 'UNABLE_TO_PROCESS_REQUEST'
        })
    }
}

DataApiRouter.post(
    "/",
    // validateAccess,
    navigateController
    // validator.compileContractValidation,
    // controllers.compileContract
);


export default DataApiRouter;