# Trocaria

Rede social de troca de produtos, objetos e serviços. 

## Definição do produto

Atualmente os usuários dispoem de serviços de redes sociais para realizar trocas, vendas, doações de objetos que não são mais de seu interesse, ou procurar alguma barganha em produtos ou serviços. As páginas de trocas são conhecidas dentro de redes por não oferecerem ainda todo o suporte necessário para a realização das negociações, tanto pela dificuldade em filtrar e acompanhar as publicações, quanto na operacionabilidade das negociações. 

Nesse intuito a TROCARIA, uma rede social para trocas, viabiliza o contato e os acordos dos diversos interesses de seus usuários, permitindo realizar trocas de objetos, doações e permutas de serviços. 

Os principais utilizadores foram definidos por três personas, criadas para exemplificar as dificuldades e demandas possíveis para a rede social. 

Aqui é possível consultar as personas 
[Nicole Almeida](https://trello-attachments.s3.amazonaws.com/5c8feb9a63a889176a828739/5c90d7c439c5bd4e348a0fdf/f4270b3747f2bceeeaa148b9ef3760ab/Nicole-Almeida.png)
[Isabella Santos](https://trello-attachments.s3.amazonaws.com/5c8feb9a63a889176a828739/5c90d7c439c5bd4e348a0fdf/417201d58469047c340555c76e6d9638/Isabella-Santos.png)
[Vitória Araujo](https://trello-attachments.s3.amazonaws.com/5c8feb9a63a889176a828739/5c90d7c439c5bd4e348a0fdf/7dd31ce4e057277e8ad9c774ac4bfc4a/Vit%C3%B3ria_Ara%C3%BAjo.png)


### Mobile First

Mobile first é um conceito aplicado em projetos web, no qual o foco da arquitetura é o desenvolvimento focado em dispositivos móveis. Assim a interface que antes era pensada para telas maiores, ganha uma nova perspectiva e passa a ser pensada primeiro para a implementação em telas de celulares e outros dispositivos menores que hoje disputam a atenção dos usuários. Esse conceito, mobile first, já se encontra em plena atividade como prática de programação e foi desenvolvido entre 2009 e 2010 pelo diretor de produto do Google, Luke Wroblewski².
Estima-se que o uso de dispositivos móveis no mundo aumente de 7 bilhões em 2013 para mais de 10 bilhões em 2018¹. No Brasil, esse universo é crescente, limites como a banda larga oferecida e a disponibilidade a custos menores dos dispositivos móveis, popularizam essa escolha de acesso por parte do usuário. 

Ao fazer uma versão mobile do site, permite-se que os usuários encontrem, de forma rápida, exatamente o que estão procurando, passem mais tempo em acesso e tenham suas necessidades atendidas. Além de contar com melhor ranqueamento por parte dos buscadores e incrementa a otimização do carregamento das páginas. Os desafios do conceito passam pela priorização de exibição, carregamento rápido e consumo mínimo de dados. A eficiência desses quesitos não garante a permanência do usuário no serviço, mas altera significativamente a experiência de navegação. A agilidade e a disponibilidade são valores das práticas de responsividade dessa  tendência.	


## Prototipagem e testes

1ª etapa: foram construídos seis protótipos, três telas pensadas para mobile e três para web.

2ª etapa: foram analisados os protótipos e escolhidas as funções mais interessantes, posicionamento e quantidade de telas.

3ª etapa: realizamos testes com usuários potenciais e verificamos a necessidade de ícones de tamanhos adequados para o toque com os dedos na tela, responsividade, botões extras como sair, cancelar e fechar.

4ª etapa: prototipagem utilizando a ferramenta Adobe XD. 
[Vídeo do protótipo](https://www.youtube.com/watch?v=JMhKdfotaNo&feature=youtu.be)

![imagem do protótipo do login](https://trello-attachments.s3.amazonaws.com/5c8feb9a63a889176a828739/5c90d7c439c5bd4e348a0fdf/447406e2bf1d54910b50a366aca852d4/login.JPG)

![imagem do protótipo do registro](https://trello-attachments.s3.amazonaws.com/5c8feb9a63a889176a828739/5c90d7c439c5bd4e348a0fdf/f5892166e8b24af1c3fee31f494298a6/register-final.JPG)

![imagem do protótipo do modal de post](https://trello-attachments.s3.amazonaws.com/5c8feb9a63a889176a828739/5c90d7c439c5bd4e348a0fdf/bfe8233b86de1a7048ede27880fa6dc3/post-final.JPG)


5ª etapa: testes no html com potenciais usuários possibilitaram confirmar a escolha de cores e o tamanho dos botões, assim como, testar a responsividade para diversas telas. Algumas funções ainda não implementadas foram sugeridas, como postar imagens nas publicações do feed.


## Produto final

As principais funcionalidades já implementadas do produto são:

- Regristro de conta com nome, email e senha;
- Login com email e senha;
- Visualizar o feed com o nome do usuário para saber se está logado (em qual conta); 
- Publicar posts sem número de caracteres definidos; 
- Escolher a privacidade do post (público ou privado)
- Filtrar para vizualizar conforme privacidade;
- Editar post;
- Apagar post que postou;
- Dar likes; 
- Vizualizar os like dados;
- Fechar e abrir o navegador e ter a autenticação persistente;
- Deslogar da rede; 


A validação dos dados no momento do registro garante que o os dados cadastrados correspondam aos quesitos de formatação e a senha está oculta. 

Foi utilizado o Firebase para autenticação, banco de dados e armazenamento. 
Usamos HTML5, CSS3, Bootstrap 4, JavaScript e Jquery para o desenvolvimento.

![imagem da tela de login](https://trello-attachments.s3.amazonaws.com/5c8feb9a63a889176a828739/5c8ff47460d21317aba3e1a1/3a7754c9d7c9b52f5f6bbd77b99bd0ff/tela_login.png)
 
![imagem da tela de login com modal de registro](https://trello-attachments.s3.amazonaws.com/5c8feb9a63a889176a828739/5c8ff47460d21317aba3e1a1/291d89f063bfffe29bd9c53b88469bb4/registro.png)

![imagem da tela de feed](https://trello-attachments.s3.amazonaws.com/5c8feb9a63a889176a828739/5c8ff47460d21317aba3e1a1/7e476c159ef455f4ccf53c86e2ab5ffd/feed.png)


## Referências

¹ https://www1.folha.uol.com.br/tec/2018/07/celular-e-mais-utilizado-do-que-computador-para-acessar-internet-no-brasil.shtml   
² https://www.moblee.com.br/blog/mobile-first-principais-vantagens/




