import React from 'react'
import { Card, CardBody, CardTitle, CardText } from 'reactstrap'
import { Room } from '../helpers/interfaces'
import '../styles/rooms.scss'

const RoomCard = ({ description, reservations, room_id, name }: Room) => {
	return (
		<Card className="roomCard">
			<CardBody>
				<CardTitle>{name}</CardTitle>
				<CardText>{description}</CardText>
			</CardBody>
		</Card>
	)
}

export default RoomCard
