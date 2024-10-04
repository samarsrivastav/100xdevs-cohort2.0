"use client" // this thing tells next.js that this is the client side code (not seo friendly) -> for the button handler
export const Button=()=>{
    function handler(){
        console.log("btn")
    }
    return (
        <>
            <button onClick={handler} type="button" className="mt-8 w-full text-white bg-gray-800 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">Sign in</button>
        </>
    )
}