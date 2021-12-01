import { useEffect } from 'react';


import { useAuth } from '../contexts/auth'

import React, { useState } from "react";


export default function LoginForm() 

{
    
    const { login } = useAuth();
    
    const [username, setUsername] = useState({

    })

    const logindata = ((event) => {

        
        event.preventDefault();


        const password = event.target.password.value
        
        const user = event.target.username.value
        

        
        login(user, password)

    }
    
    
    )

    return (

<div>
            <div className="bg-green-400">
                
                <form onSubmit={logindata}>
                
                    <div >
                
                        <label  >User name</label>
                
                        <br />
                
                        <input type="text" name="username" id="username" className="bg-gray-100" />
                
                    </div>

                
                    <div className="justify-center">
                
                        <label >Password</label>
                
                        <br />
                
                        <input name="password" type="password"  id="password" className="bg-gray-100" />
                
                    </div>
                
                    <br />
                
                     <div className="bg-green-600">
                
                        <button  >Log in </button>
                
                    </div>




                </form>

            </div>

        </div>
    )
}