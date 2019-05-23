import VillageState from './village_state';
import runCompare from './run_robot';
import { routeRobot, goalOrientedRobot } from './robots';

function compareRobots(robot1, memory1, robot2, memory2) {
  const stats = Object.create(null);
  stats.robot1 = [];
  stats.robot2 = [];
  for (let i = 0; i < 100; i += 1) {
    const state = VillageState.random();
    stats.robot1.push(runCompare(state, robot1, memory1));
    stats.robot2.push(runCompare(state, robot2, memory2));
  }
  const result1 = stats.robot1.reduce((acc, val) => acc + val);
  const result2 = stats.robot2.reduce((acc, val) => acc + val);
  console.log(
    `robot1 -> ${result1 / stats.robot1.length}`,
    `robot2 -> ${result2 / stats.robot2.length}`,
  );
}

compareRobots(routeRobot, [], goalOrientedRobot, []);
