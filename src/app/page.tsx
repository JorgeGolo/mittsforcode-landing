// src/app/page.tsx
import { FaTwitter, FaMastodon } from 'react-icons/fa'

export default function LandingPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8 bg-gray-900 text-white">
      <div className="text-center">
        <img
          src="/assets/logo.svg"
          alt="Mitts For Code Logo"
          className="mx-auto mb-8 h-40" // La clase 'mx-auto' de Tailwind CSS centra el elemento
        />
        <h1 className="text-4xl font-bold mb-4">Mitts For Code</h1>
        <p className="text-xl text-gray-300 mb-8">
          A web to show apps made by Mitts For Code
        </p>
        <div className="flex justify-center space-x-4 mb-4">
          <a
            href="https://twitter.com/https://x.com/mittsforcode"
            className="text-gray-400 hover:text-white"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter size={42} />
          </a>
          <a
            href="https://mastodon.social/@mittsforcode"
            className="text-gray-400 hover:text-white"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaMastodon size={42} />
          </a>
        </div>
        <div className="bg-gray-700 rounded-lg p-4">
          <img
            src="/assets/mindrook/logo.png"
            alt="Mitts For Code Logo"
            className="mx-auto mb-8 " // La clase 'mx-auto' de Tailwind CSS centra el elemento
          />{' '}
          <p className="text-xl text-gray-300 mb-8">
            Sharpen your tactical vision with chess puzzles
          </p>
          <a
            href="https://play.google.com/store/apps/details?id=com.owldotask.chesspuzzles" // <-- CAMBIA ESTO POR TU URL REAL DE LA APP
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors mb-4 block"
            target="_blank"
            rel="noopener noreferrer"
          >
            Get it on Google Play
          </a>
          <div className="flex justify-center space-x-4">
            <a
              href="/mindrook/privacy-policy"
              className="text-gray-400 hover:text-white underline"
            >
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </main>
  )
}
