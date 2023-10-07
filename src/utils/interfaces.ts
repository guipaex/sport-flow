export interface Race {
  raceName: string;
	raceDate: Date;
	distances: [Array: Number];
  local: {
		startAdress: string;
		city: string;
		estate: string
	};
	organizer: string;
  link: string;
}