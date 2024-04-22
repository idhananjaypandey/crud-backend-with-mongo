const express = require('express');
const productRoutes = require('./routes/product.route');
const app = express();
const dotenv = require('dotenv');
dotenv.config();

//middleware
app.use(express.json());
app.use(express.urlencoded({extended:false}))

app.listen(process.env.PORT,()=>{
  console.log(`server is listening..`);
});

//routes
app.use('/api/products',productRoutes);


