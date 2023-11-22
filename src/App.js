import React, { useState } from 'react';
import styled from 'styled-components';
import './App.css';
import { FooterButton } from './components/FooterButton';
import { Footer, Header } from './components/Layout';
import MenuComponent from './components/MenuComponent';
import PostComponent from './components/Post';
import SearchBar from './components/SearchBar';
import NotFound from './components/NotFound';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

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
      description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam, accusamus! Cumque iure maxime architecto optio nam cum excepturi velit dicta nisi dignissimos, voluptate ipsa consequatur odio sed vero eveniet animi? Lorem ipsum dolor sit a Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident optio repellat velit unde quos molestias harum debitis illo nam incidunt hic consectetur veniam, voluptate molestiae omnis doloribus eius, neque distinctio? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum in quia facere numquam delectus dolorum, rem inventore molestias velit cum beatae non debitis, quisquam, et facilis deleniti nemo ad officia. Cum sociis natoque penatibus et justo consequ  atur magnis dis parturient montes, nascetur ridiculus mus. Nulla dui. Fusce feugiat malesuada odio. Morbi nunc odio, gravida at, cursus nec, luctus a, lorem. Maecenas tristique orci ac sem. Duis ultricies pharetra magna. Donec accumsan malesuada orci. Donec sit amet eros. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Mauris fermentum dictum magna. Sed laoreet aliquam leo. Ut tellus dolor, dapibus eget, elementum vel, cursus eleifend, elit.`,
    },
    {
      title: 'Casa Eva Klabin',
      address: 'Avenida Epitácio Pessoa, 2480, Lagoa',
      postalCode: '22471-000',
      imgUrl: 'casa-eva-klabin/casamuseuevak.png',
      likes: 425,
      comments: 69,
      coordinates: [-22.952075, -43.338358],
      description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam, accusamus! Cumque iure maxime architecto optio nam cum excepturi velit dicta nisi dignissimos, voluptate ipsa consequatur odio sed vero eveniet animi? Lorem ipsum dolor sit a Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident optio repellat velit unde quos molestias harum debitis illo nam incidunt hic consectetur veniam, voluptate molestiae omnis doloribus eius, neque distinctio?`,
    },
    {
      title: 'Edifício Alagoas',
      address: 'Rua Ministro Viveiros de Castro, 122, Copacabana',
      postalCode: '22021-010',
      imgUrl: 'edificio-alagoas/alagoas.png',
      likes: 420,
      comments: 69,
      coordinates: [-22.952075, -43.338358],
      description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam, accusamus! Cumque iure maxime architecto optio nam cum excepturi velit dicta nisi dignissimos, voluptate ipsa consequatur odio sed vero eveniet animi? Lorem ipsum dolor sit a Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident optio repellat velit unde quos molestias harum debitis illo nam incidunt hic consectetur veniam, voluptate molestiae omnis doloribus eius, neque distinctio?`,
    },
    {
      title: 'Igreja de Nossa Senhora da Lapa dos Mercadores',
      address: 'Rua do Ouvidor, 35, Centro',
      postalCode: '20010-150',
      imgUrl: 'igreja-nossa-senhora/Igreja.png',
      likes: 420,
      comments: 69,
      coordinates: [-22.952075, -43.338358],
      description: `A Igreja de Nossa Senhora da Lapa dos Mercadores, guarda um tesouro histórico há 130 anos. Trata-se de uma bala de canhão que atingiu sua torre durante a Revolta da Armada, em 1893. Na ocasião, a imagem da Nossa Senhora da Fé caiu da torre de uma altura de 25 metros sem sofrer grandes danos,tendo quebrado apenas alguns dedos de uma das mãos. 
      A escultura encontra-se preservada numa sala da igreja ao lado da bala fixada numa das paredes. Outro elemento importante do templo é um medalhão trabalhado em mármore, fixado na parte superior da fachada, que representa a coroação da Virgem Maria. Ele foi encontyrado durante escavações realizadas no terreno para uma remodulação da igreja no século XIX.
      Essa contrução foi inaugurada em 1750,estava fechada desde 2020 e em maio de 2023 reabriu as portas aos fiéis e ao público graças ao empenho do Cláudio André Castro, nomeado Comissário Administrativo da Irmandade dos Mercadores.`,
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
      Destaque para as rabanadas!`,
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
      O Edifício Colonial, ganhou a famosa placa azul de patrimônio cultural da prefeitura do Rio de Janeiro.`,
    },
    {
      title: 'Churrascaria Palace',
      address: 'Rua Rodolfo Dantas, 16, Copacabana',
      postalCode: '22020-040',
      imgUrl: 'churrascaria-palace/palace.png',
      likes: 420,
      comments: 69,
      coordinates: [-22.952075, -43.338358],
      description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam, accusamus! Cumque iure maxime architecto optio nam cum excepturi velit dicta nisi dignissimos, voluptate ipsa consequatur odio sed vero eveniet animi? Lorem ipsum dolor sit a Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident optio repellat velit unde quos molestias harum debitis illo nam incidunt hic consectetur veniam, voluptate molestiae omnis doloribus eius, neque distinctio?`,
    },
    {
      title: 'Edifício Manhattan',
      address: 'Avenida Atlântica, 632, Copacabana',
      postalCode: '22010-000',
      imgUrl: 'edificio-manhattan/manhattan.png',
      likes: 420,
      comments: 69,
      coordinates: [-22.952075, -43.338358],
      description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam, accusamus! Cumque iure maxime architecto optio nam cum excepturi velit dicta nisi dignissimos, voluptate ipsa consequatur odio sed vero eveniet animi? Lorem ipsum dolor sit a Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident optio repellat velit unde quos molestias harum debitis illo nam incidunt hic consectetur veniam, voluptate molestiae omnis doloribus eius, neque distinctio?`,
    },
    {
      title: 'Edifício Estrela',
      address: 'Rua Visconde de Pirajá, 336, Ipanema',
      postalCode: '22410-003',
      imgUrl: 'edificio-estrela/estrela.png',
      likes: 420,
      comments: 69,
      coordinates: [-22.952075, -43.338358],
      description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam, accusamus! Cumque iure maxime architecto optio nam cum excepturi velit dicta nisi dignissimos, voluptate ipsa consequatur odio sed vero eveniet animi? Lorem ipsum dolor sit a Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident optio repellat velit unde quos molestias harum debitis illo nam incidunt hic consectetur veniam, voluptate molestiae omnis doloribus eius, neque distinctio?`,
    },
    {
      title: 'Museu Carmen Miranda',
      address: 'Avenida Rui Barbosa, em frente ao número 560, Flamengo',
      postalCode: ' 22250-020',
      imgUrl: 'museu-carmen-miranda/museucarmemmiranda.png',
      likes: 420,
      comments: 69,
      coordinates: [-22.952075, -43.338358],
      description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam, accusamus! Cumque iure maxime architecto optio nam cum excepturi velit dicta nisi dignissimos, voluptate ipsa consequatur odio sed vero eveniet animi? Lorem ipsum dolor sit a Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident optio repellat velit unde quos molestias harum debitis illo nam incidunt hic consectetur veniam, voluptate molestiae omnis doloribus eius, neque distinctio? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam, accusamus! Cumque iure maxime architecto optio nam cum excepturi velit dicta nisi dignissimos, voluptate ipsa consequatur odio sed vero eveniet animi? Lorem ipsum dolor sit a Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident optio repellat velit unde quos molestias harum debitis illo nam incidunt hic consectetur veniam, voluptate molestiae omnis doloribus eius, neque distinctio? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam, accusamus! Cumque iure maxime architecto optio nam cum excepturi velit dicta nisi dignissimos, voluptate ipsa consequatur odio sed vero eveniet animi? Lorem ipsum dolor sit a Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident optio repellat velit unde quos molestias harum debitis illo nam incidunt hic consectetur veniam, voluptate molestiae omnis doloribus eius, neque distinctio? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam, accusamus! Cumque iure maxime architecto optio nam cum excepturi velit dicta nisi dignissimos, voluptate ipsa consequatur odio sed vero eveniet animi? Lorem ipsum dolor sit a Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident optio repellat velit unde quos molestias harum debitis illo nam incidunt hic consectetur veniam, voluptate molestiae omnis doloribus eius, neque distinctio?`,
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
      A espetacular escada em madeira foi esculpida em uma única peça, arrematada pelo casal com o dinheiro da venda de dois apartamentos na Avenida Vieira Souto, em Ipanema.`,
    },
    {
      title: 'Edifício Fonseca e Silva',
      address: 'Rua Alberto de Campos, 217, Ipanema',
      postalCode: '22411-030',
      imgUrl: 'edificio-fonseca-e-silva/edificiofonsecaesilva.png',
      likes: 420,
      comments: 69,
      coordinates: [-22.952075, -43.338358],
      description: `O Edifício que inspirou a série Detetives do Prédio Azul, do canal Gloob, também foi o lar de Ana Maria Teixeira de Carvalho, a eterna musa da bossa-nova e "Mulher de Branco" de Ipanema, que faleceu no último dia 3 de agosto, aos 75 anos. Há décadas ela circulava pelas ruas de Ipanema como a mais famosa e polêmica personalidade do bairro.
      Era filha do radialista e jornalista Luis de Carvalho e ex-mulher do compositor Marcos Valle, com quem ajudou a divulgar a bossa-nova pelo mundo. Ana Maria, há 16 anos, vendeu sua casa branca na Rua Joana Angélica, n° 207 e comprou um apartamento no térreo do prédio azul, onde vivia com uma acompanhante desde 2007.
      O nome verdadeiro do prédio azul é Fonseca e Silva, localizado na Rua Alberto de Campos, n° 217, em Ipanema. Construído em 1938, ele conta com quatro apartamentos e duas coberturas, todos com 3 quartos e cerca de 100 m2.
      Foi erguido pelo Conde de Modesto Leal(1860-1939), considerado o homem mais rico da República Velha e um dos primeiros a habitarIpanema. Sua fachada art déco é usada desde 2012 para a serie infantil "Detetives do Prédio Azul", exibida pelo canal Gloob e pela TV Brasil e que há poucos anos até virou filme. O nome da serie poderia ser outro já que a construção no passado foi cinza, rosa e originalmente era revestida de pó de pedra.`,
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

  // if filtered posts length is 1, show only 1 column on the grid
  if (filteredPosts.length === 1) {
    Main.defaultProps = {
      style: {
        gridTemplateColumns: '1fr',
      }
    }
  } else {
    Main.defaultProps = {
      style: {
        gridTemplateColumns: 'repeat(2, 1fr)',
      }
    }
  }

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
            <img src="/assets/favorites.png" alt="favorites" />
            <small>FAVORITOS</small>
          </FooterButton>
          <FooterButton>
            <img src="/assets/anuncios.png" alt="favorites" />
            <small>ANÚNCIOS</small>
          </FooterButton>
          <FooterButton>
            <img src="/assets/minha-conta.png" alt="favorites" />
            <small>MINHA CONTA</small>
          </FooterButton>
      </Footer>
    </div>
  );
}


export default App;
