'use strict';

const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    class Candidate extends Model {
        static associate(models) {
            Candidate.belongsTo(models.Users, { foreignKey: 'user_id', onDelete: 'CASCADE' });
            Candidate.hasMany(models.FavouriteJob, { foreignKey: 'candidate_id', onDelete: 'CASCADE' });
            Candidate.hasMany(models.Cv, { foreignKey: 'candidate_id', onDelete: 'CASCADE' });
            Candidate.hasMany(models.Application, { foreignKey: 'candidate_id', onDelete: 'CASCADE' });
            Candidate.belongsTo(models.Location, { foreignKey: 'location_id', onDelete: 'CASCADE' });
        }
    }

    Candidate.init(
        {
            candiate_id: {
                type: DataTypes.BIGINT,
                primaryKey: true,
                autoIncrement: true,
            },

            user_id: {
                type: DataTypes.BIGINT,
                allowNull: false,
                unique: true,
            },

            phone: {
                type: DataTypes.STRING(20),
            },

            location_id: {
                type: DataTypes.BIGINT,
            },
        },
        {
            sequelize,
            modelName: 'Candidate',
            tableName: 'candidates',
            timestamps: true,
            createdAt: 'created_at',
            updatedAt: 'updated_at',
        },
    );

    return Candidate;
};
