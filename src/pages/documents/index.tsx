import { Title, Text, Stack, List, ThemeIcon } from '@mantine/core';
import { IconFileText } from '@tabler/icons-react';

export default function Documentos() {
  return (
    <Stack gap="xl">
      <Title order={2} c="iceBlue.0">Documentos e Recursos</Title>
      <Text c="winterGray.1">
        Aqui você encontra currículos, certificados e guias que escrevi ao longo do tempo.
      </Text>
      
      <List
        spacing="md"
        size="sm"
        center
        icon={
          <ThemeIcon color="petrol.4" size={24} radius="xl">
            <IconFileText size={16} />
          </ThemeIcon>
        }
      >
        <List.Item style={{ color: 'var(--mantine-color-winterGray-1)' }}>Currículo Atualizado - PDF</List.Item>
        <List.Item style={{ color: 'var(--mantine-color-winterGray-1)' }}>Certificações React 2026</List.Item>
        <List.Item style={{ color: 'var(--mantine-color-winterGray-1)' }}>Guia de Boas Práticas Mantine</List.Item>
      </List>
    </Stack>
  );
}