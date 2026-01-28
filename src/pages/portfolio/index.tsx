import { Title, Text, SimpleGrid, Card, Badge, Group, Stack } from '@mantine/core';

export default function Portfolio() {
  // Exemplo de dados para os cards
  const projetos = [
    { title: 'Projeto 1', desc: 'Descrição curta do projeto.', tags: ['React', 'Mantine'] },
    { title: 'Projeto 2', desc: 'Outro projeto interessante.', tags: ['Node.js', 'PostgreSQL'] },
  ];

  return (
    <Stack gap="xl">
      <Title order={2} c="iceBlue.0">Portfólio</Title>
      <SimpleGrid cols={{ base: 1, sm: 2 }}>
        {projetos.map((p) => (
          <Card key={p.title} shadow="sm" padding="lg" radius="md" bg="winterBlack.8" withBorder style={{ borderColor: 'var(--mantine-color-winterBlack-7)' }}>
            <Group justify="space-between" mb="xs">
              <Text fw={700} c="iceBlue.0">{p.title}</Text>
              <Group gap={5}>
                {p.tags.map(tag => <Badge key={tag} variant="light" color="petrol.4">{tag}</Badge>)}
              </Group>
            </Group>
            <Text size="sm" c="winterGray.3">
              {p.desc}
            </Text>
          </Card>
        ))}
      </SimpleGrid>
    </Stack>
  );
}