import { Title, Text, Stack, Box, Card, Group, UnstyledButton, ScrollArea, Image, Divider } from '@mantine/core';
import { IconArrowUpRight, IconExternalLink } from '@tabler/icons-react';

const PROJECTS = [
    { title: 'Frontend do Spotify', category: 'Web Design', image: 'src/assets/portfolio/projeto-spotify.gif', link: 'https://spotify-clone-psi.vercel.app' },
    { title: 'Falcon Seguros Website', category: 'Frontend', image: 'src/assets/portfolio/projeto-falconseguros.png', link: 'https://www.falconseguros.com/' },
    { title: 'Projeto Gamma', category: 'Mobile', image: 'src/assets/portfolio/projeto-app-orcamento.png', link: 'https://spotify-clone-psi.vercel.app' },
    { title: 'Projeto Delta', category: 'Frontend', image: 'src/assets/portfolio/projeto-app-orcamento.png', link: 'https://spotify-clone-psi.vercel.app' },
    { title: 'Projeto Epsilon', category: 'UI/UX', image: 'src/assets/portfolio/projeto-app-orcamento.png', link: 'https://spotify-clone-psi.vercel.app' },
];

export function ProjectsSection() {
    return (
        <Box py="xl" mb="4rem">
            <Stack gap="xs" mb="xl">
                <Text
                    fw={500}
                    tt="uppercase"
                    lts="0.3em"
                    size="xs"
                    c="dimmed">
                    Portfolio
                </Text>
                <Divider size="xs" color="winterBlack.4" w={40} />
                <Title
                    order={2}
                    tt="uppercase"
                    fw={500}
                    fz="2.5rem"
                    c="winterBlack.9"
                >
                    Projetos Selecionados
                </Title>
            </Stack>

            <ScrollArea scrollbars="x" offsetScrollbars scrollbarSize={6} pb="md">
                <Group wrap="nowrap" gap="md" align="stretch">
                    {PROJECTS.map((project, index) => (
                        <Card
                            key={index}
                            component="a"
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            padding="lg"
                            radius={0}
                            withBorder
                            bg="var(--mantine-color-iceBlue-0)"
                            style={{
                                borderColor: 'var(--mantine-color-iceBlue-1)',
                                flex: '0 0 350px',
                                textDecoration: 'none',
                                transition: 'transform 0.2s ease',
                                '&:hover': {
                                    transform: 'translateY(-5px)'
                                }
                            }}
                        >
                            <Card.Section>
                                <Box h={220} style={{ overflow: 'hidden' }}>
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        height={220}
                                        fit="cover"
                                        fallbackSrc="https://placehold.co/600x400?text=Projeto"
                                    />
                                </Box>
                            </Card.Section>

                            <Group justify="space-between" mt="md">
                                <Stack gap={0}>
                                    <Text
                                        size="xs"
                                        tt="uppercase"
                                        fw={700}
                                        c="var(--mantine-color-winterBlack-3)"
                                    >
                                        {project.category}
                                    </Text>
                                    <Text
                                        fw={500}
                                        size="lg"
                                        c="var(--mantine-color-winterBlack-9)"
                                    >
                                        {project.title}
                                    </Text>
                                </Stack>
                                <IconExternalLink
                                    color="var(--mantine-color-winterBlack-9)"
                                    size={20}
                                    stroke={1.5}
                                />
                            </Group>
                        </Card>
                    ))}

                    {/* NÃO GOSTEI */}
                    <UnstyledButton
                        component="a"
                        href="/projetos"
                        style={{
                            border: '1.5px solid var(--mantine-color-winterBlack-4)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flex: '0 0 250px',
                        }}
                    >
                        <Stack align="center" gap="xs" style={{ color: "var(--mantine-color-winterBlack-9)" }}>
                            <Text fw={600} tt="uppercase" size="sm">Ver todos</Text>
                            <IconArrowUpRight size={32} stroke={1.5} />
                        </Stack>
                    </UnstyledButton>
                </Group>
            </ScrollArea>
        </Box>
    );
}