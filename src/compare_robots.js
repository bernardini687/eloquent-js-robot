import VillageState from './village_state';
import runCompare from './run_robot';
import { routeRobot, goalOrientedRobot } from './robots';

function compareRobots(robot1, memory1, robot2, memory2) {
  let total1 = 0;
  let total2 = 0;
  for (let i = 0; i < 100; i += 1) {
    const state = VillageState.random();
    total1 += runCompare(state, robot1, memory1);
    total2 += runCompare(state, robot2, memory2);
  }
  console.log(
    `robot1 -> ${total1 / 100}`,
    `robot2 -> ${total2 / 100}`,
  );
}

compareRobots(routeRobot, [], goalOrientedRobot, []);
