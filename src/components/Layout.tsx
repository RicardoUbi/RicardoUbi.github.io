import { Title, Text, Container, Group, Anchor, Popover, ActionIcon, Stack, Box, UnstyledButton, Burger, Drawer } from '@mantine/core';
import '@mantine/core/styles.css';
import { IconBriefcase, IconHome, IconNotebook, IconUser, IconWorld } from '@tabler/icons-react';
import { type ReactNode } from 'react';
import classes from './Layout.module.css';
import { Link, useLocation } from 'react-router-dom';
import { useDisclosure, useMediaQuery } from '@mantine/hooks';
import { useTranslation } from 'react-i18next';

interface LayoutProps {
    children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
    const { t, i18n } = useTranslation();
    const [opened, { toggle, close }] = useDisclosure(false);
    const isMobile = useMediaQuery('(max-width: 768px)');
    const location = useLocation();

    const currentLanguage = i18n.language;

    const changeLanguage = (lng: string) => {
        i18n.changeLanguage(lng);
    };

    const languageOptions = {
        'pt': { 'value': 'pt', 'label': 'Português', 'description': 'BR' },
        'en': { 'value': 'en', 'label': 'English', 'description': 'US' },
    };

    const navItems = [
        { label: t('nav.home'), icon: IconHome, href: '/' },
        { label: t('nav.about'), icon: IconUser, href: '/sobre' },
        { label: t('nav.portfolio'), icon: IconBriefcase, href: '/portfolio' },
        { label: t('nav.docs'), icon: IconNotebook, href: '/documentos' },
    ];

    const renderNavItems = () => navItems.map((item) => {
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
                onClick={close}
            />
        );
    });

    return (
        <Box style={styles.root}>
            <Box style={styles.header}>
                <Group justify="space-between" style={{ width: '100%' }} wrap="nowrap">
                    <Anchor component={Link} to="/" style={{ textDecoration: 'none' }}>
                        <Title order={1} style={styles.logo}>
                            RICARDO
                        </Title>
                    </Anchor>

                    <Group gap="md">
                        <Popover position="bottom-end" shadow="md">
                            <Popover.Target>
                                <ActionIcon variant="subtle" size="lg" style={styles.iconButton}>
                                    <IconWorld size={20} />
                                </ActionIcon>
                            </Popover.Target>
                            <Popover.Dropdown style={styles.popover}>
                                <Stack gap="xs">
                                    {Object.values(languageOptions).map((option) => (
                                        <UnstyledButton
                                            key={option.value}
                                            onClick={() => changeLanguage(option.value)}
                                            style={{
                                                // Verifica o idioma ativo para destacar
                                                backgroundColor: currentLanguage.startsWith(option.value)
                                                    ? 'var(--mantine-color-winterBlack-7)'
                                                    : 'transparent',
                                                padding: '8px',
                                                borderRadius: '4px',
                                                color: 'white'
                                            }}
                                        >
                                            <Text size="sm" fw={500}>{option.label}</Text>
                                        </UnstyledButton>
                                    ))}
                                </Stack>
                            </Popover.Dropdown>
                        </Popover>

                        {isMobile && (
                            <Burger opened={opened} onClick={toggle} color="white" size="sm" />
                        )}
                    </Group>
                </Group>
            </Box>

            <Box style={styles.main}>
                <Stack gap={0} style={{
                    width: isMobile ? '95%' : '80%',
                    maxWidth: '72rem'
                }}>
                    {!isMobile && (
                        <Group justify="end" gap={0} style={{ width: '100%' }}>
                            {renderNavItems()}
                        </Group>
                    )}

                    <Box style={styles.contentBackground}>
                        <Container size="xl" style={styles.contentWrapper}>
                            {children}
                        </Container>
                    </Box>
                </Stack>
            </Box>

            <Drawer
                opened={opened}
                onClose={close}
                size="75%"
                padding="xl"
                title={t('nav.menu')} // Traduzido
                styles={{
                    content: { backgroundColor: 'var(--mantine-color-winterBlack-9)', color: 'white' },
                    header: { backgroundColor: 'var(--mantine-color-winterBlack-9)', color: 'white' },
                }}
            >
                <Stack gap="md" mt="xl">
                    {renderNavItems()}
                </Stack>
            </Drawer>

            <Box style={styles.footer}>
                <Group justify="center" style={{ width: '100%' }}>
                    <Text size="xs" style={styles.footerText}>
                        {t('footer.copy')}
                    </Text>
                </Group>
            </Box>
        </Box>
    );
}

function NavIcon({ icon: Icon, label, href, active, onClick }: any) {
    return (
        <UnstyledButton
            component={Link}
            to={href}
            onClick={onClick}
            className={`${classes.navButton} ${active ? classes.active : ''}`}
            style={{
                padding: '12px 20px',
                borderBottom: active && !window.matchMedia('(max-width: 768px)').matches
                    ? '2px solid white'
                    : 'none'
            }}
        >
            <Group gap="sm">
                <Icon size={18} />
                <Text size={"0.8rem"} fw={700} tt="uppercase" lts="0.1em">
                    {label}
                </Text>
            </Group>
        </UnstyledButton>
    );
}

const styles = {
    root: {
        backgroundColor: 'var(--mantine-color-winterBlack-9)',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column' as const,
    },
    header: {
        padding: '1.5rem 2rem',
        display: 'flex',
        alignItems: 'center',
        zIndex: 100,
    },
    logo: {
        color: 'var(--mantine-color-iceBlue-0)',
        letterSpacing: '0.15em',
        fontSize: '1.5rem',
    },
    main: {
        flex: 1,
        display: 'flex',
        justifyContent: 'center',
        paddingBottom: '4rem',
    },
    contentBackground: {
        backgroundColor: 'var(--mantine-color-winterBlack-0)',
        minHeight: '60vh',
    },
    contentWrapper: {
        padding: '4rem 3rem',
        width: '100%',
    },
    footer: {
        backgroundColor: 'var(--mantine-color-winterGray-9)',
        borderTop: '1px solid var(--mantine-color-winterBlack-9)',
        display: 'flex',
        alignItems: 'center',
        height: 60
    },
    footerText: {
        color: 'var(--mantine-color-winterGray-5)',
    },
    iconButton: {
        color: 'var(--mantine-color-iceBlue-0)',
    },
    popover: {
        backgroundColor: 'var(--mantine-color-winterBlack-8)',
        border: '1px solid var(--mantine-color-winterBlack-7)',
    }
};
