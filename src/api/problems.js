import faker from 'faker/locale/en_US';
faker.locale = 'en_US';
faker.seed(new Date().getTime());

export const fetchProblemsList = async () => {
  const data = [];
  for (let i = 0; i < 128; i++) {
    data.push({
      problem_id: '' + faker.random.number(),
      title: faker.lorem.sentence(),
      pass_times: faker.random.number() % 50,
      submission_times: faker.random.number() % 50 + 50,
      difficulty: (['Easy', 'Medium', 'Hard'])[(faker.random.number() % 3)],
      status: (['passed', 'waiting', 'unpassed'])[(faker.random.number() % 3)]
    });
  }

  return Promise.resolve({
    status: 'OK',
    msg: 'fetch problem list successfully.',
    data,
    time: new Date().toString()
  });
};

export const fetchTagsList = async () => {
  const data = [];
  for (let i = 0; i < 25; i++) {
    data.push({
      tag_id: '' + faker.random.number(),
      title: faker.lorem.word()
    });
  }

  return Promise.resolve({
    status: 'OK',
    msg: 'fetch tags list successfully!',
    data,
    time: new Date().toString()
  });
};
