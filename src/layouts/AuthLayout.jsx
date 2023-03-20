import React, { useState } from 'react';
import logo from '../assets/logo.png';

const AuthLayout = ({ children }) => {
    const [lang, setLang] = useState('English (UK)');

    const handleLang = (e) => {
        setLang(e.target.value);
    }

    return (
        <div className="font-inter px-[80px] py-[30px]">
            <div className="flex justify-between items-center">
                <img src={logo} className="h-[46px] w-[160px]" alt="logo" />
            
                <select value={lang} onChange={handleLang} name="lang" id="lang" className="bg-[#F0F5FA] text-[#B0B7C3] text-[12px] px-[18px] border-none outline-none rounded-[16px] h-[43px] w-[146px] box-border block focus:ring-transparent">
                    <option value="eng-uk" selected>English (UK)</option>
                    <option value="eng-en">English (EN)</option>
                </select>
            </div>

            {children}
        </div>
    );
}

export default AuthLayout;