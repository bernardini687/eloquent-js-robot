import roadGraph from '../data/roads';
import VillageState from './village_state';
import { randomPick, goalOrientedRobot } from './robots';

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

VillageState.random = (parcelCount = 5) => {
  const parcels = [];
  for (let i = 0; i < parcelCount; i += 1) {
    const address = randomPick(Object.keys(roadGraph));
    let place;
    do {
      place = randomPick(Object.keys(roadGraph));
    } while (place === address); // pick different place than address
    parcels.push({ place, address });
  }
  return new VillageState('Post Office', parcels);
};

// runRobot(VillageState.random(), randomRobot);
runRobot(VillageState.random(), goalOrientedRobot, []);

export default runRobot;
