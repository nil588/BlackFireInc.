// Stock System
class StockSystem {
    constructor() {
        this.CONFIG = {
            TOTAL_SHARES: 10000, // Each share is 0.01%
            INITIAL_PRICE: 100,
            UPDATE_INTERVAL: 5000,
            MAX_PRICE_CHANGE: 0.05
        };

        this.state = {
            currentPrice: this.CONFIG.INITIAL_PRICE,
            availableShares: this.CONFIG.TOTAL_SHARES,
            shareholders: new Map(),
            tradeHistory: [],
            marketCap: 0,
            lastUpdate: new Date(),
            isTrading: true,
            percentPerShare: 0.01
        };

        this.init();
    }

    async init() {
        await this.loadMarketData();
        this.startPriceUpdates();
        this.setupWebSocket();
    }
}

const stockSystem = new StockSystem();
export default stockSystem;