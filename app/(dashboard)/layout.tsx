import React from 'react';

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className='text-blue-500 flex items-center justify-center h-screen flex-col'>
            <h1>Dash Board Home Page ❤️</h1>
            {children}
        </div>
    )
}

export default Layout;