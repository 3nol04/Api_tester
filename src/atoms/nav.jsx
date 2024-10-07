import React, { forwardRef } from 'react';

const Nav = forwardRef(({ title, icon, nav_hover, link }, ref) => {
    return (
        <a href={link} ref={ref} className="w-full h-12 flex justify-start items-center group rounded-lg gap-2">
            <div className={`w-10 h-10 ${nav_hover} group-hover:translate-x-4 flex justify-center items-center group-hover:rounded-lg duration-500`}>
                <div>
                    {icon}
                </div>
            </div>
            <div className={`w-48 h-10 ${nav_hover} group-hover:translate-x-4 flex items-center group-hover:rounded-lg justify-start px-2 duration-500`}>
                <p className="text-base font-mona text-black group-hover:text-white duration-500">{title}</p>
            </div>
        </a>
    );
});

export default Nav;
