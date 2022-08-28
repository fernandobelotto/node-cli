import inquirer from 'inquirer'

const questions = [
  {
    type: "input",
    message: "Here is my questino for you?",
    name: "text",
  },
  {
    type: "checkbox",
    message: "Here is my options for you?",
    name: "checkbox",
    choices: [
      { name: "escolha 1", value: "1" },
      { name: "escolha 2", value: "2" },
      { name: "escolha 3", value: "3" },
      { name: "escolha 4", value: "4" },
    ],
  },
  {
    type: 'list',
    message: 'select one value!',
    name: 'select',
    choices: [
      { name: 'escolha A', value: 'A'},
      { name: 'escolha B', value: 'B'},
      { name: 'escolha C', value: 'C'},
      { name: 'escolha D', value: 'D'},
      { name: 'escolha E', value: 'E'},
    ]
  }
];

inquirer
  .prompt(questions)
  .then((answers) => {
    console.log(answers);
  })
  .catch(console.log);
