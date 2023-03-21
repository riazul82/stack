import React from 'react';
import DashboardLayout from '../layouts/DashboardLayout';

const Dashboard = () => {
    const getSearchText = (searchTxt) => {}

    return (
        <DashboardLayout getSearchText={getSearchText}>
            <h1 className="mt-[48px] text-[#323B4B] text-[23px] font-semibold">Dashboard</h1>
        </DashboardLayout>
    );
}

export default Dashboard;