import React from "react";

const Nav = React.forwardRef(({ title, icon, nav_hover,icon_hover, link }, navRef) => {
    return (
        <a href={link} className="w-full h-12 flex justify-start items-center group rounded-lg px-5 gap-2">
            <div  className={`w-10 h-10 ${icon_hover} group-hover:translate-x-4 flex justify-center items-center group-hover:rounded-lg duration-500`}>
                <div>
                    {icon}
                </div>
            </div>
            <div  ref={navRef} className={`w-48 h-10 ${nav_hover} group-hover:translate-x-4 flex items-center group-hover:rounded-lg justify-start px-2 duration-500`}>
                <p className="text-base font-mona text-black group-hover:text-white duration-500">{title}</p>
            </div>
        </a>
    );
});
export default Nav;
