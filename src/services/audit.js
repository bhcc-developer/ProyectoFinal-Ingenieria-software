// https://zvnx2eevn5.execute-api.us-east-1.amazonaws.com/dev/sqsaudit


export const Audit = async (name, password,action) => {
    const data = await fetch('https://zvnx2eevn5.execute-api.us-east-1.amazonaws.com/dev/sqsaudit', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            name,
            password,
            action
        })
    })
    return await data.json()
}