import React from 'react';

const Navbar = () => {
    return (
        <div>
             <div className="flex justify-between flex-wrap px-5 py-4 shadow-md sticky top-0">
    <p className="font-bold text-black ml-10 font-sans text-3xl">InternBrand</p>
    <div className="flex font-bold text-lg text-slate-500 gap-10">
        <div className='flex gap-2 text-purple-600'>
            <img src="clipboardtext.png" className='mt-1' alt="logo" style={{ height:"1.4rem"}}/> 
            <span>Browse Listings</span>
            </div>
            <div className='flex gap-2'>
            <img src="tasksquare.png" className='mt-1' alt="logo" style={{ height:"1.4rem"}}/> 
            <span>Application history</span>
            </div>
            <div className='flex gap-2'>
            <img src="edit.png" className='mt-1' alt="logo" style={{ height:"1.4rem"}}/> 
            <span>Blog</span>
            </div>
            <div className='flex gap-2'>
            <img src="messagequestion.png" className='mt-1' alt="logo" style={{ height:"1.4rem"}}/> 
            <span>Contact us</span>
            </div>
    </div>
   
    <div className='flex gap-x-4'>
        <img src="notification.png" className='mt-1' alt="logo" style={{ height:"2rem"}}/> 
        <img src="profile.png" alt="logo"/> 
        </div>
    </div>
        </div>
    );
}

export default Navbar;
