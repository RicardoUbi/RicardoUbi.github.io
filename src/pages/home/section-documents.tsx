import { Box, Title, Text, Group, Stack, Paper, Button } from '@mantine/core';
import { IconArrowRight } from '@tabler/icons-react';
import { DOCS } from '../../constants/documents-data';

export function DocumentsSection() {
    const latestDocs = DOCS.slice(0, 2);

    return (
        <Box py="xl" mb="4rem">
            <Group justify="space-between" align="flex-end" mb="xl">
                <Title
                    order={2}
                    tt="uppercase"
                    fw={500}
                    fz="2.5rem"
                    c="winterBlack.9"
                    style={{ lineHeight: 1 }}
                >
                    Documentos e Notas
                </Title>
            </Group>

            <Group gap={0} justify='center'>
                {latestDocs.map((doc, index) => (
                    <Paper
                        key={index}
                        component="a"
                        href={`/documentos/${index}`}
                        withBorder
                        p="xl"
                        radius={0}
                        bg="var(--mantine-color-white)"
                        style={{
                            borderColor: 'var(--mantine-color-winterBlack-1)',
                            width: '40%',
                            transition: 'all 0.2s ease',
                            cursor: 'pointer',
                            '&:hover': {
                                boxShadow: '10px 10px 0px var(--mantine-color-winterBlack-0)',
                                transform: 'translate(-4px, -4px)',
                                borderColor: 'var(--mantine-color-winterBlack-9)'
                            }
                        }}
                    >
                        <Stack gap="md" justify="space-between" h="100%">
                            <Text
                                size="xs"
                                c="winterBlack.9"
                                ff="monospace"
                                lts="0.1em"
                            >
                                {doc.date}
                            </Text>

                            <Box
                                style={{
                                    borderTop: '1px solid var(--mantine-color-winterBlack-0)',
                                }}>
                                <Title order={3} fw={500} fz="1.4rem" mt="sm" c="winterBlack.9">
                                    {doc.title}
                                </Title>

                                <Text
                                    size="xs"
                                    fw={700}
                                    tt="uppercase"
                                    lts="0.2em"
                                    c="winterBlack.4"
                                    style={{ paddingTop: '1rem' }}
                                >
                                    {doc.description}
                                </Text>
                            </Box>
                        </Stack>
                    </Paper>
                ))}
            </Group>

            <Group justify='center'>
                <Button
                    variant="outline"
                    w={{ base: '100%', sm: 'auto' }}
                    mt="xl"
                    color="winterBlack.9"
                    radius={0}
                    component="a"
                    href="/documentos"
                    rightSection={<IconArrowRight size={16} />}
                >
                    Ver todos os documentos
                </Button>
            </Group>
        </Box>
    );
}