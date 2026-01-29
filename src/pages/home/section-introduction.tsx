import { Title, Text, Stack, Button, Box, Image, SimpleGrid, Divider } from '@mantine/core';
import { IconArrowRight } from '@tabler/icons-react';

export default function IntroductionSection() {
    return (
        <Box py={0} mb={"12rem"}>
            <SimpleGrid cols={{ base: 1, md: 2 }} spacing={80} verticalSpacing="xl" >
                
                <Box style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
                    <Image 
                        src="src/assets/section-introduction-profile.png" 
                        alt="Ricardo Ubirajara"
                        style={{ 
                            width: '100%', 
                            maxWidth: '400px',
                            height: '100%',
                            maxHeight: '427px',
                            zIndex: 1,
                            // filter: 'grayscale(100%)' 
                        }}
                    />
                </Box>

                <Stack gap="xl">
                    <Stack gap="xs">
                        <Text 
                            fw={500} 
                            tt="uppercase" 
                            lts="0.3em" 
                            size="xs" 
                            c="dimmed"
                        >
                            Software Developer
                        </Text>
                        <Divider size="xs" color="winterBlack.4" w={40} />
                    </Stack>

                    <Title 
                        order={1} 
                        style={{ 
                            fontSize: '3.5rem', 
                            lineHeight: 0.9,
                            fontWeight: 500,
                            textTransform: 'uppercase'
                        }}
                        c="winterBlack.9"
                    >
                        Ricardo <br /> Ubirajara
                    </Title>

                    <Text 
                        size="xl" 
                        c="winterBlack.7" 
                        fw={300} 
                        style={{maxWidth: 450 }}
                    >
                        Dedicado a criar soluções para transformar ideias em realidade. 
                        Focado em performance e experiência do usuário.
                    </Text>

                    <Stack gap={0}>
                        <Text c="winterBlack.9" size="sm" fw={700} tt="uppercase" lts="0.1em">
                            Porto Alegre, RS
                        </Text>
                        {/* <Text c="winterBlack.5" size="xs">
                            Disponível para projetos globais
                        </Text> */}
                    </Stack>

                    <Button 
                        component="a"
                        href="https://www.linkedin.com/in/ricardoubi/"
                        target="_blank"
                        rel="noopener noreferrer"
                        variant="outline" 
                        color="winterBlack.9" 
                        size="lg"
                        radius={0}
                        rightSection={<IconArrowRight size={18} />}
                        styles={{
                            root: {
                                width: 'fit-content',
                                borderWidth: '1.5px',
                                '&:hover': {
                                    backgroundColor: 'var(--mantine-color-winterBlack-9)',
                                    color: 'white'
                                }
                            }
                        }}
                    >
                        Conecte-se
                    </Button>
                </Stack>
            </SimpleGrid>
        </Box>
    );
}