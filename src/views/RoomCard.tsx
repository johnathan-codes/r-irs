import React from 'react'
import { Card, CardBody, CardTitle, CardSubtitle } from 'reactstrap'
import { RoomIF } from '../helpers/interfaces'
import '../styles/rooms.scss'

const RoomCard = ({ description, reservations, room_id, name }: RoomIF) => {
	return (
		<Card className="roomCard">
			<CardBody>
				<CardTitle>{name}</CardTitle>
				<CardSubtitle>{description}</CardSubtitle>
			</CardBody>
		</Card>
	)
}

export default RoomCard
