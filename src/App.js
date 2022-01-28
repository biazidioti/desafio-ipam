import './App.css';
import Select from './components/select';
import regioes from "./images/regioes-estados-brasil.jpg";
import mesorregiao from "./images/mesorregioes_geograficas.jpg";
import microrregiao from "./images/microrregioes_geograficas.jpg";

function App() {
  return (
    <div className="App">
      <body>
      <header className="App-header">
        <h1>Desafio Back-end IPAM - Instituto de Pesquisa da Amazônia</h1>
      </header>
        <h1>O que são Mesorregiões e Microrregiões do Brasil?</h1>
        <p>A divisão regional foi elaborada a partir das Unidades de Federação, utilizando-se o conceito de organização do espaço. O conceito de organização do espaço, refere-se às diferentes estruturas espaciais resultantes da dinâmica da sociedade sobre um suporte territorial.
          O desenvolvimento do processo capitalista de produção afetou de maneira diferenciada o teritório nacional. Enquanto algumas áreas sofreram grandes mudanças institucionais e avanços sócio-econômicos, outras se mantiveram estáveis ou apresentaram problemas sócio-econômicos acentuados. Enquanto em algumas áreas as condições naturais ainda orientam as formas de ocupação e de produção, que são predominantemente agrárias, em outras, a metropolização, o consumo e a produção industrial são os elementos estruturadores do espaço.
          A dinâmica do processo de desenvolvimento capitalista em nosso País pode ser traduzida pela inevitável desigualdade da organização espacial que comporta diferentes formas de subordinação do trablho ao capital e pela atuação crescente do papel do Estado naquele processo.
          Através do processo analítico, identificaram-se as escalas regionais subsequentes, isto é, as mesorregiões e as microrregiões.
          Entende-se por mesorregião uma área individualizada em uma Unidade da Federação que apresenta formas de organização do espaço geográfico definidas pelas seguintes dimensões: i. o processo social como determinante, ii. o quadro natural como condicionante e iii. a rede de comunicação e de lugares como elemento da articulação espacial. 
        </p>
        <img src={regioes} alt="regioes-brasil" />
        <p>
        Estas três dimensões possibilitam que o espaço delimitado como mesorregião tenha uma identidade regional. Esta identidade regional é uma realidade construída ao longo do tempo pela sociedade que ai e formou. 
        As microregiões foram definidas como partes das mesorregiões que apresentam especificidades quanto à organização do espaço. Essas especeficidades referem-se à estrutura de produção agropecuária, industrial, extrativismo mineral ou pesca.
        A organização do espaço microrregional foi identificada também pela vida de relações ao nível local, into é, pela interação entre as áreas de produção e locais de beneficiamento, e pela possibilidade de atender às populações através do comércio de varejo ou atacado ou dos setores sociais básicaos. Assim, estrutura da produção para identificação das microrregiões é considerada em sentido totalizante, constituindo-se pela produção, propriamente dita, distribuição, troca e consumo, incluindo atividades urbanas e rurais. Dessa forma, ela expressa a organização do espaço a nível micro ou local.
        </p>
        <h2>Fatos históricos sobre a elaboração das mesorregiões e microrregiões do Brasil</h2>
        <p>
        Cabendo ao Departamento de Geografia (DEGEO) elaborar como parte da missão institucional do IBGE a Divisão Regional do Brasil foi delegada à sua Divisão de Estudos Territoriais (DITER) no ano de 1987 a tarefa de produzir a Divisão Regional em Miesorregiões e Microrregiões Geográficas para fins estatísticos em substituiçâo à Divisão Regional em Microrregiões Homogêneas editadl pelo IBGE em 1968.
        A definição dos novos agregados espaciais foi avaliada através de discussão dos geógrafos do DEGEO participantes do projeto. 
        Foram envolvidos 183 técnicos do IBGE e 222 técnicos de diférentes órgãos e entidades das esferas federal estadual e municipal.
        A discussão final é aprovação da nova Divisão Regional em Mesorregiões è Microgegiões Geográficas foi efetuada em Seminário realizado pelo Departamento de Geografia em 22/11/88 promovido pela Diretoria de Geociências.
        </p>
        <img src={mesorregiao} alt="regioes-brasil" width="500px"/>
        <p>
        A Divisão Regional do Brasil em Mesorreáiões e Microrreglões Geográficas ora apresentada foi aprovada pela Presidëncia do IBGE através da Resolução PR-51 de 31/07/89 Coube ao Departamento de Cartografia da Diretoria de Geociências estabelecer a codificação dessa nova Divisão Regional do Brasil institucionalizada pelo IBGE. Tal divisão Regional foi divulgada em dois volumes. 0 primeiro mostrou a metodologia de trabalho e a listagem dos agregados espaciais que compõem a referida Divisão. 0 segundo, elaborado em 1989, constia de mapas municipais com os limites das mesorregiões e mícrorregiões geográficas de textos descritivos caracterizadores da identidade regional das mesorregiões e das especificídades das microrregiões e de quadros comparativos entre as Divisões de 1968 1986 para Mato Grosso Mato Grosso do Sul e Rondônia e a atual com vistas a permitir aos usuários a comparabilidade espaço-temporal em suas pesquisas.
        </p>
        <p>
        Com esta obra, o Departamento de Geografia da Diretoria de Geociências do IBGE entregou aos seus usuários a Divisão Regional que foi adotada em 01/ 1/90 pelo Sistema Estatístico Nacional.  A relevância deste trabalho sobre a organização regional do Brasil reside, não só no fato de servir à divulgação de dados estatísticos segundo os apreçados espaciais produzidos, mas também na perspectiva de oferecer elementos para a compreensão da organização do território nacional.
        </p>
        <img src={microrregiao} alt="regioes-brasil" width="500px"/>
        <p>
        Ao total foram delimitadas 558 microrregiões, distribuídas em 137 mesorregiões.
        As mesorregiões e microrregiões do Brasil constituíram a divisão geográfica regional do país vigente entre 1989 e 2017. Em 2017, foram substituídas, respectivamente, pelas regiões geográficas intermediárias e imediatas.
        </p>
        <h2>Agora que você já sabe, que tal conhecer um pouco mais sobre o Brasil?
        Consulte a lista de municípios e veja de onde ele faz parte!</h2>
      <Select />
      <footer>
        <h5>Referências</h5>
      </footer>
      </body>
    </div>
  );
}

export default App;
