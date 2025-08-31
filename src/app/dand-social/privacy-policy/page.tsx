// pages/privacy.tsx
'use client' // Necesario si estás usando el App Router de Next.js

export default function PrivacyDand() {
  return (
    <main className="w-full flex justify-center min-h-screen bg-gray-50 dark:bg-gray-900 p-4 sm:p-8 font-sans">
      <div className="max-w-3xl text-gray-800 dark:text-gray-200 bg-white dark:bg-gray-800 p-6 sm:p-10 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold mb-4">
          Privacy Policy for dand-social
        </h1>
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
          Last Updated: August 31, 2025
        </p>

        <p className="mb-4">
          This privacy policy explains how <strong>dand-social</strong> (the
          Application) handles information when you connect your social media
          accounts and use our services. Your privacy is taken very seriously.
        </p>

        <h2 className="text-2xl font-bold mt-6 mb-2">
          1. Information We Handle
        </h2>
        <p className="mb-2">
          The Application is designed to function without collecting or storing
          personally identifiable information on our own servers. All sensitive
          data is stored locally and securely in your browser.
        </p>

        <h3 className="text-xl font-semibold mt-4">Authentication Tokens</h3>
        <p className="mb-2">
          To publish content on your behalf, the Application connects to
          third-party social media APIs (such as Twitter, Mastodon, and
          Pinterest) using the secure OAuth protocol. When you authorize the
          Application, we receive an authentication token (Access Token).
        </p>
        <ul className="list-disc list-inside mb-2 space-y-1 pl-4">
          <li>
            <strong>Storage:</strong> These tokens are stored exclusively in
            your browser&apos;s <strong>localStorage</strong>. They are never
            transmitted to or stored on our servers. This design ensures that
            only you have access to your connection credentials.
          </li>
          <li>
            <strong>Usage:</strong> The tokens are used solely to make
            authenticated requests to the respective social media APIs for
            actions you initiate, such as publishing a post.
          </li>
        </ul>

        <h3 className="text-xl font-semibold mt-4">
          Application Data (Profiles and Settings)
        </h3>
        <p className="mb-2">
          All application data, including the profiles you create, your AI
          prompts, and other settings, are also stored in your browser&apos;s{' '}
          <strong>localStorage</strong>. We do not have access to this
          information.
        </p>

        <h2 className="text-2xl font-bold mt-6 mb-2">2. Third-Party APIs</h2>
        <p className="mb-2">
          The Application interacts with the following third-party services. By
          using our service, you agree to their respective privacy policies and
          terms of service:
        </p>
        <ul className="list-disc list-inside mb-2 space-y-1 pl-4">
          <li>
            <a
              href="https://twitter.com/en/privacy"
              className="text-blue-500 hover:underline"
            >
              Twitter / X
            </a>
          </li>
          <li>
            <a
              href="https://mastodon.social/privacy-policy"
              className="text-blue-500 hover:underline"
            >
              Mastodon
            </a>{' '}
            (Note: each instance has its own policy)
          </li>
          <li>
            <a
              href="https://policy.pinterest.com/en/privacy-policy"
              className="text-blue-500 hover:underline"
            >
              Pinterest
            </a>
          </li>
          <li>
            <a
              href="https://groq.com/privacy-policy"
              className="text-blue-500 hover:underline"
            >
              Groq
            </a>{' '}
            (for AI text generation)
          </li>
        </ul>
        <p className="mb-2">
          We are not responsible for the data practices of these third-party
          services.
        </p>

        <h2 className="text-2xl font-bold mt-6 mb-2">3. Data Security</h2>
        <p className="mb-2">
          Since all sensitive data (authentication tokens) and personal settings
          are stored locally on your device, you are in control of your
          information. We recommend using a secure browser and keeping your
          device protected.
        </p>

        <h2 className="text-2xl font-bold mt-6 mb-2">
          4. Children&apos;s Privacy
        </h2>
        <p className="mb-2">
          Our service is not intended for children under the age of 13. We do
          not knowingly collect any personal information.
        </p>

        <h2 className="text-2xl font-bold mt-6 mb-2">
          5. Changes to This Privacy Policy
        </h2>
        <p className="mb-2">
          We may update this privacy policy from time to time. Any changes will
          be posted on this page. Your continued use of the Application after
          any changes constitutes your acceptance of the new policy.
        </p>

        <h2 className="text-2xl font-bold mt-6 mb-2">6. Contact</h2>
        <p className="mb-2">
          If you have any questions about this privacy policy, please contact us
          at{' '}
          <a
            href="mailto:your-email@example.com"
            className="text-blue-500 hover:underline"
          >
            your-email@example.com
          </a>
          .
        </p>
      </div>
    </main>
  )
}
