function guestMiddleware (req,res,next){
    if (!req.session.userLogged){
    }else{
        return res.redirect('/');
    }
    next()
}

module.exports = guestMiddleware;