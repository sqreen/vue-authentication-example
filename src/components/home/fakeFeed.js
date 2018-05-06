import faker from 'faker'

function feedGenerator (nb) {
  let res = []
  for (var i = 1; i <= nb; i++) {
    res.push(generateFeed())
  }
  return res
};

function generateFeed () {
  return {
    name: `${faker.name.firstName()} ${faker.name.lastName()}`,
    content: faker.random.words(20),
  }
}

export default feedGenerator(10)
