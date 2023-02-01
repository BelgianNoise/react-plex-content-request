import { useTranslation } from 'react-i18next';
import styles from './LanguageSelector.module.css';
import flagEN from '../../assets/flag-en.png';
import flagNL from '../../assets/flag-nl.png';
import { changeLanguage } from '../../i18n/config';

export function LanguageSelector() {
  const { i18n } = useTranslation();
  const currentLanguage = i18n.resolvedLanguage;
  const languages = i18n.languages;

  const changeLang = (lang: string) => {
    changeLanguage(lang);
  };

  return (
    <div className={styles.root}>

      <div className={styles.langOption}>
        {currentLanguage === 'en'
          ? (<img src={flagEN} alt="flag"/>)
          : (<img src={flagNL} alt="flag"/>)}
        <div>{currentLanguage.toUpperCase()}</div>
      </div>

      <div className={styles.popup}>
        {languages.map((lang: string) => lang !== currentLanguage ? (
          <div key={lang} className={styles.langOption} onClick={() => changeLang(lang)}>
            <img src={lang === 'en' ? flagEN : flagNL} alt="flag"/>
            <div>{lang.toUpperCase()}</div>
          </div>
        ) : undefined)}
      </div>

    </div>
  );
}
