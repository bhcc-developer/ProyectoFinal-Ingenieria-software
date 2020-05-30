export const fetchLambdaTextract =  (name) => {
  return new Promise( (rej, res) => {
   
      fetch('https://zvnx2eevn5.execute-api.us-east-1.amazonaws.com/dev/textract',{
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Methods': 'GET, PUT, POST, DELETE, HEAD, OPTIONS',
          'Access-Control-Allow-Origin': '*'
        },
        body: JSON.stringify({name})
      })
      .then(data => data.json())
      .then( data => rej(data) )
      .catch(e => {
        res(e)
        console.log('aksadfasdfasdf')
      })

  })
}