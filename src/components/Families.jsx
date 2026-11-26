import { CONTACTS } from '../content'
import { Divider, Heading, Monogram } from './Ornaments'

function Group({ title, names }) {
  return (
    <div className="group reveal">
      <h3 className="caps small">{title}</h3>
      <ul>{names.map((name) => <li key={name}>{name}</li>)}</ul>
    </div>
  )
}

export default function Families({ t }) {
  return (
    <>
      <section className="section">
        <Heading>{t.familyTitle}</Heading>
        <Group title={t.memory} names={t.memoryNames} />
        <Group title={t.eager} names={t.eagerNames} />
        <Group title={t.hosts} names={t.hostNames} />
        <div className="group reveal">
          <h3 className="caps small">{t.kids}</h3>
          <p className="kids">{t.kidsLine}</p>
        </div>
        <div className="group reveal">
          <h3 className="caps small">{t.call}</h3>
          <p className="phones">
            {CONTACTS.map((c) => <a key={c.tel} className="phone" href={`tel:${c.tel}`}>{c.label}</a>)}
          </p>
        </div>
      </section>
      <footer className="section closing reveal">
        <Divider />
        <p className="blessing">{t.withLove}</p>
        <Monogram />
        <p className="script closing-names">{t.rohit} &amp; {t.shruti}</p>
      </footer>
    </>
  )
}
