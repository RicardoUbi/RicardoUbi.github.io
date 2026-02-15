import { Box, Group, Stack, Text, UnstyledButton, Title, SimpleGrid, Flex } from "@mantine/core";
import { IconBrandLinkedin, IconBrandGithub, IconFileDescription } from "@tabler/icons-react";
import classes from './home.module.css';
import { useTranslation } from "react-i18next";
import CV_Ricardo_Ubi from '../../assets/files/CV_Ricardo_Ubirajara.pdf';

export function ContactSection() {
  const { t } = useTranslation();

  const socialLinks = [
    { label: 'GitHub', href: 'https://github.com/ricardoubi', icon: IconBrandGithub },
    { label: 'LinkedIn', href: 'https://linkedin.com/in/ricardoubi', icon: IconBrandLinkedin },
    { label: t('contact-section.curriculum-cta'), href: CV_Ricardo_Ubi, icon: IconFileDescription },
  ];

  return (
    <Box
      component="footer"
      py={{ base: "4rem", md: "6rem" }} // Diminui o padding no mobile
      mt="8rem"
      style={{ borderTop: '1px solid var(--mantine-color-winterBlack-1)' }}
    >
      {/* Usamos SimpleGrid para controlar a quebra de linha automaticamente */}
      <SimpleGrid
        cols={{ base: 1, md: 2 }}
        spacing={{ base: "xl", md: "lg" }}
      >
        {/* Lado do E-mail */}
        <Flex
          direction="column"
          gap="xs"
          align={{ base: 'center', md: 'flex-start' }}
        >
          <Text fz="0.6rem" fw={900} tt="uppercase" lts="0.3em" c="winterBlack.3">
            {t('contact-section.subtitle')}
          </Text>
          <UnstyledButton
            component="a"
            href="mailto:ricardoubi.contato@gmail.com"
            className={classes.emailLink}
          >
            <Title
              order={3}
              // Diminui a fonte no mobile para não quebrar o layout
              fz={{ base: "1.4rem", sm: "1.8rem", md: "2rem" }}
              fw={400}
              c="winterBlack.9"
              style={{ lineHeight: 1.1, textAlign: 'center' }}
            >
              ricardoubi.contato@gmail.com
            </Title>
          </UnstyledButton>
        </Flex>

        {/* Lado das Redes Sociais */}
        <Flex
          direction="column"
          gap="xs"
          align={{ base: 'center', md: 'flex-end' }}
        >
          <Group
            gap="lg"
            justify="center"
          >
            {socialLinks.map((link) => {
              const Icon = link.icon;
              return (
                <UnstyledButton
                  key={link.label}
                  component="a"
                  href={link.href}
                  target="_blank"
                  className={classes.socialButton}
                >
                  <Stack gap={4} align="center">
                    <Box className={classes.iconContainer}>
                      <Icon size={22} stroke={1.2} color="var(--mantine-color-winterBlack-9)" />
                    </Box>
                    <Text fz="0.7rem" fw={500} tt="uppercase" lts="0.1em" c="winterBlack.9">
                      {link.label}
                    </Text>
                  </Stack>
                </UnstyledButton>
              );
            })}
          </Group>
        </Flex>
      </SimpleGrid>
    </Box >
  );
}