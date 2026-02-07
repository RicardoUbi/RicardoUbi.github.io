import { Title, Text, Stack, SimpleGrid, Group, Divider, Box } from '@mantine/core';
import { IconCertificate } from '@tabler/icons-react';
import { CERTIFICATIONS, EDUCATION, EXPERIENCES, SKILLS } from '../../constants/about-data';
import { useTranslation } from 'react-i18next';

export default function Sobre() {
  const { t } = useTranslation();

  return (
    <Stack gap="xl">
      <Stack gap="xs">
        <Title order={2} c="winterBlack.9" style={{ textTransform: 'uppercase', letterSpacing: '0.1em' }}>
          {t('about-page.title')}
        </Title>
        <Divider size="xs" color="winterBlack.4" w={60} />
      </Stack>

      <Text size="xl" c="winterBlack.8" fw={300} maw={800} style={{ lineHeight: 1.6, letterSpacing: '-0.01em' }}>
        {t('about-page.subtitle')}
      </Text>

      {/* --- GRID DE CONTEÚDO --- */}
      <SimpleGrid cols={{ base: 1, md: 2 }} spacing={0} style={{ border: '1px solid var(--mantine-color-winterBlack-1)' }}>

        {/* --- EXPERIÊNCIA PROFISSIONAL --- */}
        <Box p="2.5rem" style={{ borderRight: '1px solid var(--mantine-color-winterBlack-1)' }}>
          <Group mb="2rem">
            <Text fz="0.7rem" fw={900} tt="uppercase" lts="0.3em" c="winterBlack.3">
              {t('about-page.experience-section-title')}
            </Text>
          </Group>

          <Stack gap="xl">
            {EXPERIENCES.map((exp, index) => (
              <Box key={index}>
                <Group justify="space-between" align="flex-start" mb={4}>
                  <Text fw={500} fz="1.1rem" c="winterBlack.9">{exp.role}</Text>
                  <Text ff="monospace" fz="0.8rem" c="winterBlack.3">{exp.period}</Text>
                </Group>
                <Text fz="xs" fw={700} tt="uppercase" lts="0.1em" c="winterBlack.4" mb="md">
                  {exp.company}
                </Text>
                <Text size="md" c="winterBlack.6" style={{ lineHeight: 1.6 }} fw={300}>
                  {exp.description}
                </Text>
              </Box>
            ))}
          </Stack>
        </Box>

        {/* --- EDUCAÇÃO E CERTIFICAÇÕES --- */}
        <Box p="2.5rem" bg="var(--mantine-color-winterBlack-0)" style={{ backgroundColor: '#fcfcfc' }}>
          <Group mb="2rem">
            <Text fz="0.7rem" fw={900} tt="uppercase" lts="0.3em" c="winterBlack.3">
              {t('about-page.education-section-title')}
            </Text>
          </Group>

          <Stack gap="xl">
            {EDUCATION.map((edu, index) => (
              <Box key={index}>
                <Text fw={500} fz="1.1rem" c="winterBlack.9">{edu.degree}</Text>
                <Text size="sm" c="winterBlack.5" mt={4}>{edu.institution}</Text>
                <Text ff="monospace" size="0.8rem" c="winterBlack.3" mt={4}>{edu.period}</Text>
              </Box>
            ))}

            <Divider color="winterBlack.1" label={t('about-page.certifications-section-title')} labelPosition="left" styles={{ label: { fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.2em' } }} />

            <Stack gap="sm">
              {CERTIFICATIONS.map((cert, index) => (
                <Group key={index} gap="xs" wrap="nowrap" style={{ opacity: 0.7, transition: '0.2s', cursor: 'default' }}>
                  <IconCertificate size={14} stroke={1.5} color="var(--mantine-color-winterBlack-7)" />
                  <Text size="sm" c="winterBlack.7" fw={400}>
                    {cert}
                  </Text>
                </Group>
              ))}
            </Stack>
          </Stack>
        </Box>
      </SimpleGrid>

      <Stack gap="md" mt="xl">
        <Text fz="0.7rem" fw={900} tt="uppercase" lts="0.3em" c="winterBlack.3">
          {t('about-page.skills-section-title')}
        </Text>
        <Group gap="xs">
          {SKILLS.map((skill) => (
            <Box
              key={skill}
              px="md"
              py={4}
              style={{
                border: '1px solid var(--mantine-color-winterBlack-1)',
                fontSize: '11px',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                fontWeight: 600,
                color: 'var(--mantine-color-winterBlack-7)'
              }}
            >
              {skill}
            </Box>
          ))}
        </Group>
      </Stack>
    </Stack>
  );
}