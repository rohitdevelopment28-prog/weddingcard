export default function Controls({ t, onLang, music }) {
  return (
    <div className="controls">
      <button type="button" className="lang" onClick={onLang} aria-label={t.switchLang} title={t.switchLang}>{t.otherLang}</button>
      {music.available && (
        <button type="button" className="music" onClick={music.toggle} aria-label={music.playing ? t.pauseMusic : t.playMusic}>
          <svg viewBox="0 0 24 24" aria-hidden="true">
            {music.playing ? <path d="M8 6h3v12H8zM13 6h3v12h-3z" /> : <path d="M9 6l9 6-9 6z" />}
          </svg>
        </button>
      )}
    </div>
  )
}
