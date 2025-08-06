import styled from 'styled-components';
import defaultLogo from './assets/sigmatex.png';

const FormContainer = styled.div`
  font-family: 'Segoe UI', 'Roboto', sans-serif;
  background: white;
  border-radius: 12px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);
  padding: 24px;
  max-width: 600px;
  margin: 0 auto;
  width: 100%;
  transition: transform 0.3s ease;

  @media (max-width: 768px) {
    padding: 16px;
    border-radius: 10px;
    margin: 10px;
  }
`;

const CustomLogo = styled.img`
  display: block;
  max-width: 300px;
  height: auto;
  margin: 0 auto 24px;
  opacity: 0.9;
  transition: transform 0.3s ease;
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1));
`;


const FieldGroup = styled.div`
  margin-bottom: 20px;
  padding-bottom: 16px;
  border-bottom: 1px solid #f0f0f0;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 8px;
  color: #2f3542;
  font-weight: 600;
  font-size: 14px;
`;

const Input = styled.input`
  width: 100%;
  padding: 12px 14px;
  border: 1px solid #dfe4ea;
  border-radius: 8px;
  font-size: 16px;
  color: #2f3542;
  background: #f9f9f9;
  transition: all 0.25s;

  &:focus {
    outline: none;
    border-color: #0984e3;
    box-shadow: 0 0 0 3px rgba(9, 132, 227, 0.2);
    background: white;
  }

  @media (max-width: 768px) {
    padding: 10px 12px;
    font-size: 14px;
  }
`;

const SubmitButton = styled.button`
  width: 40%;
  background: linear-gradient(135deg, #0984e3, #00a8ff);
  padding: 2px;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;
  margin-top: 10px;

  &:hover {
    background: linear-gradient(135deg, #0094d9, #0097ff);
  }
`;


const SignatureForm = ({ formData, handleChange, handleSubmit }) => {
  return (
    <FormContainer>
      <form onSubmit={handleSubmit}>
        <CustomLogo src={defaultLogo} alt="Sigmatex" />
        
        <FieldGroup>
          <Label htmlFor="nom">Nom complet</Label>
          <Input
            type="text"
            id="nom"
            name="nom"
            placeholder="Exemple : Jean Dupont"
            value={formData.nom}
            onChange={handleChange}
            required
          />
        </FieldGroup>

        <FieldGroup>
          <Label htmlFor="poste">Poste</Label>
          <Input
            type="text"
            id="poste"
            name="poste"
            placeholder="Exemple : Responsable marketing"
            value={formData.poste}
            onChange={handleChange}
            required
          />
        </FieldGroup>

        <FieldGroup>
          <Label htmlFor="email">Email professionnel</Label>
          <Input
            type="email"
            id="email"
            name="email"
            placeholder="Exemple : jean.dupont@sigmatex.com"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </FieldGroup>

        <FieldGroup>
          <Label htmlFor="telephone">Téléphone</Label>
          <Input
            type="tel"
            id="telephone"
            name="telephone"
            placeholder="Exemple : +212 6 12 34 56 78"
            value={formData.telephone}
            onChange={handleChange}
          />
        </FieldGroup>

        <FieldGroup>
          <Label htmlFor="fixe">Ligne fixe</Label>
          <Input
            type="tel"
            id="fixe"
            name="fixe"
            placeholder="Exemple : +212 5 12 34 56 78"
            value={formData.fixe}
            onChange={handleChange}
          />
        </FieldGroup>

        <SubmitButton type="submit">Créer ma signature</SubmitButton>
      </form>
    </FormContainer>
  );
};

export default SignatureForm;
