### Função arrow
#### O que é?
É uma função recente, foi introduzida na versão do JavaScript de 2015, uma forma mais concisa de escrever funções do que a tradicional, usando a palavra-chave <i><b>function</b></i>.
O símbolo é uma seta (arrow em inglês) formada pelo sinal de igual e o sinal de maior "=>".
#### Como funciona?
O corpo da função pode ser uma expressão, que é o valor de retorno implícito da função, ou um bloco de código, que requer uma declaração explícita de retorno.
Abaixo um exemplo de <i><b>function</b></i> e como seria o código com a arrow function:
##### Retorno implícito
![exemplo_seta_funcao](https://github.com/kassya-rosa/programacao_web2s23/assets/81445258/071c1a4a-3147-4a26-a0ee-c3fc2919a9a4)

As funções arrow têm as seguintes funcionalidades:
* São mais concisas do que as funções tradicionais.
* Não têm seu próprio <i>this</i>, <i>arguments</i>, <i>super</i> ou <i>new.target</i>.
* O corpo da função pode ser uma expressão ou um bloco de código.
* O valor de retorno implícito da função é o valor da expressão do corpo da função, se houver.
* Se o corpo da função for um bloco de código, o valor de retorno explícito da função é o valor da última expressão do bloco.
As funções arrow podem ser usadas em qualquer lugar onde as funções tradicionais podem ser usadas. Elas são especialmente úteis para funções curtas e simples, ou para funções que são usadas como <i>callbacks</i>.
