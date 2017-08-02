export const fetchProblemsList = async () => {
  return Promise.resolve({
    status: 'OK',
    msg: 'fetch problem list successfully.',
    data: [
      {
        problem_id: '0001',
        title: 'Two Sum',
        pass_times: 25,
        submission_times: 75,
        difficulty: 'Easy',
        status: 'passed'
      },
      {
        problem_id: '0001',
        title: 'Two Sum',
        pass_times: 25,
        submission_times: 75,
        difficulty: 'Easy',
        status: 'passed'
      },
      {
        problem_id: '0001',
        title: 'Two Sum',
        pass_times: 25,
        submission_times: 75,
        difficulty: 'Easy',
        status: 'passed'
      },
      {
        problem_id: '0001',
        title: 'Pizoor Communications Inc. for a special communication system',
        pass_times: 25,
        submission_times: 75,
        difficulty: 'Easy',
        status: 'waiting'
      },
      {
        problem_id: '0001',
        title: 'Two Sum',
        pass_times: 25,
        submission_times: 75,
        difficulty: 'Easy',
        status: 'unpassed'
      }
    ],
    time: new Date().toString()
  });
};

export const fetchTagsList = async () => {
  return Promise.resolve({
    status: 'OK',
    msg: 'fetch tags list successfully!',
    data: [
      {
        tag_id: '23',
        title: '动态规划'
      },
      {
        tag_id: '24',
        title: '线性规划'
      },
      {
        tag_id: '25',
        title: '堆栈'
      },
      {
        tag_id: '26',
        title: '数据结构'
      },
      {
        tag_id: '27',
        title: '指针'
      }
    ],
    time: new Date().toString()
  });
};
