import React from 'react';
import Services from '../../Components/Services/Services';
import Doctors from '../../Components/Doctors/Doctors';
import Home from '../../Components/Home/Home';
import Message from '../../Components/Message/Message';
function Homepg() {
  return (
    <>
    <Home/>
       <Services/>
       <Doctors/>
       <Message/>
    </>
  );
}

export default Homepg;
