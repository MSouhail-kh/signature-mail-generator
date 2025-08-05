import React, { useState, useRef } from 'react';
import SignatureForm from './SignatureForm';
import SignatureTemplate from './SignatureTemplate';
import styled from 'styled-components';
// import html2canvas from 'html2canvas';
// import jsPDF from 'jspdf';

// Conteneur principal
const PageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100%;
  padding: 5px;
`;

// Formulaire
const FormContainer = styled.form`
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
const SubmitButton = styled.button`
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

// Modal (fond)
const ModalBackdrop = styled.div`
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

// Modal (contenu)
const ModalContainer = styled.div`
  background: #fff;
  padding: 16px;
  border-radius: 8px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
  max-width: 600px;
  width: 90%;
  position: relative;
`;

// Bouton fermer
const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  border: none;
  background: transparent;
  font-size: 20px;
  cursor: pointer;
`;

// Bouton télécharger
const DownloadButton = styled.button`
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

const SignaturePage = () => {
  const [formData, setFormData] = useState({
    nom: '',
    poste: '',
    email: '',
    telephone: '',
    fixe: '',
    adresse: '',
    site: '',
    logo: '',
  });

  const [showModal, setShowModal] = useState(false);
  const templateRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

//   const handleDownload = async () => {
//     const element = templateRef.current;
//     const canvas = await html2canvas(element);
//     const imgData = canvas.toDataURL('image/png');

//     const pdf = new jsPDF();
//     const imgProps = pdf.getImageProperties(imgData);
//     const pdfWidth = pdf.internal.pageSize.getWidth();
//     const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

//     pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
//     pdf.save('signature.pdf');
//   };

  return (
    <PageContainer>
      <FormContainer onSubmit={handleSubmit}>
        <SignatureForm formData={formData} handleChange={handleChange} />
        <SubmitButton type="submit">Générer la signature</SubmitButton>
      </FormContainer>
      

      {showModal && (
        <ModalBackdrop>
          <ModalContainer>
            {/* <DownloadButton onClick={handleDownload}>Télécharger</DownloadButton> */}
            <CloseButton onClick={handleClose}>×</CloseButton>
            <div ref={templateRef}>
              <SignatureTemplate formData={formData} />
            </div>
          </ModalContainer>
        </ModalBackdrop>
      )}
    </PageContainer>
  );
};

export default SignaturePage;
