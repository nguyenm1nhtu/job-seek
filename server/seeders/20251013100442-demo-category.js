'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert('category', [
            { name: 'Công nghệ thông tin' },
            { name: 'Kinh doanh' },
            { name: 'Tiếp thị' },
            { name: 'Tài chính' },
            { name: 'Nhân sự' },
            { name: 'Sản xuất' },
            { name: 'Y tế' },
            { name: 'Giáo dục' },
            { name: 'Dịch vụ khách hàng' },
            { name: 'Logistics' },
            { name: 'Bảo vệ an ninh' },
        ]);
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete('category', null, {});
    },
};
