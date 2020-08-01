import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { url } from '../helpers/constants'
import './App.scss'
import Loader from './Loader'
import Content from './Content'

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

	const initialElement = loaded ? <Content rooms={rooms} /> : <Loader />

	return initialElement
}

export default App
