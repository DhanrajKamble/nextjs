import Link from 'next/link';
import React from 'react';

const Page = ({params}:{params: {id: string}}) =>{
    const {id} = params;
    return (
        <>
        <div className='text-4xl text-red-500'>User Profile: {id}</div>
        <button>
            <Link href='/dashboard/users' className='text-3xl bg-blue-500 text-white p-2 rounded-lg m-4'> ← Dashboard</Link>
        </button>
        </>
    );
}

export default Page;