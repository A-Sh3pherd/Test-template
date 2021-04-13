import React from 'react'
import * as AiIcons from "react-icons/ai";

export const SidebarData = [
    {
        title: 'Home',
        path: '/',
        icon: <AiIcons.AiFillHome />,
        className: 'nav-text'
    },
    {
        title: 'Logout',
        path: '/logout',
        icon: <AiIcons.AiOutlineLogout/>,
        className: 'nav-text'
    },
]