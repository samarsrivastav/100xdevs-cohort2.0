import CredentialsProvider from 'next-auth/providers/credentials';
import GitHubProvider from 'next-auth/providers/github'
export const Next_Auth={
    providers:[
        CredentialsProvider({
            name:"Email",
            credentials:{
                username: { label: 'email', type: 'text', placeholder: '' },
                password: { label: 'password', type: 'password', placeholder: '' },
            },
            async authorize(credentials:any){
                console.log(credentials)
                //here the authorization logic will be added
                return {
                    id:"1",
                    name:"user",
                    email:"user"
                }
            }
        }),
        GitHubProvider({
            clientId: process.env.GITHUB_ID || "",
            clientSecret: process.env.GITHUB_SECRET || ""
        })
    ],
    secret:process.env.NEXTAUTH_SECRET,
    callbacks:{
        jwt:({token,user}:any)=> {
            console.log(token)
            token.userId=token.sub
            return token
        },
        session:({session,token,user}:any)=>{
            if(session && session.user){
                session.user.if=token.userId
            }
            return session
        }
    }
}