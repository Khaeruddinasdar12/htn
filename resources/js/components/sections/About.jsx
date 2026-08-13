import React, { useState } from 'react';

const PersonIcon = () => (
  <svg
    viewBox="0 0 96 96"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    style={{ width: '58%', height: '58%' }}
  >
    <circle cx="48" cy="34" r="16" fill="currentColor" />
    <path
      d="M16 84c0-17.673 14.327-32 32-32s32 14.327 32 32"
      fill="currentColor"
    />
  </svg>
);

const KaprodiPhoto = () => {
  const [hasPhoto, setHasPhoto] = useState(false);

  return (
    <div style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
      <div style={{
        position: 'absolute',
        top: '-var(--space-md)',
        left: '-var(--space-md)',
        right: '-var(--space-md)',
        bottom: '-var(--space-md)',
        background: 'linear-gradient(135deg, var(--accent-600), var(--accent-500))',
        borderRadius: 'var(--radius-2xl)',
        opacity: 0.1,
        filter: 'blur(20px)'
      }}></div>
      <img
        src="kaprodi.jpeg"
        alt="Ketua Program Studi"
        onLoad={() => setHasPhoto(true)}
        onError={() => setHasPhoto(false)}
        style={{
          position: 'relative',
          display: hasPhoto ? 'block' : 'none',
          borderRadius: 'var(--radius-xl)',
          boxShadow: 'var(--shadow-lg)',
          width: '100%',
          height: 'auto'
        }}
      />
      {!hasPhoto && (
        <div
          role="img"
          aria-label="Ketua Program Studi"
          style={{
            position: 'relative',
            width: 'min(280px, 100%)',
            aspectRatio: '1',
            borderRadius: '50%',
            background: 'linear-gradient(180deg, var(--accent-100), var(--accent-200))',
            color: 'var(--accent-600)',
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'center',
            boxShadow: 'var(--shadow-lg)',
            overflow: 'hidden'
          }}
        >
          <PersonIcon />
        </div>
      )}
    </div>
  );
};

const About = () => {
  return (
    <section className="section" style={{ backgroundColor: 'var(--bg-primary)' }}>
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Sambutan Ketua Program Studi</h2>
          <p className="section-subtitle">Pesan dari pemimpin kami</p>
        </div>
        
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
          gap: 'var(--space-2xl)', 
          alignItems: 'center' 
        }}>
          <KaprodiPhoto />
          <div>
            <h3 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: 'var(--space-md)', color: 'var(--gray-900)' }}>
              Abdul Aziz, S.Pd.I., M.Si., Ph.D.
            </h3>
            <p style={{ color: 'var(--gray-600)', marginBottom: 'var(--space-md)', fontStyle: 'italic' }}>
              Assalamualaikum Wr. Wb.
            </p>
            <p style={{ color: 'var(--gray-700)', marginBottom: 'var(--space-md)', lineHeight: '1.6' }}>
              Selamat datang di website Program Studi Hukum Tata Negara, Fakultas Syariah dan Hukum Islam, IAIN Bone. Prodi Siyasah Syar’iyyah hadir sebagai wujud komitmen perguruan tinggi dalam melahirkan generasi akademik yang memahami dinamika kenegaraan dari perspektif konstitusi modern dan fikih siyasah, serta berakhlak mulia, visioner, dan menjunjung tinggi nilai-nilai keadilan.
            </p>
            <p style={{ color: 'var(--gray-700)', marginBottom: 'var(--space-md)', lineHeight: '1.6' }}>
              Melalui kurikulum integratif, kegiatan akademik produktif, dan penguatan riset keilmuan, Prodi Siyasah Syar’iyyah berupaya menjadi pusat kajian ketatanegaraan Islam yang relevan bagi umat dan bangsa. Kami percaya bahwa ilmu siyasah tidak hanya membahas kekuasaan, tetapi juga kemaslahatan, keadilan, dan amanah dalam membangun peradaban. Karena itu, seluruh civitas akademika diajak untuk terus bersinergi, berinovasi, dan menghidupkan semangat intelektual dalam bingkai nilai-nilai Islam, agar Prodi ini senantiasa menjadi wadah pencetak ulil albab yang berkontribusi nyata bagi penguatan hukum dan tata kelola pemerintahan yang adil dan bermartabat.
            </p>
            <p style={{ color: 'var(--gray-700)', lineHeight: '1.6' }}>
              Wassalamualaikum Wr. Wb.
            </p>
          </div>
        </div>
        
        {/* Statistics Section */}
        <div style={{
          marginTop: 'var(--space-3xl)',
          background: 'linear-gradient(135deg, rgba(234, 88, 12, 0.1), rgba(251, 146, 60, 0.1))',
          borderRadius: 'var(--radius-xl)',
          padding: 'var(--space-2xl)',
          border: '1px solid rgba(234, 88, 12, 0.2)'
        }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: 'var(--space-lg)',
            textAlign: 'center'
          }}>
            <div>
              <div style={{
                fontSize: '2.5rem',
                fontWeight: '700',
                color: 'var(--accent-600)',
                marginBottom: 'var(--space-sm)',
                lineHeight: '1'
              }}>
                15+
              </div>
              <div style={{
                fontSize: '0.875rem',
                color: 'var(--gray-700)',
                fontWeight: '500'
              }}>
                JUMLAH DOSEN
              </div>
            </div>
            
            <div>
              <div style={{
                fontSize: '2.5rem',
                fontWeight: '700',
                color: 'var(--accent-600)',
                marginBottom: 'var(--space-sm)',
                lineHeight: '1'
              }}>
                1200+
              </div>
              <div style={{
                fontSize: '0.875rem',
                color: 'var(--gray-700)',
                fontWeight: '500'
              }}>
                ALUMNI TAHUN 2013-2025
              </div>
            </div>
            
            <div>
              <div style={{
                fontSize: '2.5rem',
                fontWeight: '700',
                color: 'var(--accent-600)',
                marginBottom: 'var(--space-sm)',
                lineHeight: '1'
              }}>
                877
              </div>
              <div style={{
                fontSize: '0.875rem',
                color: 'var(--gray-700)',
                fontWeight: '500'
              }}>
                JUMLAH MAHASISWA
              </div>
            </div>
            
            <div>
              <div style={{
                fontSize: '2.5rem',
                fontWeight: '700',
                color: 'var(--accent-600)',
                marginBottom: 'var(--space-sm)',
                lineHeight: '1'
              }}>
                10+
              </div>
              <div style={{
                fontSize: '0.875rem',
                color: 'var(--gray-700)',
                fontWeight: '500'
              }}>
                TAHUN PENGALAMAN
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;