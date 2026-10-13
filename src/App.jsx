import { useState } from 'react'
import ScratchCard from './components/ScratchCard'
import coupleImg from './assets/couple.png'
import haldiCouple from './assets/haldi-couple.png'
import Flower from './components/Flower'
import './App.css'

function App() {
  const [musicOn, setMusicOn] = useState(false)
  const [opened, setOpened] = useState(false)

  const [closing, setClosing] = useState(false)
  const openNow = () => {
    setClosing(true)
    setTimeout(() => setOpened(true), 900)
  }

  const [slide, setSlide] = useState(0)
  const slides = [
    { caption: '"The beginning of our favorite chapter" ♡', photo: '💑 Our first photo', items: [['♡','THE DAY WE MET','A spark we\'ll never forget'],['☕','CONNECTED','From strangers to soulmates'],['🤍','TRUST & LOVE','Every milestone together'],['∞','FOREVER & ALWAYS','Here\'s to our forever']] },
    { caption: '"Our first trip together" ✈️', photo: '🏖️ Beach days', items: [['✈️','FIRST TRIP','Mumbai to the mountains'],['🌄','SUNRISES','Watched from a hilltop'],['📸','PHOTOS','Too many, zero regrets']] },
    { caption: '"The day we said yes" 💍', photo: '💍 The proposal', items: [['💍','PROPOSAL','Down on one knee'],['😭','HAPPY TEARS','Couldn\'t stop smiling'],['🥂','CELEBRATION','Toasted to forever']] },
  ]

  return (
    <div className="page">
      {!opened && (
        <div className={`envelope ${closing ? 'closing' : ''}`}>
          <div className="flap top"></div>
          <div className="flap bottom"></div>
          <button className="seal-btn" onClick={openNow}>R | S</button>
          <p className="seal-hint">Tap the seal to open 💛</p>
        </div>
      )}
      {opened && (
        <div className="open-anim">
          {/* HERO */}
      <section className="hero">
        <Flower className="flower tl" /><Flower className="flower tr" /><Flower className="flower bl" /><Flower className="flower br" />
        <div className="monogram">
          <div className="wreath">R | S</div>
        </div>
        <h1 className="names">Rohit <span>weds</span> Shruti</h1>
        <p className="tagline">WE ARE GETTING MARRIED</p>
        <img src={coupleImg} alt="Bride and groom" className="couple" />
        <ScratchCard />
      </section>

      {/* FAMILIES */}
      <section className="panel bg-families">
        <div className="glass-card">
          <p className="eyebrow">TWO FAMILIES · ONE PROMISE</p>
          <h2>INTRODUCING <em>the families</em></h2>
          <div className="families">
            <div>
              <h3 className="script">Rohit</h3>
              <p>S/O &amp; <br /> Mr.  Ramesh Bhau Satvidkar</p>
            </div>
            <div className="seal">R | S</div>
            <div>
              <h3 className="script">Shruti</h3>
              <p>D/O &amp; <br /> Mr. Sanjay Harishchandra Chavan</p>
            </div>
          </div>
        </div>
      </section>

      {/* STORY */}
      <section className="panel">
        <h2 className="spaced">OUR STORY</h2>
        <p className="italic">Some chapters are written by destiny.</p>
        <div className="polaroid">
          <button className="car-arrow left" onClick={() => setSlide((slide + slides.length - 1) % slides.length)}>‹</button>
          <div className="polaroid-inner">
            <p className="script small">our story</p>
            <ul className="timeline">
              {slides[slide].items.map(([icon, title, sub]) => (
                <li key={title}><span className="ticon">{icon}</span><b>{title}</b><small>{sub}</small></li>
              ))}
            </ul>
            <div className="photo-slot">{slides[slide].photo}</div>
            <p className="script small center">Here's to our forever, and forever more.</p>
          </div>
          <button className="car-arrow right" onClick={() => setSlide((slide + 1) % slides.length)}>›</button>
          <p className="script caption">{slides[slide].caption}</p>
          <div className="dots">{slides.map((_, i) => <i key={i} className={i === slide ? 'on' : ''} onClick={() => setSlide(i)}></i>)}</div>
        </div>
        <p className="italic mt">From this first conversation to a lifetime of us ♡</p>
      </section>

      {/* HALDI */}
      <section className="full-page bg-haldi mb-4">
        <div className="haldi-details">
          <p className="eyebrow">A CELEBRATION OF TRADITION, LOVE &amp; FAMILY</p>
          <p className="smallcaps">✦ 11 DECEMBER, 2026 ✦</p>
          <div className="big-icon">🌼</div>
          <h2 className="script event-title">Haldi Ceremony</h2>
          <p className="ornament">— 💛 —</p>
          <p className="time">10:00 AM</p>
          <p className="venue">Venue:<br /><b>Suruchi Resort, Alibaug</b></p>
        </div>
        <img src={haldiCouple} alt="Rohit and Shruti" className="haldi-couple" />
      </section>

      {/* WEDDING */}
      <section className="full-page bg-wedding">
        <div className="glass-card">
          <p className="eyebrow">A CELEBRATION OF LOVE, FAITH &amp; FOREVER</p>
          <p className="smallcaps">✦ 12 DECEMBER, 2026 ✦</p>
          {/* <div className="big-icon">⛪</div> */}
          <h2 className="script event-title">Wedding</h2>
          <p className="ornament">— 💛 —</p>
          <p className="time">3:00 PM</p>
          <p className="venue">Venue:<br /><b>Suruchi Resort, Alibaug</b></p>
          <p className="quote">"Therefore what God has joined together, let no one separate."</p>
        </div>
      </section>

      {/* RECEPTION */}
      <section className="full-page bg-reception">
        <div className="glass-card">
          <p className="eyebrow">A CELEBRATION OF LOVE &amp; HAPPINESS</p>
          <p className="smallcaps">✦ 12 DECEMBER, 2026 ✦</p>
          <div className="big-icon">🥂</div>
          <h2 className="script event-title">Reception</h2>
          <p className="time">1:00 PM</p>
          <p className="venue">Venue:<br /><b>Suruchi Resort, Alibaug</b></p>
        </div>
      </section>

      <button className="music" onClick={() => setMusicOn(!musicOn)}>
        {musicOn ? '🔊' : '🔈'}
      </button>
        </div>
      )}
    </div>
  )
}

export default App
