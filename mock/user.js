module.exports = {
  'DELETE /api/user/:id': (req, res) => {
    console.log('---->', req.body)
    console.log('---->', req.params.id)
    res.send({ status: 'ok', message: '删除成功！' });
  },
  'GET /api/user': {
    id: 1,
    username: 'kenny',
    sex: 6
  },
  'GET /api/users/profile': {
    user_Id: 1,
    username: '贾同学',
    realname: '贾同学',
    description: 'description',
    email: 'moutongxue@matrix',
    phone_number: '1234567',
    major: '软件工程',
    website: 'www.baidu.com'
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
}
