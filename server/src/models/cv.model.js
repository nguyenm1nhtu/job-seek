'use strict';

const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    class Cv extends Model {
        static associate(models) {
            Cv.belongsTo(models.Candidate, { foreignKey: 'candidate_id', onDelete: 'CASCADE' });
            Cv.hasOne(models.Application, { foreignKey: 'cv_id', onDelete: 'SET NULL' });
        }
    }

    Cv.init(
        {
            cv_id: {
                type: DataTypes.BIGINT,
                primaryKey: true,
                autoIncrement: true,
            },
            candidate_id: {
                type: DataTypes.BIGINT,
                allowNull: false,
            },
            file_name: {
                type: DataTypes.TEXT,
            },
            file_path: {
                type: DataTypes.TEXT,
            },
            file_type: {
                type: DataTypes.ENUM('doc', 'docx', 'pdf'),
            },
            status: {
                type: DataTypes.ENUM('active', 'archived'),
                defaultValue: 'active',
            },
        },
        {
            sequelize,
            modelName: 'Cv',
            tableName: 'cv',
            timestamps: true,
            createdAt: 'created_at',
            updatedAt: 'updated_at',
        },
    );

    return Cv;
};
