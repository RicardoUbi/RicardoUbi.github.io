import { MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';
import { theme } from './constants/theme';
import Layout from './components/Layout';


export default function App() {

  return (
    <MantineProvider theme={theme} defaultColorScheme="dark">
      <Layout>
        <h1>Teste</h1>
        <p>
          A história do desenvolvimento web é uma narrativa fascinante de inovação contínua e evolução tecnológica. Nos primórdios da internet, as páginas web eram estáticas, construídas apenas com HTML básico e exibiam principalmente texto. Com o tempo, a introdução do CSS trouxe a possibilidade de estilização, permitindo que desenvolvedores separassem conteúdo de apresentação e criassem designs mais atraentes.

          A revolução realmente começou com o advento do JavaScript, que transformou páginas estáticas em experiências dinâmicas e interativas. A era Web 2.0 viu o surgimento de aplicações ricas como Google Maps e Gmail, que demonstravam o potencial da web como plataforma de aplicativos. Posteriormente, frameworks como jQuery simplificaram a manipulação do DOM e a comunicação assíncrona com AJAX, pavimentando o caminho para experiências de usuário mais fluidas.

          Nos últimos anos, o ecossistema JavaScript explodiu com frameworks robustos como React, Angular e Vue.js. O React em particular, desenvolvido pelo Facebook, introduziu um paradigma baseado em componentes que mudou fundamentalmente como construímos interfaces de usuário. Sua abordagem declarativa, combinada com o Virtual DOM para otimização de performance, permitiu a criação de aplicações complexas e de grande escala com manutenção mais fácil.

          Paralelamente, a ascensão do Node.js permitiu que JavaScript fosse executado no servidor, criando a possibilidade de stacks completas em uma única linguagem. Este avanço, combinado com ferramentas como Webpack, Babel e TypeScript, transformou o desenvolvimento web front-end em uma disciplina de engenharia sofisticada, com sistemas de build complexos, tipagem estática e arquiteturas escaláveis.

          A era moderna também vê a proliferação de Progressive Web Apps (PWAs), que trazem características de aplicativos nativos para a web, incluindo funcionamento offline, notificações push e instalação em dispositivos. Além disso, tecnologias como WebAssembly estão abrindo novas fronteiras, permitindo que código de outras linguagens como C++ e Rust seja executado no navegador com performance próxima do nativo.

          O desenvolvimento web contemporâneo enfatiza não apenas funcionalidade, mas também acessibilidade, performance e experiência do usuário. Ferramentas de análise de Lighthouse, conceitos de Core Web Vitals e práticas de SEO tornaram-se partes integrantes do fluxo de trabalho. A responsividade, outrora uma consideração secundária, é agora fundamental em um mundo multi-dispositivo onde os usuários acessam conteúdo de smartphones, tablets, desktops e até mesmo dispositivos vestíveis.

          À medida que avançamos, tecnologias emergentes como inteligência artificial integrada, Web3 e a metaverso prometem redefinir novamente o que é possível na web. O ciclo de inovação parece acelerar continuamente, com novas ferramentas, frameworks e melhores práticas surgindo constantemente. Para desenvolvedores web, essa evolução rápida representa tanto um desafio quanto uma oportunidade - a necessidade de aprendizado contínuo é balanceada pela empolgante possibilidade de criar experiências que eram inimagináveis apenas uma década atrás.

          A jornada do desenvolvimento web é testemunha do poder transformador da tecnologia e da criatividade humana. De páginas de texto simples a aplicações complexas que rivalizam com software nativo, cada avanço constrói sobre o trabalho de inovadores anteriores. O futuro promete interfaces ainda mais imersivas, interações mais naturais e capacidades que hoje só podemos imaginar, mantendo a web como a plataforma mais democrática e acessível para criação e compartilhamento de informações na história da humanidade.
        </p>
      </Layout>
    </MantineProvider>
  );
}