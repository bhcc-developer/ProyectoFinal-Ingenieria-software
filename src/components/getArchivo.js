import React, { useState } from 'react'
// import  { Audit } from '../services/audit'

function Alert ({response}) {
    return (
        <div className={response.className}>{response.message}</div>
    )
}


export default function GetArchivo({callback, reponse }) {
    const [File64, setFile64] = useState('')
    const [File, setFile] = useState({})

    const handleFile = (e) => {
        setFile64(e.target.result)
    }
    const onChangeFile = (e)  =>{
        const file = e.target.files[0]
        setFile(file)
        const reader = new FileReader()
        reader.onloadend = handleFile
        reader.readAsArrayBuffer(file)
    }
    
    const getFileBase64 = (e) => {
        e.preventDefault()
        callback(File64,File)
    }

 


    return (
        
        <div>
            <Alert response={reponse} />
            <div className="cofile">
                <img src="textract.png" alt=""/>
            </div>
            <form onSubmit={getFileBase64} >

                <input 
                    type="file" 
                    className="input-file"
                    id="files"
                    onChange={onChangeFile}
                />
                <div className="cofile">
                    <input className="inputFile" placeholder="Seleciones el archivo" type="text" defaultValue={File ? File.name : ''}/>
                    <label 
                        htmlFor="files"
                        className="labelFile"
                    >
                        <img className="icon" src="file-upload-solid.svg" alt=""/>
                    </label>
                </div>

                <div className="cofile">
                    <button className="btn-enviar">Enviar</button>
                </div>
            </form>
        </div>
    )
}