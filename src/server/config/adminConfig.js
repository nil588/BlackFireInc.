export const adminConfig = {
    adminEmails: [
        'nil588@blackfireinc.com',
        process.env.ADMIN_EMAIL || ''
    ],
    
    addAdminEmail(email) {
        if (!this.adminEmails.includes(email)) {
            this.adminEmails.push(email);
        }
    },
    
    isAdminEmail(email) {
        return this.adminEmails.includes(email.toLowerCase());
    }
};
