import faker from 'faker'

const generateFeed = () => {
  return ({
    name: `${faker.name.firstName()} ${faker.name.lastName()}`,
    content: faker.random.words(20),
  })
}

const feedGenerator = (nb) => {
  // return new Array(nb).map(generateFeed)
  return [generateFeed(), generateFeed(), generateFeed()]
}

export default feedGenerator(10)
