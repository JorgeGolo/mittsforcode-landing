// src/app/page.tsx
export default function LandingPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8 bg-gray-900 text-white">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Mits For Code</h1>
        <p className="text-xl text-gray-300 mb-8">
          A web to show apps made with Mits For Code
        </p>
        <hr className="mb-4 mt-4" />
        <h2 className="text-4xl font-bold mb-4">MindRook</h2>
        <p className="text-xl text-gray-300 mb-8">
          Sharpen your tactical vision with unlimited chess puzzles.
        </p>
        <a
          href="https://play.google.com/store/apps/details?id=com.owldotask.chesspuzzles" // <-- CAMBIA ESTO POR TU URL REAL DE LA APP
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          Get it on Google Play
        </a>
        <div className="mt-12">
          <a
            href="/mindrook/privacy-policy"
            className="text-gray-400 hover:text-white underline"
          >
            Privacy Policy
          </a>
        </div>
      </div>
    </main>
  );
}
