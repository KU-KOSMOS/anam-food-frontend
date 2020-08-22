import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';


export const SidebarData= [
    {
        title: '홈',
        path:'/',
        icon: <AiIcons.AiFillHome/>,
        cName:'nav-text'
    },

    {
        title: '로그인',
        path:'/login',
        icon: <FaIcons.FaHamburger/>,
        cName:'nav-text'
    },
    {
        title: '찾아보기',
        path:'/search',
        icon: <AiIcons.AiOutlineSearch/>,
        cName:'nav-text'
    },
]