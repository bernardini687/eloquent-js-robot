import roadGraph from './data/roads';

const runRobot = (state, robot, memory) => {
  for (let turn = 0; ; turn + 1) {
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
