import { Request, Response } from "express";
import { ENV_VARIABLES } from "../configurations/env";
import axios from "axios";
import qs from "qs";
import * as cheerio from 'cheerio';

export const fetchTrendingTokens = async (request: Request, response: Response) => {
    try {
        const url = ENV_VARIABLES.COINGECKO_BASE_URL + "/api/v3/search/trending";

        const responseCoinGecko = await axios.get(url, { headers: { 'x-cg-pro-api-key': ENV_VARIABLES.COINGECKO_API_KEY } });

        const tokenListArray = responseCoinGecko.data.coins;

        let userResponseArray = [];

        console.log(tokenListArray);

        // const website = await fetch("https://www.coindesk.com/");
        // console.log(website);

        for (let i of tokenListArray) {
            let tempData: any = {};

            console.log(i);

            tempData.tokenName = i.item.name ? i.item.name : "";
            tempData.tokenSymbol = i.item.symbol ? i.item.symbol : "";
            tempData.marketCap = i.item.data.market_cap ? i.item.data.market_cap : "";
            tempData.tradingVolume = i.item.data.total_volume ? i.item.data.total_volume : "";
            tempData.marketCapRank = i.item.market_cap_rank ? i.item.market_cap_rank : "";
            tempData.currentPrice = i.item.data.price ? i.item.data.price : "";
            tempData.priceChangePercentage = i.item.data.price_change_percentage_24h.usd ? i.item.data.price_change_percentage_24h.usd : "";
            tempData.imageUrl = i.item.small ? i.item.small : "";

            userResponseArray.push(tempData);

        }

        response.status(200).json({ message: "FETCHING TRENDING TOKENS SUCCESS", success: true, data: [userResponseArray] })
    } catch (e) {
        response.status(400).json({ message: "FETCHING TRENDING TOKENS FAILED", success: false, data: {} });
        console.log(e);
    }
}

export const fetchLatestNews = async (request: Request, response: Response) => {
    try {

        let coindeskMarketLinks:any = [];
        let coindeskTechLinks:any = [];
        const responses = await axios.get("https://www.coindesk.com");
        const html = responses.data;

        const $ = cheerio.load(html);

        $('a').each((index, element) => {
            const href = $(element).attr('href');
            const text = $(element).text().trim();

            if (href && href.startsWith('/markets')) {
                const fullUrl = `https://www.coindesk.com${href}`;
                coindeskMarketLinks.push(fullUrl);
            }else if(href && href.startsWith('/tech')){
                const fullUrl = `https://www.coindesk.com${href}`;
                coindeskTechLinks.push(fullUrl);
            }
        });

        const uniqueCoindeskMarketLinks = [... new Set(coindeskMarketLinks)];
        const uniqueCoindeskTechLinks = [... new Set(coindeskTechLinks)];

        console.log(uniqueCoindeskMarketLinks);
        console.log(uniqueCoindeskTechLinks);

        const msg = "Give me a brief and crisp summary of these links. Give an overall summary along with individual summary for each article links: "+ uniqueCoindeskTechLinks.splice(1,7).toString();

        const url = 'https://api.corcel.io/v1/chat/completions';

        const data = JSON.stringify({ content: msg });

        const summaryResponse = await axios.post(url,JSON.stringify({
            model: 'llama-3',
            temperature: 0.1,
            max_tokens: 500,
            messages : [
                {
                    role: 'user',
                    content: data
                }
            ]
        }),{ headers: { 'Authorization': ENV_VARIABLES.CORCEL_API_KEY }});

        console.log(summaryResponse);

        // console.log(data);
        response.status(200).json({ message: "FETCHING TRENDING TOKENS SUCCESS", success: true, data: [] })
    } catch (e) {
        response.status(400).json({ message: "FETCHING TRENDING TOKENS FAILED", success: false, data: {} });
        console.log(e);
    }
}

export const fetchCryptoPanicData = async (request: Request, response: Response) =>{
    try{
    const url = "https://cryptopanic.com/api/free/v1/posts/?"
    const { cryptoTopicSymbols } = request.body;
    const reqParam = cryptoTopicSymbols ? {auth_token: ENV_VARIABLES.CRYPTOPANIC_API_KEY, currencies: cryptoTopicSymbols} : {auth_token: ENV_VARIABLES.CRYPTOPANIC_API_KEY}
    const apiResponse = await axios.get(url + qs.stringify(reqParam));
    console.log(apiResponse.data);
    const array = []

    for(let i of apiResponse.data.results){
        let temp:any = {}

        temp.newsTitle = i.title
        temp.createdAt = i.created_at
        temp.newsUrl = i.url
        temp.source = i.domain
        array.push(temp);
    }
    response.status(200).json({ message: "FETCHING NEWS SUCCESS", success: true, data: array })
} catch (e) {
    response.status(400).json({ message: "FETCHING NEWS FAILED", success: false, data: {} });
    console.log(e);
}

}