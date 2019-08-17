const dao = require("../dbo/dao");


module.exports = {
    
    index: async (req,res,next) =>{
        //sql = "insert into gg(gg) values('sjs');";
        dao.query("select * from historial", (err, rows, fields) => {
            if(!err){
                res.json(rows);
            }else{
                console.log(err);
            }
        });
    },
    insert: async (req, res, next) =>{
        console.log(req.body.mensaje);
        dao.query("insert into historial(mensaje) values('"+req.body.mensaje+"')", (err, rows, fields) => {
            if(!err){
                res.json({Status: "Se ingreso correctamente el Mensaje"});
            }else{
                console.log(err);
            }
        });
    },
    getPrimerMensaje: async (req, res, next) => {
        dao.query("select mensaje from msjs order by msjs.id asc limit 1", (err,rows,fields) => {
            if(!err){
                res.json(rows);
                dao.query("select id from msjs order by msjs.id asc limit 1", (err,rows1,fields) => {
                    if(!err){
                        if(JSON.parse(JSON.stringify(rows1)).length >0){
                            dao.query("delete from msjs where id = "+JSON.parse(JSON.stringify(rows1))[0].id, (err,rows2,fields) => {
                                if(!err){
                                    
                                }else{
                                    console.log(err);
                                }
                            });
                        }
                    }else{
                        console.log(err);
                    }
                });
            }else{
                console.log(err);
            }
        });
    }
};