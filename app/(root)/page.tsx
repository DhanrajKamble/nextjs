import Hello from "../components/hello";

export default function Home() {
  console.log('What am I doing here? -- SERVER/CLIENT');

  return (
     <div>
      <h1 className='text-blue-500 flex items-center justify-center h-screen text-3xl'>
        Welcome to Next.js
        <Hello />
      </h1>
     </div>
  );
}
