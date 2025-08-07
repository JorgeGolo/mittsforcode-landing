'use client'

export default function PrivacyPage() {
  return (
    <main className="w-full flex flex-col min-h-screen bg-gray-100 p-4 font-sans">
      <div className="text-gray-800">
        <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
        <p className="mb-2">
          At <strong>JORGE GÓMEZ LÓPEZ</strong> (hereinafter, THE DEVELOPER),
          with registered address at Calle San Francisco, nº 9 – 11500 El Puerto
          de Santa María – (Cádiz) - Spain, and identification number (D.N.I.)
          75797320-S, we take our users privacy very seriously. This privacy
          policy explains how we manage information through our mobile
          application <strong>MINDROOK</strong> (hereinafter, THE APPLICATION)
          and our website (hereinafter, THE WEBSITE).
        </p>
        <h2 className="text-2xl font-bold mb-2">
          1. Information We Collect and Share
        </h2>
        <p className="mb-2">
          To support our application and provide it for free, we use third-party
          services for advertising. These services may collect and share certain
          data as described below.
        </p>
        <h3 className="text-xl font-semibold">
          Advertising and Third-Party Services (Google AdMob)
        </h3>
        <p className="mb-2">
          THE APPLICATION uses Google AdMob, an advertising service provided by
          Google Inc., to display advertisements. To function, AdMob collects
          and shares certain data to provide relevant ads and measure their
          performance. The types of data that may be collected and shared with
          Google include:
        </p>
        <ul>
          <li>
            Approximate location: To show ads that are relevant to the
            user&apos;s geographical area.
          </li>
          <li>
            App activity: This includes data about your interactions with the
            application, such as ads you have viewed, to measure ad performance.
          </li>
          <li>
            App info and performance: Includes crash logs and diagnostic
            information to monitor app health and troubleshoot technical errors
            related to the advertising service.
          </li>
          <li>
            Device or other IDs: Such as the device&apos;s Advertising ID, to
            personalize the advertising experience and for analytics purposes.
          </li>
        </ul>
        <p className="mb-2">
          This data is used by Google for the following purposes: Advertising or
          marketing, Analytics, and App functionality. We, THE DEVELOPER, do not
          store this information on our servers. For more information on how
          Google manages data in its advertising products, you can visit{' '}
          <a
            className="text-blue-600"
            href="https://policies.google.com/technologies/ads"
          >
            Google&apos;s Privacy & Terms site.
          </a>
        </p>
        <h2 className="text-2xl font-bold mb-2">
          2. User Consent (for users in the European Economic Area & UK)
        </h2>
        <p className="mb-2">
          In compliance with the General Data Protection Regulation (GDPR), for
          users located in the European Economic Area (EEA) and the United
          Kingdom (UK), THE APPLICATION uses Google&apos;s User Messaging
          Platform (UMP).
        </p>
        <p className="mb-2">
          Before displaying ads, we will present Google&apos;s consent form,
          which allows you to make informed decisions about the collection and
          use of your data for personalized advertising. You can manage your
          consent choices at any time.
        </p>

        <h2 className="text-2xl font-bold mb-2">3. Minors</h2>
        <p className="mb-2">
          THE APPLICATION and THE WEBSITE are intended for users aged 13 and
          over. We do not knowingly collect personal information from children
          under 13. If we become aware that we have collected personal
          information from a child under 13 without verifiable parental consent,
          we will take steps to remove that information from our systems. We
          encourage parents and guardians to actively supervise their
          children&apos;s online activities.
        </p>
        <h2 className="text-2xl font-bold mb-2">4. Information Security</h2>
        <p className="mb-2">
          We are committed to maintaining the security and integrity of THE
          APPLICATION and THE WEBSITE. We implement technical and organizational
          security measures to protect the information handled by the
          application and prevent unauthorized access. The data collected by our
          advertising partners is protected by their own robust security
          practices.
        </p>
        <h2 className="text-2xl font-bold mb-2">
          5. Modifications to the Privacy Policy
        </h2>
        <p className="mb-2">
          THE DEVELOPER reserves the right to modify this privacy policy at any
          time to adapt it to new legislation, best practices, or the
          incorporation of new functionalities in THE APPLICATION or THE WEBSITE
          that may involve the processing of personal data.
        </p>
        <p className="mb-2">
          Any changes will be published on THE WEBSITE and THE APPLICATION, and
          will be effective from the moment of their publication. We recommend
          that you periodically review this policy to stay informed of any
          updates. If you do not agree with the changes, we ask you to stop
          using THE APPLICATION and THE WEBSITE. Continued use after the
          publication of modifications implies your acceptance of them.
        </p>
        <h2 className="text-2xl font-bold mb-2">6. Contact</h2>
        <p className="mb-2">
          If you have any questions or need to clarify any point about this
          privacy policy, please do not hesitate to contact THE DEVELOPER via
          email at{' '}
          <a href="mailto:jorgelogomez@gmail.com">jorgelogomez@gmail.com</a>
        </p>
      </div>
    </main>
  )
}
