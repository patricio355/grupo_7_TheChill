const db = require('../../../database/models');


module.exports={
    list: async (req,res) => {
        const data = await db.User.findAll();
        
        res.json({
            code: 200,
            total: data.length,
            users: data
        });
       
    },

    show: async (req,res) =>{
        const data = await db.User.findByPk(req.params.id);   
        res.json({
            code: 200,
            user: data
        });
    }
}