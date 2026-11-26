import { useEffect, useState } from 'react'
import Controls from './components/Controls'
import Countdown from './components/Countdown'
import Doors from './components/Doors'
import Families from './components/Families'
import Hero from './components/Hero'
import Invitation from './components/Invitation'
import { Defs, Heading } from './components/Ornaments'
import ScratchCard from './components/ScratchCard'
import Timeline from './components/Timeline'
import Venue from './components/Venue'
import { MUSIC_SRC, TEXT } from './content'
import { useMusic } from './lib/useMusic'
import './App.css'

// ?lang=mr opens the invitation in Marathi, so either version can be shared.
const initialLang = () => (new URLSearchParams(window.location.search).get('lang') === 'mr' ? 'mr' : 'en')

function useReveal(active, lang) {
  useEffect(() => {
    if (!active) return
    const seen = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (!e.isIntersecting) return
          e.target.classList.add('in')
          seen.unobserve(e.target)
        }),
      { threshold: 0.12 },
    )
    document.querySelectorAll('.reveal:not(.in)').forEach((el) => seen.observe(el))
    return () => seen.disconnect()
  }, [active, lang])
}

export default function App() {
  const [stage, setStage] = useState('closed') // closed, opening, open
  const [lang, setLang] = useState(initialLang)
  const music = useMusic(MUSIC_SRC)
  const t = TEXT[lang]
  useReveal(stage === 'open', lang)

  useEffect(() => {
    document.documentElement.lang = lang
  }, [lang])

  return (
    <div className="page" data-lang={lang}>
      <Defs />
      {stage !== 'open' && (
        <Doors
          t={t}
          onTap={() => {
            setStage('opening')
            music.start()
          }}
          onDone={() => setStage('open')}
        />
      )}
      {stage !== 'closed' && (
        <main className={stage} inert={stage === 'opening'}>
          <Hero t={t} />
          <ScratchCard t={t} />
          <Invitation t={t} />
          <section className="section">
            <Heading>{t.storyTitle}</Heading>
            <ol className="story">
              {t.story.map(([title, line]) => (
                <li key={title} className="reveal">
                  <h3 className="script">{title}</h3>
                  <p>{line}</p>
                </li>
              ))}
            </ol>
          </section>
          <Timeline t={t} lang={lang} />
          <Countdown t={t} lang={lang} />
          <Venue t={t} />
          <Families t={t} />
        </main>
      )}
      {stage !== 'opening' && (
        <Controls t={t} music={stage === 'open' ? music : { available: false }} onLang={() => setLang(lang === 'en' ? 'mr' : 'en')} />
      )}
    </div>
  )
}
