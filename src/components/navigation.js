import React, {useState,useEffect} from 'react'
import {Link,useHistory} from 'react-router-dom'



export default function Navigation() {
	const [Isvalor, setIsvalor] = useState();
	const history = useHistory()
	 const logout = ( ) => {
		 localStorage.removeItem('token')
		 localStorage.removeItem('user')
		history.push('/')
		
	 }
	 useEffect(() => {
		 const local = localStorage.getItem('token')
		 console.log(local)
		 if (local){
			setIsvalor(true)
		 }else{
			 setIsvalor(false)
		 }
	 },[]);

	return (
		<header className="header">
			<h1 className="header-title">
				Document mapping
			</h1>

			{
				Isvalor
				?<nav className="nav">
					<Link to="/upload-file"   className="btn btn-document" >Document</Link>
					<Link to="/report"  className="btn btn-reportes" >Reportes</Link>
					<button onClick={logout}>Logout</button>
				</nav>
				: ''
			}
			

		</header>
	)
}