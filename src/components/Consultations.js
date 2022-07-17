const Consultations = () => {
  return (
    <div style={{ paddingLeft: "10rem", paddingRight: "10rem", lineHeight:"55px" }}>
      <div>
        <h2>TYPES DE CONSULTATIONS</h2>
      </div>
      <div>
        <p>
          Ci-dessous les domaines pour lesquels vous pouvez me solliciter pour
          votre accompagnement personnel. Pour d'autres thématiques (ateliers en
          entreprise, sommeil, alimentation, phobies..), n'hésitez pas à me
          contacter directement afin que nous puissions en discuter.
        </p>
        <ul style={{ listStyle: "none" }}>
          <li style={{ padding: "1rem" }}>
            PRÉPARATION MENTALE : COMPÉTITIONS, EXAMENS, AUDITIONS, ACCOUCHEMENT
          </li>
          <li style={{ padding: "1rem" }}>
            BURN OUT, STRESS, CHARGE MENTALE, GESTION DES ÉMOTIONS
          </li>
          <li style={{ padding: "1rem" }}>
            ENDOMÉTRIOSE, GESTION DES DOULEURS, ACCOMPAGNEMENT PARCOURS FIV/AMP
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Consultations;
