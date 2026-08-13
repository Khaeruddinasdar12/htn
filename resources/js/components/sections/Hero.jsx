import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <section className="hero-section" style={{ 
      background: 'linear-gradient(135deg, rgba(255, 247, 237, 0.5), rgba(255, 237, 213, 0.3))',
      position: 'relative',
      overflow: 'hidden',
      width: '100%',
      maxWidth: '100%',
      boxSizing: 'border-box'
    }}>
      {/* Background decorative elements */}
      <div style={{
        position: 'absolute',
        top: '-20%',
        right: '-10%',
        width: '500px',
        height: '500px',
        background: 'linear-gradient(135deg, var(--accent-200), var(--accent-300))',
        borderRadius: '50%',
        opacity: 0.15,
        filter: 'blur(80px)',
        zIndex: 0
      }}></div>
      <div style={{
        position: 'absolute',
        bottom: '-20%',
        left: '-10%',
        width: '400px',
        height: '400px',
        background: 'linear-gradient(135deg, var(--accent-300), var(--accent-400))',
        borderRadius: '50%',
        opacity: 0.1,
        filter: 'blur(80px)',
        zIndex: 0
      }}></div>

      <div className="container" style={{ position: 'relative', zIndex: 1, maxWidth: '100%', overflowX: 'hidden' }}>
        <div style={{ 
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          padding: 'var(--space-xl) 0 var(--space-md) 0',
          width: '100%',
          maxWidth: '100%',
          boxSizing: 'border-box',
          overflowX: 'hidden',
          minWidth: 0
        }}>
          {/* Badge */}
          <div className="hero-badge">
            <span className="hero-badge-dot"></span>
            <span className="hero-badge-text">
              Program Studi Terakreditasi BAN-PT (Baik Sekali)
            </span>
          </div>

          {/* Main Title */}
          <h1 className="hero-title" style={{ 
            textAlign: 'center',
            marginBottom: 'var(--space-md)',
            background: 'linear-gradient(135deg, var(--gray-900), var(--gray-700))',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>
            Hukum Tata Negara
          </h1>

          {/* Subtitle */}
          <p className="hero-subtitle" style={{ 
            textAlign: 'center',
            maxWidth: '700px',
            marginBottom: 'var(--space-sm)',
            fontSize: 'clamp(1.125rem, 2.5vw, 1.375rem)',
            fontWeight: '500',
            color: 'var(--gray-700)'
          }}>
            Menghasilkan Sarjana Profesional & Berintegritas dalam Bidang Hukum Tata Negara
          </p>
          <p className="hero-subtitle" style={{ 
            textAlign: 'center',
            marginBottom: 'var(--space-lg)',
            fontSize: '1rem',
            color: 'var(--gray-600)'
          }}>
            Fakultas Syariah dan Hukum Islam IAIN Bone
          </p>

          {/* CTA Buttons */}
          <div style={{ 
            display: 'flex', 
            flexDirection: 'row', 
            gap: 'var(--space-md)', 
            flexWrap: 'wrap',
            justifyContent: 'center',
            marginBottom: 'var(--space-lg)'
          }}>
            <Link
              to="/about"
              className="btn btn-primary"
              onClick={scrollToTop}
              style={{
                padding: 'var(--space-md) var(--space-2xl)',
                fontSize: '1rem'
              }}
            >
              Jelajahi Lebih Lanjut
              <i className="fas fa-arrow-right" style={{ marginLeft: 'var(--space-sm)' }}></i>
            </Link>
            <Link
              to="/lecturers"
              className="btn btn-outline"
              onClick={scrollToTop}
              style={{
                padding: 'var(--space-md) var(--space-2xl)',
                fontSize: '1rem'
              }}
            >
              Tim Pengajar
              <i className="fas fa-users" style={{ marginLeft: 'var(--space-sm)' }}></i>
            </Link>
          </div>

          {/* PMB Link */}
          <a
            href="https://pmb.iain-bone.ac.id/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ 
              display: 'inline-flex',
              alignItems: 'center',
              gap: 'var(--space-sm)',
              padding: 'var(--space-md) var(--space-xl)',
              background: 'rgba(255, 255, 255, 0.95)',
              color: 'var(--accent-600)',
              borderRadius: 'var(--radius-lg)',
              textDecoration: 'none',
              fontWeight: '600',
              fontSize: '0.9375rem',
              boxShadow: '0 4px 12px rgba(233, 88, 12, 0.15)',
              border: '2px solid var(--accent-200)',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 6px 20px rgba(233, 88, 12, 0.2)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 12px rgba(233, 88, 12, 0.15)';
            }}
          >
            <i className="fas fa-graduation-cap"></i>
            Penerimaan Mahasiswa Baru (PMB)
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;