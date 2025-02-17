// Core Application
class BlackFlamesApp {
    constructor() {
        this.config = {
            API_BASE: 'https://api.blackflames.inc',
            SOCKET_URL: 'wss://realtime.blackflames.inc',
            CACHE_DURATION: 300000
        };

        this.state = {
            user: null,
            theme: 'dark',
            portfolio: [],
            commissions: [],
            notifications: []
        };

        this.init();
    }

    async init() {
        await this.loadInitialState();
        this.setupEventListeners();
        this.initializeComponents();
    }
}

const app = new BlackFlamesApp();
export default app;