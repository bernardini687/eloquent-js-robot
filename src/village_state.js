import roadGraph from '../data/roads';

export default class VillageState {
  constructor(place, parcels) {
    this.place = place;
    this.parcels = parcels;
  }

  move(destination) {
    if (!roadGraph[this.place].includes(destination)) {
      return this; // return the old state for invalid moves
    }
    const parcels = this.parcels.map((parcel) => {
      // leave parcel where it is if robot is not there
      if (parcel.place !== this.place) return parcel;
      // else pick parcel up
      return { place: destination, address: parcel.address };
    }).filter(parcel => parcel.place !== parcel.address); // keep only undelivered parcels
    return new VillageState(destination, parcels);
  }
}
