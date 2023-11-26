import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { CSSTransition, TransitionGroup } from 'react-transition-group';
import styled from 'styled-components';
import './App.css';
import { FooterButton } from './components/FooterButton';
import { Footer, Header } from './components/Layout';
import MenuComponent from './components/MenuComponent';
import NotFound from './components/NotFound';
import PostComponent from './components/Post';
import SearchBar from './components/SearchBar';

const Main = styled.main`
  margin: 0 auto;

  display: grid;
  grid-gap: 1rem; 
  justify-items: center;
  
  background-color: #fff;
  padding: 5rem 1rem;
  overflow-x: hidden;
  overflow-y: auto;
  box-sizing: border-box;
  font-family: 'Roboto', sans-serif;
  font-size: 1rem;
  line-height: 1.5rem;
  color: #333;
  text-align: center;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const FadeTransition = styled.div`
  &.fade-enter, &.fade-exit {
    opacity: 0;
    transform: translateY(-20px);
    transition: opacity 300ms, transform 300ms;
  }

  &.fade-enter-active, &.fade-exit-done {
    opacity: 1;
    transform: translateY(0);
  }
`;

function App() {
  const [search, setSearch] = useState('');

  const [posts, setPosts] = useState([
    {
      title: 'Centro Cultural da Justiça Federal (CCJF)',
      address: 'Av. Rio Branco, 241 - Centro',
      postalCode: '20040-009',
      description: `Um dos destaques do Centro do Rio de Janeiro e do Tour Prédios Antigos da Cinelândia é o Centro Cultural da Justiça Federal (CCJF), que ocupa o prédio da antiga sede do Supremo Tribunal Federal.
      `,
      imgUrl: "centro.png",
      likes: 397,
      comments: 62,
      coordinates: [-22.9106518, -43.1754904,21],
      additionalPhotos: [
        'centro.png',
        'centro.png',
        'centro.png',
        'centro.png',
      ]
    },
    {
      title: 'Edifício Atlântica Boavista',
      address: 'Rua Prudente de Morais, 630 - Ipanema',
      postalCode: '22420-040',
      imgUrl: "edificioipanema.png",
      likes: 420,
      comments: 99,
      coordinates: [-22.985298, -43.202795],
      description: `Foi projetado em 1978 por Mauro Neves Nogueira e pelo arquiteto Luiz Paulo Conde (1934-2015), prefeito do Rio de Janeiro entre os anos de 1997 a 2000. Sua construção foi realizada pela Griner Engenheiros Construtores. Em 1981 o prédio foi concluído recebendo o nome de seu proprietário na época, a Atlântica Boavista Imobiliária.
      Apesar de ser um edifício alto apenas quatro andares são destinados aos apartamentos. Nos dois primeiros ficam a garagem, play e academia.
      O grande destaque são os cobogós usados na garagem, fachada e nas varandas de todas as unidades. O cobogó escolhido foi o hexaédrico cerâmico de dez centímetros, que atua como elemento vazado com a finalidade de iluminar e ventilar. Nesse caso ele também serve como revestimento, tornando-se assim, o grande protagonista do Atlântica Boavista.
      Lembrando que o cobogó nasceu na década de 1920, em Recife, e seu nome surgiu a partir da junção das primeiras sílabas dos sobrenomes de seus criadores: o português
      Amadeu Oliveira Coimbra, o alemão Ernesto August Boeckmann e o brasileiro Antônio de Góis.
