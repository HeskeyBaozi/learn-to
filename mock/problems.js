module.exports = {
  'GET /api/problem/:id': (req, res) => {
    res.send({
      name: 'Hello World',
      publish: '2018-07-18',
      submit: 250,
      passNum: 100,
      spaceLimit: 32,
      timeLimit: 2
    })
  },
  'GET /api/libraries/0/problems': [
    {
      problemId: 211,
      problemName: 'HelloWorld',
      submissionNumber: 210,
      passRate: '90%',
      publishDate: '2018-7-7',
      meterState: 'Accepted'
    },
    {
      problemId: 221,
      problemName: 'HelloWorld',
      submissionNumber: 220,
      passRate: '80%',
      publishDate: '2018-7-8',
      meterState: 'Accepted'
    },
    {
      problemId: 202,
      problemName: 'A+B',
      submissionNumber: 220,
      passRate: '100%',
      publishDate: '2018-7-9',
      meterState: 'Todo'
    },
    {
      problemId: 203,
      problemName: '简单乘法',
      submissionNumber: 200,
      passRate: '56%',
      publishDate: '2018-7-1',
      meterState: 'Wrong Answer'
    },
    {
      problemId: 201,
      problemName: 'HelloWorld',
      submissionNumber: 200,
      passRate: '50%',
      publishDate: '2018-7-2',
      meterState: 'Time Limit Exceeded'
    },
    {
      problemId: 202,
      problemName: 'A+B',
      submissionNumber: 220,
      passRate: '99%',
      publishDate: '2018-7-3',
      meterState: 'Memory Limit Exceeded'
    },
    {
      problemId: 203,
      problemName: '简单乘法',
      submissionNumber: 200,
      passRate: '56%',
      publishDate: '2018-7-4',
      meterState: 'Runtime Error'
    },
    {
      problemId: 201,
      problemName: 'HelloWorld',
      submissionNumber: 230,
      passRate: '70%',
      publishDate: '2018-7-5',
      meterState: 'Accepted'
    },
    {
      problemId: 202,
      problemName: 'A+B',
      submissionNumber: 220,
      passRate: '90%',
      publishDate: '2018-7-7',
      meterState: 'Todo'
    },
    {
      problemId: 203,
      problemName: '简单乘法',
      submissionNumber: 200,
      passRate: '56%',
      publishDate: '2018-7-7',
      meterState: 'Wrong Answer'
    },
    {
      problemId: 201,
      problemName: 'HelloWorld',
      submissionNumber: 200,
      passRate: '50%',
      publishDate: '2018-7-7',
      meterState: 'Time Limit Exceeded'
    },
    {
      problemId: 202,
      problemName: 'A+B',
      submissionNumber: 220,
      passRate: '98%',
      publishDate: '2018-7-7',
      meterState: 'Memory Limit Exceeded'
    },
    {
      problemId: 203,
      problemName: '简单乘法',
      submissionNumber: 200,
      passRate: '56%',
      publishDate: '2018-7-7',
      meterState: 'Todo'
    },
    {
      problemId: 201,
      problemName: 'HelloWorld',
      submissionNumber: 240,
      passRate: '60%',
      publishDate: '2018-7-7',
      meterState: 'Todo'
    },
    {
      problemId: 222,
      problemName: 'A+B',
      submissionNumber: 240,
      passRate: '90%',
      publishDate: '2018-7-7',
      meterState: 'Compile Error'
    },
    {
      problemId: 203,
      problemName: '简单乘法',
      submissionNumber: 200,
      passRate: '56%',
      publishDate: '2018-7-7',
      meterState: 'Wrong Answer'
    },
    {
      problemId: 201,
      problemName: 'HelloWorld',
      submissionNumber: 200,
      passRate: '50%',
      publishDate: '2018-7-7',
      meterState: 'Time Limit Exceeded'
    },
    {
      problemId: 222,
      problemName: 'A+B',
      submissionNumber: 210,
      passRate: '90%',
      publishDate: '2018-7-7',
      meterState: 'Memory Limit Exceeded'
    },
    {
      problemId: 203,
      problemName: '简单乘法',
      submissionNumber: 200,
      passRate: '56%',
      publishDate: '2018-7-7',
      meterState: 'Runtime Error'
    },
    {
      problemId: 201,
      problemName: 'HelloWorld',
      submissionNumber: 250,
      passRate: '50%',
      publishDate: '2018-7-7',
      meterState: 'Todo'
    },
    {
      problemId: 202,
      problemName: 'A+B',
      submissionNumber: 220,
      passRate: '90%',
      publishDate: '2018-7-7',
      meterState: 'Compile Error'
    },
    {
      problemId: 203,
      problemName: '简单乘法',
      submissionNumber: 200,
      passRate: '56%',
      publishDate: '2018-7-7',
      meterState: 'Wrong Answer'
    },
    {
      problemId: 201,
      problemName: 'HelloWorld',
      submissionNumber: 200,
      passRate: '50%',
      publishDate: '2018-7-7',
      meterState: 'Todo'
    },
    {
      problemId: 202,
      problemName: 'A+B',
      submissionNumber: 220,
      passRate: '90%',
      publishDate: '2018-7-7',
      meterState: 'Memory Limit Exceeded'
    },
    {
      problemId: 203,
      problemName: '简单乘法',
      submissionNumber: 200,
      passRate: '56%',
      publishDate: '2018-7-7',
      meterState: 'Runtime Error'
    },
    {
      problemId: 201,
      problemName: 'HelloWorld',
      submissionNumber: 200,
      passRate: '50%',
      publishDate: '2018-7-7',
      meterState: 'Accepted'
    },
    {
      problemId: 202,
      problemName: 'A+B',
      submissionNumber: 220,
      passRate: '90%',
      publishDate: '2018-7-7',
      meterState: 'Compile Error'
    },
    {
      problemId: 203,
      problemName: '简单乘法',
      submissionNumber: 200,
      passRate: '56%',
      publishDate: '2018-7-7',
      meterState: 'Wrong Answer'
    },
    {
      problemId: 201,
      problemName: 'HelloWorld',
      submissionNumber: 200,
      passRate: '50%',
      publishDate: '2018-7-7',
      meterState: 'Time Limit Exceeded'
    },
    {
      problemId: 202,
      problemName: 'A+B',
      submissionNumber: 220,
      passRate: '90%',
      publishDate: '2018-7-7',
      meterState: 'Memory Limit Exceeded'
    },
    {
      problemId: 203,
      problemName: '简单乘法',
      submissionNumber: 200,
      passRate: '56%',
      publishDate: '2018-7-7',
      meterState: 'Runtime Error'
    },
    {
      problemId: 201,
      problemName: 'HelloWorld',
      submissionNumber: 200,
      passRate: '50%',
      publishDate: '2018-7-7',
      meterState: 'Accepted'
    },
    {
      problemId: 202,
      problemName: 'A+B',
      submissionNumber: 220,
      passRate: '90%',
      publishDate: '2018-7-7',
      meterState: 'Compile Error'
    },
    {
      problemId: 203,
      problemName: '简单乘法',
      submissionNumber: 200,
      passRate: '56%',
      publishDate: '2018-7-7',
      meterState: 'Wrong Answer'
    },
    {
      problemId: 201,
      problemName: 'HelloWorld',
      submissionNumber: 200,
      passRate: '50%',
      publishDate: '2018-7-7',
      meterState: 'Time Limit Exceeded'
    },
    {
      problemId: 202,
      problemName: 'A+B',
      submissionNumber: 220,
      passRate: '90%',
      publishDate: '2018-7-7',
      meterState: 'Memory Limit Exceeded'
    },
    {
      problemId: 203,
      problemName: '简单乘法',
      submissionNumber: 200,
      passRate: '56%',
      publishDate: '2018-7-7',
      meterState: 'Runtime Error'
    },
    {
      problemId: 201,
      problemName: 'HelloWorld',
      submissionNumber: 200,
      passRate: '50%',
      publishDate: '2018-7-7',
      meterState: 'Accepted'
    },
    {
      problemId: 202,
      problemName: 'A+B',
      submissionNumber: 220,
      passRate: '90%',
      publishDate: '2018-7-7',
      meterState: 'Compile Error'
    },
    {
      problemId: 203,
      problemName: '简单乘法',
      submissionNumber: 200,
      passRate: '56%',
      publishDate: '2018-7-7',
      meterState: 'Wrong Answer'
    },
    {
      problemId: 201,
      problemName: 'HelloWorld',
      submissionNumber: 200,
      passRate: '50%',
      publishDate: '2018-7-7',
      meterState: 'Time Limit Exceeded'
    },
    {
      problemId: 202,
      problemName: 'A+B',
      submissionNumber: 220,
      passRate: '90%',
      publishDate: '2018-7-7',
      meterState: 'Memory Limit Exceeded'
    },
    {
      problemId: 203,
      problemName: '简单乘法',
      submissionNumber: 200,
      passRate: '56%',
      publishDate: '2018-7-7',
      meterState: 'Runtime Error'
    },
    {
      problemId: 201,
      problemName: 'HelloWorld',
      submissionNumber: 200,
      passRate: '50%',
      publishDate: '2018-7-7',
      meterState: 'Accepted'
    },
    {
      problemId: 202,
      problemName: 'A+B',
      submissionNumber: 220,
      passRate: '90%',
      publishDate: '2018-7-7',
      meterState: 'Compile Error'
    },
    {
      problemId: 203,
      problemName: '简单乘法',
      submissionNumber: 200,
      passRate: '56%',
      publishDate: '2018-7-7',
      meterState: 'Wrong Answer'
    },
    {
      problemId: 201,
      problemName: 'HelloWorld',
      submissionNumber: 200,
      passRate: '50%',
      publishDate: '2018-7-7',
      meterState: 'Time Limit Exceeded'
    },
    {
      problemId: 202,
      problemName: 'A+B',
      submissionNumber: 220,
      passRate: '90%',
      publishDate: '2018-7-7',
      meterState: 'Memory Limit Exceeded'
    },
    {
      problemId: 203,
      problemName: '简单乘法',
      submissionNumber: 200,
      passRate: '56%',
      publishDate: '2018-7-7',
      meterState: 'Runtime Error'
    },
    {
      problemId: 201,
      problemName: 'HelloWorld',
      submissionNumber: 200,
      passRate: '50%',
      publishDate: '2018-7-7',
      meterState: 'Accepted'
    },
    {
      problemId: 202,
      problemName: 'A+B',
      submissionNumber: 220,
      passRate: '90%',
      publishDate: '2018-7-7',
      meterState: 'Compile Error'
    },
    {
      problemId: 203,
      problemName: '简单乘法',
      submissionNumber: 200,
      passRate: '56%',
      publishDate: '2018-7-7',
      meterState: 'Wrong Answer'
    },
    {
      problemId: 201,
      problemName: 'HelloWorld',
      submissionNumber: 200,
      passRate: '50%',
      publishDate: '2018-7-7',
      meterState: 'Time Limit Exceeded'
    },
    {
      problemId: 202,
      problemName: 'A+B',
      submissionNumber: 220,
      passRate: '90%',
      publishDate: '2018-7-7',
      meterState: 'Memory Limit Exceeded'
    },
    {
      problemId: 203,
      problemName: '简单乘法',
      submissionNumber: 200,
      passRate: '56%',
      publishDate: '2018-7-7',
      meterState: 'Runtime Error'
    },
    {
      problemId: 201,
      problemName: 'HelloWorld',
      submissionNumber: 200,
      passRate: '50%',
      publishDate: '2018-7-7',
      meterState: 'Accepted'
    },
    {
      problemId: 202,
      problemName: 'A+B',
      submissionNumber: 220,
      passRate: '90%',
      publishDate: '2018-7-7',
      meterState: 'Compile Error'
    },
    {
      problemId: 203,
      problemName: '简单乘法',
      submissionNumber: 200,
      passRate: '56%',
      publishDate: '2018-7-7',
      meterState: 'Wrong Answer'
    },
    {
      problemId: 201,
      problemName: 'HelloWorld',
      submissionNumber: 200,
      passRate: '50%',
      publishDate: '2018-7-7',
      meterState: 'Time Limit Exceeded'
    },
    {
      problemId: 202,
      problemName: 'A+B',
      submissionNumber: 220,
      passRate: '90%',
      publishDate: '2018-7-7',
      meterState: 'Memory Limit Exceeded'
    },
    {
      problemId: 203,
      problemName: '简单乘法',
      submissionNumber: 200,
      passRate: '56%',
      publishDate: '2018-7-7',
      meterState: 'Runtime Error'
    },
    {
      problemId: 201,
      problemName: 'HelloWorld',
      submissionNumber: 200,
      passRate: '50%',
      publishDate: '2018-7-7',
      meterState: 'Accepted'
    },
    {
      problemId: 202,
      problemName: 'A+B',
      submissionNumber: 220,
      passRate: '90%',
      publishDate: '2018-7-7',
      meterState: 'Compile Error'
    },
    {
      problemId: 203,
      problemName: '简单乘法',
      submissionNumber: 200,
      passRate: '56%',
      publishDate: '2018-7-7',
      meterState: 'Wrong Answer'
    },
    {
      problemId: 201,
      problemName: 'HelloWorld',
      submissionNumber: 200,
      passRate: '50%',
      publishDate: '2018-7-7',
      meterState: 'Time Limit Exceeded'
    },
    {
      problemId: 202,
      problemName: 'A+B',
      submissionNumber: 220,
      passRate: '90%',
      publishDate: '2018-7-7',
      meterState: 'Memory Limit Exceeded'
    },
    {
      problemId: 203,
      problemName: '简单乘法',
      submissionNumber: 200,
      passRate: '56%',
      publishDate: '2018-7-7',
      meterState: 'Runtime Error'
    },
    {
      problemId: 201,
      problemName: 'HelloWorld',
      submissionNumber: 200,
      passRate: '50%',
      publishDate: '2018-7-7',
      meterState: 'Accepted'
    },
    {
      problemId: 202,
      problemName: 'A+B',
      submissionNumber: 220,
      passRate: '90%',
      publishDate: '2018-7-7',
      meterState: 'Compile Error'
    },
    {
      problemId: 203,
      problemName: '简单乘法',
      submissionNumber: 200,
      passRate: '56%',
      publishDate: '2018-7-7',
      meterState: 'Wrong Answer'
    },
    {
      problemId: 201,
      problemName: 'HelloWorld',
      submissionNumber: 200,
      passRate: '50%',
      publishDate: '2018-7-7',
      meterState: 'Time Limit Exceeded'
    },
    {
      problemId: 202,
      problemName: 'A+B',
      submissionNumber: 220,
      passRate: '90%',
      publishDate: '2018-7-7',
      meterState: 'Memory Limit Exceeded'
    },
    {
      problemId: 203,
      problemName: '简单乘法',
      submissionNumber: 200,
      passRate: '56%',
      publishDate: '2018-7-7',
      meterState: 'Runtime Error'
    },
    {
      problemId: 201,
      problemName: 'HelloWorld',
      submissionNumber: 200,
      passRate: '50%',
      publishDate: '2018-7-7',
      meterState: 'Accepted'
    },
    {
      problemId: 202,
      problemName: 'A+B',
      submissionNumber: 220,
      passRate: '90%',
      publishDate: '2018-7-7',
      meterState: 'Compile Error'
    },
    {
      problemId: 203,
      problemName: '简单乘法',
      submissionNumber: 200,
      passRate: '56%',
      publishDate: '2018-7-7',
      meterState: 'Wrong Answer'
    },
    {
      problemId: 201,
      problemName: 'HelloWorld',
      submissionNumber: 200,
      passRate: '50%',
      publishDate: '2018-7-7',
      meterState: 'Time Limit Exceeded'
    },
    {
      problemId: 202,
      problemName: 'A+B',
      submissionNumber: 220,
      passRate: '90%',
      publishDate: '2018-7-7',
      meterState: 'Memory Limit Exceeded'
    },
    {
      problemId: 203,
      problemName: '简单乘法',
      submissionNumber: 200,
      passRate: '56%',
      publishDate: '2018-7-7',
      meterState: 'Runtime Error'
    },
    {
      problemId: 201,
      problemName: 'HelloWorld',
      submissionNumber: 200,
      passRate: '50%',
      publishDate: '2018-7-7',
      meterState: 'Accepted'
    },
    {
      problemId: 202,
      problemName: 'A+B',
      submissionNumber: 220,
      passRate: '90%',
      publishDate: '2018-7-7',
      meterState: 'Compile Error'
    },
    {
      problemId: 203,
      problemName: '简单乘法',
      submissionNumber: 200,
      passRate: '56%',
      publishDate: '2018-7-7',
      meterState: 'Wrong Answer'
    },
    {
      problemId: 201,
      problemName: 'HelloWorld',
      submissionNumber: 200,
      passRate: '50%',
      publishDate: '2018-7-7',
      meterState: 'Time Limit Exceeded'
    },
    {
      problemId: 202,
      problemName: 'A+B',
      submissionNumber: 220,
      passRate: '90%',
      publishDate: '2018-7-7',
      meterState: 'Memory Limit Exceeded'
    },
    {
      problemId: 203,
      problemName: '简单乘法',
      submissionNumber: 200,
      passRate: '56%',
      publishDate: '2018-7-7',
      meterState: 'Runtime Error'
    },
    {
      problemId: 201,
      problemName: 'HelloWorld',
      submissionNumber: 200,
      passRate: '50%',
      publishDate: '2018-7-7',
      meterState: 'Accepted'
    },
    {
      problemId: 202,
      problemName: 'A+B',
      submissionNumber: 220,
      passRate: '90%',
      publishDate: '2018-7-7',
      meterState: 'Compile Error'
    },
    {
      problemId: 203,
      problemName: '简单乘法',
      submissionNumber: 200,
      passRate: '56%',
      publishDate: '2018-7-7',
      meterState: 'Wrong Answer'
    },
    {
      problemId: 201,
      problemName: 'HelloWorld',
      submissionNumber: 200,
      passRate: '50%',
      publishDate: '2018-7-7',
      meterState: 'Time Limit Exceeded'
    },
    {
      problemId: 202,
      problemName: 'A+B',
      submissionNumber: 220,
      passRate: '90%',
      publishDate: '2018-7-7',
      meterState: 'Memory Limit Exceeded'
    },
    {
      problemId: 203,
      problemName: '简单乘法',
      submissionNumber: 200,
      passRate: '56%',
      publishDate: '2018-7-7',
      meterState: 'Runtime Error'
    },
    {
      problemId: 201,
      problemName: 'HelloWorld',
      submissionNumber: 200,
      passRate: '50%',
      publishDate: '2018-7-7',
      meterState: 'Accepted'
    },
    {
      problemId: 202,
      problemName: 'A+B',
      submissionNumber: 220,
      passRate: '90%',
      publishDate: '2018-7-7',
      meterState: 'Compile Error'
    },
    {
      problemId: 203,
      problemName: '简单乘法',
      submissionNumber: 200,
      passRate: '56%',
      publishDate: '2018-7-7',
      meterState: 'Wrong Answer'
    },
    {
      problemId: 201,
      problemName: 'HelloWorld',
      submissionNumber: 200,
      passRate: '50%',
      publishDate: '2018-7-7',
      meterState: 'Time Limit Exceeded'
    },
    {
      problemId: 202,
      problemName: 'A+B',
      submissionNumber: 220,
      passRate: '90%',
      publishDate: '2018-7-7',
      meterState: 'Memory Limit Exceeded'
    },
    {
      problemId: 203,
      problemName: '简单乘法',
      submissionNumber: 200,
      passRate: '56%',
      publishDate: '2018-7-7',
      meterState: 'Runtime Error'
    },
    {
      problemId: 201,
      problemName: 'HelloWorld',
      submissionNumber: 200,
      passRate: '50%',
      publishDate: '2018-7-7',
      meterState: 'Accepted'
    },
    {
      problemId: 202,
      problemName: 'A+B',
      submissionNumber: 220,
      passRate: '90%',
      publishDate: '2018-7-7',
      meterState: 'Compile Error'
    },
    {
      problemId: 203,
      problemName: '简单乘法',
      submissionNumber: 200,
      passRate: '56%',
      publishDate: '2018-7-7',
      meterState: 'Wrong Answer'
    },
    {
      problemId: 201,
      problemName: 'HelloWorld',
      submissionNumber: 200,
      passRate: '50%',
      publishDate: '2018-7-7',
      meterState: 'Time Limit Exceeded'
    },
    {
      problemId: 202,
      problemName: 'A+B',
      submissionNumber: 220,
      passRate: '90%',
      publishDate: '2018-7-7',
      meterState: 'Memory Limit Exceeded'
    },
    {
      problemId: 203,
      problemName: '简单乘法',
      submissionNumber: 200,
      passRate: '56%',
      publishDate: '2018-7-7',
      meterState: 'Runtime Error'
    },
    {
      problemId: 201,
      problemName: 'HelloWorld',
      submissionNumber: 200,
      passRate: '50%',
      publishDate: '2018-7-7',
      meterState: 'Accepted'
    },
    {
      problemId: 202,
      problemName: 'A+B',
      submissionNumber: 220,
      passRate: '90%',
      publishDate: '2018-7-7',
      meterState: 'Compile Error'
    },
    {
      problemId: 203,
      problemName: '简单乘法',
      submissionNumber: 200,
      passRate: '56%',
      publishDate: '2018-7-7',
      meterState: 'Wrong Answer'
    },
    {
      problemId: 201,
      problemName: 'HelloWorld',
      submissionNumber: 200,
      passRate: '50%',
      publishDate: '2018-7-7',
      meterState: 'Time Limit Exceeded'
    },
    {
      problemId: 202,
      problemName: 'A+B',
      submissionNumber: 220,
      passRate: '90%',
      publishDate: '2018-7-7',
      meterState: 'Memory Limit Exceeded'
    },
    {
      problemId: 203,
      problemName: '简单乘法',
      submissionNumber: 200,
      passRate: '56%',
      publishDate: '2018-7-7',
      meterState: 'Runtime Error'
    },
    {
      problemId: 201,
      problemName: 'HelloWorld',
      submissionNumber: 200,
      passRate: '50%',
      publishDate: '2018-7-7',
      meterState: 'Accepted'
    },
    {
      problemId: 202,
      problemName: 'A+B',
      submissionNumber: 220,
      passRate: '90%',
      publishDate: '2018-7-7',
      meterState: 'Compile Error'
    },
    {
      problemId: 203,
      problemName: '简单乘法',
      submissionNumber: 200,
      passRate: '56%',
      publishDate: '2018-7-7',
      meterState: 'Wrong Answer'
    },
    {
      problemId: 201,
      problemName: 'HelloWorld',
      submissionNumber: 200,
      passRate: '50%',
      publishDate: '2018-7-7',
      meterState: 'Time Limit Exceeded'
    },
    {
      problemId: 202,
      problemName: 'A+B',
      submissionNumber: 220,
      passRate: '90%',
      publishDate: '2018-7-7',
      meterState: 'Memory Limit Exceeded'
    },
    {
      problemId: 203,
      problemName: '简单乘法',
      submissionNumber: 200,
      passRate: '56%',
      publishDate: '2018-7-7',
      meterState: 'Runtime Error'
    },
    {
      problemId: 201,
      problemName: 'HelloWorld',
      submissionNumber: 200,
      passRate: '50%',
      publishDate: '2018-7-7',
      meterState: 'Accepted'
    },
    {
      problemId: 202,
      problemName: 'A+B',
      submissionNumber: 220,
      passRate: '90%',
      publishDate: '2018-7-7',
      meterState: 'Compile Error'
    },
    {
      problemId: 203,
      problemName: '简单乘法',
      submissionNumber: 200,
      passRate: '56%',
      publishDate: '2018-7-7',
      meterState: 'Wrong Answer'
    },
    {
      problemId: 201,
      problemName: 'HelloWorld',
      submissionNumber: 200,
      passRate: '50%',
      publishDate: '2018-7-7',
      meterState: 'Time Limit Exceeded'
    },
    {
      problemId: 202,
      problemName: 'A+B',
      submissionNumber: 220,
      passRate: '90%',
      publishDate: '2018-7-7',
      meterState: 'Memory Limit Exceeded'
    },
    {
      problemId: 203,
      problemName: 'xxxxxxx',
      submissionNumber: 200,
      passRate: '56%',
      publishDate: '2018-7-7',
      meterState: 'Runtime Error'
    }
  ],
  'GET /api/libraries/0/problems/:prob_id': (req, res) => {
    res.send('# Description\n+7 dalao would like to reverse a number, and +C dalao would like to see \
    the remainder (modulus) after the division of the reversed number by a second number. For simplicity \
    **just tell +C the remainder.**\n# Details\nIn the first line of the input is a number ``n`` (1 <= n <= 10) \
    representing the number of the test cases.\nEach of the following n lines consists of two blank-separated \
    integers ``divisor`` and ``num`` (1 <= divisor <= 1000; num >= 0), where ``divisor`` is the divisor to be \
    used to get the remainder, and ``num`` is the integer to be reversed.\nOutput the remainder for each case and end it \
    with a \'\\n\'.\n```\n5\n10 12345\n32 2345\n98 43245\n231 83929\n2 1\n```\nIn this input:\n- There are ``five`` \
    test cases.\n- In the first test case, since the reversed number of ``12345`` would be ``54321``, you should \
    output the remainder of ``54321 / 10``, namely ``1``.\n- In the second test case, since the reversed number \
    of ``2345`` would be ``5432``, you should output the remainder of ``5432 / 32``, namely ``24``.\n- ...\nAnd \
    the corresponding output would be:\n```\n1\n24\n40\n76\n1\n```\n');
  }
};
