const secret = {
  mongoConnectionString:
    process.env.MONGO_URL ||
    'mongodb+srv://<username>:<password>@<cluster>.mongodb.net/test?retryWrites=true',
}

module.exports = secret
