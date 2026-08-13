import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Vivin Sanjaya, S.H. ",
      position: "Alumni 2014 | ASN Badan Pengawas Pemilu (BAWASLU)",
      content: "Pendidikan di Prodi Hukum Tata Negara (HTN) IAIN Bone adalah keputusan terbaik. Selain ilmu konstitusi dan hukum, saya dibekali nilai etika dan integritas. Bimbingan dosen dan diskusi kritis tentang demokrasi/pemilu menjadi modal penting tugas saya di BAWASLU. Saya bangga, HTN IAIN Bone membentuk generasi yang siap mengawal demokrasi dengan ilmu dan akhlak",
      image: "asset/testimoni/vivin-sanjaya.jpg"
    },
    {
      id: 2,
      name: "A. Muh. Taufiqurrahman, Y",
      position: "Alumni 2025 | Tentara Nasional Indonesia (TNI)",
      content: "Pendidikan di Prodi Hukum Tata Negara (HTN) IAIN Bone membekali saya disiplin, tanggung jawab, dan pengabdian, menjadi dasar kuat tugas saya di TNI. Kajian konstitusi dan etika kepemimpinan membentuk mental pemimpin yang siap menjaga kedaulatan hukum dan keamanan negara. Saya bangga menjadi alumni HTN IAIN Bone, karena di sini saya belajar pengabdian harus didasari ilmu, iman, dan integritas.",
      image: "asset/testimoni/taufik.jpg"
    },
    {
      id: 3,
      name: "Randi, SH ",
      position: "Alumni 2017 | ASN Inspektorat Jenderal Kemenag",
      content: "Sebagai Alumni Jurusan Syariah Prodi Akhwaluh Syakhsiah IAIN Bone saya sanggat bangga pernah menjadi bagian dari kampus yang tidak hanya membentuk kecerdasan intelektual tetapi juga menanamkan nilai-nilai spiritual dan moral yang kuat. Bagi saya IAIN Bone bukan hanya sekedar tempat menimba ilmu, melainkan ruang pembentukan karakter dan tanggung jawab dalam menjalankan tugas dan amanah sebagai Penghulu di Kementerian Agama Kabupaten Bone",
      image: "asset/testimoni/randi.jpg"
    },
    {
      id: 4,
      name: "Muhammad Eryk Hidayat",
      position: "Alumni 2020 | Anggota Kepolisian Republik Indonesia",
      content: "Prodi Hukum Tata Negara (HTN) IAIN Bone membentuk cara berpikir kritis dan integritas saya sebagai polisi. HTN membekali saya teori hukum, nilai moral, dan tanggung jawab sosial yang relevan dengan tugas penegak hukum. Saya bersyukur ditempa di HTN IAIN Bone, yang menjadi pondasi profesionalisme dan pengabdian saya kepada negara.",
      image: "asset/testimoni/erik.jpg"
    },
    {
      id: 5,
      name: "Kiki Wulandari, SH",
      position: "Alumni 2020 | ASN Mahkamah Agung Republik Indonesia",
      content: "Prodi Hukum Tata Negara (HTN) IAIN Bone adalah fondasi karier saya di Mahkamah Agung RI. Pembelajaran kritis dan aplikatif di HTN membekali saya teori hukum dan nilai integritas, membuat saya siap mengabdi untuk penegakan hukum yang berkeadilan. Saya bangga menjadi alumni HTN IAIN Bone.",
      image: "asset/testimoni/wulandari.jpg"
    }
  ];

  return (
    <section className="section" style={{ backgroundColor: 'var(--bg-primary)', padding: '4rem 0' }}>
      <div className="container text-center">
        <div className="section-header">
          <h2 className="section-title">Testimoni Alumni</h2>
          <p className="section-subtitle">Pengalaman mereka setelah lulus</p>
        </div>

        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          loop={true}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false
          }}
          pagination={{ clickable: true }}
          breakpoints={{
            320: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 }
          }}
          modules={[Pagination, Autoplay]}
          style={{ paddingBottom: '3rem' }}
        >
          {testimonials.map((t) => (
            <SwiperSlide key={t.id}>
              <div
                style={{
                  background: 'white',
                  borderRadius: '1rem',
                  padding: '1.5rem',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                  minHeight: '420px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  textAlign: 'left'
                }}
              >
                <div>
                  <p
                    style={{
                      color: 'var(--gray-700)',
                      fontSize: '0.9rem',
                      lineHeight: '1.6',
                      fontStyle: 'italic',
                      marginBottom: '1rem'
                    }}
                  >
                    {t.content}
                  </p>
                </div>

                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    borderTop: '1px solid #eee',
                    paddingTop: '1rem'
                  }}
                >
                  <img
                    src={t.image}
                    alt={t.name}
                    style={{
                      width: '56px',
                      height: '56px',
                      borderRadius: '50%',
                      objectFit: 'cover',
                      marginRight: '1rem'
                    }}
                  />
                  <div>
                    <h4
                      style={{
                        fontSize: '0.9rem',
                        fontWeight: '600',
                        marginBottom: '0.25rem',
                        color: 'var(--gray-800)'
                      }}
                    >
                      {t.name}
                    </h4>
                    <p
                      style={{
                        fontSize: '0.75rem',
                        color: 'var(--gray-600)',
                        margin: 0
                      }}
                    >
                      {t.position}
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
