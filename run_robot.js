import VillageState from './village_state';

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
