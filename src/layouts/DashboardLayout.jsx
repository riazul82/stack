import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import SideNav from '../components/SideNav';
import profile from '../assets/profile.png';
import { logoutUser } from '../reducers/authReducer';
import { useDispatch } from 'react-redux';

// icons
import { FaRegUser } from 'react-icons/fa';
import { FiSettings } from 'react-icons/fi';
import { GoIssueReopened } from 'react-icons/go';
import { MdLogout } from 'react-icons/md';

const DashboardLayout = (props) => {
    const [profileMenuToggle, setProfileMenuToggle] = useState(false);
    const [searchText, setSearchText] = useState('');

    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        props.getSearchText(searchText);
    }, [searchText, props]);

    const logout = () => {
        dispatch(logoutUser());
        navigate('/signin');
    }

    const hideProfileMenu = () => {
        if (profileMenuToggle) {
            setProfileMenuToggle(false);
        }
    }

    const handleSearchText = (e) => {
        setSearchText(e.target.value);
    }

    return (
        <div className="flex justify-between items-start box-border overflow-hidden" onClick={hideProfileMenu}>
            <SideNav />
            <div className="px-[38px] pt-[23px] pb-[40px] w-full min-h-screen border-l border-[#F3F3F3]">
                <div className="flex justify-between items-center">
                    <div className="flex justify-between items-center w-[539px] h-[54px] rounded-[16px] bg-[#F0F5FA]">
                        <input type="text" value={searchText} onChange={handleSearchText} className="h-full w-full rounded-[16px] overflow-hidden border-none outline-none bg-transparent pl-[24px] text-[14px] text-[#8A94A6] focus:ring-transparent placeholder:text-[#B0B7C3]" placeholder="Search"  />
                        <svg className="mr-[20px]" width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_20_270)">
                            <path d="M7.48644 0C3.35853 0 0 3.35853 0 7.48644C0 11.6146 3.35853 14.9729 7.48644 14.9729C11.6146 14.9729 14.9729 11.6146 14.9729 7.48644C14.9729 3.35853 11.6146 0 7.48644 0ZM7.48644 13.5908C4.12054 13.5908 1.38211 10.8524 1.38211 7.48647C1.38211 4.12057 4.12054 1.38211 7.48644 1.38211C10.8523 1.38211 13.5908 4.12054 13.5908 7.48644C13.5908 10.8523 10.8523 13.5908 7.48644 13.5908Z" fill="#B0B7C3"/>
                            <path d="M16.7975 15.8203L12.8355 11.8582C12.5655 11.5883 12.1283 11.5883 11.8583 11.8582C11.5883 12.128 11.5883 12.5657 11.8583 12.8354L15.8204 16.7975C15.9553 16.9324 16.132 16.9999 16.309 16.9999C16.4856 16.9999 16.6625 16.9324 16.7975 16.7975C17.0675 16.5277 17.0675 16.09 16.7975 15.8203Z" fill="#B0B7C3"/>
                            </g>
                            <defs>
                            <clipPath id="clip0_20_270">
                            <rect width="17" height="17" fill="white"/>
                            </clipPath>
                            </defs>
                        </svg>
                    </div>

                    <div className="flex justify-center items-center">
                        <svg className="mr-[47px]" width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18.9269 16.9271H6.07302V18.4896H18.9269V16.9271ZM18.3074 9.2484L18.6666 12.4197L20.2192 12.2439L19.86 9.07251L18.3074 9.2484ZM6.33328 12.4197L6.69253 9.2484L5.13996 9.07251L4.78072 12.2439L6.33328 12.4197ZM5.23648 14.9643C5.8455 14.2474 6.22678 13.3599 6.33328 12.4197L4.78072 12.2439C4.70868 12.8797 4.45121 13.4753 4.04572 13.9525L5.23648 14.9643ZM18.6666 12.4197C18.7732 13.3599 19.1544 14.2474 19.7634 14.9643L20.9542 13.9525C20.5487 13.4753 20.2912 12.8797 20.2192 12.2439L18.6666 12.4197ZM6.07302 16.9271C5.14927 16.9271 4.56168 15.7584 5.23648 14.9643L4.04572 13.9525C2.56757 15.6924 3.72733 18.4896 6.07302 18.4896V16.9271ZM18.9269 18.4896C21.2726 18.4896 22.4324 15.6924 20.9542 13.9525L19.7634 14.9643C20.4382 15.7584 19.8507 16.9271 18.9269 16.9271V18.4896ZM19.86 9.07251C19.4275 5.25493 16.279 2.34375 12.5 2.34375V3.90625C15.4481 3.90625 17.9603 6.18435 18.3074 9.2484L19.86 9.07251ZM6.69253 9.2484C7.03962 6.18435 9.5518 3.90625 12.5 3.90625V2.34375C8.72091 2.34375 5.57241 5.25493 5.13996 9.07251L6.69253 9.2484Z" fill="#B0B7C3"/>
                            <path d="M16.3565 20.0658C16.508 19.6617 16.3032 19.2115 15.8991 19.0601C15.4951 18.9086 15.0449 19.1134 14.8934 19.5174L16.3565 20.0658ZM10.1065 19.5174C9.95511 19.1134 9.50483 18.9086 9.1008 19.0601C8.69677 19.2115 8.49199 19.6617 8.6434 20.0658L10.1065 19.5174ZM14.8934 19.5174C14.5573 20.4144 13.6298 21.0937 12.5 21.0937V22.6562C14.2557 22.6562 15.7829 21.5963 16.3565 20.0658L14.8934 19.5174ZM12.5 21.0937C11.3702 21.0937 10.4427 20.4144 10.1065 19.5174L8.6434 20.0658C9.217 21.5963 10.7442 22.6562 12.5 22.6562V21.0937Z" fill="#B0B7C3"/>
                        </svg>

                        <div className="relative">
                            <img src={profile} onClick={() => setProfileMenuToggle(!profileMenuToggle)} className="h-[47px] w-[47px] cursor-pointer" alt="profile" />
                            {profileMenuToggle && <div className="absolute top-[60px] right-0 w-[180px] bg-[#fff] rounded-[16px] border border-[#ddd] overflow-hidden">
                                <Link to="/" className="flex items-center justify-start py-2 px-4 cursor-pointer hover:bg-[#F0F5FA]">
                                    <FaRegUser className="text-[#4E5D78] text-[18px]" />
                                    <span className="ml-2 text-[#4E5D78] text-[16px] font-medium">Profile</span>
                                </Link>
                                <Link to="/" className="flex items-center justify-start py-2 px-4 cursor-pointer hover:bg-[#F0F5FA]">
                                    <FiSettings className="text-[#4E5D78] text-[18px]" />
                                    <span className="ml-2 text-[#4E5D78] text-[16px] font-medium">Settings</span>
                                </Link>
                                <Link to="/" className="flex items-center justify-start py-2 px-4 cursor-pointer hover:bg-[#F0F5FA]">
                                    <GoIssueReopened className="text-[#4E5D78] text-[18px]" />
                                    <span className="ml-2 text-[#4E5D78] text-[16px] font-medium">Actions</span>
                                </Link>
                                <div to="/" onClick={logout} className="flex items-center justify-start py-2 px-4 cursor-pointer border-t border-[#ddd] hover:bg-[#F0F5FA]">
                                    <MdLogout className="text-[#4E5D78] text-[18px]" />
                                    <span className="ml-2 text-[#4E5D78] text-[16px] font-medium">Logout</span>
                                </div>
                            </div>}
                        </div>
                    </div>
                </div>

                {props.children}
            </div>
        </div>
    );
}

export default DashboardLayout;