const express = require('express');

const bodyParser = require('body-parser');
const  sequelize = require( './Config/database.js');
const  userRoutes = require( './Routes/userRoutes.js');

const app = express();

app.use(bodyParser.json());
app.use('/api', userRoutes);

// Sync database and start the server
sequelize.sync({ force: true }).then(() => {
  console.log('Database synced');
  app.listen(3000, () => {
    console.log('Server is running on port 3000');
  });
}).catch(err => {
  console.error('Error syncing database:', err);
});