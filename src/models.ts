import data from './assets/data.json'

export type Genre = typeof data[0]
export type Album = Genre['albums'][0]
