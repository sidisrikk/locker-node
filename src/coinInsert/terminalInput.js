const inquirer = require('inquirer');

const questions = [
  {
    'type': 'list',
    'name': 'insertedCoin',
    'message': 'which\'s coin?',
    'choices': ['1', '2', '5', '10', '20', '50', '100', '500', '1000'],
  },
  {
    'type': 'confirm',
    'name': 'insertCoinAgain',
    'message': 'Insert another Coin ?',
    'default': true,
  },
];

const output = [];
const ask = () => {
  inquirer.prompt(questions).then((answers) => {
    output.push(answers.insertedCoin);
    if (answers.insertCoinAgain) {
      ask();
    } else {
      console.log('[]\t', output.join(', '));
      console.log('Sum:\t', output.reduce((sum, i) => parseInt(sum, 10) + parseInt(i, 10)));
    }
  });
};

export default ask;
