import { Title, Text, Container, Group, Anchor, Popover, ActionIcon, Stack, Box, UnstyledButton } from '@mantine/core';
import '@mantine/core/styles.css';
import { IconBriefcase, IconHome, IconNotebook, IconUser, IconWorld } from '@tabler/icons-react';
import { useState, type ReactNode } from 'react';
import classes from './Layout.module.css';

interface LayoutProps {
    children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
    const [language, setLanguage] = useState<'pt' | 'en'>('pt');

    return (
        <Box style={styles.root}>
            <Box style={styles.header}>
                <Group justify="space-between" style={{ width: '100%' }}>
                    <Anchor href="/" style={{ textDecoration: 'none' }}>
                        <Title order={1} style={styles.logo}>
                            RICARDO
                        </Title>
                    </Anchor>
                    <Group gap="xl">
                        {/* LANGUAGE SWITCH */}
                        <Popover position="bottom-end" withArrow shadow="md">
                            <Popover.Target>
                                <ActionIcon variant="subtle" size="lg" style={styles.iconButton}>
                                    <IconWorld size={20} />
                                </ActionIcon>
                            </Popover.Target>

                            <Popover.Dropdown style={styles.popover}>
                                <Stack gap="xs">
                                    <Text
                                        size="sm"
                                        style={styles.langOption}
                                        onClick={() => setLanguage('pt')}
                                    >
                                        🇧🇷 Português
                                    </Text>
                                    <Text
                                        size="sm"
                                        style={styles.langOption}
                                        onClick={() => setLanguage('en')}
                                    >
                                        🇺🇸 English
                                    </Text>
                                </Stack>
                            </Popover.Dropdown>
                        </Popover>                    </Group>
                </Group>
            </Box>

            <Box style={styles.main}>
                <Stack gap="xl" style={styles.contentBaseWrapper}>
                    <Group justify="end" gap={0} style={styles.contentNavWrapper}>
                        <NavIcon icon={<IconHome size={20} />} label="Início" />
                        <NavIcon icon={<IconUser size={20} />} label="Sobre" />
                        <NavIcon icon={<IconBriefcase size={20} />} label="Portfolio" />
                        <NavIcon icon={<IconNotebook size={20} />} label="Blog" />
                    </Group>
                    <Container style={styles.contentWrapper}>
                        {children}
                    </Container>
                </Stack>
            </Box>

            <Box style={styles.footer}>
                <Group justify="center" style={{ width: '100%' }}>
                    <Text size="xs" style={styles.footerText}>
                        Copyright 2026 © Ricardo Ubirajara - All rights reserved
                    </Text>
                </Group>
            </Box>
        </Box>
    );
}

function NavIcon({ icon, label }: { icon: ReactNode; label: string }) {
    return (
        <UnstyledButton className={classes.navButton}>
            <Group gap="sm">
                {icon}
                <Text size="sm" style={styles.navLabel}>
                    {label}
                </Text>
            </Group>
        </UnstyledButton>
    );
}


const styles = {
    root: {
        backgroundColor: 'var(--mantine-color-winterBlack-9)',
    },

    header: {
        backgroundColor: 'var(--mantine-color-winterBlack-9)',
        borderBottom: '1px solid var(--mantine-color-winterBlack-9)',
        padding: '2.6rem 2rem 2.6rem 2rem',
        display: 'flex',
        alignItems: 'center',
        height: 60
    },

    logo: {
        color: 'var(--mantine-color-iceBlue-0)',
        letterSpacing: '0.15em',
        fontSize: '1.9rem',
    },

    link: {
        color: 'var(--mantine-color-iceBlue-2)',
        fontWeight: 500,
        textDecoration: 'none',
    },

    main: {
        display: 'flex',
        justifyContent: 'center',
        paddingTop: '1rem',
        paddingBottom: '1rem',
    },

    contentBaseWrapper: {
        width: '80%',
        maxWidth: '72rem',
        backgroundColor: 'var(--mantine-color-winterBlack-0)',
    },

    contentNavWrapper: {
        padding: '0 0 2.6rem 0',
        width: '100%'
    },

    contentWrapper: {
        padding: '1rem 2rem 2.6rem 2rem',
        width: '100%'
    },

    footer: {
        backgroundColor: 'var(--mantine-color-winterGray-9)',
        borderTop: '1px solid var(--mantine-color-winterBlack-9)',
        display: 'flex',
        alignItems: 'center',
        height: 60
    },

    footerText: {
        color: 'var(--mantine-color-winterGray-3)',
    },

    iconButton: {
        color: 'var(--mantine-color-iceBlue-2)',
    },

    popover: {
        backgroundColor: 'var(--mantine-color-winterBlack-8)',
        border: '1px solid var(--mantine-color-winterBlack-7)',
    },

    langOption: {
        cursor: 'pointer',
        color: 'var(--mantine-color-winterGray-1)',
    },

    navLabel: {
        fontWeight: 500,
        letterSpacing: '0.03em',
    },

};
