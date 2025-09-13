import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const testCategories = [
  'Máu',
  'Nước tiểu',
  'Sinh hóa',
  'Vi sinh',
  'Hình ảnh',
  'Miễn dịch',
  'Nội tiết',
  'Khác',
];

async function main() {
  for (let i = 0; i < testCategories.length; i++) {
    const name = testCategories[i];

    await prisma.testCategory.create({
      data: {
        name,
        description: `Danh mục xét nghiệm: ${name}`,
        displayOrder: i + 1,
        isActive: true,
      },
    });
  }
}

main()
  .then(async () => {
    console.log('✅ Seed testCategories done');
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
