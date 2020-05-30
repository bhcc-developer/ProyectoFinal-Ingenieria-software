import React, { useState } from 'react'
import { contratos } from '../services/controtos'
import { Audit } from '../services/audit'

function VerReportes({report}) {
	const resports = formatData(report)
	let contador = 0

	return (
		<div className="card">
			<img src={report.url} alt="Hola"/>
			{
				resports.map(data => <div key={contador++} >{data}</div>)
			}
		</div>
	)
}


const formatData = (report) => {
	let data = []

	for(const myKey in report) {
		data.push(
			<p className="parrafo"> <span className="parrafoSpan">{myKey}</span>: { report[myKey] }</p>
		)
	}

	return data
}


export default function GetReportes() {

	const [Date1, setDate1] = useState()
	const [Date2, setDate2] = useState()
	const [Report, setReport] = useState([]);

	const formFecha = async () => {
		const res = await contratos(Date1, Date2)
		setReport(res.data)
		const user = JSON.parse( localStorage.getItem('user'))
		await Audit(user.email,user.password,'Reportes')
	}

	return (
		<>
			<div className="reportes">
				<h2 className="title-report">Escoja su rango de fecha</h2>
				<input className="input" type="date"  onChange={(e)=>setDate1(e.target.value)} />
				<input className="input" type="date"  onChange={(e)=>setDate2(e.target.value)} />
				<button className="btn-r" onClick={formFecha}>Buscar</button>
			</div>
			<article className="contenedorCard">
				{
					Report.map(data => (
						
						<VerReportes key={data.id} report={data} />
					))
				}
			</article>
	
			
		</>
	)
}