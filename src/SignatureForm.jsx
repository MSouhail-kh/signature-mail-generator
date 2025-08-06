// components/SignatureForm.js
import styled from 'styled-components';
import defaultLogo from './assets/sigmatex.png'; // image locale

// CONTAINER AVEC LARGEUR PLUS GRANDE
const ConteneurFormulaire = styled.div`
  background: #fff;
  font-family: 'Segoe UI', sans-serif;
  width: 50%;
`;

const Logo = styled.img`
  display: block;
  max-width: 300px;
  height: auto;
`;

const GroupeChamp = styled.div`
  margin: 5px;
`;

const Etiquette = styled.label`
  display: block;
  margin-bottom: 4px;
  font-weight: 500;
  color: #34495e;
  font-size: 13px;
`;

const ChampTexte = styled.input`
  width: 100%;
  padding: 10px 12px;
  font-size: 14px;
  border: 1px solid #dcdde1;
  border-radius: 6px;
  background-color: #f5f7fa;
  color: #2f3640;
  transition: 0.2s ease;

  &:focus {
    border-color: #0984e3;
    background-color: #fff;
    box-shadow: 0 0 0 2px rgba(9, 132, 227, 0.1);
    outline: none;
  }
`;

const BoutonSoumettre = styled.button`
  background-color: #0984e3;
  color: white;
  border: none;
  padding: 12px 20px;
  border-radius: 6px;
  font-size: 14px;
  cursor: pointer;
  margin: 10px 5px;

  &:hover {
    background-color: #74b9ff;
  }
`;

const FormulaireSignature = ({ formData, handleChange, handleSubmit }) => {
  return (
    <ConteneurFormulaire>
      <form onSubmit={handleSubmit}>
        <Logo src={defaultLogo} alt="Logo de Sigmatex" />

        <GroupeChamp>
          <Etiquette>Nom complet</Etiquette>
          <ChampTexte
            type="text"
            name="nom"
            placeholder="Jean Dupont"
            value={formData.nom}
            onChange={handleChange}
          />
        </GroupeChamp>

        <GroupeChamp>
          <Etiquette>Poste</Etiquette>
          <ChampTexte
            type="text"
            name="poste"
            placeholder="Responsable marketing"
            value={formData.poste}
            onChange={handleChange}
          />
        </GroupeChamp>

        <GroupeChamp>
          <Etiquette>Adresse e-mail</Etiquette>
          <ChampTexte
            type="email"
            name="email"
            placeholder="exemple@entreprise.com"
            value={formData.email}
            onChange={handleChange}
          />
        </GroupeChamp>

        <GroupeChamp>
          <Etiquette>Numéro de téléphone</Etiquette>
          <ChampTexte
            type="tel"
            name="telephone"
            placeholder="+212 6 ** ** ** **"
            value={formData.telephone}
            onChange={handleChange}
          />
        </GroupeChamp>

        <GroupeChamp>
          <Etiquette>Ligne fixe</Etiquette>
          <ChampTexte
            type="tel"
            name="fixe"
            placeholder="+212 5 ** ** ** **"
            value={formData.fixe}
            onChange={handleChange}
          />
        </GroupeChamp>

        <BoutonSoumettre type="submit">Générer la signature</BoutonSoumettre>
      </form>
    </ConteneurFormulaire>
  );
};

export default FormulaireSignature;
