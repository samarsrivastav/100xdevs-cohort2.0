//advanced typescript 
// https://projects.100xdevs.com/tracks/ts-hard

interface User{
    id:number,
    email:string,
    name:string,
    createdAt:Date
}
//pick --> used to pick desired input from an interface
type updateProfile=Pick<User,'name' | 'email'>
type optionalUpdate=Partial<updateProfile> // this will mark everything as optional in updateProfile