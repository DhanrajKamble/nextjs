"use client";

function Hello() {
  console.log('I am a Client Component', typeof window !== "undefined" ? "Browser" : "Server");

    // console.log('I am a Client Component');

    return (
        <div>
            <h1 className='text-blue-500 flex items-center justify-center h-screen'>Hello</h1>
        </div>
    );
}

export default Hello;