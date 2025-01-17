export const config = {
    RPC_URL: 'https://rpc.stargaze-apis.com',
    REST_URL: 'https://rest.stargaze-apis.com',
    EXPLORER_URL: 'https://www.mintscan.io/stargaze',
    NETWORK_NAME: 'Stargaze',
    NETWORK_TYPE: 'mainnet',
    CHAIN_ID: 'stargaze-1',
    CHAIN_NAME: 'Stargaze',
    COIN_DENOM: 'STARS',
    COIN_MINIMAL_DENOM: 'ustars',
    COIN_DECIMALS: 6,
    PREFIX: 'stars',
    COIN_TYPE: 118,
    COINGECKO_ID: 'stargaze',
    DEFAULT_GAS: 250000,
    GAS_PRICE_STEP_LOW: 0.0,
    GAS_PRICE_STEP_AVERAGE: 0.0,
    GAS_PRICE_STEP_HIGH: 0.025,
    FEATURES: ['stargate', 'ibc-transfer', 'no-legacy-stdTx'],
};
