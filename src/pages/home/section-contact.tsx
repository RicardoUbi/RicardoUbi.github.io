import { Box, Group, Stack, Text, UnstyledButton } from "@mantine/core";
import { IconBrandLinkedin, IconBrandGithub, IconFileDescription } from "@tabler/icons-react";
import classes from './home.module.css'; 

export function ContactSection() {
  const socialLinks = [
    { label: 'GitHub', href: 'https://github.com/ricardoubi', icon: IconBrandGithub },
    { label: 'LinkedIn', href: 'https://linkedin.com/in/ricardoubi', icon: IconBrandLinkedin },
    { label: 'Currículo', href: '#', icon: IconFileDescription },
  ];

  return (
    <Box py="5rem" mt="4rem" style={{ borderTop: '1px solid var(--mantine-color-winterBlack-1)' }}>
      <Stack gap="xl" align="center">
        <Group gap={"6.25rem"} justify="center">
          {socialLinks.map((link) => {
            const Icon = link.icon;
            return (
              <UnstyledButton
                key={link.label}
                component="a"
                href={link.href}
                target="_blank"
                className={classes.buttonRoot} // Classe do container
              >
                <Stack gap={"0.625rem"} align="center">
                  <Text className={classes.animatedText} size="md" fw={450}>
                    {link.label}
                  </Text>
                  
                  <Box className={classes.animatedIcon}>
                    <Icon size={"2.5rem"} stroke={1.5} />
                  </Box>
                </Stack>
              </UnstyledButton>
            );
          })}
        </Group>

        {/* E-mail Button (Manteve-se igual ou pode criar classe também) */}
        <UnstyledButton
          component="a"
          href="mailto:ricardoubi.contato@gmail.com"
          mt="md"
        >
          <Text
            size="lg"
            fw={500}
            c="winterBlack.9"
            style={{
              borderBottom: '1.5px solid var(--mantine-color-winterBlack-9)',
              paddingBottom: '2px'
            }}
          >
            ricardoubi.contato@gmail.com
          </Text>
        </UnstyledButton>
      </Stack>
    </Box>
  );
}