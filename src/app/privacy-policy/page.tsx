'use client'

import React from 'react'

export default function PrivacyPrincipal() {
  return (
    <main className="w-full flex flex-col min-h-screen bg-gray-100 p-4 font-sans">
      <div className="text-gray-800">
        <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
        <p className="mb-2">
          At <strong>JORGE GÓMEZ LÓPEZ</strong> (hereinafter, THE DEVELOPER),
          with registered address at Calle San Francisco, nº 9 – 11500 El Puerto
          de Santa María – (Cádiz) - Spain, and identification number (D.N.I.)
          75797320-S, we take our users&apos; privacy very seriously. This
          privacy policy describes how information is managed on this website
          (hereinafter, THE WEBSITE) and in the software we develop.
        </p>

        <h2 className="text-2xl font-bold mb-2">1. Information We Collect</h2>
        <p className="mb-2">
          This website is a landing page for informational purposes.
          <strong>
            {' '}
            We do not use cookies, we do not collect personal data from
            visitors, and we do not request or store any type of user
            information.
          </strong>
          Your visit to this website is completely anonymous.
        </p>

        <h2 className="text-2xl font-bold mb-2">2. About Our Software</h2>
        <p className="mb-2">
          The software developed by THE DEVELOPER may have its own specific
          privacy policy, which will be provided and explained at the time of
          its use. Each piece of software handles data independently and in
          accordance with its specific purpose.
        </p>

        <h2 className="text-2xl font-bold mb-2">3. Information Security</h2>
        <p className="mb-2">
          Although this website does not collect information, we are committed
          to maintaining the security and integrity of all our systems. We
          implement technical and organizational security measures to protect
          information and prevent unauthorized access throughout all the
          software we develop.
        </p>

        <h2 className="text-2xl font-bold mb-2">
          4. Modifications to the Privacy Policy
        </h2>
        <p className="mb-2">
          THE DEVELOPER reserves the right to modify this privacy policy at any
          time.
        </p>
        <p className="mb-2">
          Any changes will be published on THE WEBSITE and will be effective
          from the moment of their publication. We recommend that you
          periodically review this policy to stay informed of any updates.
        </p>

        <h2 className="text-2xl font-bold mb-2">5. Contact</h2>
        <p className="mb-2">
          If you have any questions or need to clarify any point about this
          privacy policy, please do not hesitate to contact THE DEVELOPER via
          email at{' '}
          <a href="mailto:jorgelogomez@gmail.com" className="text-blue-600">
            jorgelogomez@gmail.com
          </a>
        </p>
      </div>
    </main>
  )
}
