const db = require('../../../database/models');


module.exports={
    list: async (req,res) => {
        try {
		const data = await db.User.findAll({
			attributes: ['id', 'first_name','last_name', 'email'],
		});

		const count = data.length;

		const usersArray = data.map(user => ({
			id: user.id,
			first_name: user.first_name,
            last_name: user.last_name,
			email: user.email,
			detail: `http://localhost:8000/api/users/${user.id}`,
		}));

		res.json({
			count,
			users: usersArray,
		});
	} catch (error) {
		console.error(error);
		res.status(500).json({
			error: 'Error al obtener la lista de usuarios.',
		});
	} 
       
    },

    show: async (req,res) =>{
        try {

		const data = await db.User.findByPk(req.params.id , {
			attributes: { exclude: ['passwordHash'] }, 	
		});

		if (!data) {
			return res.status(404).json({ error: 'Usuario no encontrado.' });
		}

		const userData = {
			id: data.id,
			first_name: data.first_name,
            last_name: data.last_name,
            gender: data.gender,
			email: data.email,
			image: data.avatar,
		};

		res.json(userData);
	} catch (error) {
		console.error(error);
		res.status(500).json({
			error: 'Error al obtener información del usuario.',
		});
	} 

    }
}