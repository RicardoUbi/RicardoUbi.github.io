import { Title, Text, Stack, Box, Card, Group, ScrollArea, Image, Divider, UnstyledButton, Button } from '@mantine/core';
import { IconArrowUpRight, IconArrowRight } from '@tabler/icons-react';
import { PROJECTS } from '../../constants/projects-data';
import { useTranslation } from 'react-i18next';

export function ProjectsSection() {
    const { t } = useTranslation();
    return (
        <Box py="xl" mb="4rem">
            {/* Header unificado com o estilo de Documentos */}
            <Stack gap="xs" mb="3rem">
                <Text
                    fw={700}
                    tt="uppercase"
                    lts="0.3em"
                    fz="xs"
                    c="winterBlack.3">
                    {t('portfolio-section.title')}
                </Text>
                <Title
                    order={2}
                    tt="uppercase"
                    fw={500}
                    fz="2.5rem"
                    c="winterBlack.9"
                    style={{ lineHeight: 1 }}
                >
                    {t('portfolio-section.subtitle')}
                </Title>
                <Divider size="xs" color="winterBlack.4" w={80} />
            </Stack>

            <ScrollArea scrollbars="x" offsetScrollbars scrollbarSize={2} pb="xl">
                <Group wrap="nowrap" gap="xl" align="stretch">
                    {PROJECTS.slice(0, 4).map((project, index) => (
                        <Card
                            key={index}
                            component="a"
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            padding={0} // Removemos o padding para a imagem encostar no topo
                            radius={0}
                            withBorder
                            bg="white"
                            style={{
                                borderColor: 'var(--mantine-color-winterBlack-1)',
                                flex: '0 0 380px',
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
                                <Box h={240} style={{ overflow: 'hidden', position: 'relative' }}>
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        height={240}
                                        fit="cover"
                                        style={{ filter: 'grayscale(0.2)', transition: '0.4s' }}
                                        className="project-image"
                                    />
                                </Box>
                            </Card.Section>

                            <Stack p="xl" gap="md" justify="space-between" h="100%">
                                <Stack gap={4}>
                                    <Group justify="space-between" align="center">
                                        <Text size="7px" fw={900} tt="uppercase" lts="0.3em" c="winterBlack.2">
                                            {project.category}
                                        </Text>
                                        <IconArrowUpRight size={14} stroke={1.5} color="var(--mantine-color-winterBlack-2)" />
                                    </Group>

                                    <Title order={3} fw={400} fz="1.4rem" c="winterBlack.9" mt="xs">
                                        {project.title}
                                    </Title>
                                </Stack>

                                <Box>
                                    <Divider size="1px" color="winterBlack.1" w={30} mb="sm" />
                                    <Text size="xs" c="winterGray.6" fw={300} style={{ lineHeight: 1.6 }} lineClamp={2}>
                                        {project.description}
                                    </Text>
                                </Box>
                            </Stack>
                        </Card>
                    ))}

                    <UnstyledButton
                        component="a"
                        href="/projetos"
                        style={{
                            flex: '0 0 200px',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            transition: 'all 0.3s ease',
                            backgroundColor: 'transparent',
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.borderColor = 'var(--mantine-color-winterRed-9)';
                            e.currentTarget.style.backgroundColor = 'var(--mantine-color-winterBlack-0)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.borderColor = 'var(--mantine-color-winterBlack-2)';
                            e.currentTarget.style.backgroundColor = 'transparent';
                        }}
                    >
                        <Button
                            variant="outline"
                            w={{ base: '100%', sm: 'auto' }}
                            mt="xl"
                            color="winterBlack.9"
                            radius={0}
                            component="a"
                            href="/portfolio"
                            rightSection={<IconArrowRight size={16} />}
                        >
                            {t('portfolio-section.cta')}
                        </Button>
                    </UnstyledButton>
                </Group>
            </ScrollArea>
        </Box>
    );
}