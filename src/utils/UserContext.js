import { createContext } from "react";

const UserContextNew=createContext({
    user:{
        name:"Dummy",
        email:"abc@gmail.com"
    }
    
})

UserContextNew.displayName="UserContextAlias"
export default UserContextNew;