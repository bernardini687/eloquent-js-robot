import roadGraph from './data/roads';

class VillageState {
  constructor(place, parcels) {
    this.place = place;
    this.parcels = parcels;
  }

  move(destination) {
    if (!roadGraph[this.place].includes(destination)) {
      return this; // return the old state for invalid moves
    }
    const parcels = this.parcels.map((parcel) => {
      if (parcel.place !== this.place) return parcel;
      return { place: destination, address: parcel.address };
    }).filter(parcel => parcel.place !== parcel.address);
    return new VillageState(destination, parcels);
  }
}

const first = new VillageState(
  'Post Office',
  [{ place: 'Post Office', address: "Alice's House" }],
);
const next = first.move("Alice's House");
const invalid = first.move('Farm');

console.log(first);
console.log(next);
console.log(invalid);
