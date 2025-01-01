import { ENV_VARIABLES } from "../configurations/env";

interface ChainConfig {
    chainSelector: string;
    router: string;
    rpc: string;
}

interface ChainlinkCCIP {
    [chainId: string]: ChainConfig;
}
export const TOKEN_REGISTRY ={
    "1":{
        'ETH': "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",
        'WETH': "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
        'USDT': '0xdAC17F958D2ee523a2206206994597C13D831ec7',
        'USDC': '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48',
        'BNB': '0xB8c77482e45F1F44dE1745F52C74426C631bDD52',
        'UNI': '0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984',
        'LINK': '0x514910771AF9Ca656af840dff83E8264EcF986CA',
        'DAI': "0x6B175474E89094C44Da98b954EedeAC495271d0F",
        'WBTC': '0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599',
    },
    "56":{
        'BNB': "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",
        'WBNB': "0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c",
        'USDT': "0x55d398326f99059fF775485246999027B3197955",
        'ADA': "0x3EE2200Efb3400fAbB9AacF31297cBdD1d435D47",
        'BAND': "0xAD6cAEb32CD2c308980a548bD0Bc5AA4306c6c18",
        'DOT': "0x7083609fCE4d1d8Dc0C979AAb8c869Ea2C873402",
        'ETH': "0x2170Ed0880ac9A755fd29B2688956BD959F933F8",
        'DAI': "0x1AF3F329e8BE154074D8769D1FFa4eE058B1DBc3",
        'BTC': "0x7130d2A12B9BCbFAe4f2634d864A1Ee1Ce3Ead9c",
        'DOGE': "0xbA2aE424d960c26247Dd6c32edC70B295c744C43",
        'LINK': "0x404460C6A5EdE2D891e8297795264fDe62ADBB75",
        'CAKE': "0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82",
        'USDC': "0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d",
        'USDFI': "0xC9f5955f6dA20e44A068f3d58FB2404f56f9a6f2"
    },
    "42161":{
        'ETH': "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",
        'WETH': "0x82aF49447D8a07e3bd95BD0d56f35241523fBab1",
        'WBTC': "0x2f2a2543B76A4166549F7aaB2e75Bef0aefC5B0f",
        'ARB': "0x912CE59144191C1204E64559FE8253a0e49E6548",
        'USDT': "0xFd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb9",
        'DAI': "0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1",
        'USDCe': "0xFF970A61A04b1cA14834A43f5dE4533eBDDB5CC8",
        'USDC': "0xaf88d065e77c8cC2239327C5EDb3A432268e5831",
        'LINK': "0xf97f4df75117a78c1A5a0DBb814Af92458539FB4",
        'CAKE': "0x1b896893dfc86bb67Cf57767298b9073D2c1bA2c",
        'SUSHI': "0xd4d42f0b6def4ce0383636770ef773390d85c61a",
    },
    "8453":{
        'ETH': "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",
        'WETH': "0x4200000000000000000000000000000000000006",
        'USDC': "0x833589fcd6edb6e08f4c7c32d4f71b54bda02913",
        'DAI': "0x50c5725949A6F0c72E6C4a641F24049A917DB0Cb",
    },
    "97":{
        "BNB": "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",
        "ETH": "0x8BaBbB98678facC7342735486C851ABD7A0d17Ca",
        "WBNB": "0xae13d989daC2f0dEbFf460aC112a837C89BAa7cd",
        "BTC": "0x4b1851167f74FF108A994872A160f1D6772d474b",
        "DAI": "0x8a9424745056Eb399FD19a0EC26A14316684e274",
        "LINK": "0x84b9B910527Ad5C03A9Ca831909E21e236EA7b06",
        "CCIP-BnM": "0xbFA2ACd33ED6EEc0ed3Cc06bF1ac38d22b36B9e9"
    },
    "10":{
        'ETH': "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",
        'USDC': "0x0b2C639c533813f4Aa9D7837CAf62653d097Ff85",
        'WETH': "0x4200000000000000000000000000000000000006",
        'WBTC': "0x68f180fcCe6836688e9084f035309E29Bf0A2095"
    },
    "34443":{
        'ETH': "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",
        "WETH": "0x4200000000000000000000000000000000000006",
        "USDC" : "0xd988097fb8612cc24eeC14542bC03424c656005f",
        "mBTC" : "0x59889b7021243dB5B1e065385F918316cD90D46c",
        "USDT" : "0xf0F161fDA2712DB8b566946122a5af183995e2eD",
        "MODE" : "0xDfc7C877a950e49D2610114102175A06C2e3167a"
    },
    "11155111":{
        "LINK": "0x779877A7B0D9E8603169DdbD7836e478b4624789",
        "CCIP-BnM": "0xFd57b4ddBf88a4e07fF4e34C487b99af2Fe82a05"
    },
    "84532":{
        'ETH': "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",
        "CCIP-BnM": "0x88A2d74F47a237a62e7A51cdDa67270CE381555e"
    },
    "919":{
        'ETH': "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",
        "WETH": "0x4200000000000000000000000000000000000006",
        "CCIP-BnM": "0xB9d4e1141E67ECFedC8A8139b5229b7FF2BF16F5"
    }
}

