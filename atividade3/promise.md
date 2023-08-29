### Promise - Javascript
#### O que é?
Introduzido em 2015, representa a eventual conclusão ou falha de uma operação assíncrona, permitindo um melhor controle e evitando o chamado <i>callback hell</i> (aninhamento excessivo de callbacks). É um objeto retornado para o qual você adiciona callbacks, em vez de passar callbacks para uma função.
##### Exemplo
![exemplo_promisexcallback](https://github.com/kassya-rosa/programacao_web2s23/assets/81445258/bb2d8ab8-ae6f-4cbd-bc74-4e63dd2f8764)

#### Como funciona?
Uma necessidade comum é executar duas ou mais operações assíncronas consecutivas, onde cada operação subsequente começa quando a operação anterior é bem sucedida, com o resultado do passo anterior. Nós conseguimos isso criando uma cadeia de promises. Basicamente, cada promise representa a completude de outro passo assíncrono na cadeia.
A promise permite que você associe manipuladores ao valor de sucesso ou motivo de falha de uma ação assíncrona. Isso permite que métodos assíncronos retornem valores como métodos síncronos: em vez de retornar imediatamente o valor final, o método assíncrono retorna uma promise para fornecer o valor em algum momento no futuro.
Uma Promise pode estar em um dos três estados:
* Pending (pendente): a operação ainda não foi concluída.
* Resolved (resolvida): a operação foi concluída com sucesso.
* Rejected (rejeitada): a operação falhou.
Quando resolvida ou rejeitada, o método <i>then</i> será chamado para "lidar" com a saída e pode ser mais de um <i>then</i>. O método <i>then</i> aceita até dois argumentos; o primeiro argumento é uma função de retorno de chamada para o caso cumprido da promise e o segundo argumento é uma função de retorno de chamada para o caso rejeitado. Cada <i>then</i> retorna um objeto de promise recém-gerado, que pode ser usado opcionalmente para encadeamento.
O processamento continua para o próximo elo da cadeia mesmo quando um <i>then</i> não possui uma função de retorno de chamada que retorna um objeto Promise. Portanto, uma cadeia pode omitir com segurança cada <i>rejection</i> função de retorno de chamada até o <i>catch</i> final.
![exemplo_encadeamento_promise](https://github.com/kassya-rosa/programacao_web2s23/assets/81445258/c62b24e1-6bdb-4098-9b04-76bf97b1f59d)
