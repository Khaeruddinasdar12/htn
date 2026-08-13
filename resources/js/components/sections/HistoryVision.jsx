import React from 'react';

const HistoryVision = () => {
  return (
    <section className="section" style={{ backgroundColor: 'var(--bg-secondary)' }}>
      <div className="container">
        <div className="vision-mission-header">
          <h2 className="vision-mission-title">Tentang Kami</h2>
          <p className="vision-mission-subtitle">Sejarah, Visi, dan Misi Program Studi</p>
        </div>
        
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
          gap: 'var(--space-xl)' 
        }}>
          {/* Sejarah */}
          <div className="card">
            <div className="card-content">
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: 'var(--space-lg)' }}>
                <div className="feature-icon" style={{ margin: 0, marginRight: 'var(--space-md)' }}>
                  <i className="fas fa-history"></i>
                </div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: '500', color: 'var(--gray-800)', margin: 0 }}>
                  Sejarah
                </h3>
              </div>
              <div style={{ color: 'var(--gray-700)', fontSize: '0.875rem', lineHeight: '1.6' }}>
                <p style={{ marginBottom: 'var(--space-md)' }}>
                  Institut Agama Islam Negeri (IAIN) Bone merupakan satu-satunya Perguruan Tinggi Keagamaan Islam Negeri di Kabupaten Bone yang berlokasi di Watampone. Awalnya berdiri sebagai Universitas Islam Raya Bone pada tahun 1964, lembaga ini mengalami beberapa perubahan status hingga resmi menjadi IAIN Bone berdasarkan Peraturan Presiden Nomor 23 Tahun 2018. Perubahan tersebut bertujuan memperkuat peran lembaga pendidikan tinggi Islam dalam menghadapi tantangan dan perubahan global.
                </p>
                <p>
                  IAIN Bone memiliki dua fakultas utama pada awal peralihannya, yaitu Fakultas Syariah dan Fakultas Tarbiyah. Fakultas Syariah kemudian berkembang menjadi Fakultas Syariah dan Hukum Islam yang menaungi tiga program studi: Hukum Keluarga Islam, Hukum Tata Negara, dan Ekonomi Syariah.
                </p>
                <p>
                  Program Studi Hukum Tata Negara (Siyasah Syar’iyyah) resmi berdiri berdasarkan Surat Keputusan Direktur Jenderal Pendidikan Islam Nomor 1179 Tahun 2012. Prodi ini hadir atas dukungan berbagai pihak internal dan eksternal, serta terus mengalami peningkatan peminat setiap tahun, dengan mayoritas mahasiswa berasal dari SMA, MA, dan SMK di berbagai daerah.
                </p>
              </div>
            </div>
          </div>
          
          {/* Visi Misi */}
          <div style={{
            background: 'linear-gradient(135deg, var(--accent-600), var(--accent-700))',
            borderRadius: 'var(--radius-xl)',
            padding: 'var(--space-xl)',
            color: 'var(--white)',
            boxShadow: '0 8px 24px rgba(233, 88, 12, 0.25)',
            position: 'relative',
            border: '2px solid var(--accent-400)'
          }}>
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'rgba(0, 0, 0, 0.1)',
              borderRadius: 'var(--radius-xl)',
              zIndex: 1
            }}></div>
            <div style={{ position: 'relative', zIndex: 2 }}>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: 'var(--space-lg)' }}>
                <div style={{
                  width: '56px',
                  height: '56px',
                  backgroundColor: 'rgba(255, 255, 255, 0.2)',
                  borderRadius: 'var(--radius-lg)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginRight: 'var(--space-md)',
                  fontSize: '1.25rem'
                }}>
                  <i className="fas fa-bullseye"></i>
                </div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: '200', margin: 0, color: 'var(--white)' }}>
                  Visi & Misi
                </h3>
              </div>
              
              <div style={{ marginBottom: 'var(--space-xl)' }}>
                <h4 style={{ fontSize: '1rem', fontWeight: '200', marginBottom: 'var(--space-sm)', color: 'var(--white)' }}>Visi</h4>
                <p style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.15)',
                  padding: 'var(--space-md)',
                  borderRadius: 'var(--radius-lg)',
                  fontStyle: 'italic',
                  fontSize: '0.875rem',
                  lineHeight: '1.6',
                  margin: 0,
                  color: 'var(--white)',
                  textShadow: '0 1px 2px rgba(0, 0, 0, 0.3)'
                }}>
                  “Unggul dan profesional dalam Pengkajian dan Pengembangan Hukum Tata Negara (Siyasah Syar’iyah) Berdasarkan nilai-nilai Keislaman dan Keindonesiaan yang berkarakter Sosial, Inklusif, Moderat dan Inovatif Pada Tahun 2026”.
                </p>
              </div>
              
              <div>
                <h4 style={{ fontSize: '1rem', fontWeight: '200', marginBottom: 'var(--space-md)', color: 'var(--white)' }}>Misi</h4>
                <ol style={{ padding: 0, margin: 0, listStyle: 'none' }}>
                  {[
                    'Menyelenggarakan pendidikan dan pengajaran yang inovatif sesuai dengan perkembangan zaman yang ditujukan untuk mewujudkan kompetensi mahasiswa dari sisi intelektual, moral dan keterampilan;',
                    'menyelenggarakan Penelitian dalam bidang Hukum Tata Negara yang ditujukan untuk menjawab problem hukum yang dihadapi masyararakat baik secara teori maupun praktek;',
                    'membina dan memberdayakan masyarakat baik dibidang Hukum Tata Negara maupun di bidang keagamaan;',
                    'Program Studi membangun hubungan kerjasama dengan instansi pemerintah dan Swasta untuk bersama-sama ambil bagian dalam pembangunan bangsa berdasarkan nilai-nilai keislaman dan keindonesiaan yang inklusif.'
                  ].map((mission, index) => (
                    <li key={index} style={{ 
                      display: 'flex', 
                      alignItems: 'flex-start', 
                      marginBottom: 'var(--space-sm)',
                      fontSize: '0.875rem',
                      lineHeight: '1.5',
                      color: 'var(--white)',
                      textShadow: '0 1px 2px rgba(0, 0, 0, 0.3)'
                    }}>
                      <span style={{
                        backgroundColor: 'rgba(255, 255, 255, 0.2)',
                        borderRadius: '50%',
                        width: '20px',
                        height: '20px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginRight: 'var(--space-sm)',
                        flexShrink: 0,
                        fontSize: '0.75rem',
                        fontWeight: '500'
                      }}>
                        {index + 1}
                      </span>
                      <span>{mission}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HistoryVision;