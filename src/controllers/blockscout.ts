import { application, Response } from "express";
import axios from "axios";
import { CustomRequest } from "../types/customRequest";
import HTTP_RESPONSE_MESSAGES from "../constants/httpResponseMessages";
import { DATA_PROVIDER_MAPPING } from "../constants/dataProvider";

export const getTransactionsCountByDay = async (
    request: CustomRequest,
    response: Response
) => {
    try {
        const { body } = request;
        let {
            provider,
        } = body;
        switch (provider) {
            case DATA_PROVIDER_MAPPING.BLOCKSCOUT: {

                const { data: { chart_data } } = await axios.get(
                    `https://eth.blockscout.com/api/v2/stats/charts/transactions`,
                    { headers: { "Content-Type": 'application/json' } }
                );
                if (!chart_data?.length) {
                    throw new Error(HTTP_RESPONSE_MESSAGES.NO_DATA_FOUND);
                }
                // result = transformTokenDetails(result, provider);
                return response.status(200).json({
                    success: true,
                    message: HTTP_RESPONSE_MESSAGES.REQUEST_SUCCESSFULLY,
                    data: chart_data,
                    request: body,
                });
            }
            default:
                return response
                    .status(400)
                    .json({
                        success: false,
                        message: HTTP_RESPONSE_MESSAGES.UNKNOWN_DATA_SOURCE,
                    });
        }

    } catch (error: any) {
        return response
            .status(400)
            .json({
                success: false,
                message: error?.message || HTTP_RESPONSE_MESSAGES.INTERNAL_SERVER_ERROR,
            });
    }
};

export const getMarketCapByDay = async (
    request: CustomRequest,
    response: Response
) => {
    try {
        const { body } = request;
        let {
            provider,
        } = body;
        switch (provider) {
            case DATA_PROVIDER_MAPPING.BLOCKSCOUT: {

                const { data: { chart_data } } = await axios.get(`https://eth.blockscout.com/api/v2/stats/charts/market`,
                    { headers: { "Content-Type": 'application/json' } }
                );
                if (!chart_data?.length) {
                    throw new Error(HTTP_RESPONSE_MESSAGES.NO_DATA_FOUND);
                }
                return response.status(200).json({
                    success: true,
                    message: HTTP_RESPONSE_MESSAGES.REQUEST_SUCCESSFULLY,
                    data: chart_data,
                    request: body,
                });
            }
            default:
                return response
                    .status(400)
                    .json({
                        success: false,
                        message: HTTP_RESPONSE_MESSAGES.UNKNOWN_DATA_SOURCE,
                    });
        }

    } catch (error: any) {
        return response
            .status(400)
            .json({
                success: false,
                message: error?.message || HTTP_RESPONSE_MESSAGES.INTERNAL_SERVER_ERROR,
            });
    }
};

export const getStats = async (
    request: CustomRequest,
    response: Response
) => {
    try {
        const { body } = request;
        let {
            provider,
        } = body;
        switch (provider) {
            case DATA_PROVIDER_MAPPING.BLOCKSCOUT: {

                const { data } = await axios.get(`https://eth.blockscout.com/api/v2/stats`,
                    { headers: { "Content-Type": 'application/json' } }
                );
                if (!data) {
                    throw new Error(HTTP_RESPONSE_MESSAGES.NO_DATA_FOUND);
                }
                return response.status(200).json({
                    success: true,
                    message: HTTP_RESPONSE_MESSAGES.REQUEST_SUCCESSFULLY,
                    data,
                    request: body,
                });
            }
            default:
                return response
                    .status(400)
                    .json({
                        success: false,
                        message: HTTP_RESPONSE_MESSAGES.UNKNOWN_DATA_SOURCE,
                    });
        }

    } catch (error: any) {
        return response
            .status(400)
            .json({
                success: false,
                message: error?.message || HTTP_RESPONSE_MESSAGES.INTERNAL_SERVER_ERROR,
            });
    }
};
export const getTokenInfoBySymbol = async (
    request: CustomRequest,
    response: Response
) => {
    try {
        const { body } = request;
        let {
            provider,
            query: { search }
        } = body;
        if (!search) {
            throw new Error(HTTP_RESPONSE_MESSAGES.REQUIRED_PARAMETERS_MISSING);
        }
        switch (provider) {
            case DATA_PROVIDER_MAPPING.BLOCKSCOUT: {

                const { data } = await axios.get(`https://eth.blockscout.com/api/v2/search?q=${search}`,
                    { headers: { "Content-Type": 'application/json' } }
                );
                if (!data) {
                    throw new Error(HTTP_RESPONSE_MESSAGES.NO_DATA_FOUND);
                }
                return response.status(200).json({
                    success: true,
                    message: HTTP_RESPONSE_MESSAGES.REQUEST_SUCCESSFULLY,
                    data: data.items || [],
                    request: body,
                });
            }
            default:
                return response
                    .status(400)
                    .json({
                        success: false,
                        message: HTTP_RESPONSE_MESSAGES.UNKNOWN_DATA_SOURCE,
                    });
        }

    } catch (error: any) {
        return response
            .status(400)
            .json({
                success: false,
                message: error?.message || HTTP_RESPONSE_MESSAGES.INTERNAL_SERVER_ERROR,
            });
    }
};

export const getSmartContractVerifiedStats = async (
    request: CustomRequest,
    response: Response
) => {
    try {
        const { body } = request;
        let {
            provider
        } = body;

        switch (provider) {
            case DATA_PROVIDER_MAPPING.BLOCKSCOUT: {

                const { data } = await axios.get(`https://eth.blockscout.com/api/v2/smart-contracts/counters`,
                    { headers: { "Content-Type": 'application/json' } }
                );
                if (!data) {
                    throw new Error(HTTP_RESPONSE_MESSAGES.NO_DATA_FOUND);
                }
                return response.status(200).json({
                    success: true,
                    message: HTTP_RESPONSE_MESSAGES.REQUEST_SUCCESSFULLY,
                    data: data,
                    request: body,
                });
            }
            default:
                return response
                    .status(400)
                    .json({
                        success: false,
                        message: HTTP_RESPONSE_MESSAGES.UNKNOWN_DATA_SOURCE,
                    });
        }

    } catch (error: any) {
        return response
            .status(400)
            .json({
                success: false,
                message: error?.message || HTTP_RESPONSE_MESSAGES.INTERNAL_SERVER_ERROR,
            });
    }
};
export default { getTransactionsCountByDay, getMarketCapByDay, getStats, getTokenInfoBySymbol, getSmartContractVerifiedStats };
