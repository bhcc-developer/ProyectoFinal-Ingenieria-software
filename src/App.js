import React, { useState } from 'react';
import GetArchivo from './components/getArchivo';
import { fetchLambdaS3, fetchLambdaS3End } from './services/uploadFile'
import './App.css';
import { fetchLambdaTextract } from './services/textractFile';
import Navigation from './components/navigation';
import GetReportes from './components/getReportes';

function App() {
 
  const [IsValue, setIsValue] = useState()

  const getFile64 = async (file64, file) => {
    const uploadURL = await fetchLambdaS3(file)
    const isValue = await fetchLambdaS3End(uploadURL,file64,file.type)
    if(isValue) {
      const response = await fetchLambdaTextract(file.name)
      console.log(response)
    }
  }

  const isNavigation = (e) => {
    setIsValue(e)
  }

  return (
    <>
    <div className="container">
      <Navigation callback={isNavigation} />
    </div>
      <article className="artilCenter">
      {
        IsValue 
        ? <GetArchivo callback={getFile64} />
        : <GetReportes />
      }
      </article>
    </>
  );
}

export default App;
