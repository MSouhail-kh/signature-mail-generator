import React from 'react';
import defaultLogo from './assets/sigmatex.png'; // image locale

const SignatureTemplate = ({ formData }) => {
  const {
    nom,
    poste,
    telephone,
    fixe,
    email,
    logo
  } = formData;

  const addressLines = (
    <>
      LOTISSEMENT KADIRIA LOT 38 ET 39 ARDT,<br />
      Casablanca 20000
    </>
  );

  return (
    <div style={{
      fontFamily: "'Poppins', sans-serif",
      color: '#1c2e4a',
      background: '#fff',
      padding: 20,
      maxWidth: 600
    }}>
      <div style={{ marginBottom: 20 }}>
        <img
          src={logo || defaultLogo}
          alt="logo"
          style={{ width: 250, height: 'auto' }}
        />
      </div>

      {nom && <div style={{ fontSize: 20, fontWeight: 700, marginBottom: 5 }}>{nom}</div>}
      {poste && <div style={{ fontSize: 18, color: '#c19c6b', fontWeight: 600, marginBottom: 20 }}>{poste}</div>}

      <div style={{ fontSize: 13, lineHeight: 1.6, fontWeight: 600 }}>
        {telephone && <div>Mobile : {telephone}</div>}
        {fixe && <div>Fixe : {fixe}</div>}
        {email && (
          <div>
            Email :{' '}
            <a href={`mailto:${email}`} style={{ color: '#1c2e4a', textDecoration: 'none', fontWeight: 600 }}>
              {email}
            </a>
          </div>
        )}
        <div>Adresse : {addressLines}</div>
      </div>

      <div style={{ marginTop: 20 }}>
        <a
          href={`https://sigmatex.ma/`}
          style={{ fontWeight: 600, color: '#1c2e4a', textDecoration: 'none' }}
        >
          {'www.sigmatex.ma'}
        </a>
      </div>

    </div>
  );
};

export default SignatureTemplate;