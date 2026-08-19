import { useState } from 'react';
import { Title, Text, Stack, Group, Divider, TextInput, SimpleGrid, Paper, Box } from '@mantine/core';
import { IconSearch } from '@tabler/icons-react';
import { DOCS } from '../../constants/documents-data';
import { useTranslation } from 'react-i18next';

export default function Documentos() {
  const [search, setSearch] = useState('');
  const { t } = useTranslation();

  const filteredDocs = DOCS.filter(doc =>
    doc.title.toLowerCase().includes(search.toLowerCase()) ||
    doc.category.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Stack gap="xl">
      <Group justify="space-between" >
        <Stack gap="xs">
          <Title order={2} c="winterBlack.9" style={{ textTransform: 'uppercase', letterSpacing: '0.1em' }}>
            {t('documents-page.title')}
          </Title>
          <Divider size="xs" color="winterBlack.4" w={60} />
        </Stack>

        <TextInput
          placeholder={t('documents-page.search-placeholder')}
          variant="unstyled"
          leftSection={<IconSearch size={18} stroke={1.5} />}
          value={search}
          onChange={(e) => setSearch(e.currentTarget.value)}
          style={{ borderBottom: '1px solid var(--mantine-color-winterBlack-2)' }}
        />
      </Group>

      <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }} spacing="lg">
        {filteredDocs.map((doc, index) => (
          <Paper
            key={index}
            component="a"
            href={`/documentos/${doc.id}`}
            p="xl"
            radius={'8px'}
            withBorder
            style={{
              backgroundColor: 'var(--mantine-color-white)',
              borderColor: 'var(--mantine-color-winterBlack-1)',
              display: 'flex',
              flexDirection: 'column',
              height: '280px',
              transition: 'all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1)',
              cursor: 'pointer',
              position: 'relative',
              overflow: 'hidden',
              textDecoration: 'none',
              '&:hover': {
                borderColor: 'var(--mantine-color-winterBlack-9)',
                transform: 'translateY(-8px)',
                boxShadow: '0 20px 40px rgba(0,0,0,0.04)',
              }
            }}
          >
            {/* <Text
              size="7px"
              fw={900}
              tt="uppercase"
              lts="0.3em"
              c="winterBlack.2"
              style={{ position: 'absolute', top: 20, right: 20, writingMode: 'vertical-rl' }}
            >
              {doc.category}
            </Text> */}

            <Stack justify="space-between" h="100%" gap="xs">
              <Box>
                <Text
                  size="xs"
                  c="winterBlack.3"
                  ff="monospace"
                  lts="0.1em"
                  mb="xl"
                >
                  {doc.date}
                </Text>

                <Title
                  order={3}
                  fw={400}
                  fz="1.6rem"
                  c="winterBlack.9"
                  style={{ lineHeight: 1.1, maxWidth: '90%' }}
                >
                  {doc.title}
                </Title>
              </Box>

              <Box>
                <Divider size="1px" color="winterBlack.9" w={30} mb="sm" />
                <Text
                  size="md"
                  fw={400}
                  c="winterBlack.5"
                  style={{
                    lineHeight: 1.6,
                    display: '-webkit-box',
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden'
                  }}
                >
                  {doc.description}
                </Text>

                <Group gap={4} mt="md" opacity={0.5} style={{ transition: '0.2s' }} className="read-more">
                  <Text size="xs" fw={700} tt="uppercase" lts="0.1em" c="winterBlack.9">Ler nota</Text>
                  <Divider size="xs" color="winterBlack.9" w={15} />
                </Group>
              </Box>
            </Stack>
          </Paper>
        ))}
      </SimpleGrid>

      {filteredDocs.length === 0 && (
        <Box py="xl" style={{ textAlign: 'center' }}>
          <Text c="winterBlack.3" fw={300}>Nenhum registro encontrado para sua busca.</Text>
        </Box>
      )}
    </Stack>
  );
}