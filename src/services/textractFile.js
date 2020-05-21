export const fetchLambdaTextract = async (name) => {
    const data = await fetch('https://8888dxme25.execute-api.us-east-1.amazonaws.com/dev/textract',{
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Methods': 'GET, PUT, POST, DELETE, HEAD, OPTIONS',
        'Access-Control-Allow-Origin': '*'
      },
      body: JSON.stringify({name})
    })

    return await data.json()
}