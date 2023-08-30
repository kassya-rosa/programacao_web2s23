const calc = require('./util/calculadora');
const express = require('express');
const app = express();

app.get("/hello", function(req,res){
    res.send("Olá");
});

app.get("/somar/:a/:b", function(req,res){ // o : faz a web enxergar o que o usuário está digitando na requisição
    let a = req.params.a;
    let b = req.params.b;
    res.send(`${a} + ${b} = ${calc.somar(a,b)}`);
});


const port = 8080; // para poder rodar na web o express que foi baixado e a porta

app.listen(port,function(){
    console.log("app rodando na porta " +port);
});

//console.log(calc.somar(1,2));
