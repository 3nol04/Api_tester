import React, { useEffect, useRef } from 'react';
import Nav from '../atoms/nav.jsx';
import foto from '../assets/img/foto.png';
import { Menu, Pay, Bed, User,Login } from '../atoms/icons.jsx';
import Logout from '../atoms/logout.jsx';
import '../index.css';

const Sidebar = () => {
    const minimizeRef = useRef(null);
    const menu = useRef(null);
    const kamar = useRef(null);
    const admin = useRef(null);
    const trnsaksi = useRef(null);

    useEffect(() => {
        const minimaze = minimizeRef.current;
        const handleClick = () => {
            
        };
        
        minimaze.addEventListener("click", handleClick);
        return () => {
            minimaze.removeEventListener("click", handleClick);
        };
    }, []);

    return (
        <div className="w-80 h-screen px-4 py-2 bg-primary">
            <div className="w-full h-full bg-nav rounded-2xl flex flex-col justify-between items-start">
                <div className="w-full h-16 flex justify-between items-start gap-5 pt-4 px-3">
                    <div className="w-auto h-16 flex justify-start items-center gap-3 px-6 font-mona bg-primary rounded-2xl">
                        <img src={foto} alt="logo" className="w-12 h-12" />
                        <h1 className="text-3xl font-mona font-bold text-white">Resting</h1>
                        
                        <Logout
                            ref={minimizeRef}
                            size={"w-8 h-8 "}
                            id="minimize"
                            hover={"hover:stroke-white hover:fill-white duration-500"}
                        />
                    </div>
                </div>
                <div className="w-full h-96 flex-col justify-center items-start gap-5 px-3">
                    <Nav ref={menu} title="Menu" link={"#"} nav_hover="group-hover:bg-primary" icon={<Menu hover={"group-hover:stroke-white group-hover:fill-white"} />} />
                    <Nav ref={kamar} title="Kamar" link={"#"} nav_hover="group-hover:bg-primary" icon={<Bed hover={"group-hover:stroke-white group-hover:fill-white"} />} />
                    <Nav ref={admin} title="Admin" link={"#"} nav_hover="group-hover:bg-primary" icon={<User hover={"group-hover:stroke-white group-hover:fill-white"} />} />
                    <Nav ref={trnsaksi} title="Transaksi" link={"#"} nav_hover="group-hover:bg-primary" icon={<Pay hover={"group-hover:stroke-white group-hover:fill-white"} />} />
                </div>
                <div className="w-full h-36 flex justify-center items-center gap-5 px-6">
                    <div className="w-14 h-14 flex justify-center items-center rounded-full border-2">
                        <div className="w-14 h-14 flex justify-center items-center"></div>
                    </div>
                    <div className="w-full h-16 flex justify-center items-center rounded-tr-3xl">
                        <div className="w-full h-16 flex flex-col justify-center items-start">
                            <p className="text-[13px] font-mona text-white">M TRI SETIANTO</p>
                            <p className="text-sm font-mona text-white">1234567890</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
