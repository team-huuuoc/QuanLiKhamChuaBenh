import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const SpecimenTypes = [
  'Máu tĩnh mạch',
  'Máu mao mạch',
  'Nước tiểu',
  'Phân',
  'Đờm',
  'Dịch não tủy',
  'Dịch khớp',
  'Mô sinh thiết',
  'Khác',
];

async function main() {

  for (let i = 0; i < SpecimenTypes.length; i++) {
    const name = SpecimenTypes[i];

    await prisma.testSpecimen.create({
      data: {
        name,
        description: `Mẫu bệnh phẩm: ${name}`,
        collectionInstructions: null,
        storageRequirements: null,
        isActive: true,
      },
    });
  }

  console.log('✅ Done seeding TestSpecimen.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
