import React from 'react';
import { MdKeyboardDoubleArrowLeft } from 'react-icons/md';
import { MdKeyboardDoubleArrowRight } from 'react-icons/md';
import { MdOutlineKeyboardArrowLeft } from 'react-icons/md';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';

const Pagination = (data) => {
    const {currentPage, setCurrentPage, totalPages} = data.data;

    const nextPage = () => {
        if (currentPage === totalPages) {
            return null;
        } else {
            setCurrentPage((prev) => prev + 1);
        }
    }

    const prevPage = () => {
        if (currentPage === 1) {
            return null;
        } else {
            setCurrentPage((prev) => prev - 1);
        }
    }

    const multiNextPage = () => {
        if (currentPage + 3 >= totalPages) {
            setCurrentPage(totalPages - 1);
        } else {
            setCurrentPage(currentPage + 3);
        }
    }

    const multiPrevPage = () => {
        if (currentPage - 3 <= 1) {
            setCurrentPage(1);
        } else {
            setCurrentPage(currentPage - 2);
        }
    }

    return (
        <ul className="flex w-auto justify-start mt-[50px]">
            <li className="mr-[5px] h-auto w-auto"><button onClick={prevPage} className="flex w-[32px] h-[32px] items-center justify-center text-[13px] text-[#333333] font-semibold border border-[#F1F1F1] rounded-[8px]"><MdKeyboardDoubleArrowLeft className="text-[13px]" /></button></li>
            <li className="mr-[5px] h-auto w-auto"><button onClick={prevPage} className="flex w-[32px] h-[32px] items-center justify-center text-[13px] text-[#333333] font-semibold border border-[#F1F1F1] rounded-[8px]"><MdOutlineKeyboardArrowLeft className="text-[13px]" /></button></li>
            {(currentPage > 2) && <li className="mr-[5px] h-auto w-auto"><button onClick={multiPrevPage} className="w-[32px] h-[32px] text-[13px] text-[#333333] font-semibold border border-[#F1F1F1] rounded-[8px]">...</button></li>}
            {(currentPage > 1) && <li className="mr-[5px] h-auto w-auto"><button onClick={prevPage} className="w-[32px] h-[32px] text-[13px] text-[#333333] font-semibold border border-[#F1F1F1] rounded-[8px]">{currentPage - 1}</button></li>}
            <li className="mr-[5px] h-auto w-auto"><button disabled className="w-[32px] h-[32px] text-[13px] text-[#fff] font-semibold border border-[#F1F1F1] rounded-[8px] bg-[#2F80ED]">{currentPage}</button></li>
            {(currentPage < totalPages) && <li className="mr-[5px] h-auto w-auto"><button onClick={nextPage} className="w-[32px] h-[32px] text-[13px] text-[#333333] font-semibold border border-[#F1F1F1] rounded-[8px]">{currentPage + 1}</button></li>}
            {(currentPage + 2 < totalPages) && <li className="mr-[5px] h-auto w-auto"><button onClick={multiNextPage} className="w-[32px] h-[32px] text-[13px] text-[#333333] font-semibold border border-[#F1F1F1] rounded-[8px]">...</button></li>}
            {(currentPage + 1 < totalPages) && <li className="mr-[5px] h-auto w-auto"><button onClick={() => setCurrentPage(totalPages)} className="w-[32px] h-[32px] text-[13px] text-[#333333] font-semibold border border-[#F1F1F1] rounded-[8px]">{totalPages}</button></li>}                
            <li className="mr-[5px] h-auto w-auto"><button onClick={nextPage} className="flex w-[32px] h-[32px] items-center justify-center text-[18px] text-[#333333] font-semibold border border-[#F1F1F1] rounded-[8px]"><MdOutlineKeyboardArrowRight className="text-[13px]" /></button></li>
            <li className="mr-[5px] h-auto w-auto"><button onClick={nextPage} className="flex w-[32px] h-[32px] items-center justify-center text-[18px] text-[#333333] font-semibold border border-[#F1F1F1] rounded-[8px]"><MdKeyboardDoubleArrowRight className="text-[13px]" /></button></li>
        </ul>
    );
}

export default Pagination;