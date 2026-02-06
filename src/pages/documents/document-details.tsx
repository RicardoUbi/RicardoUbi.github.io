import { Title, Text, Stack, Divider, Code } from '@mantine/core';
import { useParams } from 'react-router-dom';
import { DOCS } from '../../constants/documents-data';

export default function DocumentPage() {
  const { docId } = useParams();

  const documentData = DOCS.find((d) => d.id === docId);

  if (!documentData) {
    return <div>Documento não encontrado.</div>;
  }

  return <DocumentDetail doc={documentData} />;
}

function DocumentDetail({ doc }: any) {
  if (!doc) return <Text>Documento não encontrado.</Text>;

  return (
    <Stack gap="xl" py="xl" maw={800} mx="auto">
      {/* Header do Doc */}
      <Stack gap="xs">
        <Text size="xs" ff="monospace" c="winterBlack.4" tt="uppercase" lts="0.1em">
          {doc.date} / {doc.category}
        </Text>
        <Title order={1} fz="2.5rem" c="winterBlack.9" fw={500}>
          {doc.title}
        </Title>
        <Divider size="xs" color="winterBlack.1" />
      </Stack>

      <Stack gap="lg">
        {doc.content.map((block: any, index: any) => {
          switch (block.type) {
            case 'text':
              return (
                <Text key={index} size="lg" fw={300} c="winterBlack.7" style={{ lineHeight: 1.8 }}>
                  {block.value}
                </Text>
              );
            case 'subtitle':
              return (
                <Title key={index} order={3} c="winterBlack.9" mt="md">
                  {block.value}
                </Title>
              );
            case 'code':
              return (
                <Code key={index} block p="md" color="iceBlue.0" c="winterBlack.9">
                  {block.value}
                </Code>
              );
            case 'list':
              return (
                <Stack key={index} gap="xs" pl="md">
                  {block.items.map((item: any, i: any) => (
                    <Text key={i} fw={300} c="winterBlack.7">• {item}</Text>
                  ))}
                </Stack>
              );
            default:
              return null;
          }
        })}
      </Stack>
    </Stack>
  );
}