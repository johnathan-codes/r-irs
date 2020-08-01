export interface RoomsIF {
	rooms: RoomIF[]
}

export interface RoomIF {
	room_id: number
	name: string
	description: string
	reservations: ReservationIF[]
}

export interface ReservationIF {
	reservation_id: number
	reservee: { name: string; user_id: number }
	subject: string
	start_date_iso: string
	end_date_iso: string
}
