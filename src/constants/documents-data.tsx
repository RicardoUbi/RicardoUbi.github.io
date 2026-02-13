export const DOCS = [
  {
    id: 'arquitetura-e-qualidade-software',
    date: '12/02/2026',
    title: 'Arquitetura e Rigor Técnico',
    description: 'Notas sobre padrões de projeto e escalabilidade.',
    category: 'Engenharia de Software',
    content: [
      { type: 'text', value: 'Quando aprendemos a programar, acreditamos que o desenvolvimento de um software é apenas codar. Porém, conforme o projeto cresce, percebemos que é necessário algo a mais para manter o ambiente organizado e sustentável. Esse "algo a mais" é a previsibilidade: a capacidade de entender o sistema sem precisar ler cada linha de código toda vez.' },

      { type: 'subtitle', value: 'Tipagem Estrita' },
      { type: 'text', value: 'A tipagem não é burocracia, é um seguro contra erros bobos. Ela transfere o erro que aconteceria na mão do usuário final para o seu editor de código, avisando o problema em tempo real.' },
      { type: 'text', value: 'Imagine um sistema de e-commerce onde o desconto pode ser null. Sem tipagem estrita, o sistema tenta calcular o preço final e quebra. Com tipagem, o compilador te obriga a tratar o caso onde o desconto não existe antes mesmo de você rodar o app.' },
      { type: 'code', value: '// Sem tipagem (JS): O erro só aparece quando o código roda\nfunction calcularDesconto(preco, desconto) {\n  return preco - desconto;\n}\n\n// Se desconto vier null do banco: 100 - null = 100 (Silencioso, mas perigoso)\n\n// Com tipagem (TS):\ninterface Produto {\n  preco: number;\n  desconto: number | null;\n}\n\nfunction calcular(p: Produto) {\n  // O compilador te obriga a tratar o null antes de subtrair\n  const valorDesconto = p.desconto ?? 0;\n  return p.preco - valorDesconto;\n}', language: 'typescript' },

      { type: 'subtitle', value: 'Princípios de Contrato: Diga o que faz, faça o que diz' },
      { type: 'text', value: 'Uma função sem um contrato claro é uma caixa preta instável. O contrato define: "Se você me der as entradas X, eu garanto a saída Y". Quando você nomeia bem e define tipos, você reduz a carga cognitiva de quem lê seu código.' },
      { type: 'text', value: 'Neste exemplo, o nome é genérico e o contrato é implícito. Você é obrigado a ler a implementação para saber como usar a função:' },
      { type: 'code', value: 'int validar(string x){\n  // ... lógica complexa ...\n  return 1;\n}', language: 'c++' },
      { type: 'text', value: 'Já neste exemplo, a assinatura entrega a intenção de imediato. O comentário de contrato serve como uma especificação formal do comportamento esperado:' },
      { type: 'code', value: '// Contrato: String (CPF) -> Boolean\n// Objetivo: Verifica se o formato e os dígitos do CPF são matematicamente válidos.\nbool is_cpf_valid(string cpf) {\n  // ... lógica complexa ... \n  return true;\n}', language: 'c++' },

      { type: 'subtitle', value: 'Testes Unitários' },
      { type: 'text', value: 'Se o contrato é a promessa, o teste unitário é a prova. Eles são sua rede de segurança: garantem que se você trocar um algoritmo pesado por um leve, a regra de negócio continuará intacta. Se o teste passar, você tem a liberdade de refatorar sem medo.' },
      { type: 'code', value: ';; calculaNotas: ListaAlunos -> ListaNúmero\n;; obj: Dada a lista de alunos, devolver a lista de notas finais.\n\n;; Testes (Check-expect):\n(check-expect (calculaNotas empty) empty)\n(check-expect (calculaNotas L1) (list 7.1 4.3 9.9))\n\n(define (calculaNotas @lista)\n  (cond\n    [(empty? @lista) empty]\n    [else (cons (calculaNotaFinal (first @lista))\n                (calculaNotas (rest @lista)))]))', language: 'racket' },

      { type: 'subtitle', value: 'Arquitetura Modular' },
      { type: 'text', value: 'Uma arquitetura bem definida (como Clean Architecture ou DDD) serve para isolar o que é "regra de negócio" do que é "detalhe técnico" (como banco de dados ou frameworks). Isso permite que, ao precisar trocar o banco de dados ou a biblioteca de interface, você altere apenas um módulo específico sem que o resto do sistema sequer perceba.' },
      { type: 'text', value: 'Veja como uma estrutura modular separa as responsabilidades de forma visual:' },
      { type: 'code', value: '📁 Domain (Regras de Negócio Puras)\n│ ├── Entities/ (Produto, Categoria)\n│ ├── Repositories/ (Interfaces de acesso a dados)\n\n📁 Application (Casos de Uso)\n│ ├── Services/ (Lógica de orquestração)\n│ ├── Dtos/ (Objetos de transferência de dados)\n\n📁 Infrastructure (Detalhes Técnicos)\n│ ├── Context/ (Configuração do Banco de Dados)\n│ ├── Repositories/ (Implementação real do acesso a dados)\n\n📁 Presentation (Interface com o Mundo Externo)\n│ ├── Controllers/ (Endpoints da API)\n│ ├── ViewModels/ (O que é enviado para a tela)', language: 'text' },

      { type: 'subtitle', value: 'Conclusão' },
      { type: 'text', value: 'Pode parecer que seguir esses padrões te deixa mais lento no começo. E deixa mesmo. Mas a velocidade de um desenvolvedor/engenheiro de software não é medida pelo quão rápido ele digita, mas pelo quão pouco ele precisa voltar para consertar o que já estava pronto.' },
    ]
  },
];