import React from 'react'
import { Room } from '../helpers/interfaces'

const RoomCard = ({ description, reservations, room_id, name }: Room) => {
	return (
		<div key={room_id}>
			<header>{name}</header>
			<small>{description}</small>
		</div>
	)
}

export default RoomCard
