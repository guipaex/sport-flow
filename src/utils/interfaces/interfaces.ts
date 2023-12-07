export interface RaceData {
  eventId: string,
  eventName: string,
  description: string,
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

export enum Months {
  JAN = 1,
  FEV,
  MAR,
  ABR,
  MAI,
  JUN,
  JUL,
  AGO,
  SET,
  OUT,
  NOV,
  DEZ,
}

export interface ContactValues {
  name: string;
  email: string;
  subject?: string;
  message: string;
}
