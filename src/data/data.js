const persons = [
  {
    name: "Donald",
    image: require("./images/donald.png")
  },
  {
    name: "Goofy",
    image: require("./images/goofy.png")
  },
  {
    name: "Mickey",
    image: require("./images/mickey.png")
  },
  {
    name: "Dagobert",
    image: require("./images/dagobert.png")
  }
  // {
  //   'name': 'Nemo',
  //   'image': require('./images/nemo.png'),
  // },
  // {
  //   'name': 'Dory',
  //   'image': require('./images/dory.png'),
  // },
];

export class Database {
  getRandomData = args => actualDb.getRandomData(args);
}
