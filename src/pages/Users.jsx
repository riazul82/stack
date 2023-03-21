import React, { useEffect, useState } from 'react';
import Pagination from '../components/Pagination';
import DashboardLayout from '../layouts/DashboardLayout';
import { RxDotsHorizontal } from 'react-icons/rx';
import { usersData } from '../reducers/userReducer';
import { useDispatch, useSelector } from 'react-redux';

const Users = () => {
    const {users, loading, error} = useSelector((state) => state.users);
    const [searchText, setSearchText] = useState('');
    const [filteredUser, setFilteredUser] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(10);
    
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(usersData(currentPage));
    }, [currentPage, dispatch]);

    useEffect(() => {
        if (users.length && users[0] !== undefined) {
            setTotalPages(users[0].total_pages);
        }
    }, [users]);

    // search...
    useEffect(() => {
        const filterSearch = (user) => {
            const userData = ''.concat(user.id, user.first_name, user.last_name, user.email).toLowerCase();
            const srchTxt = searchText.replace(/[^a-zA-Z0-9@]/g, '').toLowerCase();
            
            if (userData.includes(srchTxt)) {
                return true;
            } else {
                return false;
            }
        }

        if (users.length && users[0] !== undefined) {
            if (searchText === '') {
                setFilteredUser([...users[0].data]);
            } else {
                setFilteredUser(users[0].data.filter((user) => filterSearch(user)));
            }
        }

    }, [searchText, users]);

    const getSearchText = (searchTxt) => {
        setSearchText(searchTxt);
    }

    return (
        <DashboardLayout getSearchText={getSearchText}>
            <h1 className="mt-[48px] text-[#323B4B] text-[23px] font-semibold">Users List</h1>
            <table className="table-auto w-full mt-[22px] border-separate border-spacing-y-[20px]">
                <thead>
                    <tr className="h-[44px] bg-[#FAFBFC]">
                        <th className="text-center text-[#4E5D78] text-[12px] font-semibold uppercase rounded-l-[12px] px-[12px]">#ID</th>
                        <th className="text-left text-[#4E5D78] text-[12px] font-semibold uppercase pl-[28px]">User</th>
                        <th className="text-left text-[#4E5D78] text-[12px] font-semibold uppercase">Email</th>
                        <th className="text-right text-[#4E5D78] text-[12px] font-semibold uppercase px-[48px] rounded-r-[12px]">Options</th>
                    </tr>
                </thead>

                <tbody>
                    {!loading && filteredUser && filteredUser.map((user) => {
                        return <tr key={user.id} className="h-[60px]">
                            <td className="text-center text-[14px] text-[#4E5D78] font-semibold">{user.id}</td>
                            <td className="flex justify-start items-center h-full pl-[28px]">
                                <img src={user.avatar} className="h-[60px] w-[60px] rounded-[15px]" alt="avater" />
                                <p className="text-[14px] text-[#4E5D78] font-semibold ml-[20px]">{user.first_name + ' ' + user.last_name}</p>
                            </td>
                            <td className="text-left text-[14px] text-[#4E5D78] font-semibold">{user.email}</td>
                            <td>
                                <div className="flex items-center justify-end mx-[48px]">
                                    <RxDotsHorizontal className="text-[26px] text-[#B0B7C3] cursor-pointer" />
                                </div>
                            </td>
                        </tr>
                    })}           
                </tbody>
            </table>

            {loading && <div className="flex h-[400px] justify-center items-center text-[18px] mb-8">
                <span className="h-8 w-8 border-4 border-[#377DFF] border-b-[#fff] rounded-full animate-spin"></span>
                <p className="ml-3 text-[#4E5D78]">Please wait...</p>
            </div>}
            {error && <p className="flex h-[400px] text-red-600 justify-center items-center text-[18px] mb-8">Upps! Something wrong!</p>}
        
            {!searchText && <Pagination data={{currentPage, setCurrentPage, totalPages}} />}
        </DashboardLayout>
    );
}

export default Users;