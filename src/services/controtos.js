
export const contratos = async (date1, date2) => {
    const data = await fetch('https://zvnx2eevn5.execute-api.us-east-1.amazonaws.com/dev/reportdate', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            date1,
            date2
        })
    })
    return await data.json()
}