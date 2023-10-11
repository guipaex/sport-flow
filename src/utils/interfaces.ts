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