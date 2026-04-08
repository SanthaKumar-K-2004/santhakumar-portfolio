import React, { useState, useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Autoplay, Pagination } from "swiper/modules";
import { styles } from "../styles";
import { extracurricular } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

const CertificationCard = ({ title, icon, type, issuer, iconBg, date, points, credential }) => {
  const openCertificate = () => {
    window.open(credential, '_blank', 'noopener,noreferrer');
  };

  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      className="h-full"
    >
      <div
        className="certification-card bg-opacity-20 backdrop-blur-lg bg-[#1e1e3f] p-8 rounded-3xl w-full h-full flex flex-col justify-between cursor-pointer group border border-white/10 hover:border-white/20 transition-all duration-300 relative overflow-hidden"
        style={{
          boxShadow: `0 10px 30px -15px ${iconBg || '#ffffff'}44`,
        }}
        onClick={openCertificate}
      >
        {/* Brand Accent Glow */}
        <div
          className="absolute -top-10 -right-10 w-40 h-40 rounded-full blur-[80px] opacity-20 pointer-events-none"
          style={{ backgroundColor: iconBg }}
        />

        <div>
          <div className="flex justify-between items-start mb-6">
            <div
              className="w-16 h-16 rounded-2xl flex items-center justify-center p-3 shadow-inner"
              style={{ backgroundColor: `${iconBg}22`, border: `1px solid ${iconBg}44` }}
            >
              <img
                src={icon}
                alt={title}
                className="w-full h-full object-contain filter drop-shadow-md"
              />
            </div>
            <p className="text-[#915eff] text-[12px] font-bold tracking-widest uppercase">{date}</p>
          </div>

          <h3 className="text-white font-bold text-[22px] mb-2 leading-[1.2] group-hover:text-[#915eff] transition-colors duration-300">
            {title}
          </h3>

          <div className="flex items-center gap-2 mb-4">
            <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: iconBg }} />
            <p className="text-secondary text-[13px] font-medium tracking-wide">
              {issuer} <span className="mx-2 opacity-30">|</span> {type}
            </p>
          </div>

          <ul className="mt-4 space-y-3">
            {points.slice(0, 2).map((point, index) => (
              <li
                key={`certification-point-${index}`}
                className="text-white-100 text-[13px] leading-relaxed opacity-80 flex gap-2"
              >
                <span className="text-[#915eff]">•</span>
                {point}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-8 flex items-center justify-between">
          <div className="flex -space-x-2">
            <div className="w-8 h-8 rounded-full border-2 border-[#1e1e3f] bg-[#2a2a4a] flex items-center justify-center">
              <span className="text-[10px] text-white/50 font-bold">PDF</span>
            </div>
          </div>

          <button
            className="group/btn relative inline-flex items-center justify-center px-6 py-2.5 overflow-hidden font-bold text-white transition-all duration-300 bg-indigo-600 rounded-xl hover:bg-indigo-500 shadow-lg shadow-indigo-900/20 active:scale-95"
            onClick={(e) => {
              e.stopPropagation();
              openCertificate();
            }}
          >
            <span className="relative z-10 flex items-center gap-2 text-[13px]">
              View Credential
              <svg className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </span>
          </button>
        </div>
      </div>
    </motion.div>
  );
};

const Extracurricular = () => {
  const [isMobile, setIsMobile] = useState(false);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  return (
    <div ref={sectionRef} className="relative">
      {/* Background Decorative Elements */}
      <div className="absolute top-20 -left-20 w-80 h-80 bg-purple-900/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-20 -right-20 w-80 h-80 bg-indigo-900/10 blur-[120px] rounded-full pointer-events-none" />

      <motion.div
        initial="hidden"
        animate={mainControls}
        variants={{
          hidden: { opacity: 0, y: -20 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
        }}
      >
        <p className={`${styles.sectionSubText} text-center`}>Growth & Recognition</p>
      </motion.div>

      <motion.div
        initial="hidden"
        animate={mainControls}
        variants={{
          hidden: { opacity: 0, y: -20 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.2 } },
        }}
      >
        <h2 className={`${styles.sectionHeadText} text-center`}>Certifications</h2>
      </motion.div>

      <motion.div
        variants={fadeIn("up", "spring", 0.5, 0.75)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
        className="mt-16 w-full"
      >
        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          loop={true}
          coverflowEffect={{
            rotate: 15,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
            slideShadows: false,
          }}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          speed={4000}
          modules={[EffectCoverflow, Pagination, Autoplay]}
          className="certificate-swiper py-20"
          breakpoints={{
            320: { slidesPerView: 1, spaceBetween: 20 },
            768: { slidesPerView: 2, spaceBetween: 30 },
            1024: { slidesPerView: 3, spaceBetween: 40 }
          }}
        >
          {extracurricular.map((certification, index) => (
            <SwiperSlide key={`certification-${index}`} className="!h-auto flex">
              <CertificationCard
                {...certification}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>

      <style jsx="true" global="true">{`
        .certificate-swiper {
          width: 100%;
          padding-left: 5% !important;
          padding-right: 5% !important;
        }
        .certificate-swiper .swiper-wrapper {
          transition-timing-function: linear !important;
        }
        .swiper-pagination-bullet {
          background: #915eff !important;
          opacity: 0.3;
        }
        .swiper-pagination-bullet-active {
          opacity: 1;
          width: 20px !important;
          border-radius: 10px !important;
        }
        .certification-card {
          box-shadow: 0 4px 24px rgba(0, 0, 0, 0.2);
        }
        .certification-card:hover {
          box-shadow: 0 12px 40px rgba(145, 94, 255, 0.15);
        }
        @media (max-width: 768px) {
          .certificate-swiper {
            padding-left: 0 !important;
            padding-right: 0 !important;
          }
          .swiper-slide {
            width: 100% !important;
            max-width: 340px;
          }
        }
      `}</style>
    </div>
  );
};

export default SectionWrapper(Extracurricular, "extracurricular");