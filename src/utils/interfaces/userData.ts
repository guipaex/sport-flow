export default interface userData {
	id?: string;
  name?: string;
	lastName?: string;
	displayName?: string;
	username?: string;
	email?: string;
	age?: number;
	birth?: Date;
	images?: iIMGURL;
	local?: iLocation;
	role?: string;
	records?: iRecords;
	friends?: Array<iFriendList>
	events?: Array<iEventList>
}

interface iIMGURL {
	photoURL: string;
	bannerURL: string;
}

interface iLocation {
	city: string;
	state: string;
	country: string
}
interface iRecords {
	'5km': string;
	'7.5km': string;
	'10km': string;
	'15km': string;
	'21km': string;
	'42km': string;
}


interface iFriendList {
	userid: string;
	photoURL: string;
	displayName: string
	profileURL: string
}

interface iEventList {
	id: string;
	thumbURL: string;
	name: string
	url: string;
	type: string;
	date: Date;
	userRank: string;
	medalPhoto: string;
}