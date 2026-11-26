import { EVENTS, calendarUrl } from '../content'
import { Diya, Flower, Garland, Heading } from './Ornaments'

function HaldiArt() {
  return (
    <svg viewBox="0 0 160 150" aria-hidden="true">
      <ellipse cx="80" cy="132" rx="70" ry="10" fill="#c9a35c" opacity=".3" />
      <ellipse cx="80" cy="120" rx="66" ry="17" fill="#b9822f" />
      <ellipse cx="80" cy="116" rx="66" ry="17" fill="#e5b95e" />
      <ellipse cx="80" cy="116" rx="55" ry="12.500" fill="#c8933c" />
      <path d="M40 72C42 100 56 116 80 116C104 116 118 100 120 72Z" fill="#b8672a" />
      <path d="M40 72C42 100 56 116 80 116C66 110 58 94 58 72Z" fill="#8f4a1c" />
      <path d="M46 90C62 100 98 100 114 90" fill="none" stroke="#f0c36a" strokeWidth="2.500" />
      <ellipse cx="80" cy="72" rx="40" ry="11" fill="#7c3d16" />
      <path d="M44 71C52 52 68 46 80 46C94 46 108 54 116 71C104 80 56 80 44 71Z" fill="#f4b81f" />
      <path d="M60 60C68 50 82 48 92 54" fill="none" stroke="#ffe07a" strokeWidth="4" strokeLinecap="round" />
      <path d="M76 48C70 30 74 18 84 8C88 22 90 34 84 48Z" fill="#3d7a3a" />
      <path d="M84 48C90 34 100 28 112 26C108 40 100 48 88 52Z" fill="#4f9147" />
      <path d="M74 48C66 36 58 32 46 32C52 44 60 50 70 52Z" fill="#2f6531" />
      <path d="M118 112C124 100 138 98 146 104C142 114 130 120 118 112Z" fill="#d98a1a" />
      <path d="M128 108C130 100 126 94 122 92" stroke="#d98a1a" strokeWidth="6" strokeLinecap="round" fill="none" />
      <Flower x={30} y={116} size={30} />
      <Flower x={52} y={124} size={22} yellow />
      <Flower x={108} y={126} size={18} yellow />
    </svg>
  )
}

function MandapArt() {
  return (
    <svg viewBox="0 0 160 150" aria-hidden="true">
      <ellipse cx="80" cy="140" rx="74" ry="8" fill="#c9a35c" opacity=".3" />
      <path d="M14 136H146V144H14Z" fill="#a03a2f" />
      <path d="M22 128H138V136H22Z" fill="#c9553f" />
      <path d="M36 46H124V128H36Z" fill="#7d1329" opacity=".13" />
      <path d="M8 46C34 42 56 24 80 8C104 24 126 42 152 46L146 60H14Z" fill="#a3212f" />
      <path d="M80 8C92 24 104 42 112 60H48C56 42 68 24 80 8Z" fill="#c23343" />
      <path d="M14 60a7.330 8 0 0 0 14.660 0a7.330 8 0 0 0 14.660 0a7.330 8 0 0 0 14.660 0a7.330 8 0 0 0 14.660 0a7.330 8 0 0 0 14.660 0a7.330 8 0 0 0 14.660 0a7.330 8 0 0 0 14.660 0a7.330 8 0 0 0 14.660 0a7.330 8 0 0 0 14.700 0Z" fill="#e0aa4c" />
      <path d="M12 46C36 44 60 28 80 14C100 28 124 44 148 46" fill="none" stroke="#f0c36a" strokeWidth="1.600" />
      <circle cx="80" cy="6" r="4.500" fill="#e0aa4c" />
      {[24, 128].map((x) => (
        <g key={x}>
          <rect x={x} y="62" width="8" height="68" fill="#e3c17a" />
          {[70, 82, 94, 106, 118].map((y, i) => <Flower key={y} x={x + 4} y={y} size={13} yellow={i % 2 === 1} />)}
        </g>
      ))}
      <Garland from={[30, 68]} to={[80, 66]} sag={12} count={8} size={9} />
      <Garland from={[80, 66]} to={[130, 68]} sag={12} count={8} size={9} />
      <path d="M62 128L66 114H94L98 128Z" fill="#8f4a1c" />
      <path d="M64 120H96" stroke="#e0aa4c" strokeWidth="1.500" />
      <path className="flame" d="M80 84C92 98 90 108 84 114H76C70 108 68 98 80 84Z" fill="#f28a1e" />
      <path className="flame" d="M80 95C85 103 84 109 82 114H78C76 109 75 103 80 95Z" fill="#ffe08a" />
    </svg>
  )
}

