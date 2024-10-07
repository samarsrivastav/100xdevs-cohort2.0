"use client"
import { signIn, signOut, useSession } from "next-auth/react"

export const Appbar=()=>{
    const session =useSession()
    return(
        <div>
            <button onClick={()=>{
                signIn()
            }}>Sign in</button>
            <br/>
            <button onClick={()=>{
                signOut()
            }}>Sign out</button>
            <br/>
            <br/>
            <div>
                {JSON.stringify(session)}
            </div>
        </div>
    )
}