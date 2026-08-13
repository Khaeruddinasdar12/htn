import React from 'react';

const Accreditation = () => {
  // Data contoh periode akreditasi - bisa diganti dengan data dari API
  const accreditationData = [
    {
      periode: '2024-2029',
      deskripsi: 'Akreditasi S1 HTN IAIN Bone (Baik Sekali) periode 2024-2029',
      file: '/asset/akreditasi/S1-HTN-Baik-Sekali-IAIN-2024-2029.pdf'
    },
    {
      periode: '2024-2029',
      deskripsi: 'Akreditasi S1 HTN IAIN Bone periode 2024-2029',
      file: '/asset/akreditasi/S1-HTN-IAIN-2024-2029.pdf'
    },
    {
      periode: '2018-2024',
      deskripsi: 'Akreditasi S1 HTN IAIN Bone 2018-2024',
      file: '/asset/akreditasi/S1-HTN-IAIN-2018-2024.pdf'
    },
    {
      periode: '2013-2018',
      deskripsi: 'Akreditasi S1 HTN STAIN Watampone periode 2013-2018',
      file: '/asset/akreditasi/S1-HTN-STAIN-2013-2018.pdf'
    }
  ];

  const handlePreview = (file) => {
    // Buka file di tab baru untuk preview
    window.open(file, '_blank');
  };

  const handleDownload = (file, periode) => {
    // Download file
    const link = document.createElement('a');
    link.href = file;
    link.download = `akreditasi-${periode}.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="section" style={{ backgroundColor: 'var(--bg-primary)' }}>
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Akreditasi Program Studi</h2>
          <p className="section-subtitle">Dokumen akreditasi Program Studi S1 Hukum Tata Negara</p>
        </div>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
          gap: 'var(--space-xl)',
          marginTop: 'var(--space-2xl)'
        }}>
          {accreditationData.map((item) => (
            <div
              key={item.id}
              style={{
                background: 'white',
                borderRadius: 'var(--radius-xl)',
                padding: 'var(--space-xl)',
                boxShadow: 'var(--shadow-md)',
                transition: 'all 0.3s ease',
                border: '1px solid var(--gray-200)',
                position: 'relative',
                overflow: 'hidden'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = 'var(--shadow-lg)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'var(--shadow-md)';
              }}
            >
              {/* Decorative element */}
              <div style={{
                position: 'absolute',
                top: 0,
                right: 0,
                width: '100px',
                height: '100px',
                background: 'linear-gradient(135deg, var(--accent-600), var(--accent-500))',
                borderRadius: '0 0 0 100%',
                opacity: 0.1
              }}></div>
              
              <div style={{ position: 'relative', zIndex: 1 }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 'var(--space-md)',
                  marginBottom: 'var(--space-lg)'
                }}>
                  <div style={{
                    width: '60px',
                    height: '60px',
                    borderRadius: 'var(--radius-lg)',
                    background: 'linear-gradient(135deg, var(--accent-600), var(--accent-500))',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontSize: '1.5rem',
                    fontWeight: '700',
                    flexShrink: 0
                  }}>
                    <i className="fas fa-certificate"></i>
                  </div>
                  <div>
                    <h3 style={{
                      fontSize: '1.25rem',
                      fontWeight: '600',
                      color: 'var(--gray-900)',
                      marginBottom: 'var(--space-xs)'
                    }}>
                      Periode {item.periode}
                    </h3>
                    <p style={{
                      fontSize: '0.875rem',
                      color: 'var(--gray-600)',
                      margin: 0
                    }}>
                      Tahun {item.tahun}
                    </p>
                  </div>
                </div>
                
                <p style={{
                  color: 'var(--gray-700)',
                  marginBottom: 'var(--space-lg)',
                  lineHeight: '1.6',
                  fontSize: '0.9375rem'
                }}>
                  {item.deskripsi}
                </p>
                
                <div style={{
                  display: 'flex',
                  gap: 'var(--space-md)',
                  flexWrap: 'wrap'
                }}>
                  <button
                    onClick={() => handlePreview(item.file)}
                    style={{
                      flex: 1,
                      minWidth: '120px',
                      padding: 'var(--space-md) var(--space-lg)',
                      background: 'linear-gradient(135deg, var(--accent-600), var(--accent-500))',
                      color: 'white',
                      border: 'none',
                      borderRadius: 'var(--radius-lg)',
                      fontWeight: '600',
                      fontSize: '0.9375rem',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: 'var(--space-sm)'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'scale(1.05)';
                      e.currentTarget.style.boxShadow = '0 4px 12px rgba(234, 88, 12, 0.3)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'scale(1)';
                      e.currentTarget.style.boxShadow = 'none';
                    }}
                  >
                    <i className="fas fa-eye"></i>
                    Preview
                  </button>
                  
                  <button
                    onClick={() => handleDownload(item.file, item.periode)}
                    style={{
                      flex: 1,
                      minWidth: '120px',
                      padding: 'var(--space-md) var(--space-lg)',
                      background: 'white',
                      color: 'var(--accent-600)',
                      border: '2px solid var(--accent-600)',
                      borderRadius: 'var(--radius-lg)',
                      fontWeight: '600',
                      fontSize: '0.9375rem',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: 'var(--space-sm)'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = 'var(--accent-600)';
                      e.currentTarget.style.color = 'white';
                      e.currentTarget.style.transform = 'scale(1.05)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'white';
                      e.currentTarget.style.color = 'var(--accent-600)';
                      e.currentTarget.style.transform = 'scale(1)';
                    }}
                  >
                    <i className="fas fa-download"></i>
                    Download
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Info section */}
        <div style={{
          marginTop: 'var(--space-3xl)',
          background: 'linear-gradient(135deg, rgba(234, 88, 12, 0.1), rgba(251, 146, 60, 0.1))',
          borderRadius: 'var(--radius-xl)',
          padding: 'var(--space-2xl)',
          border: '1px solid rgba(234, 88, 12, 0.2)',
          textAlign: 'center'
        }}>
          <div style={{
            fontSize: '3rem',
            color: 'var(--accent-600)',
            marginBottom: 'var(--space-md)'
          }}>
            <i className="fas fa-award"></i>
          </div>
          <h3 style={{
            fontSize: '1.5rem',
            fontWeight: '600',
            color: 'var(--gray-900)',
            marginBottom: 'var(--space-md)'
          }}>
            Program Studi Terakreditasi
          </h3>
          <p style={{
            color: 'var(--gray-700)',
            lineHeight: '1.6',
            maxWidth: '600px',
            margin: '0 auto'
          }}>
            Program Studi Hukum Tata Negara telah memperoleh akreditasi dari Badan Akreditasi Nasional Perguruan Tinggi (BAN-PT), 
            yang menunjukkan komitmen kami dalam menyelenggarakan pendidikan berkualitas tinggi.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Accreditation;
