import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const testNames: Record<string, string[]> = {
  'Máu': [
    'Công thức máu toàn phần',
    'Tốc độ máu lắng',
    'Nhóm máu ABO/Rh',
    'Đông máu cơ bản',
    'Thời gian chảy máu'
  ],
  'Nước tiểu': [
    'Tổng phân tích nước tiểu',
    'Cấy khuẩn nước tiểu',
    'Protein niệu 24h',
    'Creatinine clearance'
  ],
  'Sinh hóa': [
    'Glucose máu',
    'HbA1c',
    'Chức năng gan',
    'Chức năng thận',
    'Lipid máu',
    'Điện giải đồ'
  ],
  'Vi sinh': [
    'Cấy khuẩn máu',
    'Cấy khuẩn đờm',
    'Kháng sinh đồ',
    'PCR vi khuẩn'
  ],
  'Hình ảnh': [
    'X-quang ngực',
    'X-quang bụng',
    'CT scanner',
    'MRI',
    'Siêu âm bụng',
    'Điện tâm đồ'
  ],
  'Miễn dịch': [
    'HIV',
    'HBsAg',
    'Anti-HCV',
    'VDRL/RPR'
  ],
  'Nội tiết': [
    'TSH, T3, T4',
    'Cortisol',
    'Insulin',
    'Growth hormone'
  ],
  'Khác': [
    'Khác - tự nhập'
  ]
};

// Hàm tạo code từ name
function generateCode(name: string): string {
  return name
    .normalize("NFD") // bỏ dấu tiếng Việt
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-zA-Z0-9]/g, "_") // chỉ giữ chữ + số
    .replace(/_+/g, "_")
    .replace(/^_|_$/g, "")
    .toUpperCase();
}

async function main() {
  for (const [categoryName, tests] of Object.entries(testNames)) {
    const category = await prisma.testCategory.findFirst({
      where: { name: categoryName }
    });

    if (!category) {
      console.warn(`⚠️ Category "${categoryName}" chưa tồn tại, bỏ qua`);
      continue;
    }

    for (const testName of tests) {
      const code = generateCode(testName);

      await prisma.testType.create({
        
        data: {
          categoryId: category.id,
          name: testName,
          code,
          isActive: true,
        },
      });
    }
  }
}

main()
  .then(async () => {
    console.log("✅ Seed TestTypes done");
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
