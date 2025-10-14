'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert('users', [
            { full_name: 'Nguyen Van A', email: 'a@gmail.com', password: 'Password123', role: 'candidate' },
            { full_name: 'Tran Van B', email: 'b@gmail.com', password: 'Password123', role: 'candidate' },
            { full_name: 'Nguyen Thi C', email: 'c@gmail.com', password: 'Password123', role: 'candidate' },
            { full_name: 'Pham Van D', email: 'd@gmail.com', password: 'Password123', role: 'recruiter' },
            { full_name: 'Doan Trung H', email: 'h@gmail.com', password: 'Password123', role: 'recruiter' },
        ]);

        await queryInterface.bulkInsert('candidate', [
            { user_id: 1, phone: '0123456789' },
            { user_id: 2, phone: '0987654321' },
            { user_id: 3, phone: '0912345678' },
        ]);

        await queryInterface.bulkInsert('location', [
            { province_code: '01', ward_code: '00004', address: 'Đường Lý Thường Kiệt' },
            { province_code: '79', ward_code: '27655', address: 'Đường Dương Cát Lợi' },
        ]);

        await queryInterface.bulkInsert('company', [
            {
                company_name: 'Công Ty TNHH MTV An Phát Cường Thịnh',
                logo_path:
                    'https://cdn1.vieclam24h.vn/images/employer_avatar/2025/10/07/screenshot-2024-04-15-102723_171315165260_175983074234.w-128.h-128.png?v=220513',
                company_description:
                    'Công Ty TNHH MTV An Phát Cường Thịnh (Dai ichi life Việt Nam) trực thuộc Dai-ichi Life Holdings Inc. được thành lập vào tháng 1 / 2007, và đây là thị trường nước ngoài đầu tiên mà Tập đoàn Dai-ichi Life có công ty BHNT sở hữu 100% vốn. Chỉ sau hơn 10 năm hoạt động, Dai-ichi Life Việt Nam giữ vững vị thế là một trong 4 công ty bảo hiểm nhân thọ hàng đầu tại Việt Nam về tổng doanh thu phí bảo hiểm, phục vụ hơn 1,7 triệu khách hàng thông qua đội ngũ hơn 1.000 nhân viên và 66.000 tư vấn tài chính chuyên nghiệp. Ngày 26 / 9 / 2017, Dai ichi Life Việt Nam đã được Bộ Tài chính cấp Giấy phép chấp thuận đợt tăng vốn thứ tư lên thành 156 triệu đô la Mỹ, trở thành một trong những công ty bảo hiểm nhân thọ có mức vốn hoá lớn nhất thị trường, minh chứng tiềm lực tài chính vững mạnh cũng như cam kết “Gắn bó dài lâu” với khách hàng Việt Nam.',
                website: 'https://daichilife.com.vn/',
                location_id: 1,
            },
            {
                company_name: 'Công Ty TNHH Phát Triển Công Nghệ Trường Thịnh Group',
                logo_path:
                    'https://cdn1.vieclam24h.vn/images/default/2021/03/22/images/img_vieclam24h_vn_161638685181.w-128.h-128.png?v=220513',
                company_description:
                    'Công ty hoạt động trong lĩnh vực thiết kế website, cung cấp,cài đặt, bảo trì, sửa chữa máy tính pc& Laptop, nạp mực, sửa chữa máy in, lắp đặt triển khai hệ thống camera, báo trộm... Các nghành liên quan đến lĩnh vực tin học',
                website: 'https://truongthinh.info/',
                location_id: 2,
            },
        ]);

        await queryInterface.bulkInsert('recruiter', [
            { user_id: 4, company_id: 1 },
            { user_id: 5, company_id: 2 },
        ]);
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete('company', null, {});
        await queryInterface.bulkDelete('recruiter', null, {});
        await queryInterface.bulkDelete('candidate', null, {});
        await queryInterface.bulkDelete('users', null, {});
    },
};