`,
      additionalPhotos: [
        'edificioipanema.png',
        'edificioipanema.png',
        'edificioipanema.png',
        'edificioipanema.png',
        
      ]
    },
    {
      title: 'Casa Eva Klabin',
      address: 'Avenida Epitácio Pessoa, 2480, Lagoa',
      postalCode: '22471-000',
      imgUrl: 'casa-eva-klabin/casa_eva.jpg',
      likes: 425,
      comments: 69,
      coordinates: [-22.952075, -43.338358],
      description: `Casa Eva Klabin, localizada na Avenida Epitácio Pessoa, nº 2480, na Lagoa. A residência de três andares é a sede à fundação Eva Klabin (1903-1991) desde 1995.

      Foi construída em 1931, em estilo normando, muito em voga entre as residências de balneário da cidade nessa época. Eva casou em 1933 e logo depois comprou essa casa que lhe serviu de moradia por mais de 50 anos.
      
      Em 1952, o arquiteto romano Gaetano Minnucci foi contratado por Eva para reformar a residência. Minucci manteve o estilo original na maior parte da residência, mas agregou fachadas palacianas e ambientes internos imbuídos de espírito clássico. Nos anos 1960, a casa passou por novas reformas, visando ampliar sua área construída. Desde a última reforma a casa está dividida em nove ambientes principais, nomeados por Eva: Hall Principal, Sala Renascença, Sala Inglesa, Sala de Jantar, Sala Chinesa, Hall Superior, Sala Verde, Boudoir e Quarto de Dormir. O incrível jardim foi projetado por Roberto Burle Marx.
      
      Essa linda casa já hospedou diversas personalidades: Juscelino Kubitschek, Harry Oppenheimer, David Rockefeller, Elie Wiesel, Henry Kissinger e Shimon Peres são algumas delas.
      
      A residência conta com mais de 2 mil peças que foram adquiridas por Eva ao longo de décadas. A visitação pode ser feita de quarta à domingo das 14h às 18h. Até o dia 19 de novembro é possível conferir a exposição “Essas Pessoas na Sala de Jantar”. Um programa imperdível para admiradores de arte, história e arquitetura!
`,
      additionalPhotos: [
        'casa-eva-klabin/eva.jpg',
        'casa-eva-klabin/eva.jpg',
        'casa-eva-klabin/eva.jpg',
        'casa-eva-klabin/eva.jpg',
        
        
      ]
    },
    {
      title: 'Edifício Alagoas',
      address: 'Rua Ministro Viveiros de Castro, 122, Copacabana',
      postalCode: '22021-010',
      imgUrl: 'edificio-alagoas/alagoas.png',
      likes: 420,
      comments: 69,
      coordinates: [-22.952075, -43.338358],
      description: `Na Rua Ministro Viveiros de Castro,122, em Copacabana, foi inaugurado em 1933 o Edifício Alagoas, um exemplar extraordinário do estilo art déco.

      Antes de visitar o interior do Alagoas encontrei gravado no granito escuro da fachada informações que indicam que o prédio foi projetado por Angelo Bruhns e construído por Penna & França.
      
      São seis andares e vinte e quatro apartamentos de dois e três quartos ao todo. A fachada do Alagoas tem formato de proa de navio, evidenciando que o prédio faz parte da vertente náutica do estilo art déco. O portão em ferro e sem vidros de 90 anos com detalhes em dourado é um de seus pontos fortes.
      
      O hall de entrada é um dos mais charmosos de Copacabana. Três tipos de mármores com cores diferentes decoram a portaria repleta de volumetria. São dois elevadores de portas pantográficas, além de uma escada iluminada naturalmente graças a uma parede em madeira e vidro. O piso em frente as portas principais dos apartamentos é de pastilhas brancas e verdes e a numeração das unidades vai de 1 a 24, ou seja, no último andar estão os apartamentos 21, 22, 23 e 24.
      
      O térreo conta com duas lojas comerciais fechadas há muitos anos. Elas são usadas pelo vizinho Hotel Royal Rio Palace. No início da década de 1990 o hotel comprou as lojas e começou a adquirir alguns apartamentos com a intenção de se tornar o único dono do prédio. Provavelmente para realizar a sua demolição e construir em seu terreno uma expansão do hotel. Graças ao tombamento realizado pela Prefeitura do Rio essa ideia não foi a frente.
      
      Já reparou na beleza do Alagoas de Copacabana?`,
      additionalPhotos: [
        'edificio-alagoas/alagoas.png',
        'edificio-alagoas/alagoas.png',
        'edificio-alagoas/alagoas.png',
        'edificio-alagoas/alagoas.png',

      ]
    },
    {
      title: 'Igreja de Nossa Senhora da Lapa dos Mercadores',
      address: 'Rua do Ouvidor, 35, Centro',
      postalCode: '20010-150',
      imgUrl: 'igreja-nossa-senhora/light-and-airy-lapa-dos.jpg',
      likes: 420,
      comments: 69,
      coordinates: [-22.952075, -43.338358],
      description: `A Igreja de Nossa Senhora da Lapa dos Mercadores, guarda um tesouro histórico há 130 anos. Trata-se de uma bala de canhão que atingiu sua torre durante a Revolta da Armada, em 1893. Na ocasião, a imagem da Nossa Senhora da Fé caiu da torre de uma altura de 25 metros sem sofrer grandes danos,tendo quebrado apenas alguns dedos de uma das mãos.
      A escultura encontra-se preservada numa sala da igreja ao lado da bala fixada numa das paredes. Outro elemento importante do templo é um medalhão trabalhado em mármore, fixado na parte superior da fachada, que representa a coroação da Virgem Maria. Ele foi encontyrado durante escavações realizadas no terreno para uma remodulação da igreja no século XIX.
      Essa contrução foi inaugurada em 1750,estava fechada desde 2020 e em maio de 2023 reabriu as portas aos fiéis e ao público graças ao empenho do Cláudio André Castro, nomeado Comissário Administrativo da Irmandade dos Mercadores.
