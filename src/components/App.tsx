import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { url } from '../helpers/constants'
import './App.scss'
import Rooms from '../views/Rooms'
import { Spinner } from 'reactstrap'

const App = () => {
	const [rooms, setRooms] = useState([])
	const [loaded, setLoaded] = useState(false)

	useEffect(() => {
		setTimeout(() => {
			axios(url).then((response: any) => {
				setRooms(response.data)
				setLoaded(true)
			})
		}, 2000)
	}, [])

	const initialElement = loaded ? (
		<Rooms rooms={rooms} />
	) : (
		<div className="App">
			<header className="App-header">
				R-IRS
				<Spinner />
			</header>
		</div>
	)

	return initialElement
}

export default App
