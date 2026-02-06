export const DOCS = [
  {
    id: 'arquitetura-e-qualidade-software',
    date: '04/02/2026',
    title: 'Arquitetura e Rigor Técnico',
    description: 'Notas sobre padrões de projeto e escalabilidade.',
    category: 'Engenharia de Software',
    content: [
      { type: 'text', value: 'Ao longo dos meus projetos, desde APIs em Flask com testes estritos até Smart Contracts em Solidity, percebi que a qualidade de um software é definida pela sua previsibilidade.' },
      { type: 'subtitle', value: 'Princípios de Estabilidade' },
      { type: 'text', value: 'Implementar linting estrito e validação de dados (como usei com Cerberus no gerador de Barcode) não é apenas sobre evitar erros, mas sobre criar uma base onde o crescimento é sustentável.' },
      { type: 'list', items: [
        'Testes unitários garantem que a refatoração não quebre a lógica de negócio.',
        'Tipagem estrita com TypeScript previne erros em tempo de execução.',
        'Arquitetura modular facilita a manutenção a longo prazo.'
      ]},
      { type: 'code', value: '# Exemplo de validação simples\nschema = {"id": {"type": "integer"}, "status": {"type": "string"}}\nv.validate({"id": 1, "status": "active"}, schema)', language: 'python' }
    ]
  },
  {
    id: 'interface-alem-do-pixel',
    date: '04/02/2026',
    title: 'Interfaces: Além do Pixel-Perfect',
    description: 'Estudo sobre estados de UI e fluidez visual.',
    category: 'Frontend Engineering',
    content: [
      { type: 'text', value: 'Estudar interfaces de alta fidelidade, como as da Apple e Spotify, me ensinou que a experiência do usuário não está apenas no visual, mas no tempo de resposta e na fluidez das transições.' },
      { type: 'subtitle', value: 'O Papel do Estado na UI' },
      { type: 'text', value: 'Em projetos como o configurador do Apple Watch, a manipulação direta do DOM e o gerenciamento de estados garantem que a interface responda de forma natural ao toque e ao clique.' },
      { type: 'text', value: 'Para mim, um software cumpre seu papel quando a complexidade técnica do backend é traduzida em uma interface simples, intuitiva e acessível.' },
      { type: 'code', value: '// Foco em estados limpos\nconst [isActive, setIsActive] = useState(false);\nconst toggleStyle = isActive ? styles.active : styles.idle;', language: 'javascript' }
    ]
  }
];