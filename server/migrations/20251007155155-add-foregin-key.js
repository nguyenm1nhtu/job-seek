module.exports = {
    up: async (queryInterface, Sequelize) => {
        // favourite_job.candidate_id > candidate.candidate_id [delete: cascade]
        await queryInterface.sequelize.query(`
      DO $$ BEGIN
        IF NOT EXISTS (SELECT 1 FROM pg_constraint WHERE conname = 'favourite_job_candidate_id_fkey') THEN
          ALTER TABLE "favourite_job" ADD CONSTRAINT "favourite_job_candidate_id_fkey"
          FOREIGN KEY ("candidate_id") REFERENCES "candidate" ("candidate_id") ON DELETE CASCADE;
        END IF;
      END $$;
    `);

        // favourite_job.job_id > job.job_id [delete: cascade]
        await queryInterface.sequelize.query(`
      DO $$ BEGIN
        IF NOT EXISTS (SELECT 1 FROM pg_constraint WHERE conname = 'favourite_job_job_id_fkey') THEN
          ALTER TABLE "favourite_job" ADD CONSTRAINT "favourite_job_job_id_fkey"
          FOREIGN KEY ("job_id") REFERENCES "job" ("job_id") ON DELETE CASCADE;
        END IF;
      END $$;
    `);

        // job.category_id > category.category_id
        await queryInterface.sequelize.query(`
      DO $$ BEGIN
        IF NOT EXISTS (SELECT 1 FROM pg_constraint WHERE conname = 'job_category_id_fkey') THEN
          ALTER TABLE "job" ADD CONSTRAINT "job_category_id_fkey"
          FOREIGN KEY ("category_id") REFERENCES "category" ("category_id");
        END IF;
      END $$;
    `);

        // notification.user_id > users.user_id [delete: cascade]
        await queryInterface.sequelize.query(`
      DO $$ BEGIN
        IF NOT EXISTS (SELECT 1 FROM pg_constraint WHERE conname = 'notification_user_id_fkey') THEN
          ALTER TABLE "notification" ADD CONSTRAINT "notification_user_id_fkey"
          FOREIGN KEY ("user_id") REFERENCES "users" ("user_id") ON DELETE CASCADE;
        END IF;
      END $$;
    `);

        // schedule.application_id > application.application_id [delete: cascade]
        await queryInterface.sequelize.query(`
      DO $$ BEGIN
        IF NOT EXISTS (SELECT 1 FROM pg_constraint WHERE conname = 'schedule_application_id_fkey') THEN
          ALTER TABLE "schedule" ADD CONSTRAINT "schedule_application_id_fkey"
          FOREIGN KEY ("application_id") REFERENCES "application" ("application_id") ON DELETE CASCADE;
        END IF;
      END $$;
    `);

        // schedule.recruiter_id > recruiter.recruiter_id [delete: restrict]
        await queryInterface.sequelize.query(`
      DO $$ BEGIN
        IF NOT EXISTS (SELECT 1 FROM pg_constraint WHERE conname = 'schedule_recruiter_id_fkey') THEN
          ALTER TABLE "schedule" ADD CONSTRAINT "schedule_recruiter_id_fkey"
          FOREIGN KEY ("recruiter_id") REFERENCES "recruiter" ("recruiter_id") ON DELETE RESTRICT;
        END IF;
      END $$;
    `);

        // schedule.candidate_id > candidate.candidate_id [delete: restrict]
        await queryInterface.sequelize.query(`
      DO $$ BEGIN
        IF NOT EXISTS (SELECT 1 FROM pg_constraint WHERE conname = 'schedule_candidate_id_fkey') THEN
          ALTER TABLE "schedule" ADD CONSTRAINT "schedule_candidate_id_fkey"
          FOREIGN KEY ("candidate_id") REFERENCES "candidate" ("candidate_id") ON DELETE RESTRICT;
        END IF;
      END $$;
    `);

        // schedule.location_id > location.location_id [delete: set null]
        await queryInterface.sequelize.query(`
      DO $$ BEGIN
        IF NOT EXISTS (SELECT 1 FROM pg_constraint WHERE conname = 'schedule_location_id_fkey') THEN
          ALTER TABLE "schedule" ADD CONSTRAINT "schedule_location_id_fkey"
          FOREIGN KEY ("location_id") REFERENCES "location" ("location_id") ON DELETE SET NULL;
        END IF;
      END $$;
    `);

        // application.cv_id > cv.cv_id [delete: set null]
        await queryInterface.sequelize.query(`
      DO $$ BEGIN
        IF NOT EXISTS (SELECT 1 FROM pg_constraint WHERE conname = 'application_cv_id_fkey') THEN
          ALTER TABLE "application" ADD CONSTRAINT "application_cv_id_fkey"
          FOREIGN KEY ("cv_id") REFERENCES "cv" ("cv_id") ON DELETE SET NULL;
        END IF;
      END $$;
    `);

        // application.job_id > job.job_id [delete: cascade]
        await queryInterface.sequelize.query(`
      DO $$ BEGIN
        IF NOT EXISTS (SELECT 1 FROM pg_constraint WHERE conname = 'application_job_id_fkey') THEN
          ALTER TABLE "application" ADD CONSTRAINT "application_job_id_fkey"
          FOREIGN KEY ("job_id") REFERENCES "job" ("job_id") ON DELETE CASCADE;
        END IF;
      END $$;
    `);

        // application.candidate_id > candidate.candidate_id [delete: cascade]
        await queryInterface.sequelize.query(`
      DO $$ BEGIN
        IF NOT EXISTS (SELECT 1 FROM pg_constraint WHERE conname = 'application_candidate_id_fkey') THEN
          ALTER TABLE "application" ADD CONSTRAINT "application_candidate_id_fkey"
          FOREIGN KEY ("candidate_id") REFERENCES "candidate" ("candidate_id") ON DELETE CASCADE;
        END IF;
      END $$;
    `);

        // otp.user_id > users.user_id [delete: cascade]
        await queryInterface.sequelize.query(`
      DO $$ BEGIN
        IF NOT EXISTS (SELECT 1 FROM pg_constraint WHERE conname = 'otp_user_id_fkey') THEN
          ALTER TABLE "otp" ADD CONSTRAINT "otp_user_id_fkey"
          FOREIGN KEY ("user_id") REFERENCES "users" ("user_id") ON DELETE CASCADE;
        END IF;
      END $$;
    `);

        // recruiter.user_id > users.user_id [delete: cascade]
        await queryInterface.sequelize.query(`
      DO $$ BEGIN
        IF NOT EXISTS (SELECT 1 FROM pg_constraint WHERE conname = 'recruiter_user_id_fkey') THEN
          ALTER TABLE "recruiter" ADD CONSTRAINT "recruiter_user_id_fkey"
          FOREIGN KEY ("user_id") REFERENCES "users" ("user_id") ON DELETE CASCADE;
        END IF;
      END $$;
    `);

        // recruiter.company_id > company.company_id [delete: restrict]
        await queryInterface.sequelize.query(`
      DO $$ BEGIN
        IF NOT EXISTS (SELECT 1 FROM pg_constraint WHERE conname = 'recruiter_company_id_fkey') THEN
          ALTER TABLE "recruiter" ADD CONSTRAINT "recruiter_company_id_fkey"
          FOREIGN KEY ("company_id") REFERENCES "company" ("company_id") ON DELETE RESTRICT;
        END IF;
      END $$;
    `);

        // candidate.user_id > users.user_id [delete: cascade]
        await queryInterface.sequelize.query(`
      DO $$ BEGIN
        IF NOT EXISTS (SELECT 1 FROM pg_constraint WHERE conname = 'candidate_user_id_fkey') THEN
          ALTER TABLE "candidate" ADD CONSTRAINT "candidate_user_id_fkey"
          FOREIGN KEY ("user_id") REFERENCES "users" ("user_id") ON DELETE CASCADE;
        END IF;
      END $$;
    `);

        // job.recruiter_id > recruiter.recruiter_id [delete: restrict]
        await queryInterface.sequelize.query(`
      DO $$ BEGIN
        IF NOT EXISTS (SELECT 1 FROM pg_constraint WHERE conname = 'job_recruiter_id_fkey') THEN
          ALTER TABLE "job" ADD CONSTRAINT "job_recruiter_id_fkey"
          FOREIGN KEY ("recruiter_id") REFERENCES "recruiter" ("recruiter_id") ON DELETE RESTRICT;
        END IF;
      END $$;
    `);

        // job.company_id > company.company_id [delete: restrict]
        await queryInterface.sequelize.query(`
      DO $$ BEGIN
        IF NOT EXISTS (SELECT 1 FROM pg_constraint WHERE conname = 'job_company_id_fkey') THEN
          ALTER TABLE "job" ADD CONSTRAINT "job_company_id_fkey"
          FOREIGN KEY ("company_id") REFERENCES "company" ("company_id") ON DELETE RESTRICT;
        END IF;
      END $$;
    `);

        // cv.candidate_id > candidate.candidate_id [delete: cascade]
        await queryInterface.sequelize.query(`
      DO $$ BEGIN
        IF NOT EXISTS (SELECT 1 FROM pg_constraint WHERE conname = 'cv_candidate_id_fkey') THEN
          ALTER TABLE "cv" ADD CONSTRAINT "cv_candidate_id_fkey"
          FOREIGN KEY ("candidate_id") REFERENCES "candidate" ("candidate_id") ON DELETE CASCADE;
        END IF;
      END $$;
    `);

        // wards.province_code > provinces.code [delete: cascade]
        await queryInterface.sequelize.query(`
      DO $$ BEGIN
        IF NOT EXISTS (SELECT 1 FROM pg_constraint WHERE conname = 'wards_province_code_fkey') THEN
          ALTER TABLE "wards" ADD CONSTRAINT "wards_province_code_fkey"
          FOREIGN KEY ("province_code") REFERENCES "provinces" ("code") ON DELETE CASCADE;
        END IF;
      END $$;
    `);

        // location.province_code > provinces.code [delete: set null]
        await queryInterface.sequelize.query(`
      DO $$ BEGIN
        IF NOT EXISTS (SELECT 1 FROM pg_constraint WHERE conname = 'location_province_code_fkey') THEN
          ALTER TABLE "location" ADD CONSTRAINT "location_province_code_fkey"
          FOREIGN KEY ("province_code") REFERENCES "provinces" ("code") ON DELETE SET NULL;
        END IF;
      END $$;
    `);

        // location.ward_code > wards.code [delete: set null]
        await queryInterface.sequelize.query(`
      DO $$ BEGIN
        IF NOT EXISTS (SELECT 1 FROM pg_constraint WHERE conname = 'location_ward_code_fkey') THEN
          ALTER TABLE "location" ADD CONSTRAINT "location_ward_code_fkey"
          FOREIGN KEY ("ward_code") REFERENCES "wards" ("code") ON DELETE SET NULL;
        END IF;
      END $$;
    `);

        // candidate.location_id > location.location_id [delete: cascade]
        await queryInterface.sequelize.query(`
      DO $$ BEGIN
        IF NOT EXISTS (SELECT 1 FROM pg_constraint WHERE conname = 'candidate_location_id_fkey') THEN
          ALTER TABLE "candidate" ADD CONSTRAINT "candidate_location_id_fkey"
          FOREIGN KEY ("location_id") REFERENCES "location" ("location_id") ON DELETE CASCADE;
        END IF;
      END $$;
    `);

        // company.location_id > location.location_id [delete: cascade]
        await queryInterface.sequelize.query(`
      DO $$ BEGIN
        IF NOT EXISTS (SELECT 1 FROM pg_constraint WHERE conname = 'company_location_id_fkey') THEN
          ALTER TABLE "company" ADD CONSTRAINT "company_location_id_fkey"
          FOREIGN KEY ("location_id") REFERENCES "location" ("location_id") ON DELETE CASCADE;
        END IF;
      END $$;
    `);
    },
    down: async (queryInterface) => {
        await queryInterface.removeConstraint('favourite_job', 'favourite_job_candidate_id_fkey');
        await queryInterface.removeConstraint('favourite_job', 'favourite_job_job_id_fkey');
        await queryInterface.removeConstraint('job', 'job_category_id_fkey');
        await queryInterface.removeConstraint('notification', 'notification_user_id_fkey');
        await queryInterface.removeConstraint('schedule', 'schedule_application_id_fkey');
        await queryInterface.removeConstraint('schedule', 'schedule_recruiter_id_fkey');
        await queryInterface.removeConstraint('schedule', 'schedule_candidate_id_fkey');
        await queryInterface.removeConstraint('schedule', 'schedule_location_id_fkey');
        await queryInterface.removeConstraint('application', 'application_cv_id_fkey');
        await queryInterface.removeConstraint('application', 'application_job_id_fkey');
        await queryInterface.removeConstraint('application', 'application_candidate_id_fkey');
        await queryInterface.removeConstraint('otp', 'otp_user_id_fkey');
        await queryInterface.removeConstraint('recruiter', 'recruiter_user_id_fkey');
        await queryInterface.removeConstraint('recruiter', 'recruiter_company_id_fkey');
        await queryInterface.removeConstraint('candidate', 'candidate_user_id_fkey');
        await queryInterface.removeConstraint('job', 'job_recruiter_id_fkey');
        await queryInterface.removeConstraint('job', 'job_company_id_fkey');
        await queryInterface.removeConstraint('cv', 'cv_candidate_id_fkey');
        await queryInterface.removeConstraint('wards', 'wards_province_code_fkey');
        await queryInterface.removeConstraint('location', 'location_province_code_fkey');
        await queryInterface.removeConstraint('location', 'location_ward_code_fkey');
        await queryInterface.removeConstraint('candidate', 'candidate_location_id_fkey');
        await queryInterface.removeConstraint('company', 'company_location_id_fkey');
    },
};
