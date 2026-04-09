import React from "react";
import styles from "./PageHero.module.css";

interface BtnProps {
  label: string;
  href: string;
  target?: string;
  rel?: string;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

interface PageHeroProps {
  title: React.ReactNode;
  subtitle: React.ReactNode;
  imgSrc?: string;
  imgAlt?: string;
  rightContent?: React.ReactNode;
  primaryBtn?: BtnProps;
  secondaryBtn?: BtnProps;
  leftExtra?: React.ReactNode;
  waveColor?: string;
}

export default function PageHero({
  title,
  subtitle,
  imgSrc,
  imgAlt,
  rightContent,
  primaryBtn,
  secondaryBtn,
  leftExtra,
  waveColor = "#f0f4fa",
}: PageHeroProps) {
  return (
    <section className={styles.hero}>
      <div className={styles.inner}>

        {/* Left: text content */}
        <div className={styles.left}>
          <h1 className={styles.title}>{title}</h1>
          <p className={styles.subtitle}>{subtitle}</p>

          {leftExtra}

          {(primaryBtn || secondaryBtn) && (
            <div className={styles.btns}>
              {primaryBtn && (
                <a
                  href={primaryBtn.href}
                  className={styles.btnPrimary}
                  target={primaryBtn.target}
                  rel={primaryBtn.rel}
                  onClick={primaryBtn.onClick}
                >
                  {primaryBtn.label}
                </a>
              )}
              {secondaryBtn && (
                <a
                  href={secondaryBtn.href}
                  className={styles.btnSecondary}
                  onClick={secondaryBtn.onClick}
                >
                  {secondaryBtn.label}
                </a>
              )}
            </div>
          )}
        </div>

        {/* Right: illustration with decorative blobs */}
        <div className={styles.right}>
          <div className={styles.blob1} />
          <div className={styles.blob2} />
          <div className={styles.blob3} />
          <div className={styles.blob4} />
          <div className={styles.imgWrap}>
            {rightContent
              ? rightContent
              : imgSrc && <img src={imgSrc} alt={imgAlt} className={styles.img} />}
          </div>
        </div>

      </div>

      {/* Bottom curved wave separator */}
      <div className={styles.wave}>
        <svg viewBox="0 0 1440 72" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,72 L1440,72 L1440,48 C1100,4 340,68 0,20 Z" fill={waveColor} />
        </svg>
      </div>
    </section>
  );
}
