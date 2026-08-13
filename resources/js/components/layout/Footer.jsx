import React from 'react';

const Footer = () => {
  const quickLinks = [
    { name: "Beranda", href: "/" },
    { name: "Tentang", href: "/tentang" },
    { name: "Layanan", href: "https://layanan.iain-bone.ac.id/" },
    // { name: "Penelitian", href: "#" },
    // { name: "Pengabdian", href: "#" }
  ];

  const informationLinks = [
    { name: "Berita", href: "/news" },
    { name: "Pengumuman", href: "/announcements" },
    // { name: "Agenda", href: "#" },
    // { name: "Download", href: "#" },
    // { name: "FAQ", href: "#" }
  ];

  const socialLinks = [
    { icon: "fab fa-facebook-f", href: "#" },
    { icon: "fab fa-twitter", href: "#" },
    { icon: "fab fa-instagram", href: "#" },
    { icon: "fab fa-youtube", href: "#" }
  ];

  return (
    <footer className="footer bg-white">
      <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="footer-content">
          <div className="footer-section">
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: 'var(--space-md)' }}>
              <div className="nav-logo" style={{ marginRight: 'var(--space-sm)' }}>HTN</div>
              <h3>Hukum Tata Negara</h3>
            </div>
            <p>Program Studi Hukum Tata Negara, Fakultas Syariah dan Hukum Islam, IAIN Bone.</p>
          </div>

          <div className="footer-section">
            <h3>Tautan Cepat</h3>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              {quickLinks.map((link, index) => (
                <li key={index} style={{ marginBottom: 'var(--space-xs)' }}>
                  <a href={link.href}>{link.name}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-section">
            <h3>Informasi</h3>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              {informationLinks.map((link, index) => (
                <li key={index} style={{ marginBottom: 'var(--space-xs)' }}>
                  <a href={link.href}>{link.name}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-section">
            <h3>Kontak</h3>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ marginBottom: 'var(--space-sm)', display: 'flex', alignItems: 'flex-start' }}>
                <i className="fas fa-map-marker-alt" style={{ marginRight: 'var(--space-sm)', marginTop: '2px' }}></i>
                <span>Jl HOS. Cokroaminoto Watampone, Sulawesi Selatan</span>
              </li>
              <li style={{ marginBottom: 'var(--space-sm)', display: 'flex', alignItems: 'center' }}>
                <i className="fas fa-phone" style={{ marginRight: 'var(--space-sm)' }}></i>
                <span>(0481) 21395</span>
              </li>
              <li style={{ marginBottom: 'var(--space-sm)', display: 'flex', alignItems: 'center' }}>
                <i className="fas fa-envelope" style={{ marginRight: 'var(--space-sm)' }}></i>
                <span>iainboneprodihtn@gmail.com </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
            <p className="text-gray-500 text-sm">
              &copy; {new Date().getFullYear()} Program Studi Hukum Tata Negara - IAIN Bone. All Rights Reserved.
            </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;