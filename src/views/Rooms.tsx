import React from 'react'
import { RoomsIF } from '../helpers/interfaces'
import RoomCard from './RoomCard'

const RoomsList = ({ rooms }: RoomsIF) => {
	console.log('Rooms -> rooms ', rooms)

	return (
		<div className="App">
			{rooms.map((room) => (
				<RoomCard
					description={room.description}
					reservations={room.reservations}
					room_id={room.room_id}
					name={room.name}
					key={room.room_id}
				/>
			))}
		</div>
	)
}

export default RoomsList
