
const express =  require('express');
const app = express();
const cors = require('cors');
let mysql = require('mysql');


const port =  3000;

app.use(express.json())
app.use(cors());

 

  let connection = mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: 'password1#',
      database: 'samp'
  });
  
  connection.connect(function(err) {
      if (err) {
          console.error('Error connecting: ' + err.stack);
          return;
      }
      console.log('Connected as id ' + connection.threadId);
      
  });



  app.get('/api/users/:id1', (req,res) =>{
    var id1 = req.params.id1;
   
    console.log( id1)
  
     let sql = `select * from  product1 where productid ="`+id1+`"`; 
     console.log(sql)
    connection.query (sql, (error, results, fields) => {
    if (error) {
        return console.error(error.message);
    }else{
        res.send(results)
    }
    
});
});


      app.post('/api/saveuser', (req,res)=> {
          console.log(req.body)   
          console.log(req.body.product) 
         
         
          let sql=  "INSERT INTO product1 (`productid`,`name1`, `price`,`dated`,`size`,`descriptions`,`style`,`origin`,`material`,`conditions`,`series`,`ref`,`loc`) VALUES ('" +req.body.productid+ "','" + req.body.name1+ "', '" + req.body.price + "','" + req.body.dated+ "','" + req.body.size+ "','" + req.body.descriptions+ "','" + req.body.style+ "','" + req.body.origin+ "','" + req.body.material+ "','" + req.body.conditions+ "','" + req.body.series+ "','" + req.body.ref+ "','" + req.body.loc+ "');";
        
          connection.query(sql,(err,res)=>{
         
             
              if (err) {
                  return console.error(err.message);
              }
      });
    
          res.send("success")
      });



app.listen(port, () => console.log(`hiii  ${port}`))


                                                                                                                                                                                                                                                                                                                                                                                       