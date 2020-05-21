export const fetchLambdaS3 = async (file) => {
    const response = await fetch('https://8888dxme25.execute-api.us-east-1.amazonaws.com/dev/uploadfile', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: file.name,
        type: file.type
      })
    })
    const resJson = await response.json()
    return resJson
}

export const fetchLambdaS3End = async (uploadURL, result,type) => {
    return await fetch(uploadURL, {
      method: 'PUT',
      body: new Blob([result], {type: type})
    })
}

  