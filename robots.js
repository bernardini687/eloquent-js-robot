// import mailRoute from './data/mail_route';
import roadGraph from './data/roads';

const findRoute = (graph, from, to) => {
  const work = [{ at: from, route: [] }];
  for (let i = 0; i < work.length; i += 1) {
    const { at, route } = work[i];
    for (const place of graph[at]) {
      if (place === to) return route.concat(place);
      if (!work.some(w => w.at === place)) {
        work.push({ at: place, route: route.concat(place) });
      }
    }
  }
};

const randomPick = arr => arr[Math.floor(Math.random() * arr.length)];

// pick a random direction from the nodes available at the current place
// const randomRobot = state => ({ direction: randomPick(roadGraph[state.place]) });

// const routeRobot = (state, memory) => {
//   if (memory.length === 0) {
//     memory = mailRoute;
//   }
//   return { direction: memory[0], memory: memory.slice(1) };
// };

const goalOrientedRobot = ({ place, parcels }, route) => {
  if (route.length === 0) {
    const parcel = parcels[0];
    if (parcel.place !== place) {
      route = findRoute(roadGraph, place, parcel.place);
    } else {
      route = findRoute(roadGraph, place, parcel.address);
    }
  }
  return { direction: route[0], memory: route.slice(1) };
};

export { randomPick, goalOrientedRobot };
