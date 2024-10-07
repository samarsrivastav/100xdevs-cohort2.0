import { getServerSession } from "next-auth"
import { Next_Auth } from "../lib/auth"

export default async function (){
    const session=await getServerSession(Next_Auth)
   return(
        <div>
            User component
            {JSON.stringify(session)}
        </div> 
    )
}
