function typeUserMiddleware (req,res,next){
    if (req.session.userLogged){
        console.log(req.session.userLogged.admin)
        if(!req.session.userLogged.admin){
            return res.redirect("/");
    } 
    } else{
        return res.redirect("/");
    }
   next();
   
}

module.exports = typeUserMiddleware;