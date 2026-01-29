import { Stack } from '@mantine/core';
import IntroductionSection from './section-introduction';
import { ProjectsSection } from './section-projects';
import { DocumentsSection } from './section-documents';
import { ContactSection } from './section-contact';

export default function Home() {
  return (
    <Stack gap="lg">
      <IntroductionSection />
      <ProjectsSection />
      <DocumentsSection />
      <ContactSection />
    </Stack>
  );
}