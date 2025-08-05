// components/SignatureForm.js
import styled from 'styled-components';

// CONTAINER AVEC LARGEUR PLUS GRANDE
const FormContainer = styled.div`
  background: #fff;
  font-family: 'Segoe UI', sans-serif;
  width: 50%;
`;

const Title = styled.h2`
  text-align: center;
  font-weight: 600;
  font-size: 20px;
  color: #2c3e50;
  margin-bottom: 10px;
  position: relative;

  &::after {
    content: '';
    display: block;
    width: 50%;
    height: 2px;
    background: #0984e3;
    margin: 8px auto 0;
  }
`;

const FormGroup = styled.div`
  margin: 15px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 4px;
  font-weight: 500;
  color: #34495e;
  font-size: 13px;
`;

const Input = styled.input`
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

const SignatureForm = ({ formData, handleChange }) => {
  return (
    <FormContainer>
      <Title>Signature</Title>

      <FormGroup>
        <Label>Nom complet</Label>
        <Input
          type="text"
          name="nom"
          placeholder="Jean Dupont"
          value={formData.nom}
          onChange={handleChange}
        />
      </FormGroup>

      <FormGroup>
        <Label>Poste</Label>
        <Input
          type="text"
          name="poste"
          placeholder="Responsable marketing"
          value={formData.poste}
          onChange={handleChange}
        />
      </FormGroup>

      <FormGroup>
        <Label>Email</Label>
        <Input
          type="email"
          name="email"
          placeholder="exemple@entreprise.com"
          value={formData.email}
          onChange={handleChange}
        />
      </FormGroup>

      <FormGroup>
        <Label>Téléphone</Label>
        <Input
          type="tel"
          name="telephone"
          placeholder="+212 6 12 34 56 78"
          value={formData.telephone}
          onChange={handleChange}
        />
      </FormGroup>

      <FormGroup>
        <Label>Adresse</Label>
        <Input
          type="text"
          name="adresse"
          placeholder="123 Rue Exemple, Casablanca"
          value={formData.adresse}
          onChange={handleChange}
        />
      </FormGroup>
    </FormContainer>
  );
};

export default SignatureForm;