`,
      additionalPhotos: [
        'igreja-nossa-senhora/igreja.png',
        'igreja-nossa-senhora/igreja.png',
        'igreja-nossa-senhora/igreja.png',
        'igreja-nossa-senhora/igreja.png',
  
        
        
      ]
     },
    {
      title: 'Sobrado da Cidade',
      address: 'Rua do Rosário, 34, Centro',
      postalCode: '20041-000',
      imgUrl: 'sobrado-da-cidade/sobrado.png',
      likes: 420,
      comments: 69,
      coordinates: [-22.952075, -43.338358],
      description: `Foi inaugurado em 1865 uma construção de três andares e azulejos holandeses em sua fachada.
      No passado esse imóvel foi sede de diversos estabelecimentos comerciais e da Companhia Nacional de
      Salinas Mossoró - Assú, uma companhia marítima que existiu até 1901. Foi residência nos pavimentos superiores, tendo funcionado como pensão e aluguel de cômodos e escritórios. No térreo tinham armazéns e depósitos.
      Hoje no local funciona o bar e restaurante Sobrado da Cidade. A experiência começa no restaurado Sobrado com a reprodução de um generoso café da manhã da última década do século XIX no estilo banquete, como era servido para a alta sociedade. A imersão no passado é feita através de muitos detalhes de época: trilha sonora, porcelanas, pratarias, talheres e principalmente o cardápio.
      Destaque para as rabanadas!
`,
      additionalPhotos: [
        'sobrado-da-cidade/sobrado.png',
        'sobrado-da-cidade/sobrado.png',
        'sobrado-da-cidade/sobrado.png',
        'sobrado-da-cidade/sobrado.png',
    
        
        
      ]
    },
    {
      title: 'Edifício Colonial',
      address: 'Rua Nascimento Silva, 378, Ipanema',
      postalCode: '22421-025',
      imgUrl: 'edificio-colonial/colonial.png',
      likes: 420,
      comments: 69,
      coordinates: [-22.952075, -43.338358],
      description: `O prédio inaugurado em 1938, faz parte do Circuito da Música graças a Renato Russo (1960-1996), seu famoso morador.
      Ele viveu no apartamento 201 (janelas com grades do meio da fachada) de 1990 até 1996, ano de sua morte. A linda porta de entrada do prédio foi usada na capa de seu disco "Stonewall Celebration" de 1994.
      Outros quatro discos foram criados nesse endereço. Atualmente, o apartamento do cantor e compositor está fechado. Tudo em seu interior está do jeito que ele deixou: com todos os seus LPs, livros, móveis e documentos.
      Até hoje os fãs do cantor vão até a porta do Edifício Colonial para replicar a foto da lendária capa do disco de Renato Russo.
      O Edifício Colonial, ganhou a famosa placa azul de patrimônio cultural da prefeitura do Rio de Janeiro.
