module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define("User", {
        id: {
            type: DataTypes.BIGINT,
            primaryKey: true,
            autoIncrement: true,
        },
        cartId: {
            type: DataTypes.BIGINT,
            allowNull: true,
            references: {
                model: 'Cart',  // Nombre de la tabla a la que hace referencia
                key: 'id',      // Nombre de la columna a la que hace referencia
            },
        },
        first_name: {
            type: DataTypes.STRING,
        },
        avatar: {
            type: DataTypes.STRING,
        },
        last_name: {
            type: DataTypes.STRING,
        },
        gender: {
            type: DataTypes.STRING,
        },
        mobile: {
            type: DataTypes.STRING,
        },
        email: {
            type: DataTypes.STRING,
        },
        passwordHash: {
            type: DataTypes.STRING,
        },
        admin: {
            type: DataTypes.BOOLEAN,
        },
        registeredAt: {
            type: DataTypes.DATE,
            defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
        }
    }, {
        tableName: "user",
        timestamps: false,
    });

    // Relación con la tabla Cart
    User.hasOne(sequelize.models.Cart, { foreignKey: 'cartId' });

    return User;
};
