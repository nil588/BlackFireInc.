import React, { useState, useEffect } from 'react';
import { useAuth } from '../../hooks/useAuth';

export const AdminDashboard = () => {
    const [stats, setStats] = useState({
        totalUsers: 0,
        activeInvestments: 0,
        totalPortfolios: 0
    });
    const { user } = useAuth();

    useEffect(() => {
        fetchDashboardStats();
    }, []);

    const fetchDashboardStats = async () => {
        try {
            const response = await fetch('/api/admin/stats', {
                headers: {
                    'Authorization': `Bearer ${user.token}`
                }
            });
            const data = await response.json();
            setStats(data);
        } catch (error) {
            console.error('Error fetching stats:', error);
        }
    };

    return (
        <div className="admin-panel">
            <h1>Admin Dashboard</h1>
            <div className="admin-grid">
                <div className="admin-card">
                    <h3>Total Users</h3>
                    <p>{stats.totalUsers}</p>
                </div>
                <div className="admin-card">
                    <h3>Active Investments</h3>
                    <p>{stats.activeInvestments}</p>
                </div>
                <div className="admin-card">
                    <h3>Total Portfolios</h3>
                    <p>{stats.totalPortfolios}</p>
                </div>
            </div>
        </div>
    );
};
