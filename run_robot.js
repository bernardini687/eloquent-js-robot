import roadGraph from './data/roads';
import mailRoute from './data/mail_route';
import VillageState from './village_state';

const runRobot = (state, robot, memory) => {
  for (let turn = 0; ; turn += 1) {
    if (state.parcels.length === 0) {
      console.log(`Done in ${turn} turns`);
      break;
    }
    const action = robot(state, memory);
    state = state.move(action.direction);
    memory = action.memory;
    console.log(`Moved to ${action.direction}`);
  }
};

const randomPick = arr => arr[Math.floor(Math.random() * arr.length)];

// pick a random direction from the nodes available at the current place
const randomRobot = state => ({ direction: randomPick(roadGraph[state.place]) });

const routeRobot = (state, memory) => {
  if (memory.length === 0) {
    memory = mailRoute;
  }
  return { direction: memory[0], memory: memory.slice(1) };
};

VillageState.random = (parcelCount = 5) => {
  const parcels = [];
  for (let i = 0; i < parcelCount; i += 1) {
    const address = randomPick(Object.keys(roadGraph));
    let place;
    do {
      place = randomPick(Object.keys(roadGraph));
    } while (place === address);
    parcels.push({ place, address });
  }
  return new VillageState('Post Office', parcels);
};

// runRobot(VillageState.random(), randomRobot);
runRobot(VillageState.random(), routeRobot, []);
