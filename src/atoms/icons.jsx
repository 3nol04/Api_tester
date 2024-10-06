// Icons.js
export const Menu = ({hover}) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className={`w-6 h-6  ${hover} duration-500`} viewBox="0 0 20 20" >
            <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
        </svg>
    );
}

export const User = ({hover}) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 500 500">
            <g  className={`stroke-black ${hover} duration-500`} >
                <path d="M393.729 99.186c-40.41-38.327-93.11-58.74-148.726-57.491S137.52 66.066 99.193 106.268c-38.327 40.41-58.74 93.11-57.491 148.726s24.371 107.483 64.573 145.81c39.16 37.286 89.777
                57.491 143.519 57.491H255c55.616-1.25 107.483-24.371 145.81-64.573s58.74-93.11 57.49-148.726c-1.457-55.616-24.37-107.483-64.572-145.81M254.376 427.05c-41.868 
                1.041-82.07-12.498-114.356-38.536 9.581-26.245 34.786-44.576 63.323-44.576h93.735c28.537 0 53.741 
                18.33 63.323 44.368-30.204 24.163-67.073 37.702-106.025 38.744m129.563-61.449c-16.872-31.661-49.992-52.908-87.07-52.908h-93.735c-37.077 0-70.405 21.247-87.069 
                 53.117-26.87-31.037-42.077-69.99-42.91-111.44-1.25-47.285 16.04-92.278 48.742-126.439 32.704-34.161
                76.655-53.741 123.939-54.783h4.374c45.618 0 88.736 17.29 122.064 48.95 34.161 32.704 53.741 76.655 54.783 123.94 1.041 43.95-14.373 86.235-43.118 119.563" />
                <path d="M255.21 104.185h-10.416c-37.285 0-67.697 30.412-67.697 67.698v41.66c0 37.285 30.412 67.697 67.697 67.697h62.49c8.54 0 15.623-7.082 15.623-15.622v-93.735c0-37.286-30.412-67.698-67.698-67.698m36.452 145.81h-46.868c-19.996
                0-36.452-16.456-36.452-36.452v-41.66c0-19.997 16.456-36.453 36.452-36.453h10.415c19.997 0 36.453 16.247 36.453 36.453z" />
            </g>
        </svg>
    );
}

export const Bed = ({hover}) => {
    return (
       <>
       <svg xmlns="http://www.w3.org/2000/svg" className={`stroke-black ${hover} duration-500`} height="24px" viewBox="0 -960 960 960" width="24px"><path d="M40-200v-600h80v400h320v-320h320q66 0 113 47t47 
       113v360h-80v-120H120v120H40Zm240-240q-50 0-85-35t-35-85q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85
        35Zm240 40h320v-160q0-33-23.5-56.5T760-640H520v240ZM280-520q17 0 28.5-11.5T320-560q0-17-11.5-28.5T280-600q-17 0-28.5 11.5T240-560q0 17 11.5 28.5T280-520Zm0-40Zm240-80v240-240Z"/></svg>
       </>
    );
}

export const Pay = ({hover}) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" className={`stroke-black ${hover} duration-500`}><path d="M240-80q-50 0-85-35t-35-85v-120h120v-560l60 60 60-60 60 60 60-60 60 60 60-60 60 60 60-60 60 60 60-60v680q0
         50-35 85t-85 35H240Zm480-80q17 0 28.5-11.5T760-200v-560H320v440h360v120q0 17 11.5 28.5T720-160ZM360-600v-80h240v80H360Zm0 120v-80h240v80H360Zm320-120q-17 0-28.5-11.5T640-640q0-17 11.5-28.5T680-680q17 0 28.5 11.5T720-640q0 
        17-11.5 28.5T680-600Zm0 120q-17 0-28.5-11.5T640-520q0-17 11.5-28.5T680-560q17 0 28.5 11.5T720-520q0 17-11.5 28.5T680-480ZM240-160h360v-80H200v40q0 17 11.5 28.5T240-160Zm-40 0v-80 80Z"/></svg>
    )
}
export const Logout =({hover}) => {
    return (    
        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" className={`stroke-black ${hover} duration-500`}>
        <path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h280v80H200Zm440-160-55-58 102-102H360v-80h327L585-622l55-58 200 200-200 200Z"/></svg>
    )
}

export const login = ({hover}) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" className={`stroke-black ${hover} duration-500`}><path d="M480-120v-80h280v-560H480v-80h280q33 0 56.5 23.5T840-760v560q0
        33-23.5 56.5T760-120H480Zm-80-160-55-58 102-102H120v-80h327L345-622l55-58 200 200-200 200Z"/></svg>
    )
}