`,
      additionalPhotos: [
        'edificio-colonial/colonial.png',
        'edificio-colonial/colonial.png',
        'edificio-colonial/colonial.png',
        'edificio-colonial/colonial.png',
        
        
      ]
    },
    {
      title: 'Churrascaria Palace',
      address: 'Rua Rodolfo Dantas, 16, Copacabana',
      postalCode: '22020-040',
      imgUrl: 'churrascaria-palace/palace.png',
      likes: 420,
      comments: 69,
      coordinates: [-22.952075, -43.338358],
      description: `A famosa Churrascaria Palace é um dos lugares mais especiais de Copacabana, bairro que completou 131 anos no último dia 6 de julho. Está localizada desde 1962 na Rua Rodolfo Dantas, n° 16, em frente ao Hotel Copacabana Palace e no térreo do Edifício Sumaré (próxima história contada aqui).

      A Churrascaria foi fundada em 1951 no Leme. Onze anos depois ela se mudou para um ponto comercial com mais de 600 m2 a poucos metros do hotel mais famoso do Brasil. Em homenagem ao Copacabana Palace a Churrascaria foi rebatizada de Palace. Durante as últimas seis décadas seu espaço foi um ponto de encontro para as maiores celebridades da música nacional. Alguns deles foram representados no lindo painel "Santa Ceia da Bossa-Nova" ao lado de um piano de cauda. Na foto do painel (3) da esquerda para a direira estão: Tom Jobim, João Gilberto, Ronaldo Bôscoli, Carlos Lyra, Roberto Menescal, Baden Powell, Vinícius de Moraes, Toquinho, Elizeth Cardoso, Marcos Valle, Nara Leão, João Donato e Johnny Alf. A bossa-nova é o ritmo oficial tocado em seus ambientes.
      
      Em 2018 todo o seu interior foi reformado com projeto de Chicô Gouvea. A Palace recebeu decoração inspirada no estilo art déco visível nas luminárias, bar, toaletes, sousplats com grafismo déco e quadros com fotografias de cinco prédios art déco do polo Lido em Copacabana (Tuyuty, Adriano de Barros, Irapuan, Alagoas e Ophir).
      
      No dia 23 de dezembro de 2022 a Palace recebeu a desejada placa azul da Prefeitura do Rio indicando que ela é um Patrimônio Cultural Carioca, um Bem Preservado do Rio que faz parte do Circuito de Negócios Tradicionais.
      
      Recentemente apareceu na lista de restaurantes mais lendários do mundo na posição 74. Suas carnes saborosas e macias são as melhores do Rio. Isso sem mencionar o buffet, bebidas e sobremesas.
      
      A Palace abre diarimente das 12h às 22h. Os valores e cardápio estão no link da bio da página do Instagram da @churrascariapalace
      
      Já visitou ou pretende conhecer?`,
      additionalPhotos: [
        'churrascaria-palace/palace.png',
        'churrascaria-palace/palace.png',
        'churrascaria-palace/palace.png',
        'churrascaria-palace/palace.png',
      
        
        
      ]
     },
    {
      title: 'Edifício Manhattan',
      address: 'Avenida Atlântica, 632, Copacabana',
      postalCode: '22010-000',
      imgUrl: 'edificio-manhattan/manhattan.png',
      likes: 420,
      comments: 69,
      coordinates: [-22.952075, -43.338358],
      description: `De frente para o mar do Leme foi construído em 1936 um dos prédios mais exuberantes em estilo art déco do Rio de Janeiro.

      O Edifício Manhattan foi o primeiro prédio da Avenida Atlântica nesse trecho da praia. Ele possui onze andares com quatro apartamentos por andar mais duas unidades na cobertura.Totalizando 46 apartamentos.
      
      O diferencial dele, além do seu interior art déco repleto de símbolos indígenas, é o fato do Manhattan ser um dos únicos prédios da Avenida Atlântica que não encosta nas construções laterais.O canal de ventilação foi inspirado nas construçõe de Nova Iorque, que na época exigia áreas livres laterais de no mínimo 3 metros para assegurar a circulação de ar.
      
      Outra característica rara são as duas portas de entrada do Manhattan (que entram na lista das mais belas já mostradas por aqui), uma para a Rua Gustavo Sampaio e outra para a Avenida Atlântica. Ambas exatamente iguais e ligadas por um corredor extenso em mármore decorado por uma passadeira vermelha.
      
      Em 1988, o Manhattan foi usado como locação para o mais famoso assassinato da TV brasileira, ocorrido na novela "Vale Tudo". A personagem Odete Roitman, vivida por Beatriz Segall (1926-2018), foi morta a tiros num dos apartamentos desse prédio. Na época, a trama usou muitas cenas no hall do Manhattan e no calçadão em frente ao prédio.
      Há 35 anos todos sabem quem matou Odete Roitman mas poucos sabiam onde esse crime da ficção tinha acontecido.
      
      São décadas de muitas histórias como um dos edifícios mais icônicos do Brasil.
      
      Já reparou na inspiração indígena do Manhattan?`,
      additionalPhotos: [
        'edificio-manhattan/manhattan.png',
        'edificio-manhattan/manhattan.png',
        'edificio-manhattan/manhattan.png',
        'edificio-manhattan/manhattan.png',
   
      
        
        
      ]
     },
    {
      title: 'Edifício Estrela',
      address: 'Rua Visconde de Pirajá, 336, Ipanema',
      postalCode: '22410-003',
      imgUrl: 'edificio-estrela/estrela.png',
      likes: 420,
      comments: 69,
      coordinates: [-22.952075, -43.338358],
      description: `Em 1953 foi inaugurado na Rua Visconde de Pirajá, nº 336, em Ipanema o Edifício Estrela. Construído ao lado da Praça Nossa Senhora da Paz entre o mais badalado ponto da praia de Ipanema e a Lagoa Rodrigo de Freitas e o Cristo Redentor (que aparece nessa foto), o Estrela é um dos prédios mais tradicionais e antigos do bairro.

      Seu primeiro bloco possui 10 apartamentos mais a cobertura, distribuídos em cinco andares. As unidades do térreo são de quarto e sala enquanto as demais apresentam dois e três dormitórios. Atravessando um corredor extenso o morador encontra um pequeno jardim que divide as construções. Caminhando mais alguns metros está o segundo bloco, que é mais simples e menor que o virado para a Rua Visconde de Pirajá. São mais cinco apartamentos distribuídos pelos três andares do edifício. Ao todo ele conta com 16 unidades e as duas lojas do térreo.
      
      O coroamento escalonado, suas varandas arredondadas, a porta de entrada em madeira e os detalhes internos em mármore fazem do Estrela um prédio admirável.
      
      Já reparou nessa Estrela arquitetônica de mais de 70 anos?`,
      additionalPhotos: [
        'edificio-estrela/estrela.png',
        'edificio-estrela/estrela.png',
        'edificio-estrela/estrela.png',
        'edificio-estrela/estrela.png',
   
      
        
        
      ]
    },
    {
      title: 'Museu Carmen Miranda',
      address: 'Avenida Rui Barbosa, em frente ao número 560, Flamengo',
      postalCode: ' 22250-020',
      imgUrl: 'museu-carmen-miranda/museucarmemmiranda.png',
      likes: 420,
      comments: 69,
      coordinates: [-22.952075, -43.338358],
      description: `O Museu Carmen Miranda localizado em frente ao número 560 da Avenida Rui Barbosa, no Flamengo, é uma homenagem a icônica cantora e atriz luso-brasileira conhecida como “A Pequena Notável”.

      Nesse museu de arquitetura modernista, projetado por Affonso Reidy, os visitantes podem ver detalhes da vida e carreira de sucesso dessa artista que tanto influenciou a cultura brasileira e que faleceu em 1955 aos 46 anos.
      
      O acervo é composto por figurinos, fotografias, objetos pessoais e registros históricos. Destaque para o centro da construção com Carmen pintada no muro como se estivesse entrando no palco. A visitação pode ser feita de quarta a sexta das 11h às 17h e sábados, domingos e feriados das 12h às 17h.
      
      Já foi ou pretende visitar esse museu?`,
      additionalPhotos: [
        'museu-carmen-miranda/museucarmemmiranda.png',
        'museu-carmen-miranda/museucarmemmiranda.png',
        'museu-carmen-miranda/museucarmemmiranda.png',
        'museu-carmen-miranda/museucarmemmiranda.png',
    
      
        
        
      ]
    },
    {
      title: 'Instituto Brando Barbosa',
      address: 'Rua Lopes Quintas, 497, Jardim Botânico',
      postalCode: ' 22460-010',
      imgUrl: 'instituto-brando-barbosa/brandobarbosa.png',
      likes: 420,
      comments: 69,
      coordinates: [-22.952075, -43.338358],
      description: `O banqueiro Jorge Brando Barbosa (1919-2002) e sua esposa Odaléa Brando Barbosa (1927-2019) foram morar nesse oásis de tranquilidade no início da década de 1960.
      O casal comprou a propriedade, construída no século XIX, em 1957. Eles fizeram reformas no imóvel e investiram no paisagismo dos jardins de 12 mil m2 de Mata Atlântica.
      Viveram nessa casa até o fim de suas vidas. Como não tiveram filhos, foi criado em 2019 o Instituto Brando Barbosa para administrar essa residência e uma coleção de mais de seis mil peças.
      Dentre elas uma banheira de mármore, que foi de Dona Teresa Cristina, esposa de Dom Pedro II, e que está exposta no banheiro principal do imóvel.
      A casa vazia já seria motivo para a visitação. O mármore de Carrara do piso foi trazido da Europa e os desenhos geométricos que enfeitam o chão foram criados pelo antigo dono.
      A espetacular escada em madeira foi esculpida em uma única peça, arrematada pelo casal com o dinheiro da venda de dois apartamentos na Avenida Vieira Souto, em Ipanema.
