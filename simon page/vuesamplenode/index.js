const express =  require('express');
const app = express();
const cors = require('cors');
//const config= require('./connect.js')
let mysql = require('mysql');
const port =  3000;

app.use(express.json())
app.use(cors());

  //let mysql = require('mysql');

  let connection = mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: 'password1#',
      database: 'product'
  });
  
  connection.connect(function(err) {
      if (err) {
          console.error('Error connecting: ' + err.stack);
          return;
      }
      console.log('Connected as id ' + connection.threadId);
      
  });


  //let connection = mysql.createConnection(config);
 

//       app.get('/api/users', (req,res) =>{
//           //const course = courses.find(c=> c.id === parseInt(req.params.id))
//           let sql = `select * from  products;`;
//           connection.query (sql, (error, results, fields) => {
//           if (error) {
//               return console.error(error.message);
//           }else{
//               res.send(results)
//           }
          
//       });
//   });



app.get('/api/users', (req,res) =>{
    //const course = courses.find(c=> c.id === parseInt(req.params.id))
    let sql = `select * from  products;`;
    connection.query (sql, (error, results, fields) =>{
    if (error){
        return console.error(error.message);
    }
    else{
        res.send(results)
    }
    
});
});



      app.post('/api/saveuser', (req,res)=> {
          console.log(req.body)    
          console.log(req.body.product)
       
        
          //let sql= `INSERT INTO users (userName,email) values?;` ;
          let sql=  "INSERT INTO products (`productid`,`name`,`price`,`dated`,`size`,`description`,`style`,`origin`,`material`,`conditions`,`seriesrefno`,`ref`,`sellerloc`) VALUES ('" + req.body.productid+ "','" + req.body.name+ "', '" + req.body.price + "','" + req.body.dated+ "','" + req.body.size+ "','" + req.body.desc+ "','" + req.body.style+ "','" + req.body.origin+ "','" + req.body.material+ "','" + req.body.condition+ "','" + req.body.seriesrefno+ "','" + req.body.ref+ "','" + req.body.sellerloc+ "');";
          //var values = [req.body.userName, req.body.email];
          connection.query(sql,(err,res)=>{
          //if(err) throw err;
              //console.log('Last record insert id:', res.id);
              //insertId = res.s;
              if (err) {
                  return console.error(err.message);
              }
      });
      // const course = {
      // id : courses.length + 1,
      // name: 'course4'
      //}
      //courses.push(course);
          res.send("success")
      });



app.listen(port, () => console.log(`hiii  ${port}`))

// const express = require('express')
// const app = express();
// var cors = require('cors')
// app.use(express.json())
// app.use(cors());

// let user=[{name:"Abc",email:"abc@gmail.com"},{name:"asd",email:"asd@gmail.com"}]
// app.get('/api/users', (req, res) => {
//   res.send(user)
// });

// app.post('/api/saveuser', (req, res) => {
//     console.log(req.body)
//     user.push(req.body);
//     res.send("success")
//   });

// app.listen(3000, () => {
//   console.log('Example app listening on port 3000!')
// });

