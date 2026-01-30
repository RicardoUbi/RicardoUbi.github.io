import { Title, Text, Stack, Box, Card, Group, UnstyledButton, ScrollArea, Image, Divider, Button } from '@mantine/core';
import { IconArrowRight, IconExternalLink } from '@tabler/icons-react';
import { PROJECTS } from '../../constants/projects-data';

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
                    {PROJECTS.slice(0, 3).map((project, index) => (
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
                            href="/projetos"
                            rightSection={<IconArrowRight size={16} />}
                        >
                            Ver todos
                        </Button>
                    </UnstyledButton>
                </Group>
            </ScrollArea>
        </Box>
    );
}