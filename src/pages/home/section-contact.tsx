import { Box, Group, Stack, Text, UnstyledButton } from "@mantine/core";
import { IconArrowUpRight } from "@tabler/icons-react";

export function ContactSection() {
  const socialLinks = [
    { label: 'GitHub', href: 'https://github.com/ricardoubi' },
    { label: 'LinkedIn', href: 'https://linkedin.com/in/ricardoubi' },
    { label: 'Instagram', href: '#' },
  ];

  return (
    <Box py="5rem" mt="2rem" style={{ borderTop: '1px solid var(--mantine-color-winterBlack-1)' }}>
        <Stack gap="xl">
          <Group gap="xl" justify="space-between" w={{ base: '100%', md: '50%' }}>
            {socialLinks.map((link) => (
              <UnstyledButton
                key={link.label}
                component="a"
                href={link.href}
                target="_blank"
                style={{ borderBottom: '1px solid transparent', transition: '0.2s' }}
                onMouseEnter={(e) => e.currentTarget.style.borderBottom = '1px solid var(--mantine-color-winterBlack-9)'}
                onMouseLeave={(e) => e.currentTarget.style.borderBottom = '1px solid transparent'}
              >
                <Group gap={4}>
                  <Text size="sm" fw={600} tt="uppercase" lts="0.1em" c={"var(--mantine-color-winterBlack-9)"}>{link.label}</Text>
                  <IconArrowUpRight size={14} color="var(--mantine-color-winterBlack-9)"/>
                </Group>
              </UnstyledButton>
            ))}
          </Group>
        </Stack>
    </Box>
  );
}