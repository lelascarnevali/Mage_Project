export interface QuizQuestion {
  question: string;
  answerOptions: {
    text: string;
    rationale: string;
    isCorrect: boolean;
  }[];
  hint: string;
  difficulty: number; // 1 a 5
  topic: 'residuos' | 'recursos'; // resíduos ou recursos naturais
}

// Função para embaralhar as opções de resposta
const shuffleArray = <T>(array: T[]): T[] => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

const rawQuestions: QuizQuestion[] = [
  // TÓPICO: RESÍDUOS
  // DIFICULDADE 1
  {
    question: "O que o texto define como 'consumo'?",
    answerOptions: [
      {
        text: "O ato de adquirir ou utilizar mercadorias ou serviços para satisfazer necessidades.",
        rationale: "Correto. Esta é a definição exata apresentada no texto para o ato de consumir.",
        isCorrect: true
      },
      {
        text: "Apenas a compra de alimentos no supermercado.",
        rationale: "Incorreto. O consumo envolve muito mais do que apenas alimentos, incluindo serviços e todos os tipos de mercadorias.",
        isCorrect: false
      },
      {
        text: "O processo de fabricar produtos em uma indústria.",
        rationale: "Incorreto. A fabricação é uma etapa da produção, enquanto o consumo é a utilização do produto final.",
        isCorrect: false
      },
      {
        text: "O descarte de materiais que não usamos mais.",
        rationale: "Incorreto. O descarte é a última etapa da vida de um produto, que ocorre após o consumo.",
        isCorrect: false
      }
    ],
    hint: "Pense no que fazemos quando compramos ou usamos algo.",
    difficulty: 1,
    topic: 'residuos'
  },
  {
    question: "Qual é a diferença entre 'resíduo' e 'rejeito' (lixo)?",
    answerOptions: [
      {
        text: "Resíduo pode ser reaproveitado, enquanto rejeito não pode.",
        rationale: "Correto. O texto explica que o termo lixo (ou rejeito) deve ser usado para o que não pode ser reaproveitado, e resíduo é o que pode ter um novo uso.",
        isCorrect: true
      },
      {
        text: "Resíduo é orgânico e rejeito é plástico.",
        rationale: "Incorreto. A diferença não está no material, mas no potencial de reaproveitamento de cada um.",
        isCorrect: false
      },
      {
        text: "Resíduo vem das casas e rejeito vem das indústrias.",
        rationale: "Incorreto. Tanto casas quanto indústrias podem gerar resíduos e rejeitos.",
        isCorrect: false
      },
      {
        text: "Não há diferença, são a mesma coisa.",
        rationale: "Incorreto. O texto faz uma distinção clara entre os dois termos baseada na possibilidade de reaproveitamento.",
        isCorrect: false
      }
    ],
    hint: "Um deles ainda tem valor, o outro não.",
    difficulty: 1,
    topic: 'residuos'
  },
  {
    question: "O que é reciclagem?",
    answerOptions: [
      {
        text: "O processo de usar materiais descartados como matéria-prima para novos produtos.",
        rationale: "Correto. A reciclagem reintegra materiais na cadeia produtiva, reduzindo a necessidade de extrair novos recursos da natureza.",
        isCorrect: true
      },
      {
        text: "A queima de lixo para gerar energia.",
        rationale: "Incorreto. A queima de resíduos é chamada de incineração.",
        isCorrect: false
      },
      {
        text: "A separação de lixo em casa.",
        rationale: "Incorreto. A separação do lixo (coleta seletiva) é uma etapa importante que permite a reciclagem, mas não é a reciclagem em si.",
        isCorrect: false
      },
      {
        text: "O processo de transformar lixo orgânico em adubo.",
        rationale: "Incorreto. Esse processo é chamado de compostagem.",
        isCorrect: false
      }
    ],
    hint: "Pense em transformar uma garrafa PET velha em uma nova.",
    difficulty: 1,
    topic: 'residuos'
  },
  {
    question: "O que é compostagem?",
    answerOptions: [
      {
        text: "A degradação de resíduos orgânicos, como restos de alimentos, que produz adubo.",
        rationale: "Correto. A compostagem é descrita como a 'reciclagem dos materiais orgânicos', transformando-os em um fertilizante natural chamado composto.",
        isCorrect: true
      },
      {
        text: "Um tipo de aterro para lixo perigoso.",
        rationale: "Incorreto. A compostagem é um processo biológico para reaproveitar matéria orgânica, não um local de descarte.",
        isCorrect: false
      },
      {
        text: "A compactação de lixo em um aterro controlado.",
        rationale: "Incorreto. Isso descreve parte do funcionamento de um aterro, não o processo de compostagem.",
        isCorrect: false
      },
      {
        text: "A coleta de sementes para reflorestar áreas.",
        rationale: "Incorreto. Isso descreve a atividade da Rede de Sementes do Xingu, não a compostagem.",
        isCorrect: false
      }
    ],
    hint: "É uma forma de reciclar cascas de frutas e verduras.",
    difficulty: 1,
    topic: 'residuos'
  },
  {
    question: "Qual destes é um tipo de resíduo perigoso que precisa de descarte especial?",
    answerOptions: [
      {
        text: "Pilhas e baterias",
        rationale: "Correto. Pilhas e baterias contêm metais pesados e substâncias tóxicas, por isso são consideradas resíduos perigosos e devem ir para postos de coleta específicos.",
        isCorrect: true
      },
      {
        text: "Restos de maçã",
        rationale: "Incorreto. Restos de maçã são resíduos orgânicos e podem ser colocados na composteira.",
        isCorrect: false
      },
      {
        text: "Garrafas de vidro",
        rationale: "Incorreto. Garrafas de vidro são resíduos recicláveis.",
        isCorrect: false
      },
      {
        text: "Fitas adesivas",
        rationale: "Incorreto. Fitas adesivas são consideradas resíduos não recicláveis e não perigosos.",
        isCorrect: false
      }
    ],
    hint: "Pense em qual desses itens pode contaminar o solo com metais tóxicos.",
    difficulty: 1,
    topic: 'residuos'
  },
  {
    question: "Qual dos 5Rs do consumo consciente significa dar um novo uso a um objeto em vez de jogá-lo fora?",
    answerOptions: [
      {
        text: "Reutilizar",
        rationale: "Correto. Reutilizar é exatamente isso: consertar objetos, doar roupas, etc., para evitar o descarte e a produção de novos itens.",
        isCorrect: true
      },
      {
        text: "Reduzir",
        rationale: "Incorreto. Reduzir significa diminuir a quantidade de coisas que você consome, como escolher produtos mais duráveis.",
        isCorrect: false
      },
      {
        text: "Reciclar",
        rationale: "Incorreto. Reciclar envolve transformar o material de um produto em um novo produto, o que é diferente de usar o mesmo objeto novamente.",
        isCorrect: false
      },
      {
        text: "Repensar",
        rationale: "Incorreto. Repensar é refletir sobre seus hábitos de consumo antes mesmo de comprar.",
        isCorrect: false
      }
    ],
    hint: "Pense em transformar potes de vidro em porta-lápis.",
    difficulty: 1,
    topic: 'residuos'
  },
  // DIFICULDADE 2
  {
    question: "A história da maioria dos objetos é formada por 5 etapas. Qual é a primeira?",
    answerOptions: [
      {
        text: "Extração de matéria-prima",
        rationale: "Correto. Todo objeto começa com a extração de materiais da natureza, sejam eles renováveis ou não renováveis.",
        isCorrect: true
      },
      {
        text: "Fabricação",
        rationale: "Incorreto. A fabricação é a segunda etapa, que acontece depois que a matéria-prima já foi extraída.",
        isCorrect: false
      },
      {
        text: "Transporte",
        rationale: "Incorreto. O transporte ocorre após a fabricação do produto.",
        isCorrect: false
      },
      {
        text: "Consumo",
        rationale: "Incorreto. O consumo é a penúltima etapa, quando usamos o produto.",
        isCorrect: false
      }
    ],
    hint: "De onde vem o material original para se fazer qualquer coisa?",
    difficulty: 2,
    topic: 'residuos'
  },
  {
    question: "O que é o 'chorume'?",
    answerOptions: [
      {
        text: "Um líquido tóxico produzido pela degradação de material orgânico no lixo.",
        rationale: "Correto. O texto define chorume exatamente como o líquido da degradação de matéria orgânica, que pode contaminar o solo e a água.",
        isCorrect: true
      },
      {
        text: "O gás liberado pela decomposição de resíduos.",
        rationale: "Incorreto. O gás liberado é principalmente o metano. Chorume é o líquido.",
        isCorrect: false
      },
      {
        text: "O nome dado ao adubo produzido na compostagem.",
        rationale: "Incorreto. O adubo da compostagem é chamado de 'composto'.",
        isCorrect: false
      },
      {
        text: "Um tipo de resíduo hospitalar.",
        rationale: "Incorreto. Resíduos hospitalares são considerados perigosos, mas chorume é um subproduto da decomposição de qualquer lixo orgânico.",
        isCorrect: false
      }
    ],
    hint: "Pense no líquido que escorre de um saco de lixo.",
    difficulty: 2,
    topic: 'residuos'
  },
  {
    question: "Qual é a principal característica de um aterro controlado?",
    answerOptions: [
      {
        text: "Os resíduos são compactados e cobertos com terra.",
        rationale: "Correto. A principal característica de um aterro controlado é essa cobertura com terra, que o diferencia de um lixão a céu aberto.",
        isCorrect: true
      },
      {
        text: "Possui um sistema para queimar gases e gerar energia.",
        rationale: "Incorreto. Essa é uma característica de aterros sanitários mais avançados. O aterro controlado não possui essa tecnologia.",
        isCorrect: false
      },
      {
        text: "É totalmente seguro e não contamina o meio ambiente.",
        rationale: "Incorreto. O texto afirma que, assim como o lixão, o aterro controlado contamina o solo e a água porque não tem proteção.",
        isCorrect: false
      },
      {
        text: "Só recebe lixo reciclável.",
        rationale: "Incorreto. Ele recebe resíduos misturados e não é um centro de reciclagem.",
        isCorrect: false
      }
    ],
    hint: "É um passo acima do lixão, mas ainda não é a solução ideal.",
    difficulty: 2,
    topic: 'residuos'
  },
  {
    question: "A queima de resíduos em fornos, como os hospitalares, é chamada de _____________.",
    answerOptions: [
      {
        text: "incineração",
        rationale: "Correto. O texto descreve a incineração como a queima de resíduos em locais apropriados para reduzir seu volume.",
        isCorrect: true
      },
      {
        text: "compostagem",
        rationale: "Incorreto. Compostagem é a decomposição biológica de matéria orgânica, não a queima.",
        isCorrect: false
      },
      {
        text: "floculação",
        rationale: "Incorreto. Floculação é uma etapa do tratamento de água para remover impurezas.",
        isCorrect: false
      },
      {
        text: "degradação",
        rationale: "Incorreto. Degradação é um termo geral para decomposição. O processo específico de queima em forno é incineração.",
        isCorrect: false
      }
    ],
    hint: "Pense em uma palavra parecida com 'cinzas'.",
    difficulty: 2,
    topic: 'residuos'
  },
  {
    question: "Segundo o texto, qual é o papel social da reciclagem?",
    answerOptions: [
      {
        text: "Gerar emprego e fonte de renda para cooperativas de catadores.",
        rationale: "Correto. Além dos benefícios ambientais, a reciclagem tem um papel social importante ao gerar empregos e renda.",
        isCorrect: true
      },
      {
        text: "Ensinar as pessoas a separar o lixo em casa.",
        rationale: "Incorreto. Ensinar é uma ação de educação ambiental. O papel social da reciclagem está ligado ao trabalho e à renda.",
        isCorrect: false
      },
      {
        text: "Produzir objetos mais baratos para a população.",
        rationale: "Incorreto. Embora possa influenciar nos custos, o texto não destaca isso como seu principal papel social, focando na geração de emprego.",
        isCorrect: false
      },
      {
        text: "Diminuir a quantidade de lixo nos aterros.",
        rationale: "Incorreto. Diminuir a quantidade de lixo é um benefício ambiental, não o papel social destacado no texto.",
        isCorrect: false
      }
    ],
    hint: "Pense em como a reciclagem ajuda as pessoas que trabalham com isso.",
    difficulty: 2,
    topic: 'residuos'
  },
  {
    question: "Qual o conselho dado no texto para os resíduos não recicláveis, como etiquetas e fitas adesivas?",
    answerOptions: [
      {
        text: "Evitar o consumo excessivo desses itens.",
        rationale: "Correto. Como esses itens não podem ser reciclados, a principal orientação é evitar consumi-los em excesso.",
        isCorrect: true
      },
      {
        text: "Queimá-los no quintal de casa.",
        rationale: "Incorreto. Queimar lixo em casa é perigoso e libera gases tóxicos. O descarte deve ser feito no lixo comum para o aterro sanitário.",
        isCorrect: false
      },
      {
        text: "Jogá-los na composteira.",
        rationale: "Incorreto. Eles não são matéria orgânica e não se decompõem na composteira.",
        isCorrect: false
      },
      {
        text: "Levá-los para um ponto de coleta especial.",
        rationale: "Incorreto. Os pontos de coleta especiais são para resíduos perigosos, como pilhas, não para os não recicláveis comuns.",
        isCorrect: false
      }
    ],
    hint: "Se não dá para reciclar ou reutilizar, qual é a melhor atitude?",
    difficulty: 2,
    topic: 'residuos'
  },
  {
    question: "Usar sacolas retornáveis em vez de sacolas plásticas é um exemplo de qual dos 5Rs?",
    answerOptions: [
      {
        text: "Reduzir",
        rationale: "Correto. Ao usar uma sacola retornável, você está reduzindo o consumo de sacolas plásticas descartáveis.",
        isCorrect: true
      },
      {
        text: "Recusar",
        rationale: "Incorreto. Embora você esteja recusando a sacola plástica, a ação principal é a de reduzir o consumo de descartáveis, um exemplo dado no texto sob 'Reduzir'.",
        isCorrect: false
      },
      {
        text: "Reciclar",
        rationale: "Incorreto. Você não está transformando a sacola em um novo produto, mas sim diminuindo a necessidade de novas sacolas.",
        isCorrect: false
      },
      {
        text: "Reutilizar",
        rationale: "Incorreto. Embora você reutilize a sacola retornável, no contexto dos 5Rs do texto, a iniciativa de usar essa sacola para diminuir o consumo de descartáveis é listada como 'Reduzir'.",
        isCorrect: false
      }
    ],
    hint: "Pense em qual 'R' está ligado a diminuir a quantidade de coisas que você pega ou usa.",
    difficulty: 2,
    topic: 'residuos'
  },
  // DIFICULDADE 3
  {
    question: "Por que o transporte de um produto contribui para a geração de resíduos?",
    answerOptions: [
      {
        text: "Porque a queima de combustível pelos veículos gera gases poluentes.",
        rationale: "Correto. O texto afirma que o transporte consome recursos como combustíveis e gera resíduos, como os gases produzidos pela sua queima.",
        isCorrect: true
      },
      {
        text: "Porque os caminhões soltam pedaços de pneu na estrada.",
        rationale: "Incorreto. Embora isso possa acontecer, não é a principal fonte de resíduos mencionada no texto, que foca nos gases de combustão.",
        isCorrect: false
      },
      {
        text: "Porque os produtos podem quebrar durante o transporte e virar lixo.",
        rationale: "Incorreto. Isso é uma perda, mas o texto aponta a queima de combustível como a principal fonte de resíduos nesta etapa.",
        isCorrect: false
      },
      {
        text: "Porque os motoristas jogam lixo pela janela.",
        rationale: "Incorreto. Isso seria uma atitude errada do indivíduo, mas não uma parte inevitável do processo de transporte, como a queima de combustível é.",
        isCorrect: false
      }
    ],
    hint: "Pense no que sai do escapamento de caminhões, navios e aviões.",
    difficulty: 3,
    topic: 'residuos'
  },
  {
    question: "Qual é a principal vantagem de um aterro sanitário sobre um aterro controlado?",
    answerOptions: [
      {
        text: "O aterro sanitário possui manta impermeável e tratamento de chorume, protegendo o solo e a água.",
        rationale: "Correto. A grande diferença é a engenharia de proteção: o aterro sanitário é projetado para evitar a contaminação, enquanto o aterro controlado não tem essa proteção e polui o ambiente.",
        isCorrect: true
      },
      {
        text: "O aterro sanitário é menor e ocupa menos espaço.",
        rationale: "Incorreto. O texto afirma que o aterro sanitário busca ocupar o menor espaço possível, mas essa não é a principal vantagem sobre o aterro controlado. A proteção ambiental é o ponto chave.",
        isCorrect: false
      },
      {
        text: "No aterro sanitário, o lixo não precisa ser coberto com terra.",
        rationale: "Incorreto. O aterro sanitário também utiliza camadas de terra para cobrir os resíduos.",
        isCorrect: false
      },
      {
        text: "O aterro sanitário não produz gás metano.",
        rationale: "Incorreto. Ele produz gás metano, mas a vantagem é que o gás é coletado e pode até ser usado para gerar energia, em vez de ser liberado na atmosfera.",
        isCorrect: false
      }
    ],
    hint: "Pense em qual dos dois foi projetado para não deixar o veneno do lixo vazar.",
    difficulty: 3,
    topic: 'residuos'
  },
  {
    question: "Por que a incineração de resíduos, apesar de reduzir o volume do lixo, precisa de cuidados especiais?",
    answerOptions: [
      {
        text: "Porque a queima pode gerar gases tóxicos que precisam ser filtrados.",
        rationale: "Correto. O texto alerta que a queima gera gases tóxicos, e por isso os fornos devem ter filtros para evitar a poluição do ar.",
        isCorrect: true
      },
      {
        text: "Porque as cinzas resultantes são mais perigosas que o lixo original.",
        rationale: "Incorreto. O texto afirma que a incineração resulta em um material seguro para o meio ambiente e a saúde. O problema são os gases durante a queima.",
        isCorrect: false
      },
      {
        text: "Porque gasta muita água para apagar o fogo.",
        rationale: "Incorreto. O texto não menciona o uso de água como um problema, mas sim a emissão de gases.",
        isCorrect: false
      },
      {
        text: "Porque o barulho dos fornos é muito alto.",
        rationale: "Incorreto. A preocupação principal destacada no texto é a poluição do ar pelos gases, não a poluição sonora.",
        isCorrect: false
      }
    ],
    hint: "O que sobe pela chaminé durante a queima?",
    difficulty: 3,
    topic: 'residuos'
  },
  {
    question: "Evitar comprar de empresas que desrespeitam o meio ambiente é um exemplo de qual dos 5Rs?",
    answerOptions: [
      {
        text: "Recusar",
        rationale: "Correto. Esta é uma forma ativa de recusar produtos e práticas que geram impactos sociais e ambientais negativos.",
        isCorrect: true
      },
      {
        text: "Repensar",
        rationale: "Incorreto. Repensar envolve a reflexão sobre a necessidade da compra e a escolha de opções menos impactantes, mas a ação de boicotar uma empresa específica se encaixa melhor em 'Recusar'.",
        isCorrect: false
      },
      {
        text: "Reduzir",
        rationale: "Incorreto. Reduzir foca na quantidade de produtos consumidos, não na origem deles.",
        isCorrect: false
      },
      {
        text: "Reciclar",
        rationale: "Incorreto. Reciclar é o que se faz com o produto após o descarte, não uma decisão de compra.",
        isCorrect: false
      }
    ],
    hint: "Pense em uma ação de dizer 'não' a um produto por causa de como ele é feito.",
    difficulty: 3,
    topic: 'residuos'
  },
  {
    question: "O que significa dizer que a reciclagem transforma o processo de produção em um 'sistema cíclico'?",
    answerOptions: [
      {
        text: "Significa que o material, após o descarte, retorna ao início do processo (fabricação) em vez de ser jogado fora.",
        rationale: "Correto. A reciclagem fecha o ciclo: o produto consumido é transformado em matéria-prima e volta para a etapa de fabricação, continuando o processo.",
        isCorrect: true
      },
      {
        text: "Significa que os produtos reciclados são sempre em formato de círculo.",
        rationale: "Incorreto. 'Cíclico' refere-se ao processo que se repete como um ciclo, não ao formato do produto.",
        isCorrect: false
      },
      {
        text: "Significa que o processo de reciclagem demora um ciclo lunar completo.",
        rationale: "Incorreto. 'Cíclico' não tem relação com o tempo que o processo leva.",
        isCorrect: false
      },
      {
        text: "Significa que apenas materiais redondos podem ser reciclados.",
        rationale: "Incorreto. O formato do material não importa para a reciclagem. O termo 'cíclico' descreve o fluxo do material.",
        isCorrect: false
      }
    ],
    hint: "Pense em um círculo que começa na fábrica, vai para sua casa e, em vez de terminar no lixo, volta para a fábrica.",
    difficulty: 3,
    topic: 'residuos'
  },
  {
    question: "Se não há coleta seletiva na sua cidade, o que o texto sugere fazer com os resíduos recicláveis?",
    answerOptions: [
      {
        text: "Separar os resíduos e depositá-los em pontos de coleta próprios, como em supermercados.",
        rationale: "Correto. O texto oferece como alternativa a procura por pontos de coleta voluntária, que podem existir em locais como supermercados.",
        isCorrect: true
      },
      {
        text: "Misturá-los com o lixo comum, pois não há outra opção.",
        rationale: "Incorreto. O texto sugere uma alternativa proativa, que é levar os materiais a pontos de coleta voluntária.",
        isCorrect: false
      },
      {
        text: "Guardá-los em casa até que a prefeitura inicie a coleta seletiva.",
        rationale: "Incorreto. Embora bem-intencionado, isso seria impraticável. A sugestão do texto é procurar locais que já recebam o material.",
        isCorrect: false
      },
      {
        text: "Jogá-los em um lixão por conta própria.",
        rationale: "Incorreto. Isso seria uma destinação inadequada e prejudicial ao meio ambiente. A sugestão é buscar a reciclagem através de outros meios.",
        isCorrect: false
      }
    ],
    hint: "O que você pode fazer se o caminhão da reciclagem não passa na sua rua?",
    difficulty: 3,
    topic: 'residuos'
  },
  // TÓPICO: RECURSOS NATURAIS
  // DIFICULDADE 1
  {
    question: "O que são recursos naturais?",
    answerOptions: [
      {
        text: "Elementos da natureza utilizados pelo ser humano para satisfazer suas necessidades.",
        rationale: "Correto. Esta é a definição exata dada pelo texto.",
        isCorrect: true
      },
      {
        text: "Apenas os animais e as plantas.",
        rationale: "Incorreto. Recursos naturais também incluem água, vento, energia solar, petróleo, minérios, etc.",
        isCorrect: false
      },
      {
        text: "Todos os produtos que compramos em lojas.",
        rationale: "Incorreto. Os produtos são feitos a partir de recursos naturais, mas não são os recursos em si.",
        isCorrect: false
      },
      {
        text: "Apenas os recursos que não se esgotam, como o sol.",
        rationale: "Incorreto. A definição inclui tanto os recursos renováveis (sol) quanto os não renováveis (petróleo).",
        isCorrect: false
      }
    ],
    hint: "Pense em tudo que a natureza nos oferece e que usamos no dia a dia.",
    difficulty: 1,
    topic: 'recursos'
  },
  {
    question: "Qual recurso natural é usado para fabricar plásticos, tintas e combustíveis como a gasolina?",
    answerOptions: [
      {
        text: "Petróleo",
        rationale: "Correto. O petróleo é a matéria-prima para a fabricação de plásticos e diversos combustíveis.",
        isCorrect: true
      },
      {
        text: "Carvão mineral",
        rationale: "Incorreto. O carvão mineral é usado principalmente como combustível em indústrias e termelétricas.",
        isCorrect: false
      },
      {
        text: "Gás natural",
        rationale: "Incorreto. O gás natural é usado em fogões, aquecedores e como combustível veicular.",
        isCorrect: false
      },
      {
        text: "Minério de ferro",
        rationale: "Incorreto. O minério de ferro é usado para produzir aço, utilizado em construções e indústrias.",
        isCorrect: false
      }
    ],
    hint: "É um líquido escuro e valioso, encontrado no fundo da terra ou do mar.",
    difficulty: 1,
    topic: 'recursos'
  },
  {
    question: "Qual a principal diferença entre recursos renováveis e não renováveis?",
    answerOptions: [
      {
        text: "Renováveis não se esgotam ou se renovam rapidamente; não renováveis podem acabar.",
        rationale: "Correto. O texto define recursos renováveis como aqueles que não se esgotam ou se renovam em tempo hábil, enquanto os não renováveis podem se esgotar e demoram milhões de anos para se formar.",
        isCorrect: true
      },
      {
        text: "Renováveis são líquidos e não renováveis são sólidos.",
        rationale: "Incorreto. A água (líquida) é renovável, mas o petróleo (líquido) não é. O estado físico não é o critério.",
        isCorrect: false
      },
      {
        text: "Renováveis são gratuitos e não renováveis são pagos.",
        rationale: "Incorreto. A extração e o processamento de ambos os tipos de recursos têm custos.",
        isCorrect: false
      },
      {
        text: "Renováveis não poluem e não renováveis poluem.",
        rationale: "Incorreto. Embora a energia solar e eólica sejam limpas, o uso de outros recursos renováveis, como a queima de madeira (biomassa), pode poluir. E a extração de qualquer recurso causa algum impacto.",
        isCorrect: false
      }
    ],
    hint: "Pense na velocidade com que a natureza consegue 'refazer' cada um.",
    difficulty: 1,
    topic: 'recursos'
  },
  {
    question: "O conjunto de serviços como fornecimento de água tratada e coleta de esgoto é chamado de _____________ básico.",
    answerOptions: [
      {
        text: "saneamento",
        rationale: "Correto. O texto define saneamento básico como o conjunto que inclui tratamento de água, coleta de esgoto, coleta de resíduos e limpeza urbana, visando promover a saúde.",
        isCorrect: true
      },
      {
        text: "urbanismo",
        rationale: "Incorreto. Urbanismo é o planejamento da cidade de forma mais ampla, incluindo ruas, praças, etc. Saneamento é uma parte específica disso.",
        isCorrect: false
      },
      {
        text: "abastecimento",
        rationale: "Incorreto. Abastecimento geralmente se refere ao fornecimento de água, mas saneamento é o termo mais completo que inclui também o esgoto e o lixo.",
        isCorrect: false
      },
      {
        text: "hidratação",
        rationale: "Incorreto. Hidratação é o ato de beber água. Saneamento é o serviço que garante que a água seja segura para beber.",
        isCorrect: false
      }
    ],
    hint: "É um direito do cidadão para garantir saúde e qualidade de vida na cidade.",
    difficulty: 1,
    topic: 'recursos'
  },
  {
    question: "O que é o efeito estufa?",
    answerOptions: [
      {
        text: "Um fenômeno natural que mantém a temperatura da Terra aquecida e estável.",
        rationale: "Correto. O texto explica que o efeito estufa é um fenômeno natural essencial para manter a temperatura do planeta em um nível que permite a vida, evitando grandes variações.",
        isCorrect: true
      },
      {
        text: "A poluição do ar causada pelos carros.",
        rationale: "Incorreto. A poluição do ar agrava o efeito estufa, mas não é o fenômeno em si. O efeito estufa existe naturalmente.",
        isCorrect: false
      },
      {
        text: "O derretimento das geleiras.",
        rationale: "Incorreto. O derretimento das geleiras é uma consequência do aquecimento global, que é causado pela intensificação do efeito estufa.",
        isCorrect: false
      },
      {
        text: "Um tipo de casa de vidro para plantar vegetais.",
        rationale: "Incorreto. O nome é o mesmo, mas o efeito estufa do planeta é um fenômeno atmosférico global.",
        isCorrect: false
      }
    ],
    hint: "Pense em um 'cobertor' de gases que envolve a Terra.",
    difficulty: 1,
    topic: 'recursos'
  },
  {
    question: "Qual é a principal causa da degradação do solo chamada erosão?",
    answerOptions: [
      {
        text: "A remoção da vegetação, que deixa o solo desprotegido da chuva e do vento.",
        rationale: "Correto. O texto explica que o solo coberto por vegetação está protegido. Quando desmatado, a água da chuva e o vento arrastam as partículas e nutrientes, podendo levar à erosão.",
        isCorrect: true
      },
      {
        text: "O excesso de lixo plástico enterrado no solo.",
        rationale: "Incorreto. O lixo plástico causa poluição, mas a erosão é o desgaste físico do solo por falta de proteção.",
        isCorrect: false
      },
      {
        text: "O uso de veículos pesados na agricultura.",
        rationale: "Incorreto. Veículos pesados podem compactar o solo, mas a causa principal da erosão pela água e vento é a falta de cobertura vegetal.",
        isCorrect: false
      },
      {
        text: "A construção de prédios e casas.",
        rationale: "Incorreto. A construção cobre o solo, o que é um tipo de degradação, mas a erosão (formação de fendas) está ligada ao desmatamento de áreas abertas.",
        isCorrect: false
      }
    ],
    hint: "O que acontece com a terra de um morro quando todas as árvores são cortadas?",
    difficulty: 1,
    topic: 'recursos'
  },
  // DIFICULDADE 2
  {
    question: "O solo é considerado um recurso natural ____________.",
    answerOptions: [
      {
        text: "não renovável",
        rationale: "Correto. O texto classifica o solo como um recurso natural não renovável, pois sua formação é extremamente lenta e ele pode se esgotar ou ser degradado.",
        isCorrect: true
      },
      {
        text: "renovável",
        rationale: "Incorreto. Embora possamos cuidar do solo, sua formação a partir da rocha leva milhares de anos, tornando-o não renovável na escala de tempo humana.",
        isCorrect: false
      },
      {
        text: "artificial",
        rationale: "Incorreto. O solo é um recurso natural, não criado pelo homem.",
        isCorrect: false
      },
      {
        text: "infinito",
        rationale: "Incorreto. O solo é finito e pode ser perdido pela erosão e poluição.",
        isCorrect: false
      }
    ],
    hint: "Pense em quanto tempo a natureza leva para formar uma camada de terra fértil.",
    difficulty: 2,
    topic: 'recursos'
  },
  {
    question: "Como a agricultura pode causar a poluição da água?",
    answerOptions: [
      {
        text: "Pelo uso excessivo de defensivos agrícolas e fertilizantes, que são levados pela chuva para os rios.",
        rationale: "Correto. O texto explica que o excesso dessas substâncias penetra no solo ou escorre pela superfície, contaminando rios, lagos e águas subterrâneas.",
        isCorrect: true
      },
      {
        text: "Porque as plantas bebem toda a água dos rios.",
        rationale: "Incorreto. A irrigação consome água, mas o texto aponta a contaminação por produtos químicos como a principal forma de poluição hídrica pela agricultura.",
        isCorrect: false
      },
      {
        text: "Porque o barulho dos tratores assusta os peixes.",
        rationale: "Incorreto. O barulho é um tipo de poluição sonora, mas não é a forma como a agricultura contamina a água com substâncias nocivas.",
        isCorrect: false
      },
      {
        text: "Desviando o curso dos rios para fazer canais de irrigação.",
        rationale: "Incorreto. Desviar o curso de rios é um impacto ambiental, mas a poluição da água descrita no texto é causada pela contaminação química.",
        isCorrect: false
      }
    ],
    hint: "Pense nos 'remedinhos' e 'vitaminas' que são colocados nas plantações e que a chuva pode lavar.",
    difficulty: 2,
    topic: 'recursos'
  },
  {
    question: "O que acontece na etapa de 'floculação' durante o tratamento da água?",
    answerOptions: [
      {
        text: "As impurezas se juntam formando flocos maiores e mais pesados.",
        rationale: "Correto. Nesta etapa, uma substância química é adicionada para fazer com que as partículas de sujeira se agreguem em flocos, facilitando sua remoção posterior.",
        isCorrect: true
      },
      {
        text: "A água passa por filtros para retirar as impurezas.",
        rationale: "Incorreto. Isso acontece na etapa de 'filtração'.",
        isCorrect: false
      },
      {
        text: "O cloro é adicionado para matar os microrganismos.",
        rationale: "Incorreto. Isso acontece nas etapas de 'pré-cloração' e 'cloração'.",
        isCorrect: false
      },
      {
        text: "Os flocos de sujeira afundam e são removidos.",
        rationale: "Incorreto. Isso acontece na etapa seguinte, a 'decantação'.",
        isCorrect: false
      }
    ],
    hint: "A palavra 'floculação' vem de 'flocos'. O que está se formando?",
    difficulty: 2,
    topic: 'recursos'
  },
  {
    question: "Qual é a principal fonte de poluição do ar causada por atividades humanas, segundo o texto?",
    answerOptions: [
      {
        text: "As queimadas e a queima de combustíveis.",
        rationale: "Correto. O texto aponta que, embora existam fontes naturais, a poluição do ar hoje é causada principalmente por atividades humanas como queimadas, decomposição de lixo e, especialmente, a queima de combustíveis.",
        isCorrect: true
      },
      {
        text: "As erupções vulcânicas.",
        rationale: "Incorreto. As erupções vulcânicas são uma fonte natural de poluição do ar, mas o texto enfatiza que as atividades humanas são a causa principal atualmente.",
        isCorrect: false
      },
      {
        text: "O cheiro ruim vindo dos esgotos.",
        rationale: "Incorreto. Odores ruins são um incômodo, mas a poluição do ar que causa o aquecimento global está ligada à emissão de gases como gás carbônico e metano.",
        isCorrect: false
      },
      {
        text: "O uso de sprays de aerossol.",
        rationale: "Incorreto. No passado, alguns aerossóis eram um grande problema para a camada de ozônio. Hoje, a principal fonte de poluição do ar mencionada no texto é a queima de combustíveis.",
        isCorrect: false
      }
    ],
    hint: "Pense no que sai da chaminé das fábricas e do escapamento dos carros.",
    difficulty: 2,
    topic: 'recursos'
  },
  {
    question: "Qual é a consequência do aumento de gases como gás carbônico e metano na atmosfera?",
    answerOptions: [
      {
        text: "Aumento do efeito estufa, que leva ao aquecimento global.",
        rationale: "Correto. O texto explica que o aumento desses gases eleva a capacidade da atmosfera de reter calor, potencializando o efeito estufa e, como consequência, causando o aquecimento global.",
        isCorrect: true
      },
      {
        text: "A diminuição da temperatura do planeta.",
        rationale: "Incorreto. Ocorre o contrário: a temperatura do planeta aumenta.",
        isCorrect: false
      },
      {
        text: "A melhoria da qualidade do ar que respiramos.",
        rationale: "Incorreto. Esses gases são poluentes e o aumento deles piora a qualidade do ar, causando problemas de saúde.",
        isCorrect: false
      },
      {
        text: "A formação de mais nuvens de chuva.",
        rationale: "Incorreto. O aquecimento global altera o regime de chuvas, mas não necessariamente para formar mais nuvens. Pode causar secas em alguns lugares e tempestades em outros.",
        isCorrect: false
      }
    ],
    hint: "Pense no 'cobertor' de gases ficando mais grosso.",
    difficulty: 2,
    topic: 'recursos'
  },
  {
    question: "Por que a água resultante do tratamento de esgoto não pode ser bebida?",
    answerOptions: [
      {
        text: "Porque o tratamento não a torna pura o suficiente para consumo humano.",
        rationale: "Correto. O texto é claro ao afirmar que, mesmo tratada, essa água não pode ser usada para beber, cozinhar ou higiene pessoal, sendo destinada a outros fins, como limpeza de ruas.",
        isCorrect: true
      },
      {
        text: "Porque ela ainda contém objetos grandes como plásticos e papéis.",
        rationale: "Incorreto. Esses objetos são removidos logo no início do tratamento, pelas grades.",
        isCorrect: false
      },
      {
        text: "Porque ela é salgada como a água do mar.",
        rationale: "Incorreto. O tratamento de esgoto não adiciona sal à água.",
        isCorrect: false
      },
      {
        text: "Porque ela é imediatamente fervida e transformada em vapor.",
        rationale: "Incorreto. A água tratada é devolvida a rios ou reutilizada em estado líquido.",
        isCorrect: false
      }
    ],
    hint: "Pense na diferença entre 'água limpa' e 'água potável'.",
    difficulty: 2,
    topic: 'recursos'
  },
  // DIFICULDADE 3 - RECURSOS (NOVOS)
  {
    question: "Como o desmatamento agrava o aquecimento global?",
    answerOptions: [
      {
        text: "Porque as plantas absorvem gás carbônico, e com menos plantas, mais gás se acumula na atmosfera.",
        rationale: "Correto. O texto explica que o desmatamento torna a situação mais grave porque as plantas realizam fotossíntese e absorvem parte do gás carbônico. Com menos florestas, esse gás se acumula mais rápido.",
        isCorrect: true
      },
      {
        text: "Porque as raízes das árvores resfriavam o solo, e sem elas a Terra esquenta.",
        rationale: "Incorreto. Embora as florestas ajudem a regular a temperatura local, o impacto no aquecimento GLOBAL está relacionado ao balanço de gases na atmosfera, principalmente o CO2.",
        isCorrect: false
      },
      {
        text: "Porque a madeira cortada, ao apodrecer, libera mais metano que os combustíveis fósseis.",
        rationale: "Incorreto. A decomposição da madeira libera carbono, mas o texto enfatiza que o problema do desmatamento é a perda da capacidade de absorver o CO2 que já está sendo emitido.",
        isCorrect: false
      },
      {
        text: "Porque o desmatamento abre buracos na camada de ozônio.",
        rationale: "Incorreto. O buraco na camada de ozônio foi causado por outros tipos de gases (CFCs), não pelo desmatamento. São dois problemas ambientais diferentes.",
        isCorrect: false
      }
    ],
    hint: "Pense no papel das florestas como 'pulmões do mundo'.",
    difficulty: 3,
    topic: 'recursos'
  },
  {
    question: "Além do derretimento das geleiras, qual outra consequência do aquecimento global é citada no texto?",
    answerOptions: [
      {
        text: "Aumento da frequência de tempestades, inundações e secas prolongadas.",
        rationale: "Correto. O texto lista como consequências as mudanças no regime de chuvas e o aumento de eventos climáticos extremos como tempestades, secas e furacões.",
        isCorrect: true
      },
      {
        text: "A diminuição do número de vulcões ativos.",
        rationale: "Incorreto. O aquecimento global não tem relação com a atividade vulcânica.",
        isCorrect: false
      },
      {
        text: "O surgimento de novas espécies de peixes nos oceanos.",
        rationale: "Incorreto. Pelo contrário, o texto menciona a alteração química da água do mar, provocando a morte de seres marinhos.",
        isCorrect: false
      },
      {
        text: "A melhoria da fertilidade do solo em todo o planeta.",
        rationale: "Incorreto. O aquecimento global pode levar à desertificação e perda de fertilidade em muitas áreas devido às secas.",
        isCorrect: false
      }
    ],
    hint: "Pense em como o clima fica mais 'bagunçado' e extremo.",
    difficulty: 3,
    topic: 'recursos'
  },
  {
    question: "Como o descarte incorreto de resíduos, como jogar lixo na rua, pode causar poluição da água?",
    answerOptions: [
      {
        text: "Porque os resíduos podem ser levados pela chuva para os rios e, eventualmente, para o mar.",
        rationale: "Correto. O texto afirma que resíduos descartados nas ruas ou margens de rios muitas vezes são carregados para os corpos d'água, onde poluem e prejudicam a vida aquática.",
        isCorrect: true
      },
      {
        text: "Porque o lixo na rua entope as grades de tratamento de esgoto.",
        rationale: "Incorreto. O lixo na rua entope os bueiros de água da chuva, causando enchentes. Ele não vai para a estação de tratamento de esgoto.",
        isCorrect: false
      },
      {
        text: "Porque o lixo libera gases que se misturam com a chuva, formando chuva ácida.",
        rationale: "Incorreto. A chuva ácida é formada por outros poluentes atmosféricos, principalmente de indústrias. O impacto do lixo na rua na água é mais direto.",
        isCorrect: false
      },
      {
        text: "Porque o lixo na rua atrai pássaros que depois sujam a água dos rios.",
        rationale: "Incorreto. O problema principal é o próprio resíduo (plásticos, etc.) sendo carregado para a água, não a sujeira dos animais.",
        isCorrect: false
      }
    ],
    hint: "Pense no caminho que um saco plástico jogado na calçada faz quando chove forte.",
    difficulty: 3,
    topic: 'recursos'
  },
  {
    question: "Qual o nome dos pedaços muito pequenos de plástico que se soltam no ambiente e podem ser ingeridos por animais?",
    answerOptions: [
      {
        text: "Microplásticos",
        rationale: "Correto. O texto explica que o plástico se degrada lentamente, liberando pedaços muito pequenos chamados microplásticos, que prejudicam os animais que os ingerem.",
        isCorrect: true
      },
      {
        text: "Nanoplásticos",
        rationale: "Incorreto. Embora existam partículas ainda menores, o termo usado no texto para esses pequenos pedaços é microplásticos.",
        isCorrect: false
      },
      {
        text: "Polímeros",
        rationale: "Incorreto. Polímero é o nome da substância química que forma o plástico, não dos pequenos fragmentos.",
        isCorrect: false
      },
      {
        text: "Resinas",
        rationale: "Incorreto. Resinas são um dos componentes usados na fabricação do plástico, não os pedaços que se soltam depois.",
        isCorrect: false
      }
    ],
    hint: "Pense em uma palavra que junta 'pequeno' com 'plástico'.",
    difficulty: 3,
    topic: 'recursos'
  },
  {
    question: "Dar preferência ao transporte coletivo ou bicicleta em vez de veículos individuais é uma forma de:",
    answerOptions: [
      {
        text: "Reduzir o uso de combustíveis fósseis.",
        rationale: "Correto. O texto sugere exatamente essas ações como maneiras de diminuir os deslocamentos com veículos individuais e, consequentemente, reduzir o uso de combustíveis fósseis e a poluição.",
        isCorrect: true
      },
      {
        text: "Aumentar a poluição da água.",
        rationale: "Incorreto. Essas ações diminuem a poluição do ar, não aumentam a poluição da água.",
        isCorrect: false
      },
      {
        text: "Praticar a compostagem.",
        rationale: "Incorreto. Compostagem é sobre resíduos orgânicos, não tem relação com o meio de transporte.",
        isCorrect: false
      },
      {
        text: "Acelerar a erosão do solo.",
        rationale: "Incorreto. O meio de transporte não tem relação direta com a erosão do solo.",
        isCorrect: false
      }
    ],
    hint: "Pense em como diminuir a quantidade de carros nas ruas.",
    difficulty: 3,
    topic: 'recursos'
  },
  // DIFICULDADE 4 - RECURSOS (NOVOS)
  {
    question: "Qual problema ambiental específico é causado pela indústria têxtil que produz tecidos sintéticos como o poliéster?",
    answerOptions: [
      {
        text: "O lançamento de microfibras sintéticas no esgoto, que poluem rios e mares.",
        rationale: "Correto. O texto usa a indústria têxtil como exemplo de poluição da água, citando o lançamento de microfibras sintéticas no esgoto durante o processo de fabricação.",
        isCorrect: true
      },
      {
        text: "O alto consumo de algodão, que é uma planta.",
        rationale: "Incorreto. O exemplo do texto é sobre tecidos sintéticos (poliéster), que vêm do petróleo, não do algodão.",
        isCorrect: false
      },
      {
        text: "A emissão de gases que causam o efeito estufa.",
        rationale: "Incorreto. Embora a indústria possa emitir gases, o problema específico destacado no texto para a indústria têxtil sintética é a poluição da água com microfibras.",
        isCorrect: false
      },
      {
        text: "A produção de roupas que não podem ser recicladas.",
        rationale: "Incorreto. O foco do exemplo não é a reciclagem da roupa final, mas a poluição gerada durante sua fabricação.",
        isCorrect: false
      }
    ],
    hint: "Pense em 'fiapos' invisíveis que se soltam das roupas sintéticas e vão para a água.",
    difficulty: 4,
    topic: 'recursos'
  },
  {
    question: "Como a mineração de ouro com mercúrio pode afetar a saúde de uma pessoa que mora longe da área de mineração?",
    answerOptions: [
      {
        text: "A pessoa pode comer um peixe de um rio contaminado, que acumulou mercúrio em seu corpo.",
        rationale: "Correto. O texto explica que o mercúrio contamina a água e se acumula nos organismos que vivem nela. Se os seres humanos ingerirem esses animais contaminados, podem desenvolver doenças graves, mesmo sem estar no local da mineração.",
        isCorrect: true
      },
      {
        text: "O vapor de mercúrio viaja pelo ar e é respirado por pessoas em outras cidades.",
        rationale: "Incorreto. Embora a contaminação do ar seja possível, o mecanismo descrito no texto para afetar pessoas distantes é através da cadeia alimentar aquática.",
        isCorrect: false
      },
      {
        text: "O mercúrio contamina as nuvens e cai como chuva tóxica em outros lugares.",
        rationale: "Incorreto. O texto não descreve este mecanismo. A contaminação se espalha principalmente pelo curso do rio.",
        isCorrect: false
      },
      {
        text: "Não pode afetar, pois a contaminação fica restrita apenas ao local da mineração.",
        rationale: "Incorreto. A contaminação se espalha através dos rios, afetando uma vasta área e muitas comunidades ao longo de seu curso.",
        isCorrect: false
      }
    ],
    hint: "Pense em como vive uma família que depende de um rio que de repente se torna um rio de lama tóxica.",
    difficulty: 4,
    topic: 'recursos'
  },
  {
    question: "Qual é a situação da coleta e tratamento de esgoto no Brasil, segundo o texto?",
    answerOptions: [
      {
        text: "Apenas pouco mais da metade da população tem coleta, e uma parte ainda menor tem o esgoto tratado.",
        rationale: "Correto. O texto apresenta este dado preocupante, indicando que em muitos casos o esgoto é lançado diretamente nos rios sem tratamento.",
        isCorrect: true
      },
      {
        text: "Todo o esgoto do país é coletado e 100% tratado antes de ser devolvido aos rios.",
        rationale: "Incorreto. O texto mostra que a realidade está longe de ser a ideal, com grandes deficiências na coleta e, principalmente, no tratamento.",
        isCorrect: false
      },
      {
        text: "Não existe tratamento de esgoto no Brasil, ele é sempre jogado nos rios.",
        rationale: "Incorreto. Existe tratamento, mas ele não atinge toda a população. Uma parte tem acesso ao serviço.",
        isCorrect: false
      },
      {
        text: "A maioria da população tem o esgoto tratado, com exceção de poucas cidades pequenas.",
        rationale: "Incorreto. O texto indica que a falta de coleta e tratamento é um problema que afeta uma grande parcela da população, não apenas uma minoria.",
        isCorrect: false
      }
    ],
    hint: "O serviço de saneamento atende a todos os brasileiros igualmente?",
    difficulty: 4,
    topic: 'recursos'
  },
  {
    question: "O que o texto diz que o rompimento de barragens de rejeitos (como em Mariana) causa às populações ribeirinhas?",
    answerOptions: [
      {
        text: "Prejudica diretamente sua vida, pois dependem da agricultura, da pesca e da água do rio para sobreviver.",
        rationale: "Correto. O texto destaca o impacto direto no modo de vida das populações ribeirinhas e indígenas, que perdem seus meios de subsistência com a contaminação do rio.",
        isCorrect: true
      },
      {
        text: "Melhora a economia local com os trabalhos de limpeza da barragem.",
        rationale: "Incorreto. O rompimento é uma catástrofe que destrói a economia local baseada no rio, não a melhora.",
        isCorrect: false
      },
      {
        text: "Não as afeta, pois a lama tóxica passa direto para o oceano.",
        rationale: "Incorreto. A lama contamina todo o leito do rio, as margens e as áreas de plantio, afetando diretamente quem vive ali.",
        isCorrect: false
      },
      {
        text: "Fornece um adubo rico em minerais para a agricultura local.",
        rationale: "Incorreto. Os rejeitos de mineração são tóxicos e matam as plantas e os animais, inutilizando a terra para a agricultura.",
        isCorrect: false
      }
    ],
    hint: "Pense em como vive uma família que depende de um rio que de repente se torna um rio de lama tóxica.",
    difficulty: 4,
    topic: 'recursos'
  },
  {
    question: "Qual é a principal vantagem da técnica 'muvuca', usada pela Rede de Sementes do Xingu, sobre o plantio de mudas?",
    answerOptions: [
      {
        text: "A 'muvuca' tem se mostrado mais eficiente para a restauração das áreas.",
        rationale: "Correto. O texto afirma que, nos 15 anos de experiência da Rede, a técnica da muvuca (semeadura direta de uma mistura de sementes) provou ser mais eficiente que métodos como o plantio de mudas.",
        isCorrect: true
      },
      {
        text: "A 'muvuca' é mais barata porque não usa sementes, apenas galhos.",
        rationale: "Incorreto. A 'muvuca' é baseada justamente em uma mistura de muitas sementes nativas.",
        isCorrect: false
      },
      {
        text: "A 'muvuca' não precisa de chuva para funcionar, ao contrário das mudas.",
        rationale: "Incorreto. Como qualquer semeadura, a 'muvuca' depende das condições climáticas, incluindo a chuva, para germinar.",
        isCorrect: false
      },
      {
        text: "A 'muvuca' permite plantar árvores de outros países junto com as nativas.",
        rationale: "Incorreto. O foco da Rede é o uso de sementes florestais nativas para restaurar o ecossistema original da Amazônia e do Cerrado.",
        isCorrect: false
      }
    ],
    hint: "Pense no resultado final: qual dos dois métodos funciona melhor para trazer a floresta de volta?",
    difficulty: 4,
    topic: 'recursos'
  },
  // DIFICULDADE 5 - RECURSOS (NOVOS)
  {
    question: "Relacionando os capítulos, como a decisão de 'Reduzir' o consumo (Cap. 5) impacta a 'Poluição da Água' (Cap. 6)?",
    answerOptions: [
      {
        text: "Ao reduzir o consumo de produtos, também se reduz o gasto de água e a poluição gerados em sua fabricação.",
        rationale: "Correto. O texto estabelece essa conexão ao afirmar que reduzir o consumo de produtos também é uma forma de evitar o desperdício de água, já que a maioria dos processos de produção consome água e pode poluir.",
        isCorrect: true
      },
      {
        text: "Ao reduzir o consumo, menos lixo é gerado, o que diminui a formação de ilhas de plástico nos rios.",
        rationale: "Incorreto. Embora verdadeiro, a conexão mais profunda mostrada no texto é que a própria produção consome e polui água. Reduzir o consumo ataca o problema na origem, não apenas no descarte.",
        isCorrect: false
      },
      {
        text: "Não há relação entre as duas coisas.",
        rationale: "Incorreto. Existe uma forte relação. Toda a cadeia produtiva, desde a extração da matéria-prima, consome e pode poluir a água.",
        isCorrect: false
      },
      {
        text: "Ao reduzir o consumo, as pessoas tomam banhos mais curtos.",
        rationale: "Incorreto. Reduzir o consumo de produtos e reduzir o tempo do banho são duas ações diferentes, embora ambas ajudem a economizar água. A pergunta relaciona o consumo de PRODUTOS com a poluição.",
        isCorrect: false
      }
    ],
    hint: "Pense que para fazer uma camiseta, uma fábrica usou e talvez poluiu muita água. Se você compra menos camisetas...",
    difficulty: 5,
    topic: 'recursos'
  },
  {
    question: "Qual é a relação entre a poluição do ar (queima de combustíveis) e a poluição da água do mar?",
    answerOptions: [
      {
        text: "O aquecimento global, causado pela poluição do ar, altera a composição química da água do mar.",
        rationale: "Correto. O texto estabelece essa ligação complexa ao listar as consequências do aquecimento global (causado pela poluição do ar), incluindo a 'alteração da composição química da água do mar, provocando a morte de seres marinhos'.",
        isCorrect: true
      },
      {
        text: "A fumaça dos carros se dissolve na água do mar, deixando-a escura.",
        rationale: "Incorreto. A poluição do ar não 'escurece' a água do mar dessa forma. O impacto é mais complexo, envolvendo a absorção de CO2 e a acidificação dos oceanos, que o texto resume como 'alteração da composição química'.",
        isCorrect: false
      },
      {
        text: "Não há nenhuma relação entre poluição do ar e poluição da água do mar.",
        rationale: "Incorreto. O texto mostra que os sistemas do planeta estão conectados e que a poluição do ar tem, sim, consequências para os oceanos.",
        isCorrect: false
      },
      {
        text: "Os poluentes do ar são mais pesados e caem sobre o mar, formando uma camada de óleo.",
        rationale: "Incorreto. Os principais poluentes do ar são gases que se misturam na atmosfera. O impacto no mar é químico, não a formação de uma camada de óleo.",
        isCorrect: false
      }
    ],
    hint: "Pense em como um problema na atmosfera pode afetar o maior corpo de água do planeta.",
    difficulty: 5,
    topic: 'recursos'
  },
  {
    question: "Considerando todo o ciclo de vida de um produto, por que a afirmação 'a geração de resíduos começa quando jogo algo fora' está incorreta?",
    answerOptions: [
      {
        text: "Porque resíduos são gerados em todas as etapas anteriores: na extração, fabricação e transporte.",
        rationale: "Correto. O texto enfatiza que a geração de resíduos e rejeitos ocorre ao longo de toda a cadeia produtiva, desde a retirada de materiais da natureza até a chegada do produto ao consumidor, e não apenas no descarte final.",
        isCorrect: true
      },
      {
        text: "Porque os resíduos só são gerados se o produto for reciclado.",
        rationale: "Incorreto. A geração de resíduos acontece independentemente da reciclagem. A reciclagem é uma forma de gerenciar o resíduo que já foi criado.",
        isCorrect: false
      },
      {
        text: "Porque a afirmação está correta; resíduo é o que jogamos fora.",
        rationale: "Incorreto. Essa é uma visão incompleta. O texto mostra que o 'lixo' que produzimos em casa é apenas uma pequena parte do total de resíduos gerados para que tivéssemos aquele produto.",
        isCorrect: false
      },
      {
        text: "Porque os resíduos só são gerados na etapa de consumo, ao abrirmos a embalagem.",
        rationale: "Incorreto. A embalagem é um resíduo da etapa de consumo, mas muitos outros resíduos (líquidos, sólidos, gasosos) já foram gerados muito antes, nas fábricas e na extração.",
        isCorrect: false
      }
    ],
    hint: "Pense no 'rastro' de lixo que um produto deixou para trás antes mesmo de chegar na sua mão.",
    difficulty: 5,
    topic: 'recursos'
  },
  {
    question: "Por que o Brasil, tendo a maior parte de sua energia vinda de hidrelétricas (fonte renovável), ainda se preocupa com o uso de combustíveis fósseis?",
    answerOptions: [
      {
        text: "Porque a maior parte da frota de transporte (caminhões, carros) utiliza combustíveis fósseis como óleo diesel e gasolina.",
        rationale: "Correto. Embora a matriz elétrica seja majoritariamente renovável, a matriz de transportes é altamente dependente de combustíveis fósseis, que são uma grande fonte de poluição do ar.",
        isCorrect: true
      },
      {
        text: "Porque as hidrelétricas só funcionam durante o dia.",
        rationale: "Incorreto. Hidrelétricas funcionam dia e noite, desde que haja água no reservatório.",
        isCorrect: false
      },
      {
        text: "Porque o Brasil vende toda a energia das hidrelétricas e precisa usar combustíveis fósseis para o consumo interno.",
        rationale: "Incorreto. O Brasil consome a maior parte da energia que produz. A questão é que diferentes setores da economia usam diferentes fontes de energia.",
        isCorrect: false
      },
      {
        text: "Porque as hidrelétricas poluem mais o ar que os combustíveis fósseis.",
        rationale: "Incorreto. A operação de uma hidrelétrica não queima combustível e, portanto, não emite os gases do efeito estufa que a queima de fósseis emite. A preocupação é com os outros setores, como o de transportes.",
        isCorrect: false
      }
    ],
    hint: "Pense em como os produtos chegam até as lojas e como as pessoas se locomovem. Que tipo de 'energia' eles usam?",
    difficulty: 5,
    topic: 'recursos'
  }
];

// Embaralhar as opções de resposta para cada questão
const questionsWithShuffledOptions = rawQuestions.map(question => ({
  ...question,
  answerOptions: shuffleArray(question.answerOptions)
}));

export const quizData: { questions: QuizQuestion[] } = {
  questions: questionsWithShuffledOptions
};
