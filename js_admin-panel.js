// Admin Panel
class AdminPanel {
    constructor() {
        this.CONFIG = {
            AUTHORIZED_ADMINS: ['nil588'],
            ACCESS_LEVELS: {
                SUPER_ADMIN: 3,
                ADMIN: 2,
                MODERATOR: 1
            },
            REFRESH_INTERVAL: 5000
        };

        this.state = {
            currentUser: null,
            statistics: {},
            alerts: []
        };

        this.init();
    }

    async init() {
        if (!this.validateAccess()) return;
        await this.loadAdminData();
        this.renderAdminPanel();
    }
}

const adminPanel = new AdminPanel();
export default adminPanel;