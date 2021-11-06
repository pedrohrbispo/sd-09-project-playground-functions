# Project Playground Functions :currency_exchange:

> - Curso: **Desenvolvimento Web Full Stack | Trybe**
> - Módulo: **Fundamentos do Desenvolvimento Web**
> - Bloco: **04 - Introdução à JavaScript e Lógica de Programação**

---
### Proposta do projeto

> Implementar funções utilizando os conhecimentos de: **_JavaScript_**.

### Por que isso é importante?

<p style="text-align: justify">
  Durante a carreira como pessoa desenvolvedora, é importante saber quebrar grandes problemas em problemas menores e utilizar a lógica de programação na resolução;
  Conseguir aplicar lógica de programação na prática utilizando o JavaScript e em qualquer outra linguagem é algo que iremos nos deparar do dia-a-dia enquanto programador.
</p>

### Especificações

<p style="text-align: justify">
  Desenvolver as funções abaixo seguindo os requisitos especificados para o correto comportamento de cada uma delas.
</p>

### REQUISITOS

---
**1 - Usando o operador &&**
--
Função chamada `compareTrue` que, ao receber dois booleanos:

- Retorne `true` se ambos os valores são verdadeiros;
- Retorne `false` se um ou ambos os parâmetros forem falsos.

---
**2 - Área do triângulo** 
--
Função chamada `calcArea` que recebe um valor de `base` e outro de `altura` de um triângulo e retorne o **cálculo da sua área**.

---
**3 - Dividindo a frase**
--
Função chamada `splitSentence`, o qual recebe uma `string` e retorna um `array de strings` separadas por cada espaço na string original.

**Exemplo**: se a função receber a string `"go Trybe"`, o retorno deverá ser `['go', 'Trybe']`.

---
**4 - Concatenação de strings**
--
Função chamada `concatName`, que ao receber um `array de strings`, retorne uma string com o formato `'ÚLTIMO ITEM, PRIMEIRO ITEM'`, independente do tamanho do array.

**Exemplo**: caso o parâmetro passado para `concatName` seja o **Array**: `['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']`, a função deverá retornar `'Paolillo, Lucas'`.

---
**5 - Pontos no futebol**
--
Função chamada `footballPoints`, que recebe o **número de vitórias** e o **número de empates** e retorna a **quantidade de pontos** que o time marcou em um campeonato.

É considerado que cada **vitória** vale **3 pontos** e cada **empate** vale **1 ponto**.

---
**6 - Repetição do maior número**
--
Função chamada `highestCount`, que recebe um **array de números**, retorna a **quantidade** de vezes que o **maior** deles se **repete**.

**Exemplo**: caso o parâmetro seja `[9, 1, 2, 3, 9, 5, 7]`, a função retorna `2`, que é a quantidade de vezes que o número `9` (maior número do array) se repete.

---
**7 - Caça ao rato**
--
Imagine que existem dois gatos, chamados de `cat1` e `cat2`, e que ambos estão atrás de um rato chamado `mouse`. Imagine que cada um dos três animais está em uma posição representada por um número.

A função chamada `catAndMouse`, recebe a posição de `mouse`, `cat1` e `cat2`, **nessa ordem**, calcula as distâncias entre o rato e os gatos e retorna qual dos felinos irá alcançar o rato primeiro (sendo aquele que estará mais perto).

**Exemplo**: caso o rato `mouse` esteja na posição 1, o gato `cat2` esteja a 2 unidades de distância do rato, e `cat1` esteja a 3 unidades, sua função deverá retornar `"cat2"`.

Caso os gatos estejam na mesma distância do rato, a função retornará a string `"os gatos trombam e o rato foge"`.

---
**8 - FizzBuzz**
--
Função chamada `fizzBuzz` que recebe um **array de números** e retorna um array da seguinte forma:

- Para cada número do **Array** que seja divisível apenas por **3**, apresenta uma string `"fizz"`;
- Para cada número do **Array** que seja divisível apenas por **5**, apresenta uma string `"buzz"`;
- Caso o número seja divisível por **3** e **5**, retorna a string `"fizzBuzz"`;
- Caso o número não possa ser dividido por **3** nem por **5**, retorne a string `"bug!"`;

**Exemplo**: caso o parâmetro seja `[2, 15, 7, 9, 45]`, sua função deverá retornar `["bug!", "fizzBuzz", "bug!", "fizz", "fizzBuzz"]`.

