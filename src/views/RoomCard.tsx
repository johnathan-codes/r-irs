import React from 'react'
import { Card, CardBody, CardTitle, CardSubtitle, CardText } from 'reactstrap'
import { RoomIF, ReservationIF } from '../helpers/interfaces'
import '../styles/rooms.scss'

const RoomCard = ({ description, reservations, room_id, name }: RoomIF) => {
	const getCurrentReservation = (reservations: ReservationIF[]) => {
		let currentDate = new Date()
		let filteredReservations = reservations.filter((reservation) => {
			return new Date(reservation.start_date_iso) > currentDate
		})

		return filteredReservations
	}

	const resSubject = (reservations: ReservationIF[]) => {
		const currentRes = getCurrentReservation(reservations)
		if (currentRes.length === 0) {
			return 'Free'
		} else {
			return 'Subject: ' + currentRes[0].subject
		}
	}

	return (
		<Card className="roomCard">
			<CardBody>
				<CardTitle>{name}</CardTitle>
				<CardSubtitle>{description}</CardSubtitle>
				<hr />
				<header>Current Reservation:</header>
				{}
				<CardText>{resSubject(reservations)}</CardText>
			</CardBody>
		</Card>
	)
}

export default RoomCard
