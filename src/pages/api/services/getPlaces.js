export default function(req,res){
    if(req.method=="GET"){
        res.status(200).json({
            status:"hola desde get"
        });
    }else{
        res.status(200).json({
            status:`hola desde ${req.method}`
        });
    }
}