function FeastArt() {
  const bowls = [[46, 72, '#e6a51f'], [72, 60, '#b3432a'], [100, 62, '#5f8a3a'], [120, 78, '#f1e4c4']]
  return (
    <svg viewBox="0 0 160 150" aria-hidden="true">
      <ellipse cx="80" cy="126" rx="72" ry="14" fill="#c9a35c" opacity=".3" />
      <path d="M6 98C20 58 60 40 92 42C128 44 154 68 156 94C152 124 112 138 76 136C40 134 12 122 6 98Z" fill="#3f8040" />
      <path d="M6 98C50 88 110 86 156 94" stroke="#8fbd6a" strokeWidth="2" fill="none" />
      {Array.from({ length: 9 }, (_, i) => (
        <path key={i} d={`M${24 + i * 14} ${96 - i * 0.4}L${34 + i * 13} ${58 - Math.sin(i / 2.5) * 6}M${24 + i * 14} ${96 - i * 0.4}L${32 + i * 12} ${126 + Math.sin(i / 2.5) * 6}`} stroke="#2f6a35" strokeWidth="1" />
      ))}
      <path d="M56 112C58 94 70 86 82 86C94 86 106 94 108 112C96 120 68 120 56 112Z" fill="#fff8e6" />
      <path d="M72 92C78 88 88 88 94 93C90 100 76 100 72 92Z" fill="#f0bb2c" />
      {bowls.map(([x, y, c]) => (
        <g key={x}>
          <path d={`M${x - 13} ${y}C${x - 11} ${y + 14} ${x + 11} ${y + 14} ${x + 13} ${y}Z`} fill="#b8862f" />
          <ellipse cx={x} cy={y} rx="13" ry="5" fill="#e0b55a" />
          <ellipse cx={x} cy={y} rx="10.500" ry="3.700" fill={c} />
        </g>
      ))}
      {[[32, 108], [44, 116], [34, 120]].map(([x, y]) => <circle key={`${x}${y}`} cx={x} cy={y} r="7" fill="#e79a22" stroke="#c87a12" />)}
      <path d="M116 106a13 13 0 0 1 24 4a16 12 0 0 1-24-4Z" fill="#dba45a" stroke="#b67d35" />
      <Diya x={136} y={54} size={26} />
    </svg>
  )
}

const ART = { haldi: HaldiArt, wedding: MandapArt, reception: FeastArt }

export default function Timeline({ t, lang }) {
  return (
    <section className="section">
      <Heading>{t.eventsTitle}</Heading>
      <ol className="events">
        {EVENTS.map(({ id }) => {
          const Art = ART[id]
          const e = t.events[id]
          return (
            <li key={id} className={`event reveal ${id}`}>
              <div className="event-art"><Art /></div>
              <div className="event-copy">
                <p className="caps small">{e.when}</p>
                <p className="event-time">{e.time}</p>
                <h3>{e.name}</h3>
                <p className="event-alt" lang={lang === 'mr' ? 'en' : 'mr'}>{e.alt}</p>
                <p className="muted italic">{e.where}</p>
                <a className="link" href={calendarUrl(id)} target="_blank" rel="noreferrer" aria-label={`${t.addCal}: ${e.name}`}>{t.addCal}</a>
              </div>
            </li>
          )
        })}
      </ol>
    </section>
  )
}
