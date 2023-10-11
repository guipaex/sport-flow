export interface IRaceCardData {
  id?:string,
  title?: string,
  date?: Date,
	distances?: [Array: Number],
  local?: {
    start?:string,
    city?: string,
    state?: string,
  },
	thumbURL?: string,
  pageLink?: string,
	sportType?: string,
  distance?: Array<String>,
  price?: number,
}

export interface RaceData {
  eventId: string,
  eventName: string,
  eventDate: string,
  distances: Array<string>,
  location: {
    start: string,
    city: string,
    state: string,
  },
  images: {
    thumbURL: string,
    eventCover: string,
  },
  eventPage: string,
  minimunPrice: string,
}
