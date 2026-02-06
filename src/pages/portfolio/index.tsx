import { useState, useMemo } from 'react';
import { Title, Text, SimpleGrid, Card, Image, Group, Stack, Box, Divider, TextInput } from '@mantine/core';
import { PROJECTS } from '../../constants/projects-data';
import { IconSearch, IconArrowUpRight } from '@tabler/icons-react';

export default function Portfolio() {
  const [search, setSearch] = useState('');

  const filteredProjects = useMemo(() => {
    return PROJECTS.filter((project) =>
      project.title.toLowerCase().includes(search.toLowerCase()) ||
      project.category.toLowerCase().includes(search.toLowerCase()) ||
      project.description.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);

  return (
    <Stack gap="xl">
      <Group justify="space-between" align="flex-end">
        <Stack gap="xs">
          <Title order={2} c="winterBlack.9" style={{ textTransform: 'uppercase', letterSpacing: '0.1em' }}>
            Portfolio
          </Title>
          <Divider size="xs" color="winterBlack.4" w={60} />
        </Stack>

        <TextInput
          placeholder="Filtrar projetos..."
          variant="unstyled"
          leftSection={<IconSearch size={18} stroke={1.5} />}
          value={search}
          onChange={(event) => setSearch(event.currentTarget.value)}
          style={{ 
            borderBottom: '1px solid var(--mantine-color-winterBlack-2)',
            minWidth: '280px' 
          }}
        />
      </Group>

      {filteredProjects.length > 0 ? (
        <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="xl">
          {filteredProjects.map((project, index) => (
            <Card
              key={index}
              component="a"
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              padding={0}
              radius={0}
              withBorder
              bg="white"
              style={{
                borderColor: 'var(--mantine-color-winterBlack-1)',
                textDecoration: 'none',
                transition: 'all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1)',
                '&:hover': {
                  borderColor: 'var(--mantine-color-winterBlack-9)',
                  transform: 'translateY(-8px)',
                  boxShadow: '0 20px 40px rgba(0,0,0,0.04)',
                }
              }}
            >
              <Card.Section>
                <Box h={280} style={{ overflow: 'hidden' }}>
                  <Image
                    src={project.image}
                    alt={project.title}
                    height={280}
                    fit="cover"
                    style={{ 
                      filter: 'grayscale(0.3)', 
                      transition: '0.5s' 
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.filter = 'grayscale(0)'}
                    onMouseLeave={(e) => e.currentTarget.style.filter = 'grayscale(0.3)'}
                  />
                </Box>
              </Card.Section>

              <Stack p="xl" gap="md">
                <Stack gap={4}>
                  <Group justify="space-between">
                    <Text size="7px" fw={900} tt="uppercase" lts="0.3em" c="winterBlack.2">
                      {project.category}
                    </Text>
                    <IconArrowUpRight size={16} stroke={1.5} color="winterBlack.2" />
                  </Group>
                  <Title order={3} fw={400} fz="1.6rem" c="winterBlack.9">
                    {project.title}
                  </Title>
                </Stack>

                <Box>
                  <Divider size="1px" color="winterBlack.9" w={30} mb="sm" />
                  <Text size="xs" c="winterBlack.5" style={{ lineHeight: 1.6 }} fw={300}>
                    {project.description}
                  </Text>
                </Box>
              </Stack>
            </Card>
          ))}
        </SimpleGrid>
      ) : (
        <Box py="100px">
          <Text c="winterBlack.2" ta="center" fw={300} ff="monospace" tt="uppercase">
            [ Nenhum resultado para sua busca ]
          </Text>
        </Box>
      )}
    </Stack>
  );
}