import React from 'react';
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBInput
}
from 'mdb-react-ui-kit';
import {useState} from "react";
import { Link,useNavigate } from 'react-router-dom';
import { auth } from '../../../firebase';
import { signInWithEmailAndPassword,getAuth } from 'firebase/auth';

function Login() {
    const naviage=useNavigate();
      const [values,setvalues]=useState({
          email:"",
          pass:"",
         
      })
      const handlesubmit = () => {
        const { email, pass } = values;
        const auth = getAuth();
signInWithEmailAndPassword(auth, email, pass)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user)
    naviage("/todolist")
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorMessage)
  });

      }



  return (
    <MDBContainer className="my-5">

      <MDBCard >
        <MDBRow className='g-0'>

        <MDBCol md='6' style={{ backgroundColor: '#de7728' }}>
        <div style={{ width: '100%', height: '100%', position: 'relative', overflow: 'hidden' }}>
  <iframe src="https://giphy.com/embed/EddY9gk1YkWAnImfKm" width="100%" height="100%" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none' }} frameBorder="0" className="giphy-embed" allowFullScreen></iframe>
</div>




</MDBCol>



          <MDBCol md='6'>
            <MDBCardBody className='d-flex flex-column' >

              <div className='d-flex flex-row mt-2'>
                <MDBIcon fas icon="cubes fa-3x me-3" style={{ color: '#040040' }}/>
              </div>

              <h5 className="fw-normal my-4 pb-3" style={{letterSpacing: '1px'}}>log into your account</h5>

              <MDBInput wrapperClass='mb-4' label='Email address' id='formControlLg' type='email' size="lg"onChange={(event)=>(setvalues((prev)=>({...prev,email:event.target.value})))}/>

<MDBInput wrapperClass='mb-4' label='Password' id='formControlLg' type='password' size="lg" onChange={(event)=>(setvalues((prev)=>({...prev,pass:event.target.value})))}/>

              <MDBBtn onClick={handlesubmit} className="mb-4 px-5" color='dark' size='lg'>Login</MDBBtn>
              <a className="small text-muted" href="#!">Forgot password?</a>
              <p className="mb-5 pb-lg-2" style={{color: '#393f81'}}>Don't have an account? <Link to="./signup" style={{color: '#393f81'}}>Register here</Link></p>

            </MDBCardBody>
          </MDBCol>

        </MDBRow>
      </MDBCard>

    </MDBContainer>
  );
}

export default Login;