`,
      additionalPhotos: [
        'instituto-brando-barbosa/brandobarbosa.png',
        'instituto-brando-barbosa/brandobarbosa.png',
        'instituto-brando-barbosa/brandobarbosa.png',
        'instituto-brando-barbosa/brandobarbosa.png',
    
      
        
        
      ]
    },
    {
      title: 'Edifício Fonseca e Silva',
      address: 'Rua Alberto de Campos, 217, Ipanema',
      postalCode: '22411-030',
      imgUrl: 'edificio-fonseca-e-silva/edificiofonsecaesilva.png',
      likes: 420,
      comments: 69,
      coordinates: [-22.952075, -43.338358],
      description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam, accusamus! Cumque iure maxime architecto optio nam cum excepturi velit dicta nisi dignissimos, voluptate ipsa consequatur odio sed vero eveniet animi? Lorem ipsum dolor sit a Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident optio repellat velit unde quos molestias harum debitis illo nam incidunt hic consectetur veniam, voluptate molestiae omnis doloribus eius, neque distinctio?`,
      additionalPhotos: [
        'edificio-fonseca-e-silva/edificiofonsecaesilva.png',
        'edificio-fonseca-e-silva/edificiofonsecaesilva.png',
        'edificio-fonseca-e-silva/edificiofonsecaesilva.png',
        'edificio-fonseca-e-silva/edificiofonsecaesilva.png',
        
        
      ]
    },
  ]);

  function handleSearch(event) {
    const value = event.target.value.toLowerCase();
    setSearch(value);
  }

  const filteredPosts = posts
    .filter(post => 
      post.title.toLowerCase().includes(search) || 
      post.address.toLowerCase().includes(search)
    )
    .map((post, index) => (
      <FadeTransition as={CSSTransition} key={index} timeout={300} classNames="fade">
        <PostComponent
          key={index}
          post={post}
        />
      </FadeTransition>
  ));

  return (
    <div className="App">
      <Header>
        <MenuComponent/>
        <SearchBar
          type="text"
          placeholder="Pesquise aqui"
          value={search}
          onChange={handleSearch}
        />
       <Link to="/about">
        <button style={{ 
          backgroundColor: '#0077cc', 
          color: 'white', 
          border: 'none', 
          padding: '10px 20px', 
          borderRadius: '5px', 
          cursor: 'pointer',
          fontSize: '16px' 
        }}>
          Sobre
        </button>
      </Link>
    </Header>
      <Main>
        <TransitionGroup component={null}>
          {filteredPosts.length > 0 ? 
            filteredPosts : 
            <FadeTransition as={CSSTransition} timeout={300} classNames="fade">
              <NotFound message="Não há histórias encontradas."/>
           </FadeTransition>
          }
        </TransitionGroup>
      </Main>
      <Footer>
          <FooterButton>
            <img src="/nexus-app/assets/favorites.png" alt="favorites" />
            <small>FAVORITOS</small>
          </FooterButton>
          <FooterButton>
            <img src="/nexus-app/assets/anuncios.png" alt="favorites" />
            <small>ANÚNCIOS</small>
          </FooterButton>
          <FooterButton>
            <img src="/nexus-app/assets/minha-conta.png" alt="favorites" />
            <small>MINHA CONTA</small>
          </FooterButton>
      </Footer>
    </div>
  );
}


export default App;