---
**9 - Codifique e Decodifique**
--
São duas funções: a primeira se chama `encode` e, ao receber uma string como parâmetro, ela troca todas as vogais minúsculas por números, de acordo com o formato a seguir:

a -> 1 \
e -> 2 \
i -> 3 \
o -> 4 \
u -> 5

**Exemplo**: caso o parâmetro de `encode` seja `"hi there!"`, o retorno deverá ser `"h3 th2r2!"`.

A segunda função se chama `decode` e faz o contrário de `encode` - ou seja, recebe uma string contendo números no lugar de letras minúsculas e retorna uma string com vogais minúsculas no lugar dos números (então, caso o parâmetro de `decode` seja `"h3 th2r2!"`, o retorno será `"hi there!"`).

---
**10 - Lista de tecnologias**
--
A função que recebe um array de nomes de tecnologias que você quer aprender. Essa função deve receber também um segundo parâmetro com um nome.

Para cada tecnologia no array, cria um objeto com a seguinte estrutura:

```
{
  tech: "NomeTech",
  name: name
}
```

Estes objetos são inseridos em uma nova lista em ordem crescente a partir do campo `tech` no objeto.

A saída da sua função será uma lista de objetos ordenada pelo campo `tech` dos objetos com o formato acima.

Exemplo:
```
Entradas da função:

["React", "Jest", "HTML", "CSS", "JavaScript"]
"Lucas"

// Saída:

[
  {
    tech: "CSS",
    name: "Lucas"
  },
  {
    tech: "HTML",
    name: "Lucas"
  },
  {
    tech: "JavaScript",
    name: "Lucas"
  },
  {
    tech: "Jest",
    name: "Lucas"
  },
  {
    tech: "React",
    name: "Lucas"
  }
]
```

Caso o array venha vazio a função retornará 'Vazio!'

---
**Bônus**
=

**11 - Número de telefone**
--
Função chamada `generatePhoneNumber` que recebe um array com 11 números e retorna um número de telefone, respeitando parênteses, traços e espaços.

**Exemplo**: caso o parâmetro da função seja `[1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1]`, `generatePhoneNumber` retornará `(12) 34567-8901`.

- Se a função receber um array com tamanho diferente de 11, a mesma deve retornar `"Array com tamanho incorreto."`.

- Caso algum dos números do array seja menor que 0, maior que 9 ou se repita 3 vezes ou mais, `generatePhoneNumber` deverá retornar a string `"não é possível gerar um número de telefone com esses valores"`.

---
**12 - Condição de existência de um triângulo**
--
Um triângulo é composto de três linhas: `lineA`, `lineB` e `lineC`. A função chamada `triangleCheck` receberá as três linhas como parâmetro e retorna se é possível formar um triângulo com os valores apresentados de cada linha.

- Para que seja possível formar um triângulo, é necessário que a medida de qualquer um dos lados seja menor que a soma das medidas dos outros dois e maior que o valor absoluto da diferença entre essas medidas.

- **Obs.**: Para obter o valor absoluto de um número em JavaScript, pode-se pesquisar a função `Math.abs`.

- O retorno da função será um booleano.

**Exemplo**: o retorno de `triangleCheck(10, 14, 8)` será `true`.

---
**13 - Bem vindo ao Bar da Trybe!**
--
Segundo as regras desse bar, a cada bebida deve-se beber um copo de água para que não se tenha ressaca.

A função chamada `hydrate` recebe uma string, e retorna a sugestão de quantos copos de água você deve beber.

**Exemplos**:

```
String recebida:
  "1 cerveja"
String retornada:
  "1 copo de água"
```

```
String recebida:
  "1 cachaça, 5 cervejas e 1 copo de vinho"
String retornada:
  "7 copos de água"
```

```
String recebida:
  "1 cachaça, 5 cervejas e 1 copo de vinho"
String retornada:
  "7 copos de água"
```

**Notas**

- Para simplificar, é considerado que qualquer coisa com um número à frente é uma bebida **e que a sua string sempre virá com o formato quantidade (em número) + tipo da bebida**.

- O número na frente de cada bebida está no intervalo entre 1 e 9.

**Obs:** pesquisar por algo similar a `get all integers inside a string js`.

---
_by Cleber Lopes Teixeira | Trybe - Turma 09_ :v: :rocket:
