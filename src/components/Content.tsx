import React from 'react'
import Rooms from '../views/Rooms'
import { RoomsIF } from '../helpers/interfaces'
import { projectName } from '../helpers/constants'

const Content = ({ rooms }: RoomsIF) => {
	return (
		<div>
			<header className="header">{projectName}</header>
			<Rooms rooms={rooms} />
		</div>
	)
}

export default Content
