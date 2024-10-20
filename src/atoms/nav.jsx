import React  from 'react';
import { Link } from 'react-router-dom';

const Nav = React.forwardRef(({ title, icon, link }, ref) => {
    return (
    <div className="w-60 h-12 flex justify-start items-center  rounded-lg px-2 ">
        <Link to={link} className="w-auto h-auto p-2 flex justify-start items-center group animate-slide_right gap-2">
            <div className={`w-10 h-10 group-hover:bg-primary flex justify-center items-center  px-6 group-hover:rounded-lg duration-500`}>
                <div className="w-6 h-6 flex justify-center items-center">
                    {icon}
                </div>
            </div>
            <div  ref={ref} id="title" className={`w-40 h-10  group-hover:bg-primary animate-slide_right group-hover:translate-x-4 flex items-center group-hover:rounded-lg justify-start px-2 duration-500 `}>
                <p className="text-base font-mona text-slate-500 group-hover:text-white duration-500">{title}</p>
            </div>  
        </Link>
    </div>
    );  
});
export default Nav;
