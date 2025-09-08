import { PrismaClient, EmploymentStatus } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const doctors = [
    // Khoa Nội tổng hợp
    {
      identify: 'D001',
      name: 'BS. Nguyễn Thanh Hùng',
      specialty: 'Nội tổng hợp',
      department: 'Khoa Nội',
      phone: '0901111111',
      email: 'hung.nguyen@hospital.com',
      experience: 15,
      status: EmploymentStatus.ACTIVE,
    },
    {
      identify: 'D002',
      name: 'BS. Trần Thị Mai',
      specialty: 'Nội tiêu hóa',
      department: 'Khoa Nội',
      phone: '0901111112',
      email: 'mai.tran@hospital.com',
      experience: 12,
      status: EmploymentStatus.ACTIVE,
    },
    {
      identify: 'D003',
      name: 'BS. Lê Văn Phong',
      specialty: 'Nội thận',
      department: 'Khoa Nội',
      phone: '0901111113',
      email: 'phong.le@hospital.com',
      experience: 18,
      status: EmploymentStatus.ACTIVE,
    },
    // Khoa Ngoại
    {
      identify: 'D004',
      name: 'BS. Phạm Minh Tuấn',
      specialty: 'Ngoại tổng hợp',
      department: 'Khoa Ngoại',
      phone: '0902222221',
      email: 'tuan.pham@hospital.com',
      experience: 20,
      status: EmploymentStatus.ACTIVE,
    },
    {
      identify: 'D005',
      name: 'BS. Vũ Thị Lan',
      specialty: 'Ngoại lồng ngực',
      department: 'Khoa Ngoại',
      phone: '0902222222',
      email: 'lan.vu@hospital.com',
      experience: 14,
      status: EmploymentStatus.ACTIVE,
    },
    {
      identify: 'D006',
      name: 'BS. Đỗ Văn Kiên',
      specialty: 'Ngoại tiêu hóa',
      department: 'Khoa Ngoại',
      phone: '0902222223',
      email: 'kien.do@hospital.com',
      experience: 16,
      status: EmploymentStatus.ACTIVE,
    },
    // Khoa Tim mạch
    {
      identify: 'D007',
      name: 'BS. Nguyễn Thị Hồng',
      specialty: 'Tim mạch can thiệp',
      department: 'Khoa Tim mạch',
      phone: '0903333331',
      email: 'hong.nguyen@hospital.com',
      experience: 22,
      status: EmploymentStatus.ACTIVE,
    },
    {
      identify: 'D008',
      name: 'BS. Trần Văn Đức',
      specialty: 'Tim mạch',
      department: 'Khoa Tim mạch',
      phone: '0903333332',
      email: 'duc.tran@hospital.com',
      experience: 19,
      status: EmploymentStatus.ACTIVE,
    },
    // Khoa Sản
    {
      identify: 'D009',
      name: 'BS. Lê Thị Ngọc',
      specialty: 'Sản phụ khoa',
      department: 'Khoa Sản',
      phone: '0904444441',
      email: 'ngoc.le@hospital.com',
      experience: 17,
      status: EmploymentStatus.ACTIVE,
    },
    {
      identify: 'D010',
      name: 'BS. Phạm Văn Hải',
      specialty: 'Sản khoa',
      department: 'Khoa Sản',
      phone: '0904444442',
      email: 'hai.pham@hospital.com',
      experience: 21,
      status: EmploymentStatus.ACTIVE,
    },
    // Khoa Nhi
    {
      identify: 'D011',
      name: 'BS. Vũ Thị Thu',
      specialty: 'Nhi khoa',
      department: 'Khoa Nhi',
      phone: '0905555551',
      email: 'thu.vu@hospital.com',
      experience: 13,
      status: EmploymentStatus.ACTIVE,
    },
    {
      identify: 'D012',
      name: 'BS. Đỗ Minh Hoàng',
      specialty: 'Nhi hô hấp',
      department: 'Khoa Nhi',
      phone: '0905555552',
      email: 'hoang.do@hospital.com',
      experience: 16,
      status: EmploymentStatus.ACTIVE,
    },
    // Khoa Thần kinh
    {
      identify: 'D013',
      name: 'BS. Nguyễn Văn Trung',
      specialty: 'Thần kinh',
      department: 'Khoa Thần kinh',
      phone: '0906666661',
      email: 'trung.nguyen@hospital.com',
      experience: 25,
      status: EmploymentStatus.ACTIVE,
    },
    {
      identify: 'D014',
      name: 'BS. Trần Thị Linh',
      specialty: 'Thần kinh can thiệp',
      department: 'Khoa Thần kinh',
      phone: '0906666662',
      email: 'linh.tran@hospital.com',
      experience: 18,
      status: EmploymentStatus.ACTIVE,
    },
    // Khoa Chấn thương chỉnh hình
    {
      identify: 'D015',
      name: 'BS. Lê Văn Mạnh',
      specialty: 'Chấn thương chỉnh hình',
      department: 'Khoa Chấn thương chỉnh hình',
      phone: '0907777771',
      email: 'manh.le@hospital.com',
      experience: 20,
      status: EmploymentStatus.ACTIVE,
    },
    {
      identify: 'D016',
      name: 'BS. Phạm Thị Yến',
      specialty: 'Cột sống',
      department: 'Khoa Chấn thương chỉnh hình',
      phone: '0907777772',
      email: 'yen.pham@hospital.com',
      experience: 15,
      status: EmploymentStatus.ACTIVE,
    },
    // Khoa Mắt
    {
      identify: 'D017',
      name: 'BS. Vũ Văn Nam',
      specialty: 'Nhãn khoa',
      department: 'Khoa Mắt',
      phone: '0908888881',
      email: 'nam.vu@hospital.com',
      experience: 14,
      status: EmploymentStatus.ACTIVE,
    },
    // Khoa Tai mũi họng
    {
      identify: 'D018',
      name: 'BS. Đỗ Thị Hương',
      specialty: 'Tai mũi họng',
      department: 'Khoa Tai mũi họng',
      phone: '0908888882',
      email: 'huong.do@hospital.com',
      experience: 12,
      status: EmploymentStatus.ACTIVE,
    },
    // Khoa Hồi sức cấp cứu
    {
      identify: 'D019',
      name: 'BS. Nguyễn Thị Phương',
      specialty: 'Hồi sức cấp cứu',
      department: 'Khoa Hồi sức cấp cứu',
      phone: '0909999991',
      email: 'phuong.nguyen@hospital.com',
      experience: 23,
      status: EmploymentStatus.ACTIVE,
    },
    {
      identify: 'D020',
      name: 'BS. Trần Văn Quang',
      specialty: 'Cấp cứu',
      department: 'Khoa Hồi sức cấp cứu',
      phone: '0909999992',
      email: 'quang.tran@hospital.com',
      experience: 19,
      status: EmploymentStatus.ACTIVE,
    },
    // Khoa Da liễu
    {
      identify: 'D021',
      name: 'BS. Lê Thị Xuân',
      specialty: 'Da liễu',
      department: 'Khoa Da liễu',
      phone: '0910000001',
      email: 'xuan.le@hospital.com',
      experience: 11,
      status: EmploymentStatus.ACTIVE,
    },
    // Khoa Ung bướu
    {
      identify: 'D022',
      name: 'BS. Phạm Văn Thành',
      specialty: 'Ung bướu',
      department: 'Khoa Ung bướu',
      phone: '0910000002',
      email: 'thanh.pham@hospital.com',
      experience: 24,
      status: EmploymentStatus.ACTIVE,
    },
    // Bổ sung cho đủ 25
    {
      identify: 'D023',
      name: 'BS. Nguyễn Thị Lan',
      specialty: 'Nội tiết',
      department: 'Khoa Nội',
      phone: '0910000003',
      email: 'lan.nguyen@hospital.com',
      experience: 13,
      status: EmploymentStatus.ACTIVE,
    },
    {
      identify: 'D024',
      name: 'BS. Trần Văn Hưng',
      specialty: 'Huyết học',
      department: 'Khoa Nội',
      phone: '0910000004',
      email: 'hung.tran@hospital.com',
      experience: 17,
      status: EmploymentStatus.ACTIVE,
    },
    {
      identify: 'D025',
      name: 'BS. Lê Thị Minh',
      specialty: 'Phục hồi chức năng',
      department: 'Khoa Phục hồi chức năng',
      phone: '0910000005',
      email: 'minh.le@hospital.com',
      experience: 9,
      status: EmploymentStatus.ACTIVE,
    },
  ];

  await prisma.doctor.createMany({
    data: doctors,
    skipDuplicates: true,
  });

  console.log('✅ Seeded 25 doctors');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
