# AVISO: ALTOS NIVEIS DE RADIAÇÃO

Você ja escutou algum concerto do Rachimaninoff e pensou "nossa, deve ser realmente muito incrivel tocar piano que nem ele".    
Essa Api é aproxiamadamente como esse pensamento, um exercício de imaginação, e o que eu quero dizer com isso é: **ela não funciona**.    
Ela não consgue se conectar com o banco de dados. Mas, depois de dias batendo a cabeça no teclado, eu resolvi continuar a construção dessa belezinha na esperança de resolver o problema posteriormente.  
O problema é que, logicamente, foi impossivel testar as rotas então nada disso tem garantia de que vai funcionar (especialmente a parte do JWT) 

# A api:

Os anjos do espaço me disseram que você queria comprar um planeta e (olhe só que conveniente) esta é uma api que simula uma loja de planetas onde você pode comprar...planetas e astros diversos (ou asteroides pra jogar no planeta do seu vizinho).

## Das rotas da api.

Essa api possui algumas rotas.

### Rotas Referente aos produtos.

Uma loja de planetas digna logicamente precisaria de uma rota para adicionar planetas ao seu estoque e para isso nós temos a rota POST:

**/addProducts**

Como adicionar:  
{\
---    "name": "Super Gigante Azul",  ---*-Nome do produto*\
---    "class": "estrela",            *-ex: planeta, estrela, cometa, constelação.*\
---    "life":"N"                     ---*(S/N)indicar se o seu astro suporta vida.*\
---    "details":"Queimando he...",   ---*-Uma breve descrição do produto*\
---    "qtd": "3"                     ---*-Qunatidade disponivel.*\
}

O resultado pode ser encontrado na rota:

GET **/allProducts**

### Rotas Referentes aos Usuarios

GET **/allCostumers**

POST **/createCostumer**

{\
    "name": "Dandelion",\
    "username": "oBardo",\
    "email": "Dand10@bardos.com",\
    "pass":"geralt123"\
}

Para atualizar:

PUT **/updateUser/:iddousuarioaqui**

{\
    "costumer_name":"....",\
    "username":"...",\
    "email"\
    "pass":"..."\
}

Não é necessário atualizar tudo de uma vez:

{\
    "costumer_name": "patrick",\
    "username":"aEstrela"\
}  
Também funcionaria por exemplo.

Por fim:

DELETE **/deleteCoatumer/:iddequemvocêquerexterminar** para deletar clientes

### Rotas referentes aos pedidos

GET **/allOrders**
Você pode adicionar encomenda de planetas em:

POST **/createOrder**
 
{\
    "productId":"3",\
    "costumerId":"204",\  
    "qtd":"90.0000"\
}

já para deletar um pedido:

DELETE **/deleteOrder/:id**

### Rotas especiais

Então quer dizer que você é um fofoqueiro e quer saber quem pediu o quê? Sem problemas:

GET **/costumersByOrderId/:iddopedido** vai mostrar quem pediu aquela estrela da morte.\
GET **/allCostumersByOrderId** mostra todos os pedidos por id e quem pediu.\
GET **/productsBiOrderId/:id** mostra o item que foi pedido para quela order.\
GET **/allProductsByOrderId** mostra tudo o que foi pedido em cada order.\
