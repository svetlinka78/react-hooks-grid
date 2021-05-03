import faker from 'faker';
faker.locale = 'en';

const createPerson = () => {
  return {
    userName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    project: faker.fake("Project_") + faker.random.number({ min: 0, max: 1000 }),
    timeLogStart: faker.date.between('2020-01-01', '2020-12-31'),
    timeLogEnd: faker.date.between('2021-01-01', '2021-12-31'),
    hours: faker.random.number({ min: 0, max: 1000 }),
  };
};

export default function dataCreator(length) {
  const array = [];
  for (let i = 0; i < length; i++) {
    array.push(createPerson());
  }
  return array;
}
