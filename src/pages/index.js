import Meta from '@/components/Meta/index';
import { LandingLayout } from '@/layouts/index';
import {
  CallToAction,
  Features,
  Footer,
  Guides,
  Hero,
  Pricing,
  Testimonial,
} from '@/sections/index';

import { PrismaClient } from '@prisma/client';

const Home = ({ services, workspace }) => {
  return (
    <LandingLayout>
      <Meta
        title="ICT Flow - Jouw workflow, zo geregeld!"
        description="Jouw workflow, zo geregeld!"
      />
      <Hero />
      <Features />
      <Pricing services={services} workspace={workspace} />
      {/* <Guides /> */}
      {/* <Testimonial /> */}
      <CallToAction />
      <Footer />
    </LandingLayout>
  );
};

export async function getServerSideProps() {
  const prisma = new PrismaClient();

  const services = await prisma.service.findMany({
    orderBy: { price: 'asc' },
  });

  const workspace = await prisma.workspace.findFirst({
    where: { slug: 'ictflow' },
  });

  return {
    props: {
      services: services.map(service => ({
        ...service,
        createdAt: service.createdAt.toISOString(),
      })),
      workspace: workspace
        ? {
            ...workspace,
            createdAt: workspace.createdAt?.toISOString() || null,
            updatedAt: workspace.updatedAt?.toISOString() || null,
            deletedAt: workspace.deletedAt?.toISOString() || null,
          }
        : null,
    },
  };
}

export default Home;
