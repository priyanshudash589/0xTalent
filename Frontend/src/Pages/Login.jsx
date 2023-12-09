import React from 'react';
import { LogInWithAnonAadhaar, AnonAadhaarProof, useAnonAadhaar } from "anon-aadhaar-react";
import { useEffect } from "react";

const Login = () => {

    const [anonAadhaar] = useAnonAadhaar();

    useEffect(() => {
        console.log("Anon Aadhaar status: ", anonAadhaar.status);
      }, [anonAadhaar]);

    return (
        <div className='flex justify-center h-[100vh] items-center'>
            <div className='bg-green-100 w-[45rem] rounded-3xl h-[75vh] border-solid border-2 border-green-300 flex flex-col items-center p-4'>
                <div className='bg-white rounded-lg h-[5rem] w-[25rem] flex flex-row gap-5 items-center justify-center'>
                    <button className='border-solid border-2 border-black w-[11rem] rounded-lg h-[3.5rem] text-xl font-semibold hover:bg-black hover:text-white'>Student</button>
                    <button className='border-solid border-2 border-black text-xl font-semibold w-[11rem] rounded-lg h-[3.5rem] hover:bg-black hover:text-white'>Donor</button>
                </div>
                <div className='p-[7rem] pb-5 pt-5 text-lg text-slate-400'>
                    fosjfojrojorw Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem similique non dignissimos aspernatur laborum earum totam ipsum delectus, illum,
                </div>

                <input type="number" className='bg-white h-[3.5rem] w-[28rem] rounded-full flex justify-center items-center' placeholder='+91 9337527307' />
                <br />
                <br /><br />

                <input type="email" name="" className='bg-white h-[10rem] w-[28rem] rounded-xl flex justify-center items-center px-5' placeholder='Enter your mail' id="" />
                <br />
                <br />

                {/* <button className='border-solid border-2 border-black w-[11rem] rounded-lg h-[3.5rem] text-xl font-semibold hover:bg-green-200 hover:text-white'>Connect Anon Adhaar</button> */}

                <div>
                    <LogInWithAnonAadhaar />
                    <p>{anonAadhaar?.status}</p>
                </div>

                <div >
                    {/* Render the proof if generated and valid */}
                    {anonAadhaar?.status === "logged-in" && (
                <>
                <p>✅ Proof is valid</p>
                    <AnonAadhaarProof code={JSON.stringify(anonAadhaar.pcd, null, 2)}/>
                </> )}
    </div>

            </div>
        </div>
    );
};

export default Login;
