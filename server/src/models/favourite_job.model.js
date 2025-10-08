'use strict';

const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    class FavouriteJob extends Model {
        static associate(models) {
            FavouriteJob.belongsTo(models.Candidate, { foreignKey: 'candidate_id', onDelete: 'CASCADE' });
            FavouriteJob.belongsTo(models.Job, { foreignKey: 'job_id', onDelete: 'CASCADE' });
        }
    }

    FavouriteJob.init(
        {
            favourite_id: {
                type: DataTypes.BIGINT,
                primaryKey: true,
                autoIncrement: true,
            },
            candidate_id: {
                type: DataTypes.BIGINT,
                allowNull: false,
            },
            job_id: {
                type: DataTypes.BIGINT,
                allowNull: false,
            },
        },
        {
            sequelize,
            modelName: 'FavouriteJob',
            tableName: 'favourite_job',
            timestamps: true,
            createdAt: 'created_at',
            updatedAt: 'updated_at',
        },
    );

    return FavouriteJob;
};
