import { motion } from 'motion/react'

import { profile, products, instagram, intro, disclosure } from './data'
import Pick from './components/Pick'

const EASE = [0.2, 0.7, 0.3, 1]

export default function App() {
  return (
    <main className="page">
      <motion.div
        className="head"
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: EASE, delay: 0.05 }}
      >
        <img className="portrait" src={profile.photo} alt="" width="150" height="150" />
        <div>
          <h1 className="name">{profile.name}</h1>
          <p className="role">{profile.role}</p>
        </div>
      </motion.div>

      <motion.p
        className="intro"
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: EASE, delay: 0.1 }}
      >
        {intro}
      </motion.p>

      <motion.p
        className="aviso"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.45, ease: EASE, delay: 0.14 }}
      >
        {disclosure}
      </motion.p>

      <section className="picks">
        <div className="picks-head">
          <h2 className="picks-title">recomendados</h2>
          <span className="picks-count">{products.length} itens</span>
        </div>

        <div className="grid">
          {products.map((item, i) => (
            <Pick key={item.id} item={item} i={i} />
          ))}
        </div>
      </section>

      <footer className="foot">
        <a href={instagram} target="_blank" rel="noopener noreferrer">
          voltar pro instagram
        </a>
        <p className="copy">
          © {new Date().getFullYear()} {profile.name}
        </p>
      </footer>
    </main>
  )
}
