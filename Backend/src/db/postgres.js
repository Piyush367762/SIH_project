
// // PostgreSQL connection
// const sequelize = new Sequelize(
//   process.env.POSTGRES_DB,
//   process.env.POSTGRES_USER,
//   process.env.POSTGRES_PASSWORD,
//   {
//     host: process.env.POSTGRES_HOST,
//     port: process.env.POSTGRES_PORT || 5432,
//     dialect: 'postgres',
//     logging: process.env.NODE_ENV === 'development' ? console.log : false,
//     pool: {
//       max: 5,
//       min: 0,
//       acquire: 30000,
//       idle: 10000
//     }
//   }
// );


// const connectPostgreSQL = async () => {
//   try {
//     await sequelize.authenticate();
//     console.log('PostgreSQL connection established successfully.');
//   } catch (error) {
//     console.error('Unable to connect to PostgreSQL:', error);
//     process.exit(1);
//   }
// };

// export { connectMongoDB, connectPostgreSQL, sequelize };