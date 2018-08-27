let isLogin = false;

module.exports = {
  'GET /api/auth/login': (req, res) => {
    if (isLogin) {
      res.sendStatus(200);
    } else {
      res.sendStatus(401);
    }
  },
  'POST /api/auth/login': (req, res) => {
    const { password, username } = req.body;
    if (password === 'admin' && username === 'admin') {
      isLogin = true;
      return res.status(200).json({
        username: 'HeskeyBaozi',
        role: 'admin'
      });
    } else {
      return res.status(403).json({
        message: '用户名或者密码输入错误'
      });
    }
  },
  'POST /api/auth/logout': (req, res) => {
    isLogin = false;
    return res.sendStatus(200);
  }
};
