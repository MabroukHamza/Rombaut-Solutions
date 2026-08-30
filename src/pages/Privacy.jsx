import { useNavigate } from 'react-router-dom'
import { useLang } from '../context/LanguageContext'

const content = {
  nl: {
    back: '← Terug naar Home',
    title: 'Privacybeleid',
    updated: 'Laatst bijgewerkt: 30 augustus 2026',
    sections: [
      {
        h: 'Wie wij zijn',
        p: 'RombautSolution, is verantwoordelijk voor de verwerking van uw persoonsgegevens zoals beschreven in dit privacybeleid. Contact: info@rombautsolutions.be.',
      },
      {
        h: 'Welke gegevens we verzamelen',
        p: 'Via het contactformulier: naam, e-mailadres, telefoonnummer (optioneel) en uw bericht. Via het reviewformulier: naam (optioneel), beoordeling en tekst van uw review. Voor beveiligingsdoeleinden verwerken we ook uw IP-adres, tijdelijk, om misbruik en spam te voorkomen.',
      },
      {
        h: 'Waarom we deze gegevens verzamelen',
        p: 'Om te reageren op uw vraag of aanvraag, om reviews te kunnen publiceren op onze website, en om ons formulier te beschermen tegen spam en misbruik. We gebruiken uw gegevens niet voor marketing zonder uw uitdrukkelijke toestemming.',
      },
      {
        h: 'Derde partijen',
        p: 'We gebruiken Cloudflare Turnstile om spam en geautomatiseerde inzendingen te weren, en Resend om e-mails te versturen. Deze partijen verwerken enkel de gegevens die nodig zijn om hun dienst uit te voeren.',
      },
      {
        h: 'Cookies & lokale opslag',
        p: 'Deze website gebruikt geen tracking- of marketingcookies. We slaan enkel uw voorkeur voor taal en thema (licht/donker) lokaal op in uw browser (localStorage), zodat deze bewaard blijft bij een volgend bezoek. Deze gegevens verlaten uw toestel niet.',
      },
      {
        h: 'Bewaartermijn',
        p: 'Contactformulierberichten worden bewaard zolang nodig om uw vraag te behandelen. Reviews blijven zichtbaar totdat u vraagt om verwijdering. We bewaren maximaal de laatste 100 reviews.',
      },
      {
        h: 'Uw rechten',
        p: 'U heeft het recht op inzage, correctie of verwijdering van uw persoonsgegevens. Neem hiervoor contact op via info@rombautsolutions.be. U heeft ook het recht om een klacht in te dienen bij de Gegevensbeschermingsautoriteit (GBA).',
      },
    ],
  },
  en: {
    back: '← Back to Home',
    title: 'Privacy Policy',
    updated: 'Last updated: August 30, 2026',
    sections: [
      {
        h: 'Who we are',
        p: 'RombautSolutions, located at [Full registered address], VAT/company registration number [VAT/KBO number], is responsible for processing your personal data as described in this privacy policy. Contact: info@rombautsolutions.be.',
      },
      {
        h: 'What data we collect',
        p: 'Via the contact form: name, email address, phone number (optional) and your message. Via the review form: name (optional), rating and review text. For security purposes we also process your IP address, temporarily, to prevent abuse and spam.',
      },
      {
        h: 'Why we collect this data',
        p: 'To respond to your inquiry or request, to publish reviews on our website, and to protect our forms against spam and abuse. We do not use your data for marketing without your explicit consent.',
      },
      {
        h: 'Third parties',
        p: 'We use Cloudflare Turnstile to block spam and automated submissions, and Resend to send emails. These providers only process the data required to perform their service.',
      },
      {
        h: 'Cookies & local storage',
        p: 'This website does not use tracking or marketing cookies. We only store your language and theme (light/dark) preference locally in your browser (localStorage) so it is remembered on your next visit. This data never leaves your device.',
      },
      {
        h: 'Retention',
        p: 'Contact form messages are kept for as long as needed to handle your request. Reviews stay visible until you request removal. We keep a maximum of the latest 100 reviews.',
      },
      {
        h: 'Your rights',
        p: 'You have the right to access, correct, or delete your personal data. Contact us at info@rombautsolutions.be. You also have the right to file a complaint with your national data protection authority.',
      },
    ],
  },
}

function Privacy() {
  const navigate = useNavigate()
  const { lang } = useLang()
  const t = content[lang]

  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg-primary)', padding: '4rem 1.5rem', transition: 'background 0.3s' }}>
      <div style={{ maxWidth: '760px', margin: '0 auto' }}>
        <button
          onClick={() => navigate('/')}
          style={{ background: 'none', border: 'none', color: 'var(--text-muted)', fontSize: '0.75rem', letterSpacing: '0.2em', textTransform: 'uppercase', cursor: 'pointer', marginBottom: '3rem', padding: 0 }}
          onMouseEnter={e => { e.currentTarget.style.color = 'var(--gold)' }}
          onMouseLeave={e => { e.currentTarget.style.color = 'var(--text-muted)' }}
        >
          {t.back}
        </button>

        <h1 style={{ fontFamily: 'Georgia, Times New Roman, serif', fontSize: '2rem', fontWeight: '700', color: 'var(--gold)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
          {t.title}
        </h1>
        <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', letterSpacing: '0.1em', marginBottom: '3rem' }}>
          {t.updated}
        </p>

        {t.sections.map(s => (
          <div key={s.h} style={{ marginBottom: '2rem' }}>
            <h2 style={{ fontFamily: 'Georgia, Times New Roman, serif', fontSize: '1rem', fontWeight: '700', color: 'var(--gold)', letterSpacing: '0.05em', marginBottom: '0.5rem' }}>
              {s.h}
            </h2>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: '1.8' }}>
              {s.p}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Privacy
