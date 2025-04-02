const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const main = async () => {
  console.log("🌱 Seeding database...");

  // 1. Upsert Admin User
  const adminEmail = process.env.ADMIN_EMAIL || "admin@example.com";
  const admin = await prisma.user.upsert({
    where: { email: adminEmail },
    update: {
      name: "Admin",
    },
    create: {
      name: "Admin",
      email: adminEmail,
    },
  });
  console.info("✅ Admin user:", admin.email);

  // 2. Create Workspace with slug 'ictflow'
  const workspace = await prisma.workspace.upsert({
    where: { slug: 'ictflow' },
    update: {},
    create: {
      name: 'ICT Flow',
      slug: 'ictflow',
      creatorId: admin.id,
    },
  });
  console.log("✅ Workspace created:", workspace.slug);

  // 3. Sample Users
  const user1 = await prisma.user.upsert({
    where: { email: "furkan@example.com" },
    update: {
      name: "Furkan Turkmen",
    },
    create: {
      name: "Furkan Turkmen",
      email: "furkan@example.com",
    },
  });

  const user2 = await prisma.user.upsert({
    where: { email: "talha@example.com" },
    update: {
      name: "Talha Amin",
    },
    create: {
      name: "Talha Amin",
      email: "talha@example.com",
    },
  });

  // 4. Services
  const basicPlan = await prisma.service.upsert({
    where: { name: "Basic Plan" },
    update: {
      price: 6,
      description: "Setup email, Teams, and SharePoint for your business.",
    },
    create: {
      name: "Basic Plan",
      description: "Setup email, Teams, and SharePoint for your business.",
      price: 6,
    },
  });

  const plusPlan = await prisma.service.upsert({
    where: { name: "Plus Plan" },
    update: {
      price: 9,
      description: "Review and optimize your Microsoft 365 tools.",
    },
    create: {
      name: "Plus Plan",
      description: "Review and optimize your Microsoft 365 tools.",
      price: 9,
    },
  });

  const premiumPlan = await prisma.service.upsert({
    where: { name: "Premium Plan" },
    update: {
      price: 12,
      description: "Discuss improvements and redesign ideas.",
    },
    create: {
      name: "Premium Plan",
      description: "Discuss improvements and redesign ideas.",
      price: 12,
    },
  });

  // 5. Orders
  await prisma.order.createMany({
    data: [
      {
        userId: user1.id,
        serviceId: basicPlan.id,
      },
      {
        userId: user1.id,
        serviceId: premiumPlan.id,
      },
      {
        userId: user2.id,
        serviceId: plusPlan.id,
      },
    ],
    skipDuplicates: true,
  });

  console.log("✅ Seeding complete!");
};

main()
  .catch(async (e) => {
    console.error("❌ Seeding failed:", e);
    await prisma.$disconnect();
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
