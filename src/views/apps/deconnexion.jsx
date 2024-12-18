// pages/[locale]/deconnexion.js
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import Cookies from 'js-cookie'

const Deconnexion = () => {
  const router = useRouter()
  const { locale } = router

  useEffect(() => {
    // Suppression du cookie d'authentification
    Cookies.remove('token')

    // Redirection vers la page d'accueil ou la page de connexion
    router.push(`/${locale}/`)
  }, [locale, router])

  return (
    <div>
      <p>Déconnexion en cours...</p>
    </div>
  )
}

export default Deconnexion
