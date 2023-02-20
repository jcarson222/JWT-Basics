// LOGIN
const login = async (req, res) => {
  res.send("Fake Login/Register/Signup Route");
};

// DASHBOARD
const dashboard = async (req, res) => {
  const luckyNumber = Math.floor(Math.random() * 100); // 0-99
  res.status(200).json({
    msg: `Welcome, new user`,
    secret: `Here is your authorized data, your luck number is ${luckyNumber}`,
  });
};

module.exports = { login, dashboard };
