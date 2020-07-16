export interface Rooms {
	rooms: Room[]
}

export interface Room {
	room_id: number
	name: string
	description: string
	reservations: {
		reservation_id: number
		reservee: { name: string; user_id: number }
		subject: string
		start_date_iso: string
		end_date_iso: string
	}[]
}
