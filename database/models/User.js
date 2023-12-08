module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define("User", {
        id: {
            type: DataTypes.BIGINT,
            primaryKey: true,
            autoIncrement: true,
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
    },
        {
            tableName: "user",
            timestamps: false,
        }
    )
    return User;
}