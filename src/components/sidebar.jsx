import React, { useEffect, useRef } from 'react';
import Nav from '../atoms/nav.jsx';
import foto from '../assets/img/foto.png';
import { Menu, Pay, Bed, User, Login } from '../atoms/icons.jsx';
import Logout from '../atoms/logout.jsx';
import '../index.css';

const Sidebar = () => {
  

    const transaksi = useRef(null);
    const minimizeRef = useRef(null);
    const menu = useRef(null);
    const kamar = useRef(null);
    const admin = useRef(null);
    const navRef = useRef(null);
    const titleRef = useRef(null);
    const Name = useRef(null);
    const imgRef = useRef(null);
    const btnnav = useRef(null);

    useEffect(() => {
        const minimaze = minimizeRef.current;
        const handleClick = () => {
            const isExpanded = navRef.current.classList.contains("w-72");
            minimizeRef.current.classList[isExpanded ? "add" : "remove"]("scale-x-100");
            minimizeRef.current.classList[isExpanded ? "remove" : "add"]("scale-x-100");
            minimizeRef.current.classList[isExpanded ? "add" : "remove"]("-scale-x-100");
            minimizeRef.current.classList[isExpanded ? "remove" : "add"]("-scale-x-100");
            menu.current.classList[isExpanded ? "add" : "remove"]("hidden");
            kamar.current.classList[isExpanded ? "add" : "remove"]("hidden");
            admin.current.classList[isExpanded ? "add" : "remove"]("hidden");
            btnnav.current.classList[isExpanded ? "add" : "remove"]("justify-center");
            transaksi.current.classList[isExpanded ? "add" : "remove"]("hidden");
            imgRef.current.classList[isExpanded ? "add" : "remove"]("hidden");
            navRef.current.classList[isExpanded ? "remove" : "add"]("w-72");
            navRef.current.classList[isExpanded ? "add" : "remove"]("w-28");
            titleRef.current.classList[isExpanded ? "add" : "remove"]("hidden");
            Name.current.classList[isExpanded ? "add" : "remove"]("hidden");
            titleRef.current.classList[isExpanded ? "remove" : "add"]("block");
            
            
        };
        
        minimaze.addEventListener("click", handleClick);
        return () => {
            minimaze.removeEventListener("click", handleClick);
        };
    }, []);

    return (
        <div ref={navRef} className="w-72 h-screen px-4 py-2 bg-primary duration-500">
            <div className="w-full h-full bg-nav rounded-2xl flex flex-col justify-between items-start">
                <div className="w-full h-16 flex justify-between items-center  bg-black rounded-2xl">
                    <div ref={btnnav}  className="w-full h-16 flex justify-start items-center gap-3 px-4 font-mona  ">
                        <img ref={imgRef}  src={foto} alt="logo" className="w-7 h-7 animate-slide_right" />
                        <h1 ref={titleRef} className="text-2xl font-mona font-bold text-white animate-slide_right" >Resting</h1>
                        <Logout
                            ref={minimizeRef}
                            size={"w-8 h-8"}
                            hover={"hover:stroke-white hover:fill-white duration-500 scale-x-100"}
                        />
                    </div>
                </div>
                <div className="w-full h-96 flex-col justify-center items-center  gap-5">
                    <Nav 
                        ref={menu} 
                        title="Menu" 
                        link={"#"} 
                        icon_hover="group-hover:bg-primary "
                        nav_hover="group-hover:bg-primary animate-slide_right" 
                        icon={<Menu hover={"group-hover:stroke-white group-hover:fill-white "} />} 
                    /> 
                    <Nav 
                        ref={kamar} 
                        title="Kamar" 
                        link={"#"} 
                        icon_hover="group-hover:bg-primary"
                        nav_hover="group-hover:bg-primary animate-slide_right" 
                        icon={<Bed hover={"group-hover:stroke-white group-hover:fill-white"} />} 
                    /> 
                    <Nav 
                        ref={admin} 
                        title="Admin" 
                        link={"#"} 
                        icon_hover="group-hover:bg-primary"
                        nav_hover="group-hover:bg-primary animate-slide_right " 
                        icon={<User hover={"group-hover:stroke-white group-hover:fill-white "} />} 
                    /> 
                    <Nav 
                        ref={transaksi} 
                        title="Transaksi" 
                        link={"#"} 
                        icon_hover="group-hover:bg-primary"
                        nav_hover="group-hover:bg-primary animate-slide_right " 
                        icon={<Pay hover={"group-hover:stroke-white group-hover:fill-white"} />} 
                    />
                </div>
                <div className="w-full h-36 flex justify-center items-center gap-5 px-12">
                    <div className="w-14 h-14 flex justify-center items-center rounded-full border-2">
                        <div className="w-14 h-14 flex justify-center items-center"></div>
                    </div>
                    <div className="w-full h-16 flex justify-center items-center rounded-tr-3xl">
                        <div ref={Name} className="w-full h-16 flex flex-col justify-center items-start">
                            <p className="text-[10px] font-mona text-white">M TRI SETIANTO</p>
                            <p className="text-xs font-mona text-white">1234567890</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
