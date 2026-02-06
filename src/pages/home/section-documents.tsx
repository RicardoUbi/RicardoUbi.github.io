import { Box, Title, Text, Group, Stack, Paper, Button, Divider } from '@mantine/core';
import { IconArrowRight } from '@tabler/icons-react';
import { DOCS } from '../../constants/documents-data';
import { useTranslation } from 'react-i18next';

export function DocumentsSection() {
    const latestDocs = DOCS.slice(0, 2);
    const { t } = useTranslation();

    return (
        <Box py="xl" mb="4rem">
            <Stack gap="xs" mb="3rem">
                <Title
                    order={2}
                    tt="uppercase"
                    fw={500}
                    fz="2.5rem"
                    c="winterBlack.9"
                    style={{ lineHeight: 1, letterSpacing: '0.05em' }}
                >
                    {t('documents-section.title')}
                </Title>
                <Divider size="xs" color="winterBlack.4" w={80} />
            </Stack>

            <Group gap="xl" justify='center' align="stretch">
                {latestDocs.map((doc, index) => (
                    <Paper
                        key={index}
                        component="a"
                        href={`/documentos/${doc.id}`}
                        withBorder
                        p="xl"
                        radius={0}
                        bg="var(--mantine-color-white)"
                        style={{
                            borderColor: 'var(--mantine-color-winterBlack-1)',
                            width: 'clamp(300px, 45%, 500px)',
                            transition: 'all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1)',
                            cursor: 'pointer',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-between',
                            '&:hover': {
                                borderColor: 'var(--mantine-color-winterBlack-9)',
                                transform: 'translateY(-8px)',
                                boxShadow: '0 20px 40px rgba(0,0,0,0.04)',
                            }
                        }}
                    >
                        <Stack gap="xl">
                            <Group justify="space-between">
                                <Text size="xs" c="winterBlack.3" ff="monospace" lts="0.1em">
                                    {doc.date}
                                </Text>
                                {/* <Text size="7px" fw={900} tt="uppercase" lts="0.3em" c="winterBlack.2">
                                    {doc.category}
                                </Text> */}
                            </Group>

                            <Box>
                                <Title order={3} fw={400} fz="1.8rem" c="winterBlack.9" style={{ lineHeight: 1.1 }}>
                                    {doc.title}
                                </Title>
                                <Divider size="1px" color="winterBlack.9" w={30} mt="md" />
                            </Box>
                        </Stack>

                        <Text size="xs" c="winterBlack.5" mt="xl" style={{ lineHeight: 1.6 }}>
                            {doc.description}
                        </Text>
                    </Paper>
                ))}
            </Group>

            <Group justify='center' mt="4rem">
                <Button
                    variant="subtle"
                    color="winterBlack.9"
                    radius={0}
                    component="a"
                    href="/documentos"
                    rightSection={<IconArrowRight size={16} />}
                    styles={{
                        root: {
                            textTransform: 'uppercase',
                            letterSpacing: '0.2em',
                            fontSize: '0.7rem',
                            fontWeight: 700,
                            '&:hover': { backgroundColor: 'transparent', opacity: 0.7 }
                        }
                    }}
                >
                    {t('documents-section.cta')}
                </Button>
            </Group>
        </Box>
    );
}