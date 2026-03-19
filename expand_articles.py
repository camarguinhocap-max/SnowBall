import re

# Ler o arquivo
with open('src/data/posts.ts', 'r', encoding='utf-8') as f:
    content = f.read()

# Expansão para educacao-financeira-para-iniciantes
educacao_expand = `### 7. Comece HOJE com 3 coisas

**1. Rastreie seu gasto de 30 dias**
Não mude nada. Só anote. Depois você enxerga a verdade.

**2. Escolha UM app ou planilha de controle**
E use todo dia. Sem tecnologia, fica difícil.

**3. Separe R$10-50 para sua "reserva emocional"**
Mesmo que seja pouco. Isso cria hábito. O hábito é tudo.

### 8. Os 3 pilares da educação financeira

**Pillar 1 - Conhecimento:**
Aprenda sobre: juros, inflação,  impostos, investimentos básicos.

**Pilar 2 - Comportamento:**
Não gastar por emoção, ser consistente, ser paciente.

**Pilar 3 - Prática:**
Não estude só. Aplique desde o dia 1. Mesmo que pequeno.

### Conclusão: Você não vira milionário do dia para a noite

Mas vira estabilizado. E depois, lentamente, prospera.

Educação financeira não é sobre privilégio ou sorte.
É sobre conhecimento + conversão + paciência.

Com o tempo, o dinheiro trabalha para você.`

# Encontrar e substituir
old_educacao = r"### 6\. Educação financeira é comportamento, não matemática[\s\S]*?Mas funciona\."
if re.search(old_educacao, content):
    content = re.sub(old_educacao, educacao_expand, content)
    print("✅ educacao-financeira expandido")

# Salvar
with open('src/data/posts.ts', 'w', encoding='utf-8') as f:
    f.write(content)

print("✅ Arquivo atualizado!")
