// See https://github.com/jaywcjlove/webpack-api-mocker

module.exports = {
  'GET /api/user': {
    id: 1,
    username: 'kenny',
    sex: 6
  },
  'GET /api/auth/login': (req, res) => {
    res.send({
      "status": "NOT_AUTHORIZED",
      "msg": "未登录",
      "data": {},
      "time": "2018-07-30T07:51:01.811Z",
      "paramData": {}
    })
  },
  'GET /api/user/list': [
    {
      id: 1,
      username: 'kenny',
      sex: 6
    }, {
      id: 2,
      username: 'kenny',
      sex: 6
    }
  ],
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
  'POST /api/login/account': (req, res) => {
    const { password, username } = req.body;
    if (password === '888888' && username === 'admin') {
      return res.json({
        status: 'ok',
        code: 0,
        token: "sdfsdfsdfdsf",
        data: {
          id: 1,
          username: 'kenny',
          sex: 6
        }
      });
    } else {
      return res.status(403).json({
        status: 'error',
        code: 403
      });
    }
  },
  'DELETE /api/user/:id': (req, res) => {
    console.log('---->', req.body)
    console.log('---->', req.params.id)
    res.send({ status: 'ok', message: '删除成功！' });
  },
  'GET /api/statistic/recent': (req, res) => {
    res.send([
      {
        problemId: 202,
        problemName: 'A+B',
        submit: 2,
        lastSubmit: '2018-07-18',
        publishDate: '2018-7-7',
        meterState: 'Memory Limit Exceeded'
      },
      {
        problemId: 203,
        problemName: 'xxxxxxx',
        submit: 10,
        lastSubmit: '2018-07-20',
        publishDate: '2018-7-7',
        meterState: 'Runtime Error'
      },
      {
        problemId: 202,
        problemName: 'A+B',
        submit: 2,
        lastSubmit: '2018-07-18',
        publishDate: '2018-7-7',
        meterState: 'Memory Limit Exceeded'
      },
      {
        problemId: 203,
        problemName: 'xxxxxxx',
        submit: 10,
        lastSubmit: '2018-07-20',
        publishDate: '2018-7-7',
        meterState: 'Runtime Error'
      },
      {
        problemId: 202,
        problemName: 'A+B',
        submit: 2,
        lastSubmit: '2018-07-18',
        publishDate: '2018-7-7',
        meterState: 'Memory Limit Exceeded'
      },
      {
        problemId: 203,
        problemName: 'xxxxxxx',
        submit: 10,
        lastSubmit: '2018-07-20',
        publishDate: '2018-7-7',
        meterState: 'Runtime Error'
      },
      {
        problemId: 202,
        problemName: 'A+B',
        submit: 2,
        lastSubmit: '2018-07-18',
        publishDate: '2018-7-7',
        meterState: 'Memory Limit Exceeded'
      },
      {
        problemId: 203,
        problemName: 'xxxxxxx',
        submit: 10,
        lastSubmit: '2018-07-20',
        publishDate: '2018-7-7',
        meterState: 'Runtime Error'
      },
      {
        problemId: 202,
        problemName: 'A+B',
        submit: 2,
        lastSubmit: '2018-07-18',
        publishDate: '2018-7-7',
        meterState: 'Memory Limit Exceeded'
      },
      {
        problemId: 203,
        problemName: 'xxxxxxx',
        submit: 10,
        lastSubmit: '2018-07-20',
        publishDate: '2018-7-7',
        meterState: 'Runtime Error'
      },
      {
        problemId: 202,
        problemName: 'A+B',
        submit: 2,
        lastSubmit: '2018-07-18',
        publishDate: '2018-7-7',
        meterState: 'Memory Limit Exceeded'
      },
      {
        problemId: 203,
        problemName: 'xxxxxxx',
        submit: 10,
        lastSubmit: '2018-07-20',
        publishDate: '2018-7-7',
        meterState: 'Runtime Error'
      },
      {
        problemId: 202,
        problemName: 'A+B',
        submit: 2,
        lastSubmit: '2018-07-18',
        publishDate: '2018-7-7',
        meterState: 'Memory Limit Exceeded'
      },
      {
        problemId: 203,
        problemName: 'xxxxxxx',
        submit: 10,
        lastSubmit: '2018-07-20',
        publishDate: '2018-7-7',
        meterState: 'Runtime Error'
      },
      {
        problemId: 202,
        problemName: 'A+B',
        submit: 2,
        lastSubmit: '2018-07-18',
        publishDate: '2018-7-7',
        meterState: 'Memory Limit Exceeded'
      },
      {
        problemId: 203,
        problemName: 'xxxxxxx',
        submit: 10,
        lastSubmit: '2018-07-20',
        publishDate: '2018-7-7',
        meterState: 'Runtime Error'
      },
      {
        problemId: 202,
        problemName: 'A+B',
        submit: 2,
        lastSubmit: '2018-07-18',
        publishDate: '2018-7-7',
        meterState: 'Memory Limit Exceeded'
      },
      {
        problemId: 203,
        problemName: 'xxxxxxx',
        submit: 10,
        lastSubmit: '2018-07-20',
        publishDate: '2018-7-7',
        meterState: 'Runtime Error'
      },
      {
        problemId: 202,
        problemName: 'A+B',
        submit: 2,
        lastSubmit: '2018-07-18',
        publishDate: '2018-7-7',
        meterState: 'Memory Limit Exceeded'
      },
      {
        problemId: 203,
        problemName: 'zzzz',
        submit: 10,
        lastSubmit: '2018-07-20',
        publishDate: '2018-7-7',
        meterState: 'Runtime Error'
      },
      {
        problemId: 202,
        problemName: 'A+B',
        submit: 2,
        lastSubmit: '2018-07-18',
        publishDate: '2018-7-7',
        meterState: 'Memory Limit Exceeded'
      },
      {
        problemId: 203,
        problemName: 'xxxxxxx',
        submit: 10,
        lastSubmit: '2018-07-20',
        publishDate: '2018-7-7',
        meterState: 'Runtime Error'
      },
      {
        problemId: 202,
        problemName: 'A+B',
        submit: 2,
        lastSubmit: '2018-07-18',
        publishDate: '2018-7-7',
        meterState: 'Memory Limit Exceeded'
      },
      {
        problemId: 203,
        problemName: 'xxxxxxx',
        submit: 10,
        lastSubmit: '2018-07-20',
        publishDate: '2018-7-7',
        meterState: 'Runtime Error'
      },
      {
        problemId: 202,
        problemName: 'A+B',
        submit: 2,
        lastSubmit: '2018-07-18',
        publishDate: '2018-7-7',
        meterState: 'Memory Limit Exceeded'
      },
      {
        problemId: 203,
        problemName: 'xxxxxxx',
        submit: 10,
        lastSubmit: '2018-07-20',
        publishDate: '2018-7-7',
        meterState: 'Runtime Error'
      },
      {
        problemId: 202,
        problemName: 'A+B',
        submit: 2,
        lastSubmit: '2018-07-18',
        publishDate: '2018-7-7',
        meterState: 'Memory Limit Exceeded'
      },
      {
        problemId: 203,
        problemName: 'dddd',
        submit: 10,
        lastSubmit: '2018-07-20',
        publishDate: '2018-7-7',
        meterState: 'Runtime Error'
      },
      {
        problemId: 202,
        problemName: 'A+B',
        submit: 2,
        lastSubmit: '2018-07-18',
        publishDate: '2018-7-7',
        meterState: 'Memory Limit Exceeded'
      },
      {
        problemId: 203,
        problemName: 'xxxxxxx',
        submit: 10,
        lastSubmit: '2018-07-20',
        publishDate: '2018-7-7',
        meterState: 'Runtime Error'
      }
    ])
  },
  'GET /api/libraries/0/problems/record/:pid': (req, res) =>{
    res.send([{
      submissionTime: '2018-07-18-18：59',
      state: 'Accepted',
      code: 'Hello World!'
    }, {
      submissionTime: '2018-07-18-18：59',
      state: 'Accepted',
      code: 'const a = b + 1;'
    }, {
      submissionTime: '2018-07-18-18：59',
      state: 'Wrong Answer',
      code: 'return 0;'
    }, {
      submissionTime: '2018-07-18-18：59',
      state: 'Time Limit Exceeded',
      code: 'public void test(){}'
    }, {
      submissionTime: '2018-07-18-18：59',
      state: 'Memory Limit Exceeded',
      code: 'for(;;)'
    }, {
      submissionTime: '2018-07-18-18：59',
      state: 'Runtime Error',
      code: 'Hello World!'
    }, {
      submissionTime: '2018-07-18-18：59',
      state: 'Runtime Error',
      code: 'Hello World!'
    }, {
      submissionTime: '2018-07-18-18：59',
      state: 'Compile Error',
      code: 'const a = b + 1;'
    }, {
      submissionTime: '2018-07-18-18：59',
      state: 'Compile Error',
      code: 'return 0;'
    }, {
      submissionTime: '2018-07-18-18：59',
      state: 'Compile Error',
      code: 'return 0;'
    }, {
      submissionTime: '2018-07-18-18：59',
      state: 'Accepted',
      code: 'return 0;'
    }, {
      submissionTime: '2018-07-18-18：59',
      state: 'Wrong Answer',
      code: 'return 0;'
    }, {
      submissionTime: '2018-07-18-18：59',
      state: 'Time Limit Exceeded',
      code: 'return 0;'
    }, {
      submissionTime: '2018-07-18-18：59',
      state: 'Memory Limit Exceeded',
      code: 'return 0;'
    }, {
      submissionTime: '2018-07-18-18：59',
      state: 'Runtime Error',
      code: 'return 0;'
    }, {
      submissionTime: '2018-07-18-18：59',
      state: 'Runtime Error',
      code: 'return 0;'
    }])
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
      submissionNumber: 230,
      passRate: '70%',
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
      submissionNumber: 240,
      passRate: '60%',
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
      submissionNumber: 250,
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
}
