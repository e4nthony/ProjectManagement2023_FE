/* eslint-disable */
/* the line above disables eslint check for this file (temporarily) todo:delete */
import React from 'react';
// import './styles/style.css';



function checkPassword(){
    
    let password =document.getElementById("password").value;
    let cnfrmPassword=document.getElementById("cnfrm-password").value;
    console.log(password,cnfrmPassword);
    let message = document.getElementById("message");

    if(password.length!=0){
        if(password==cnfrmPassword){
            message.textContent="passwords match"
            message.style.backgroundColor="#3ae374";
        }
        else{
            message.textContent="passwords don't match"
            message.style.backgroundColor="#ff4d4d";

        }
    }
    else{
        alert("password can't be empty!");
        message.style.backgroundColor="";

    }

    
}


function register() {
    return (
        <div >
            {/* <div>
                    <a className='about-par'>
                        This is our project in Project Managment course 2023
                    </a>
                    <title>Registration Form</title>
                    <link rel="stylesheet" href="./pages/styles/style.css"></link>
                    <link  href="https://font.googleapis.com/css2?family=Poppins:wght@400;500&display=swap" rel="stylesheet"></link>

            </div> */}


            <div>
                    <title>Registration Form</title>
                    {/* <link rel="stylesheet" href="./pages/styles/style.css"></link> */}
                    <link  href="https://font.googleapis.com/css2?family=Poppins:wght@400;500&display=swap" rel="stylesheet"></link>
                    <label for="firstname">Firstname Form</label>
                <form>
                    <input type="text" id="firstname"
                        placeholder="Firstname" required />

                    <label for="lastname">Last name </label>
                    <input type="text" id="lastname"
                        placeholder="Lastname" required />


                    <label for="username">User name </label>
                    <input type="text" id="username"
                        placeholder="Username" required />


                    <label for="Email">Email </label>
                    <input type="email" id="Email"
                        placeholder="Email" required />

                    <label for="password">Password </label>
                    <input type="password" id="password"
                        placeholder="Password" required />

                    <label for="cnfrm-password">confirm password</label>
                    <input type="password" id="cnfrm-password"
                        placeholder="Password" required />



                    <label for="Date">Date of birth </label>
                    <input type="text" placeholder="MM/DD/YYYY"
                        onfocus="(this.type='date')" id="Date" required />
                    <br />
                    <p id="message"></p>

                    <input type="button" onclick="checkPassword()" value="Registration" required />
                </form>
            </div>
            <script src='/src/model/checkPassword.jsx'></script>


        </div>
    );
}

export default register;
