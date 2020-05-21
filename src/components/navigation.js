import React, { useState, useEffect } from 'react'

export default function Navigation({ callback }) {

	const [state, setstate] = useState(true);

	useEffect(() => {
		callback(state)
	}, [callback, state])

	return (
		<header className="header">
			<h1 className="header-title">
				Document mapping
			</h1>
			<nav className="nav">
				<a href="/#" onClick={() => setstate(true)} className="btn btn-document" >Document</a>
				<a href="/#" onClick={() => setstate(false)} className="btn btn-reportes" >Reportes</a>
			</nav>
		</header>
	)
}