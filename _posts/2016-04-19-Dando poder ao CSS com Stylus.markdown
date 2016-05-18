---
layout: post
title:  "Dando poder ao CSS com stylus"
date: 2016-05-18 15:03:23
categories: jekyll update
image: stylus.png
author: Cleyson Leal
tags:
- Introdução
- Stylus

description: 'De poder ao seu CSS com o pré processador stylus.'
---

 <img class="post__item__thumb" src="/assets/img/post-images/stylus.png">

<h3>Introdução</h3>

Como assim dar poder ao CSS?! Vou precisar ser mordido por um CSS radioativo para ter esses poderes?! Nada disso, vem comigo que eu te mostro.
O CSS é relativamente fácil de aprender, mas muito dificil de se manter, dificil de escalar e modularizar.
Os pré processadores vieram para ajudar um pouco com isso, possibilitando o uso de variáveis, mixins e funções no nosso CSS!
Vamos ver como isso tudo funciona?!

<h3>Instalação</h3>

Para inicio de conversa vamos precisar do <a href="https://nodejs.org/en/" title="NodeJS" target="_blank">NodeJS</a>, Caso ainda não tenha instalado (que eu duvido muito) basta <a href="https://nodejs.org/en/download/" title="Download nodeJS" target="_blank">Fazer Download</a> e instalar!
Com o Node instalado vamos abrir o nosso terminal e digitar o seguinte comando.

<code>$ npm install stylus -g</code>

Pronto! Agora temos o Stylus no nosso ambiente!

<h3>Como Usar</h3>

Crie um diretório onde vai ficar seu arquivo stylus, exemplo <code>stylus/main.styl</code>, lembrando que a extensão do arquivo tem que ser <code>.styl</code>.
Agora vamos criar o diretório para onde vai o nosso CSS compilado, por exemplo <code>css/</code>.
Para que o nosso arquivo stylus seja compilado, precisamos "assistir" ele, vamos fazer isso com o comando

<code>$ stylus -w stylus/main.styl -o css/</code>

o <code>-w</code> assiste o arquivo <code>main.styl</code> e o <code>-o</code> mostra o caminho para onde vai o arquivo compilado.

<h3>Seletores</h3>

Uma peculiaridade do stylus é que não é obrigatório usar chaves <code>{}</code>, dois pontos <code>:</code> nem ponto e virgula <code>;</code> na hora de escrever seu CSS, mas ainda sim você pode usar sem problemas,
com ou sem ele será compilado da mesma forma.

<strong>Parent Reference</strong> (Referência pai) é uma feature bem legal do stylus, onde podemos fazer referencia ao elemento pai usando o <code>&:</code><br>

<strong>Exemplo</strong>
<p data-height="265" data-theme-id="0" data-slug-hash="GZabQa" data-default-tab="css,result" data-user="Cleyson" data-embed-version="2" class="codepen">See the Pen <a href="http://codepen.io/Cleyson/pen/GZabQa/">Parent Reference example</a> by Cleyson Leal (<a href="http://codepen.io/Cleyson">@Cleyson</a>) on <a href="http://codepen.io">CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>

<h3>Variáveis</h3>

Sim! O stylus da o poder das variáveis ao CSS, para usar a variável basta escrever o nome da variável seguido do sinal de <code>=</code> e o <code>valor</code>.<br>

<strong>Exemplo</strong>
<p data-height="265" data-theme-id="dark" data-slug-hash="grJNdV" data-default-tab="css,result" data-user="Cleyson" data-embed-version="2" class="codepen">See the Pen <a href="http://codepen.io/Cleyson/pen/grJNdV/">variaveis stylus example</a> by Cleyson Leal (<a href="http://codepen.io/Cleyson">@Cleyson</a>) on <a href="http://codepen.io">CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>

<h3>Mixins</h3>

Mixins e funções são bem parecidos, setados da mesma forma mas usados de formas diferentes. Podemos usar o mixin como no exemplo

<strong>Exemplo</strong>
<p data-height="265" data-theme-id="dark" data-slug-hash="zqQVQj" data-default-tab="css,result" data-user="Cleyson" data-embed-version="2" class="codepen">See the Pen <a href="http://codepen.io/Cleyson/pen/zqQVQj/">Mixin stylus example</a> by Cleyson Leal (<a href="http://codepen.io/Cleyson">@Cleyson</a>) on <a href="http://codepen.io">CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>

Quando <code>border-radius ()</code> é invocada dentro de um selector, as propriedades são expandidas e copiadas para o seletor, assim facilitando a vida na hora de usar prefixo por exemplo :D<br>


<h3>Funções</h3>

Pra quem conhece linguagem de programação já esta mais que acostumado com funções, agora podemos escrever funções no nosso CSS!<br>

<strong>Exemplo</strong>
<p data-height="265" data-theme-id="dark" data-slug-hash="Yqbmym" data-default-tab="css,result" data-user="Cleyson" data-embed-version="2" class="codepen">See the Pen <a href="http://codepen.io/Cleyson/pen/Yqbmym/">Function stylus example</a> by Cleyson Leal (<a href="http://codepen.io/Cleyson">@Cleyson</a>) on <a href="http://codepen.io">CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>

O stylus ainda tem muita coisa legal que não citei no post, vou deixar leituras complementares para quem quiser se aprofundar e virar um mestre em stylus! ;)

<a href="http://stylus-lang.com/docs/mixins.html" target="_blank" title="Documentação Stylus">Documentação do Stylus</a><br>
<a href="http://blog.da2k.com.br/tags/stylus/" target="_blank" title="Série sobre Stylus">Série sobre Stylus feito pelo Fernando Daciuk</a><br>
<a href="https://leveluptutorials.com/tutorials/stylus-tutorials" target="_blank" title="Série Stylus Lvlup">Série em video sobre Stylus do LvlUp tutorials (Inglês)</a>



