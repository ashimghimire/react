import React from 'react';

const Header = ({id}) => {
   
    return (
        <div className='container mx-auto bg-black text-white'>
           <nav className="mx-auto flex max-w-7xl  bg-black text-white items-center justify-between p-6 lg:px-8" aria-label="Global">
            <div className="flex lg:flex-1">
                <a href="#" className="-m-1.5 p-1.5 text-decoration-none text-white">
                     Todos
                </a>
            </div>
            <div className="lg:flex lg:gap-x-12">
               
               
             </div>
             <div class="hidden lg:flex lg:flex-1 lg:justify-end gap-3">
                   
            </div>
            </nav>
        </div>
    );
};

export default Header;