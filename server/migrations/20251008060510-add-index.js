'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.addIndex('users', ['email']);
        await queryInterface.addIndex('users', ['user_id']);
        await queryInterface.addIndex('candidate', ['user_id']);
        await queryInterface.addIndex('recruiter', ['user_id']);
        await queryInterface.addIndex('recruiter', ['company_id']);
        await queryInterface.addIndex('company', ['location_id']);
        await queryInterface.addIndex('job', ['recruiter_id']);
        await queryInterface.addIndex('job', ['company_id']);
        await queryInterface.addIndex('job', ['category_id']);
        await queryInterface.addIndex('job', ['status']);
        await queryInterface.addIndex('application', ['job_id']);
        await queryInterface.addIndex('application', ['candidate_id']);
        await queryInterface.addIndex('application', ['status']);
        await queryInterface.addIndex('schedule', ['application_id']);
        await queryInterface.addIndex('schedule', ['recruiter_id']);
        await queryInterface.addIndex('schedule', ['candidate_id']);
        await queryInterface.addIndex('schedule', ['interview_time']);
        await queryInterface.addIndex('notification', ['user_id']);
        await queryInterface.addIndex('favourite_job', ['candidate_id']);
        await queryInterface.addIndex('favourite_job', ['job_id']);
        await queryInterface.addIndex('location', ['province_code']);
        await queryInterface.addIndex('location', ['ward_code']);
        await queryInterface.addIndex('provinces', ['code']);
        await queryInterface.addIndex('wards', ['code']);
        await queryInterface.addIndex('wards', ['province_code']);
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.removeIndex('users', ['email']);
        await queryInterface.removeIndex('users', ['user_id']);
        await queryInterface.removeIndex('candidate', ['user_id']);
        await queryInterface.removeIndex('recruiter', ['user_id']);
        await queryInterface.removeIndex('recruiter', ['company_id']);
        await queryInterface.removeIndex('company', ['location_id']);
        await queryInterface.removeIndex('job', ['recruiter_id']);
        await queryInterface.removeIndex('job', ['company_id']);
        await queryInterface.removeIndex('job', ['category_id']);
        await queryInterface.removeIndex('job', ['status']);
        await queryInterface.removeIndex('application', ['job_id']);
        await queryInterface.removeIndex('application', ['candidate_id']);
        await queryInterface.removeIndex('application', ['status']);
        await queryInterface.removeIndex('schedule', ['application_id']);
        await queryInterface.removeIndex('schedule', ['recruiter_id']);
        await queryInterface.removeIndex('schedule', ['candidate_id']);
        await queryInterface.removeIndex('schedule', ['interview_time']);
        await queryInterface.removeIndex('notification', ['user_id']);
        await queryInterface.removeIndex('favourite_job', ['candidate_id']);
        await queryInterface.removeIndex('favourite_job', ['job_id']);
        await queryInterface.removeIndex('location', ['province_code']);
        await queryInterface.removeIndex('location', ['ward_code']);
        await queryInterface.removeIndex('provinces', ['code']);
        await queryInterface.removeIndex('wards', ['code']);
        await queryInterface.removeIndex('wards', ['province_code']);
    },
};
