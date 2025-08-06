import React, { useState, useRef } from 'react';
import FormulaireSignature from './SignatureForm'; // ✅ renommé pour correspondre à la version FR
import ModeleSignature from './SignatureTemplate'; // ✅ renommé pour cohérence
import styled from 'styled-components';

// Conteneur principal de la page
const ConteneurPage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100%;
  padding: 5px;
`;

// Conteneur du formulaire (pas de balise form ici)
const BoiteFormulaire = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
  width: 100%;
  padding: 24px;
  background-color: #fff;
`;

// Bouton de soumission
const BoutonSoumettre = styled.button`
  padding: 5px 10px;
  background-color: #0984e3;
  color: #fff;
  border: none;
  border-radius: 6px;
  font-size: 14px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #007bb5;
  }
`;

// Fond du modal
const ArrierePlanModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
`;

// Contenu du modal
const ConteneurModal = styled.div`
  background: #fff;
  padding: 16px;
  border-radius: 8px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
  max-width: 600px;
  width: 90%;
  position: relative;
`;

// Bouton pour fermer le modal
const BoutonFermer = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  border: none;
  background: transparent;
  font-size: 20px;
  cursor: pointer;
`;

// Bouton de téléchargement (optionnel)
const BoutonTelecharger = styled.button`
  position: absolute;
  top: 10px;
  left: 10px;
  padding: 5px 10px;
  background-color: #00b894;
  color: #fff;
  border: none;
  border-radius: 6px;
  font-size: 14px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #019875;
  }
`;

const PageSignature = () => {
  const [donneesFormulaire, setDonneesFormulaire] = useState({
    nom: '',
    poste: '',
    email: '',
    telephone: '',
    fixe: '',
    adresse: '',
    site: '',
    logo: '',
  });

  const [afficherModal, setAfficherModal] = useState(false);
  const referenceTemplate = useRef(null);

  const gererChangement = (e) => {
    const { name, value } = e.target;
    setDonneesFormulaire((precedent) => ({ ...precedent, [name]: value }));
  };

  const gererSoumission = (e) => {
    e.preventDefault();
    setAfficherModal(true);
  };

  const fermerModal = () => {
    setAfficherModal(false);
  };

  return (
    <ConteneurPage>
      <BoiteFormulaire>
        <FormulaireSignature
          formData={donneesFormulaire}
          handleChange={gererChangement}
          handleSubmit={gererSoumission}
        />
      </BoiteFormulaire>

      {afficherModal && (
        <ArrierePlanModal>
          <ConteneurModal>
            <BoutonFermer onClick={fermerModal}>×</BoutonFermer>
            <div ref={referenceTemplate}>
              <ModeleSignature formData={donneesFormulaire} />
            </div>
          </ConteneurModal>
        </ArrierePlanModal>
      )}
    </ConteneurPage>
  );
};

export default PageSignature;
