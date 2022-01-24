# Nucleo-back-end-Atividade-1

Então  quer dizer você esperava que eu tivesse alguma criatividade pra dar nome as coisas? Risos
ps: Obrigada, Laisa, obrigada, graças a você esse reademe presta.
# A api:

Os anjos do espaço me disseram que você queria comprar um planeta e (olhe só que conveniente) esta é uma api que simula uma loja de planetas onde você pode comprar...planetas e astros diversos (ou asteroides pra jogar no planeta do seu vizinho).

## Das rotas da api.

Essa api possui algumas rotas.

### Rotas Referente aos produtos.

Uma loja de planetas respeitavel logicamente precisaria de uma rota para adicionar planetas ao seu estoque e para isso nós temos a rota POST:

/addProducts 

Como adicionar:
{
    "name": "Super Gigante Azul",  -Nome do produto
    "class": "estrela",            -ex: planeta, estrela, cometa, constelação
    "life":"N"                     -usar S ou N para indicar se o seu astro suporta vida ou não,
    "details":"Queimando he...",   -Uma breve descrição do produto
    "qtd": "3"                     -Qunatidade disponivel
}


### Rotas Referentes aos Usuarios

A api possui três rotas para cuidar de seus clientes:

POST /addCostumer 

