import inquirer from 'inquirer';
import mutateFreeUnit from '../graphql/connect';
import calCoinChange from './coinchange';


const questions = [
  {
    'type': 'list',
    'name': 'insertedCoin',
    'message': 'which\'s coin?',
    'choices': ['1', '2', '5', '10', '20', '50', '100', '500', '1000'],
  },
];

async function ask(totolCost) {
  let sum = 0;
  console.log(`Please insert ${totolCost} BAHT`);
  while (sum < totolCost) {
    // eslint-disable-next-line no-await-in-loop
    const answers = await inquirer.prompt(questions);
    sum += parseInt(answers.insertedCoin, 10);
  }
  return sum;
}

const unlockUnit = async (totolCost, unit) => {
  const totolCoinValue = await ask(totolCost);
  console.log(`Insert ${totolCoinValue} BAHT`);

  // success unlock
  mutateFreeUnit(parseInt(unit, 10));
  console.log(`change coin :${JSON.stringify(calCoinChange(totolCoinValue - totolCost))}`);
  return true;
};

export default unlockUnit;
