const Faq = () => {
  return (
    <div
      style={{
        paddingLeft: "10rem",
        paddingRight: "10rem",
        lineHeight: "55px",
      }}
    >
      <h2>QUESTIONS FRÉQUENTES</h2>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          flexWrap: "wrap",
        }}
      >
        <div
          style={{
            width: "auto",
            border: "1px solid #D3D3D3",
            padding: "10px",
            borderRadius: "5px",
          }}
        >
          <h4>
            COMBIEN DE TEMPS FAUT-IL POUR ATTEINDRE MON OBJECTIF, GÉRER MA
            PROBLÉMATIQUE ?
          </h4>
          <p>
            En général, un accompagnement personnalisé comprends 8 à 10 séances.
            Tout est ensuite question d'adaptabilité, c'est pour cela que je ne
            propose pas de "forfait". Après la première séance, je vous soumets
            une proposition d'accompagnement sophrologique, avec le nombre de
            séances estimées, le thème de chaque séance, les objectifs ciblés.
            Entre chaque séance, il est indispensable de pratiquer régulièrement
            chez soi les exercices appris : c'est la clé de la réussite. Tel un
            sportif, vous entrainez votre corps et votre mental vers un objectif
            de vie positif. Pour vous aider, j'enregistre certains exercices
            (les visualisations positives) afin que vous puissiez les réécouter
            au calme chez vous, et je vous fais parvenir sous forme de vignettes
            explicatives tous les exercices que vous découvrez en séance.
          </p>
        </div>
        <div
          style={{
            width: "45%",
            border: "1px solid #D3D3D3",
            padding: "10px",
            borderRadius: "5px",
            margin: "5px"
          }}
        >
          <h4>COMBIEN DE TEMPS DURE UNE SÉANCE DE SOPHROLOGIE ?</h4>
          <p>
            La première séance, qui établit votre objectif, dure environ 1h30.
            Elle permet que nous fassions connaissance et que vous découvriez
            concrètement la sophrologie. Puis les autres séances durent 1h00,
            elles commencent et se terminent par un bref temps d'échange.
          </p>
        </div>
        <div
          style={{
            width: "45%",
            border: "1px solid #D3D3D3",
            padding: "10px",
            borderRadius: "5px",
            margin: "5px"
          }}
        >
          <h4>A QUELLE FRÉQUENCE DOIS-JE PROGRAMMER MES SÉANCES ?</h4>
          <p>
            Là encore, tout est question d'adaptabilité. L'important va être de
            pratiquer chez soi entre les séances. La plupart des personnes
            programment leurs séances 1 fois par semaine, ou tous les 15 jours.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Faq;
