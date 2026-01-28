import { Title, Text, Stack, SimpleGrid, Paper } from '@mantine/core';

export default function Sobre() {
  return (
    <Stack gap="xl">
      <Title order={2} c="var(--mantine-color-winterBlack-9)">Sobre Mim</Title>
      <Text c="var(--mantine-color-winterBlack-9)">
        Sou o Ricardo, apaixonado por transformar problemas complexos em interfaces intuitivas e código eficiente.
        Minha jornada no desenvolvimento web começou com a curiosidade sobre como as páginas funcionavam e hoje foco em arquiteturas modernas e escaláveis.
      </Text>

      <SimpleGrid cols={{ base: 1, sm: 2 }}>
        <Paper p="md" bg="var(--mantine-color-winterBlack-9)" withBorder style={{ borderColor: 'var(--mantine-color-winterBlack-7)' }}>
          <Title order={4} c="var(--mantine-color-winterBlack-0)" mb="xs">Experiência</Title>
          <Text size="sm" c="var(--mantine-color-winterBlack-1)">Desenvolvimento de SPAs, integração de APIs e UI/UX Design.</Text>
        </Paper>
        <Paper p="md" bg="var(--mantine-color-winterBlack-9)" withBorder style={{ borderColor: 'var(--mantine-color-winterBlack-7)' }}>
          <Title order={4} c="iceBlue.2" mb="xs">Educação</Title>
          <Text size="sm" c="winterGray.3">Engenharia de Software e aprendizado contínuo nas tecnologias mais recentes.</Text>
        </Paper>
      </SimpleGrid>
    </Stack>
  );
}