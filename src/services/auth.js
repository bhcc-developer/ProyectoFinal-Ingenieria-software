
export async function signin(email, password) {

    return await fetch('https://api-control-user-is.herokuapp.com/signin' , {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            email,
            password
        })
    })
} 

export async function signup(email, password) {

    const data = await fetch('https://api-control-user-is.herokuapp.com/signup' , {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            email,
            password
        })
    })

    return await data.json()
} 