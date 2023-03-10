// const dotenv = require('dotenv');
// const path = require('path');

// console.log(path.resolve(__dirname, "environment", process.env.NODE_ENV + '.env'), "psth")

// dotenv.config({
//   path: path.resolve(__dirname, "environment", process.env.NODE_ENV + '.env')
// });

const development = {
  MONGO_DEV_URI:'mongodb+srv://Eproject000111:Eproject000111@cluster0.bh7pcod.mongodb.net/EcommerceProject?retryWrites=true&w=majority',
  ACCESS_TOKEN_VAR:'accesstoken',
  REFRESS_TOKEN_VAR:'refresstoken',
  SSL:"false"
}

const production = {
  MONGO_DEV_URI:'mongodb+srv://Eproject000111:Eproject000111@cluster0.bh7pcod.mongodb.net/EcommerceProject?retryWrites=true&w=majority',
  ACCESS_TOKEN_VAR:'accesstoken',
  REFRESS_TOKEN_VAR:'refresstoken',
  SSL:"true"
}

const testing = {
  MONGO_DEV_URI:'mongodb+srv://Eproject000111:Eproject000111@cluster0.bh7pcod.mongodb.net/EcommerceProject?retryWrites=true&w=majority',
  ACCESS_TOKEN_VAR:'accesstoken',
  REFRESS_TOKEN_VAR:'refresstoken',
  SSL:"false"
}

module.exports = (process.env.NODE_ENV == 'development')?
                  development:(process.env.NODE_ENV == 'production')?
                  production:(process.env.NODE_ENV == 'testing')?
                  testing:development;
