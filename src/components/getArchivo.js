import React, { useState } from 'react'

export default function GetArchivo({callback}) {
    const [File64, setFile64] = useState('')
    const [File, setFile] = useState()

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
    const getFileBase64 = () => {
        callback(File64,File)
    }

    return (
        
        <div>
            <div className="cofile">
                <img src="textract.png" alt=""/>
            </div>
            <input 
                type="file" 
                className="input-file"
                id="files"
                onChange={onChangeFile}
            />
            <div className="cofile">
                <input className="inputFile" type="text" defaultValue={File ?File.name : 'Seleciones Archivo'}/>
                <label 
                    htmlFor="files"
                    className="labelFile"
                >
                    <img className="icon" src="file-upload-solid.svg" alt=""/>
                </label>
            </div>

            <div className="cofile">
                <button 
                className="btn-enviar"
                    onClick={getFileBase64} 
                >Enviar</button>
            </div>
        </div>
    )
}