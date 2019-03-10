const inquirer = require('inquirer');

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

export default ask;
