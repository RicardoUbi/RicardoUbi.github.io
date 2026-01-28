import { Title, Text, Container, Group, Anchor, Popover, ActionIcon, Stack, Box, UnstyledButton } from '@mantine/core';
import '@mantine/core/styles.css';
import { IconBriefcase, IconHome, IconNotebook, IconUser, IconWorld, type IconProps } from '@tabler/icons-react';
import { useState, type ReactNode } from 'react';
import classes from './Layout.module.css';
import { Link, useLocation } from 'react-router-dom';

interface LayoutProps {
    children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
    const [language, setLanguage] = useState<'pt' | 'en' | 'es'>('pt');
    const location = useLocation();

    const languageOptions = {
        'pt': {
            'value': 'pt',
            'label': 'Português do Brasil',
            'description': 'Brazilian Portuguese'
        },
        'en': {
            'value': 'en',
            'label': 'English',
            'description': 'English'
        },
        'es': {
            'value': 'es',
            'label': 'Español de Latinoamérica',
            'description': 'Latin America Spanish'
        },
    }

    const navItems = [
        { label: 'Início', icon: IconHome, href: '/' },
        { label: 'Sobre', icon: IconUser, href: '/sobre' },
        { label: 'Portfolio', icon: IconBriefcase, href: '/portfolio' },
        { label: 'Documentos', icon: IconNotebook, href: '/documentos' },
    ];

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
                        <Popover position="bottom-end" shadow="md">
                            <Popover.Target>
                                <ActionIcon variant="subtle" size="lg" style={styles.iconButton}>
                                    <IconWorld size={20} />
                                </ActionIcon>
                            </Popover.Target>

                            <Popover.Dropdown style={styles.popover}
                                aria-label="Selecionar idioma"
                            >
                                <Stack gap="xs" style={styles.navButton}>
                                    {Object.values(languageOptions).map((option) => (
                                        <UnstyledButton
                                            key={option.value}
                                            onClick={() => setLanguage(option.value as 'pt' | 'en' | 'es')}
                                            style={{
                                                backgroundColor: language === option.value ? 'var(--mantine-color-winterBlack-7)' : 'transparent',
                                                padding: '8px',
                                                borderRadius: '4px',
                                                width: '100%',
                                            }}
                                        >
                                            <Group justify="space-between">
                                                <Box>
                                                    <Text size="sm" style={styles.navLabel}>
                                                        {option.label}
                                                    </Text>
                                                    <Text size="xs" style={styles.navDescription}>
                                                        {option.description}
                                                    </Text>
                                                </Box>
                                            </Group>
                                        </UnstyledButton>
                                    ))}

                                </Stack>
                            </Popover.Dropdown>
                        </Popover>
                    </Group>
                </Group>
            </Box>

            <Box style={styles.main}>
                <Stack gap="xl" style={styles.contentBaseWrapper}>
                    <Group justify="end" gap={0} style={styles.contentNavWrapper}>
                        {navItems.map((item) => {
                            const isActive = item.href === '/'
                                ? location.pathname === '/'
                                : location.pathname.startsWith(item.href);

                            return (
                                <NavIcon
                                    key={item.label}
                                    icon={item.icon}
                                    label={item.label}
                                    active={isActive}
                                    href={item.href}
                                />
                            );
                        })}
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

function NavIcon({ icon: Icon, label, href, active }: {
    icon: React.ForwardRefExoticComponent<IconProps & React.RefAttributes<SVGSVGElement>>;
    label: string;
    href: string;
    active: boolean
}) {
    return (
        <UnstyledButton
            component={Link}
            to={href}
            className={`${classes.navButton} ${active ? classes.active : ''}`}
        >
            <Group gap="sm">
                <Icon size={18} />
                <Text size="sm" fw={active ? 700 : 500}>
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
        minHeight: '35rem',
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
        color: 'var(--mantine-color-iceBlue-0)',
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

    navDescription: {
        color: 'var(--mantine-color-winterGray-1)',
    },

    navButton: {
        color: 'var(--mantine-color-winterGray-1)',
        transition: 'all 0.2s ease',
        justifyContent: 'center',
        display: 'flex',
        alignItems: 'center',
    }
};
