Crie um arquivo HTML único, completo e funcional, que represente um MAPA-MÚNDI INTERATIVO com animação de rota, inspirado no livro "A Volta ao Mundo em 80 Dias", focando exclusivamente na parte da viagem pela Índia.

O projeto deve ser visual, interativo e educativo, simulando uma jornada animada sobre o mapa, como se fosse um desenho.

========================================
CONCEITO PRINCIPAL
========================================
A tela inicial deve mostrar um MAPA-MÚNDI realista (pode ser imagem estática ou estilo Google Maps simplificado).

Sobre esse mapa:
- Mostrar uma rota de viagem chegando até a Índia
- O deslocamento deve respeitar a geografia:
  - NAVIO se move apenas sobre o mar
  - PERSONAGENS se movem apenas sobre a terra

========================================
ANIMAÇÃO DE PERCURSO (OBRIGATÓRIO)
========================================

1. CHEGADA DE NAVIO
- Mostrar um barco animado vindo pelo oceano até a costa da Índia
- Movimento suave sobre o mar (nunca sobre a terra)
- Pode incluir leve animação de ondas

2. DESLOCAMENTO NA ÍNDIA
- Após chegada:
  - Mostrar movimento terrestre (ícone, bonequinho ou marcador)
  - Seguir uma rota sobre o mapa da Índia
- Pode ter uma linha indicando o caminho

3. TRANSIÇÃO ENTRE EVENTOS
- Antes de mostrar cada cena:
  - Executar uma animação de deslocamento
- Criar sensação de continuidade da viagem

========================================
ESTRUTURA DOS 7 EVENTOS (OBRIGATÓRIO E FIXO)
========================================

Os eventos devem ser EXATAMENTE estes:

1. CHEGADA À ÍNDIA (NAVIO)
- Barco chegando pelo oceano
- Aproximação da costa

2. O CRIADO OBSERVA UMA FESTA DE RUA
- Rua movimentada
- Procissão/festival tradicional (substituir “carnaval”)
- Elementos culturais

3. TEMPLO E CONFLITO CULTURAL
- Criado entra em um templo
- Não respeita costumes religiosos locais
- É repreendido (sem violência explícita)
- (Corrigir: NÃO usar igreja nem práticas cristãs)

4. TREM INTERROMPIDO E ELEFANTE
- Trem para porque trilhos acabaram
- Patrão consegue um elefante
- Continuação da viagem com guia local

5. RESGATE DA MULHER
- Mulher sendo preparada para sacrifício
- Cena tratada com respeito (sem violência gráfica)
- Criado salva a mulher
- Grupo segue viagem e passa por pousada
- Retorno ao trem

6. PRISÃO E TRIBUNAL
- Prisão por causa do ocorrido no templo
- Julgamento
- Pagamento de fiança
- Libertação

7. PARTIDA DE NAVIO
- Saída da Índia
- Continuação da viagem por mar

========================================
INTERATIVIDADE NO MAPA
========================================

- Criar 7 pontos interativos no mapa
- Cada ponto representa um evento
- Ao clicar:
  - abre um painel/modal animado
  - mostra:
    - imagem
    - título
    - descrição

- Deve permitir:
  - avançar e voltar entre eventos
  - destacar o ponto atual
  - mostrar progresso da jornada

========================================
FULLSCREEN (OBRIGATÓRIO)
========================================

Adicionar botão de tela cheia:

- Usar:
  document.documentElement.requestFullscreen()
  document.exitFullscreen()

- Botão alterna:
  - entrar/sair
- Posicionado no canto superior
- Estilo elegante

========================================
VISUAL
========================================

- Tema: aventura, exploração, século XIX
- Paleta:
  - dourado
  - vermelho
  - bege
  - azul escuro
- Interface limpa e escolar

========================================
IMAGENS
========================================

- Usar imagens ou placeholders
- Preparar para:
  india1.jpg até india7.jpg

========================================
EXTRAS IMPORTANTES
========================================

- Linha de rota conectando os pontos
- Destaque visual do ponto atual
- Animação suave
- Responsivo

========================================
REGRAS IMPORTANTES
========================================

- Respeitar geografia:
  - barco no mar
  - deslocamento terrestre na terra

- Linguagem escolar
- Sem violência explícita
- Correções obrigatórias:
  - usar "templo"
  - usar "costumes religiosos locais"
  - usar "procissão/festival tradicional"

========================================
OBJETIVO FINAL
========================================

O resultado deve parecer:

"Um mapa-múndi interativo animado, onde a viagem acontece visualmente com barco no oceano e percurso terrestre na Índia, conectando os 7 eventos da história."

========================================
ENTREGA
========================================

- HTML completo
- CSS + JS embutidos
- Comentado
- Pronto para uso
- Visual bonito e funcional