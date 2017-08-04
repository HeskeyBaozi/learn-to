import faker from 'faker/locale/en_US';
faker.locale = 'en_US';
faker.seed(new Date().getTime());

export const fetchProblemDetailById = async (problemId) => {
  const data = {
    problem_id: problemId,
    title: faker.lorem.sentence(),
    description: faker.lorem.paragraphs(),
    hint: faker.lorem.paragraphs(),
    pass_times: faker.random.number() % 50,
    submission_times: faker.random.number() % 50 + 50,
    difficulty: (['Easy', 'Medium', 'Hard'])[(faker.random.number() % 3)],
    status: (['passed', 'waiting', 'unpassed'])[(faker.random.number() % 3)],
    submission_result: (['accepted', 'wrong_answer', 'compile_error', 'runtime_error'])[(faker.random.number() % 4)],
    compiler_messages: faker.lorem.paragraphs()
  };

  return Promise.resolve({
    status: 'OK',
    msg: 'fetch problem detail successfully.',
    data,
    time: new Date().toString()
  });
};