export const PROTOCOL_ADDRESS_REGISTRY ={
    "1": {
        "UniSwapV2": "0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D", // uniswap
    },
    "56": {
        "UniSwapV2": "0x10ED43C718714eb63d5aA57B78B54704E256024E", // pancakeSwap
    },
    "42161": {
        "UniSwapV2": "0x1b02dA8Cb0d097eB8D57A175b88c7D8b47997506", // sushiswap
    },
    "8453": {
        "UniSwapV2": "0x4752ba5dbc23f44d87826276bf6fd6b1c372ad24", // uniswap
    },
    "97":{
        "UniSwapV2": "0x9Ac64Cc6e4415144C455BD8E4837Fea55603e5c3" // pancakeswap
    },
    "10":{
        "UniSwapV2": "0x4A7b5Da61326A6379179b40d00F57E5bbDC962c2" // uniswap
    },
    "34443":{
        "UniSwapV2": "0x082C1E810B6518a65ae61d9C07dc25d9ffe61Ae6", // supswap
        "StrategyFactory": "",
        "StrategyAddressLayerBank": ""
    },
    "11155111":{
        "L1TokenFactory": "0x1c3d038Cc368feA79dd35644e1E8ef9d9235C115" 
    },
    "919": {
        "StrategyFactory": ""
    }
}

export const CHAINLINK_CCIP_REGISTRY: ChainlinkCCIP= {
    "1": {  // Ethereum Mainnet
        "chainSelector": "5009297550715157269",
        "router": "0x80226fc0Ee2b096224EeAc085Bb9a8cba1146f7D",
        "rpc": "https://eth-pokt.nodies.app"
    },
    "10": {  // Optimism Mainnet
        "chainSelector": "3734403246176062136",
        "router": "0x3206695CaE29952f4b0c22a169725a865bc8Ce0f",
        "rpc": "https://mainnet.optimism.io"
    },
    "42161": {  // Arbitrum Mainnet
        "chainSelector": "4949039107694359620",
        "router": "0x141fa059441E0ca23ce184B6A78bafD2A517DdE8",
        "rpc": "https://arbitrum.drpc.org"
    },
    "137": {  // Polygon Mainnet
        "chainSelector": "4051577828743386545",
        "router": "0x849c5ED5a80F5B408Dd4969b78c2C8fdf0565Bfe",
        "rpc": "https://1rpc.io/matic"
    },
    "43114": {  // Avalanche Mainnet
        "chainSelector": "6433500567565415381",
        "router": "0xF4c7E640EdA248ef95972845a62bdC74237805dB",
        "rpc": "https://avalanche.drpc.org"
    },
    "56": {  // BSC Mainnet
        "chainSelector": "11344663589394136015",
        "router": "0x34B03Cb9086d7D758AC55af71584F81A598759FE",
        "rpc": "https://bsc.rpc.blxrbdn.com"
    },
    "8453": {  // Base Mainnet
        "chainSelector": "15971525489660198786",
        "router": "0x881e3A65B4d4a04dD529061dd0071cf975F58bCD",
        "rpc": "https://base-rpc.publicnode.com"
    },
    "11155111": {  // Ethereum Sepolia
        "chainSelector": "16015286601757825753",
        "router": "0x0BF3dE8c5D3e8A2B34D2BEeB17ABfCeBaf363A59",
        "rpc": `https://sepolia.infura.io/v3/${ENV_VARIABLES.INFURA_API_KEY}`
    },
    "11155420": {  // Optimism Sepolia
        "chainSelector": "5224473277236331295",
        "router": "0x114a20a10b43d4115e5aeef7345a1a71d2a60c57",
        "rpc": "https://sepolia.optimism.io	"
    },
    // "80001": {  // Polygon Mumbai
    //     "chainSelector": "12532609583862916517",
    //     "router": "0x1035CabC275068e0F4b745A29CEDf38E13aF41b1"
    // },
    // "43113": {  // Avalanche Fuji
    //     "chainSelector": "14767482510784806043",
    //     "router": "0xF694E193200268f9a4868e4Aa017A0118C9a8177"
    // },
    "97": {  // BSC Testnet
        "chainSelector": "13264668187771770619",
        "router": "0xE1053aE1857476f36A3C62580FF9b016E8EE8F6f",
        "rpc": "https://bsc-testnet.blockpi.network/v1/rpc/public"
    },
    "421614": {  // Arbitrum Sepolia
        "chainSelector": "3478487238524512106",
        "router": "0x2a9C5afB0d0e4BAb2BCdaE109EC4b0c4Be15a165",
        "rpc": "https://arbitrum-sepolia.blockpi.network/v1/rpc/public"
    },
    "84532": {  // Base Sepolia
        "chainSelector": "10344971235874465080",
        "router": "0xD3b06cEbF099CE7DA4AcCf578aaebFDBd6e88a93",
        "rpc": "https://base-sepolia.blockpi.network/v1/rpc/public"
    },
    "919": { // Mode Sepolia
        "chainSelector":"10344971235874465080",
        "router":"0xc49ec0eB4beb48B8Da4cceC51AA9A5bD0D0A4c43",
        "rpc": "https://sepolia.mode.network"
    },
    "34443": { // Mode Mainnet
        "chainSelector":"10344971235874465080",
        "router":"0x73f7E074bd7291706a0C5412f51DB46441B1aDCB",
        "rpc": "https://sepolia.mode.network"
    }
}
