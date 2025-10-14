'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        // Xóa dữ liệu cũ
        await queryInterface.bulkDelete('job', null, {});

        // Hàm tính type dựa trên deadline
        const calculateJobType = (deadline) => {
            const now = new Date();
            const diffDays = Math.ceil((new Date(deadline) - now) / (1000 * 60 * 60 * 24));
            if (diffDays <= 7) return 'urgent';
            if (diffDays <= 30) return 'immediately';
            return 'other';
        };

        // Insert nhiều công việc
        await queryInterface.bulkInsert(
            'job',
            [
                {
                    recruiter_id: 1,
                    company_id: 1,
                    type: calculateJobType(new Date('2025-10-20')), // < 7 ngày -> urgent
                    title: 'Nhân Viên Phát Triển Phần Mềm',
                    description:
                        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed tellus et dolor ultrices accumsan. Pellentesque et sem suscipit, rhoncus dolor vel, consequat nibh. Aliquam in eleifend turpis, eu finibus justo. Vivamus sit amet faucibus elit. Proin aliquet id nisl id ultrices. Curabitur vel lorem hendrerit, tempus lectus eu, aliquet metus. Aliquam erat volutpat. In porta ante sed sem finibus pretium. Sed rutrum euismod elementum. Vivamus odio lectus, ornare non viverra in, consectetur quis nisl. Curabitur vel risus commodo, suscipit augue nec, bibendum urna. Sed a tristique justo. In hac habitasse platea dictumst. Aliquam suscipit libero ex, eget porta risus dictum ut. Pellentesque a leo justo. Donec justo sem, facilisis eget velit a, mollis placerat nisl. Mauris odio turpis, elementum in tristique id, fermentum non eros. Cras luctus est quis ante commodo finibus. Sed ac mi a nisi congue varius. Etiam viverra a elit a sodales.',
                    requirement:
                        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed tellus et dolor ultrices accumsan. Pellentesque et sem suscipit, rhoncus dolor vel, consequat nibh. Aliquam in eleifend turpis, eu finibus justo. Vivamus sit amet faucibus elit. Proin aliquet id nisl id ultrices. Curabitur vel lorem hendrerit, tempus lectus eu, aliquet metus. Aliquam erat volutpat. In porta ante sed sem finibus pretium. Sed rutrum euismod elementum. Vivamus odio lectus, ornare non viverra in, consectetur quis nisl. Curabitur vel risus commodo, suscipit augue nec, bibendum urna. Sed a tristique justo. In hac habitasse platea dictumst. Aliquam suscipit libero ex, eget porta risus dictum ut. Pellentesque a leo justo. Donec justo sem, facilisis eget velit a, mollis placerat nisl. Mauris odio turpis, elementum in tristique id, fermentum non eros. Cras luctus est quis ante commodo finibus. Sed ac mi a nisi congue varius. Etiam viverra a elit a sodales.',
                    benefit:
                        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed tellus et dolor ultrices accumsan. Pellentesque et sem suscipit, rhoncus dolor vel, consequat nibh. Aliquam in eleifend turpis, eu finibus justo. Vivamus sit amet faucibus elit. Proin aliquet id nisl id ultrices. Curabitur vel lorem hendrerit, tempus lectus eu, aliquet metus. Aliquam erat volutpat. In porta ante sed sem finibus pretium. Sed rutrum euismod elementum. Vivamus odio lectus, ornare non viverra in, consectetur quis nisl. Curabitur vel risus commodo, suscipit augue nec, bibendum urna. Sed a tristique justo. In hac habitasse platea dictumst. Aliquam suscipit libero ex, eget porta risus dictum ut. Pellentesque a leo justo. Donec justo sem, facilisis eget velit a, mollis placerat nisl. Mauris odio turpis, elementum in tristique id, fermentum non eros. Cras luctus est quis ante commodo finibus. Sed ac mi a nisi congue varius. Etiam viverra a elit a sodales.',
                    min_salary: 10000000,
                    max_salary: 18000000,
                    min_experience: 1,
                    max_experience: 3,
                    status: 'open',
                    category_id: 1, // IT
                    required_cv: true,
                    deadline: new Date('2025-10-20'),
                    limited: 5,
                    created_at: new Date(),
                    updated_at: new Date(),
                },
                {
                    recruiter_id: 1,
                    company_id: 1,
                    type: calculateJobType(new Date('2025-11-15')), // 7-30 ngày -> immediately
                    title: 'Chuyên Viên Kiểm Toán Tài Chính',
                    description:
                        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed tellus et dolor ultrices accumsan. Pellentesque et sem suscipit, rhoncus dolor vel, consequat nibh. Aliquam in eleifend turpis, eu finibus justo. Vivamus sit amet faucibus elit. Proin aliquet id nisl id ultrices. Curabitur vel lorem hendrerit, tempus lectus eu, aliquet metus. Aliquam erat volutpat. In porta ante sed sem finibus pretium. Sed rutrum euismod elementum. Vivamus odio lectus, ornare non viverra in, consectetur quis nisl. Curabitur vel risus commodo, suscipit augue nec, bibendum urna. Sed a tristique justo. In hac habitasse platea dictumst. Aliquam suscipit libero ex, eget porta risus dictum ut. Pellentesque a leo justo. Donec justo sem, facilisis eget velit a, mollis placerat nisl. Mauris odio turpis, elementum in tristique id, fermentum non eros. Cras luctus est quis ante commodo finibus. Sed ac mi a nisi congue varius. Etiam viverra a elit a sodales.',
                    requirement:
                        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed tellus et dolor ultrices accumsan. Pellentesque et sem suscipit, rhoncus dolor vel, consequat nibh. Aliquam in eleifend turpis, eu finibus justo. Vivamus sit amet faucibus elit. Proin aliquet id nisl id ultrices. Curabitur vel lorem hendrerit, tempus lectus eu, aliquet metus. Aliquam erat volutpat. In porta ante sed sem finibus pretium. Sed rutrum euismod elementum. Vivamus odio lectus, ornare non viverra in, consectetur quis nisl. Curabitur vel risus commodo, suscipit augue nec, bibendum urna. Sed a tristique justo. In hac habitasse platea dictumst. Aliquam suscipit libero ex, eget porta risus dictum ut. Pellentesque a leo justo. Donec justo sem, facilisis eget velit a, mollis placerat nisl. Mauris odio turpis, elementum in tristique id, fermentum non eros. Cras luctus est quis ante commodo finibus. Sed ac mi a nisi congue varius. Etiam viverra a elit a sodales.',
                    benefit:
                        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed tellus et dolor ultrices accumsan. Pellentesque et sem suscipit, rhoncus dolor vel, consequat nibh. Aliquam in eleifend turpis, eu finibus justo. Vivamus sit amet faucibus elit. Proin aliquet id nisl id ultrices. Curabitur vel lorem hendrerit, tempus lectus eu, aliquet metus. Aliquam erat volutpat. In porta ante sed sem finibus pretium. Sed rutrum euismod elementum. Vivamus odio lectus, ornare non viverra in, consectetur quis nisl. Curabitur vel risus commodo, suscipit augue nec, bibendum urna. Sed a tristique justo. In hac habitasse platea dictumst. Aliquam suscipit libero ex, eget porta risus dictum ut. Pellentesque a leo justo. Donec justo sem, facilisis eget velit a, mollis placerat nisl. Mauris odio turpis, elementum in tristique id, fermentum non eros. Cras luctus est quis ante commodo finibus. Sed ac mi a nisi congue varius. Etiam viverra a elit a sodales.',
                    min_salary: 15000000,
                    max_salary: 25000000,
                    min_experience: 2,
                    max_experience: 4,
                    status: 'open',
                    category_id: 3, // Finance
                    required_cv: true,
                    deadline: new Date('2025-11-15'),
                    limited: 3,
                    created_at: new Date(),
                    updated_at: new Date(),
                },
                {
                    recruiter_id: 2,
                    company_id: 2,
                    type: calculateJobType(new Date('2026-01-15')), // > 30 ngày -> other
                    title: 'Nhân Viên Quảng Cáo Trực Tuyến',
                    description:
                        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed tellus et dolor ultrices accumsan. Pellentesque et sem suscipit, rhoncus dolor vel, consequat nibh. Aliquam in eleifend turpis, eu finibus justo. Vivamus sit amet faucibus elit. Proin aliquet id nisl id ultrices. Curabitur vel lorem hendrerit, tempus lectus eu, aliquet metus. Aliquam erat volutpat. In porta ante sed sem finibus pretium. Sed rutrum euismod elementum. Vivamus odio lectus, ornare non viverra in, consectetur quis nisl. Curabitur vel risus commodo, suscipit augue nec, bibendum urna. Sed a tristique justo. In hac habitasse platea dictumst. Aliquam suscipit libero ex, eget porta risus dictum ut. Pellentesque a leo justo. Donec justo sem, facilisis eget velit a, mollis placerat nisl. Mauris odio turpis, elementum in tristique id, fermentum non eros. Cras luctus est quis ante commodo finibus. Sed ac mi a nisi congue varius. Etiam viverra a elit a sodales.',
                    requirement:
                        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed tellus et dolor ultrices accumsan. Pellentesque et sem suscipit, rhoncus dolor vel, consequat nibh. Aliquam in eleifend turpis, eu finibus justo. Vivamus sit amet faucibus elit. Proin aliquet id nisl id ultrices. Curabitur vel lorem hendrerit, tempus lectus eu, aliquet metus. Aliquam erat volutpat. In porta ante sed sem finibus pretium. Sed rutrum euismod elementum. Vivamus odio lectus, ornare non viverra in, consectetur quis nisl. Curabitur vel risus commodo, suscipit augue nec, bibendum urna. Sed a tristique justo. In hac habitasse platea dictumst. Aliquam suscipit libero ex, eget porta risus dictum ut. Pellentesque a leo justo. Donec justo sem, facilisis eget velit a, mollis placerat nisl. Mauris odio turpis, elementum in tristique id, fermentum non eros. Cras luctus est quis ante commodo finibus. Sed ac mi a nisi congue varius. Etiam viverra a elit a sodales.',
                    benefit:
                        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed tellus et dolor ultrices accumsan. Pellentesque et sem suscipit, rhoncus dolor vel, consequat nibh. Aliquam in eleifend turpis, eu finibus justo. Vivamus sit amet faucibus elit. Proin aliquet id nisl id ultrices. Curabitur vel lorem hendrerit, tempus lectus eu, aliquet metus. Aliquam erat volutpat. In porta ante sed sem finibus pretium. Sed rutrum euismod elementum. Vivamus odio lectus, ornare non viverra in, consectetur quis nisl. Curabitur vel risus commodo, suscipit augue nec, bibendum urna. Sed a tristique justo. In hac habitasse platea dictumst. Aliquam suscipit libero ex, eget porta risus dictum ut. Pellentesque a leo justo. Donec justo sem, facilisis eget velit a, mollis placerat nisl. Mauris odio turpis, elementum in tristique id, fermentum non eros. Cras luctus est quis ante commodo finibus. Sed ac mi a nisi congue varius. Etiam viverra a elit a sodales.',
                    min_salary: 8000000,
                    max_salary: 15000000,
                    min_experience: 0,
                    max_experience: 2,
                    status: 'open',
                    category_id: 2, // Marketing
                    required_cv: true,
                    deadline: new Date('2026-01-15'),
                    limited: 7,
                    created_at: new Date(),
                    updated_at: new Date(),
                },
                {
                    recruiter_id: 2,
                    company_id: 2,
                    type: calculateJobType(new Date('2025-12-01')), // > 30 ngày -> other
                    title: 'Kỹ Sư Hạ Tầng Mạng',
                    description:
                        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed tellus et dolor ultrices accumsan. Pellentesque et sem suscipit, rhoncus dolor vel, consequat nibh. Aliquam in eleifend turpis, eu finibus justo. Vivamus sit amet faucibus elit. Proin aliquet id nisl id ultrices. Curabitur vel lorem hendrerit, tempus lectus eu, aliquet metus. Aliquam erat volutpat. In porta ante sed sem finibus pretium. Sed rutrum euismod elementum. Vivamus odio lectus, ornare non viverra in, consectetur quis nisl. Curabitur vel risus commodo, suscipit augue nec, bibendum urna. Sed a tristique justo. In hac habitasse platea dictumst. Aliquam suscipit libero ex, eget porta risus dictum ut. Pellentesque a leo justo. Donec justo sem, facilisis eget velit a, mollis placerat nisl. Mauris odio turpis, elementum in tristique id, fermentum non eros. Cras luctus est quis ante commodo finibus. Sed ac mi a nisi congue varius. Etiam viverra a elit a sodales.',
                    requirement:
                        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed tellus et dolor ultrices accumsan. Pellentesque et sem suscipit, rhoncus dolor vel, consequat nibh. Aliquam in eleifend turpis, eu finibus justo. Vivamus sit amet faucibus elit. Proin aliquet id nisl id ultrices. Curabitur vel lorem hendrerit, tempus lectus eu, aliquet metus. Aliquam erat volutpat. In porta ante sed sem finibus pretium. Sed rutrum euismod elementum. Vivamus odio lectus, ornare non viverra in, consectetur quis nisl. Curabitur vel risus commodo, suscipit augue nec, bibendum urna. Sed a tristique justo. In hac habitasse platea dictumst. Aliquam suscipit libero ex, eget porta risus dictum ut. Pellentesque a leo justo. Donec justo sem, facilisis eget velit a, mollis placerat nisl. Mauris odio turpis, elementum in tristique id, fermentum non eros. Cras luctus est quis ante commodo finibus. Sed ac mi a nisi congue varius. Etiam viverra a elit a sodales.',
                    benefit:
                        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed tellus et dolor ultrices accumsan. Pellentesque et sem suscipit, rhoncus dolor vel, consequat nibh. Aliquam in eleifend turpis, eu finibus justo. Vivamus sit amet faucibus elit. Proin aliquet id nisl id ultrices. Curabitur vel lorem hendrerit, tempus lectus eu, aliquet metus. Aliquam erat volutpat. In porta ante sed sem finibus pretium. Sed rutrum euismod elementum. Vivamus odio lectus, ornare non viverra in, consectetur quis nisl. Curabitur vel risus commodo, suscipit augue nec, bibendum urna. Sed a tristique justo. In hac habitasse platea dictumst. Aliquam suscipit libero ex, eget porta risus dictum ut. Pellentesque a leo justo. Donec justo sem, facilisis eget velit a, mollis placerat nisl. Mauris odio turpis, elementum in tristique id, fermentum non eros. Cras luctus est quis ante commodo finibus. Sed ac mi a nisi congue varius. Etiam viverra a elit a sodales.',
                    min_salary: 12000000,
                    max_salary: 20000000,
                    min_experience: 1,
                    max_experience: 3,
                    status: 'open',
                    category_id: 1, // IT
                    required_cv: true,
                    deadline: new Date('2025-12-01'),
                    limited: 4,
                    created_at: new Date(),
                    updated_at: new Date(),
                },
                {
                    recruiter_id: 1,
                    company_id: 1,
                    type: calculateJobType(new Date('2025-10-18')), // < 7 ngày -> urgent
                    title: 'Trợ Lý Tài Chính',
                    description:
                        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed tellus et dolor ultrices accumsan. Pellentesque et sem suscipit, rhoncus dolor vel, consequat nibh. Aliquam in eleifend turpis, eu finibus justo. Vivamus sit amet faucibus elit. Proin aliquet id nisl id ultrices. Curabitur vel lorem hendrerit, tempus lectus eu, aliquet metus. Aliquam erat volutpat. In porta ante sed sem finibus pretium. Sed rutrum euismod elementum. Vivamus odio lectus, ornare non viverra in, consectetur quis nisl. Curabitur vel risus commodo, suscipit augue nec, bibendum urna. Sed a tristique justo. In hac habitasse platea dictumst. Aliquam suscipit libero ex, eget porta risus dictum ut. Pellentesque a leo justo. Donec justo sem, facilisis eget velit a, mollis placerat nisl. Mauris odio turpis, elementum in tristique id, fermentum non eros. Cras luctus est quis ante commodo finibus. Sed ac mi a nisi congue varius. Etiam viverra a elit a sodales.',
                    requirement:
                        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed tellus et dolor ultrices accumsan. Pellentesque et sem suscipit, rhoncus dolor vel, consequat nibh. Aliquam in eleifend turpis, eu finibus justo. Vivamus sit amet faucibus elit. Proin aliquet id nisl id ultrices. Curabitur vel lorem hendrerit, tempus lectus eu, aliquet metus. Aliquam erat volutpat. In porta ante sed sem finibus pretium. Sed rutrum euismod elementum. Vivamus odio lectus, ornare non viverra in, consectetur quis nisl. Curabitur vel risus commodo, suscipit augue nec, bibendum urna. Sed a tristique justo. In hac habitasse platea dictumst. Aliquam suscipit libero ex, eget porta risus dictum ut. Pellentesque a leo justo. Donec justo sem, facilisis eget velit a, mollis placerat nisl. Mauris odio turpis, elementum in tristique id, fermentum non eros. Cras luctus est quis ante commodo finibus. Sed ac mi a nisi congue varius. Etiam viverra a elit a sodales.',
                    benefit:
                        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed tellus et dolor ultrices accumsan. Pellentesque et sem suscipit, rhoncus dolor vel, consequat nibh. Aliquam in eleifend turpis, eu finibus justo. Vivamus sit amet faucibus elit. Proin aliquet id nisl id ultrices. Curabitur vel lorem hendrerit, tempus lectus eu, aliquet metus. Aliquam erat volutpat. In porta ante sed sem finibus pretium. Sed rutrum euismod elementum. Vivamus odio lectus, ornare non viverra in, consectetur quis nisl. Curabitur vel risus commodo, suscipit augue nec, bibendum urna. Sed a tristique justo. In hac habitasse platea dictumst. Aliquam suscipit libero ex, eget porta risus dictum ut. Pellentesque a leo justo. Donec justo sem, facilisis eget velit a, mollis placerat nisl. Mauris odio turpis, elementum in tristique id, fermentum non eros. Cras luctus est quis ante commodo finibus. Sed ac mi a nisi congue varius. Etiam viverra a elit a sodales.',
                    min_salary: 9000000,
                    max_salary: 16000000,
                    min_experience: 0,
                    max_experience: 1,
                    status: 'open',
                    required_cv: false,

                    category_id: 3, // Finance

                    deadline: new Date('2025-10-18'),
                    limited: 6,
                    created_at: new Date(),
                    updated_at: new Date(),
                },
                {
                    recruiter_id: 2,
                    company_id: 2,
                    type: calculateJobType(new Date('2025-11-10')), // 7-30 ngày -> immediately
                    title: 'Chuyên Viên Nội Dung',
                    description:
                        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed tellus et dolor ultrices accumsan. Pellentesque et sem suscipit, rhoncus dolor vel, consequat nibh. Aliquam in eleifend turpis, eu finibus justo. Vivamus sit amet faucibus elit. Proin aliquet id nisl id ultrices. Curabitur vel lorem hendrerit, tempus lectus eu, aliquet metus. Aliquam erat volutpat. In porta ante sed sem finibus pretium. Sed rutrum euismod elementum. Vivamus odio lectus, ornare non viverra in, consectetur quis nisl. Curabitur vel risus commodo, suscipit augue nec, bibendum urna. Sed a tristique justo. In hac habitasse platea dictumst. Aliquam suscipit libero ex, eget porta risus dictum ut. Pellentesque a leo justo. Donec justo sem, facilisis eget velit a, mollis placerat nisl. Mauris odio turpis, elementum in tristique id, fermentum non eros. Cras luctus est quis ante commodo finibus. Sed ac mi a nisi congue varius. Etiam viverra a elit a sodales.',
                    requirement:
                        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed tellus et dolor ultrices accumsan. Pellentesque et sem suscipit, rhoncus dolor vel, consequat nibh. Aliquam in eleifend turpis, eu finibus justo. Vivamus sit amet faucibus elit. Proin aliquet id nisl id ultrices. Curabitur vel lorem hendrerit, tempus lectus eu, aliquet metus. Aliquam erat volutpat. In porta ante sed sem finibus pretium. Sed rutrum euismod elementum. Vivamus odio lectus, ornare non viverra in, consectetur quis nisl. Curabitur vel risus commodo, suscipit augue nec, bibendum urna. Sed a tristique justo. In hac habitasse platea dictumst. Aliquam suscipit libero ex, eget porta risus dictum ut. Pellentesque a leo justo. Donec justo sem, facilisis eget velit a, mollis placerat nisl. Mauris odio turpis, elementum in tristique id, fermentum non eros. Cras luctus est quis ante commodo finibus. Sed ac mi a nisi congue varius. Etiam viverra a elit a sodales.',
                    benefit:
                        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed tellus et dolor ultrices accumsan. Pellentesque et sem suscipit, rhoncus dolor vel, consequat nibh. Aliquam in eleifend turpis, eu finibus justo. Vivamus sit amet faucibus elit. Proin aliquet id nisl id ultrices. Curabitur vel lorem hendrerit, tempus lectus eu, aliquet metus. Aliquam erat volutpat. In porta ante sed sem finibus pretium. Sed rutrum euismod elementum. Vivamus odio lectus, ornare non viverra in, consectetur quis nisl. Curabitur vel risus commodo, suscipit augue nec, bibendum urna. Sed a tristique justo. In hac habitasse platea dictumst. Aliquam suscipit libero ex, eget porta risus dictum ut. Pellentesque a leo justo. Donec justo sem, facilisis eget velit a, mollis placerat nisl. Mauris odio turpis, elementum in tristique id, fermentum non eros. Cras luctus est quis ante commodo finibus. Sed ac mi a nisi congue varius. Etiam viverra a elit a sodales.',
                    min_salary: 10000000,
                    max_salary: 17000000,
                    min_experience: 1,
                    max_experience: 2,
                    status: 'open',
                    category_id: 2, // Marketing
                    required_cv: true,
                    deadline: new Date('2025-11-10'),
                    limited: 5,
                    created_at: new Date(),
                    updated_at: new Date(),
                },
                {
                    recruiter_id: 2,
                    company_id: 2,
                    type: calculateJobType(new Date('2025-11-29')),
                    title: 'Nhà Sáng Tạo Nội Dung TikTok',
                    description:
                        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed tellus et dolor ultrices accumsan. Pellentesque et sem suscipit, rhoncus dolor vel, consequat nibh. Aliquam in eleifend turpis, eu finibus justo. Vivamus sit amet faucibus elit. Proin aliquet id nisl id ultrices. Curabitur vel lorem hendrerit, tempus lectus eu, aliquet metus. Aliquam erat volutpat. In porta ante sed sem finibus pretium. Sed rutrum euismod elementum. Vivamus odio lectus, ornare non viverra in, consectetur quis nisl. Curabitur vel risus commodo, suscipit augue nec, bibendum urna. Sed a tristique justo. In hac habitasse platea dictumst. Aliquam suscipit libero ex, eget porta risus dictum ut. Pellentesque a leo justo. Donec justo sem, facilisis eget velit a, mollis placerat nisl. Mauris odio turpis, elementum in tristique id, fermentum non eros. Cras luctus est quis ante commodo finibus. Sed ac mi a nisi congue varius. Etiam viverra a elit a sodales.',
                    requirement:
                        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed tellus et dolor ultrices accumsan. Pellentesque et sem suscipit, rhoncus dolor vel, consequat nibh. Aliquam in eleifend turpis, eu finibus justo. Vivamus sit amet faucibus elit. Proin aliquet id nisl id ultrices. Curabitur vel lorem hendrerit, tempus lectus eu, aliquet metus. Aliquam erat volutpat. In porta ante sed sem finibus pretium. Sed rutrum euismod elementum. Vivamus odio lectus, ornare non viverra in, consectetur quis nisl. Curabitur vel risus commodo, suscipit augue nec, bibendum urna. Sed a tristique justo. In hac habitasse platea dictumst. Aliquam suscipit libero ex, eget porta risus dictum ut. Pellentesque a leo justo. Donec justo sem, facilisis eget velit a, mollis placerat nisl. Mauris odio turpis, elementum in tristique id, fermentum non eros. Cras luctus est quis ante commodo finibus. Sed ac mi a nisi congue varius. Etiam viverra a elit a sodales.',
                    benefit:
                        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed tellus et dolor ultrices accumsan. Pellentesque et sem suscipit, rhoncus dolor vel, consequat nibh. Aliquam in eleifend turpis, eu finibus justo. Vivamus sit amet faucibus elit. Proin aliquet id nisl id ultrices. Curabitur vel lorem hendrerit, tempus lectus eu, aliquet metus. Aliquam erat volutpat. In porta ante sed sem finibus pretium. Sed rutrum euismod elementum. Vivamus odio lectus, ornare non viverra in, consectetur quis nisl. Curabitur vel risus commodo, suscipit augue nec, bibendum urna. Sed a tristique justo. In hac habitasse platea dictumst. Aliquam suscipit libero ex, eget porta risus dictum ut. Pellentesque a leo justo. Donec justo sem, facilisis eget velit a, mollis placerat nisl. Mauris odio turpis, elementum in tristique id, fermentum non eros. Cras luctus est quis ante commodo finibus. Sed ac mi a nisi congue varius. Etiam viverra a elit a sodales.',
                    min_salary: 15000000,
                    max_salary: 40000000,
                    min_experience: 3,
                    max_experience: 5,
                    status: 'open',
                    required_cv: false,

                    category_id: 2,
                    deadline: new Date('2025-11-29'),
                    limited: 1,
                    created_at: new Date(),
                    updated_at: new Date(),
                },
                {
                    recruiter_id: 1,
                    company_id: 1,
                    type: calculateJobType(new Date('2025-12-29')),
                    title: 'Lập Trình Viên PHP',
                    description:
                        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed tellus et dolor ultrices accumsan. Pellentesque et sem suscipit, rhoncus dolor vel, consequat nibh. Aliquam in eleifend turpis, eu finibus justo. Vivamus sit amet faucibus elit. Proin aliquet id nisl id ultrices. Curabitur vel lorem hendrerit, tempus lectus eu, aliquet metus. Aliquam erat volutpat. In porta ante sed sem finibus pretium. Sed rutrum euismod elementum. Vivamus odio lectus, ornare non viverra in, consectetur quis nisl. Curabitur vel risus commodo, suscipit augue nec, bibendum urna. Sed a tristique justo. In hac habitasse platea dictumst. Aliquam suscipit libero ex, eget porta risus dictum ut. Pellentesque a leo justo. Donec justo sem, facilisis eget velit a, mollis placerat nisl. Mauris odio turpis, elementum in tristique id, fermentum non eros. Cras luctus est quis ante commodo finibus. Sed ac mi a nisi congue varius. Etiam viverra a elit a sodales.',
                    requirement:
                        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed tellus et dolor ultrices accumsan. Pellentesque et sem suscipit, rhoncus dolor vel, consequat nibh. Aliquam in eleifend turpis, eu finibus justo. Vivamus sit amet faucibus elit. Proin aliquet id nisl id ultrices. Curabitur vel lorem hendrerit, tempus lectus eu, aliquet metus. Aliquam erat volutpat. In porta ante sed sem finibus pretium. Sed rutrum euismod elementum. Vivamus odio lectus, ornare non viverra in, consectetur quis nisl. Curabitur vel risus commodo, suscipit augue nec, bibendum urna. Sed a tristique justo. In hac habitasse platea dictumst. Aliquam suscipit libero ex, eget porta risus dictum ut. Pellentesque a leo justo. Donec justo sem, facilisis eget velit a, mollis placerat nisl. Mauris odio turpis, elementum in tristique id, fermentum non eros. Cras luctus est quis ante commodo finibus. Sed ac mi a nisi congue varius. Etiam viverra a elit a sodales.',
                    benefit:
                        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed tellus et dolor ultrices accumsan. Pellentesque et sem suscipit, rhoncus dolor vel, consequat nibh. Aliquam in eleifend turpis, eu finibus justo. Vivamus sit amet faucibus elit. Proin aliquet id nisl id ultrices. Curabitur vel lorem hendrerit, tempus lectus eu, aliquet metus. Aliquam erat volutpat. In porta ante sed sem finibus pretium. Sed rutrum euismod elementum. Vivamus odio lectus, ornare non viverra in, consectetur quis nisl. Curabitur vel risus commodo, suscipit augue nec, bibendum urna. Sed a tristique justo. In hac habitasse platea dictumst. Aliquam suscipit libero ex, eget porta risus dictum ut. Pellentesque a leo justo. Donec justo sem, facilisis eget velit a, mollis placerat nisl. Mauris odio turpis, elementum in tristique id, fermentum non eros. Cras luctus est quis ante commodo finibus. Sed ac mi a nisi congue varius. Etiam viverra a elit a sodales.',
                    min_salary: 20000000,
                    max_salary: 40000000,
                    min_experience: 3,
                    max_experience: 5,
                    status: 'open',
                    category_id: 1, // IT
                    required_cv: true,
                    deadline: new Date('2025-12-29'),
                    limited: 2,
                    created_at: new Date(),
                    updated_at: new Date(),
                },
            ],
            {},
        );
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('job', null, {});
    },
};
