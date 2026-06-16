export default function Privacy() {
  return (
    <div className="min-h-screen pt-40 pb-24 bg-white">
      <div className="container max-w-3xl">
        <h1
          className="text-4xl md:text-5xl font-bold mb-6"
          style={{ fontFamily: "'Cormorant Garamond', serif", color: "#0F2439" }}
        >
          Privacy Policy
        </h1>
        <div className="teeva-gold-line-left mb-12" />

        <div className="space-y-8 text-base leading-relaxed" style={{ color: "#4A5568", fontFamily: "'Inter', sans-serif" }}>
          <section>
            <h2 className="text-2xl font-bold mb-4" style={{ color: "#0F2439" }}>1. Information We Collect</h2>
            <p>
              TEEVA ("we", "our", "us") collects information that you voluntarily provide to us when you express an interest in obtaining information about us or our products and services, when you participate in activities on the Website, or otherwise when you contact us. The personal information that we collect depends on the context of your interactions with us and the Website, the choices you make, and the products and features you use.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4" style={{ color: "#0F2439" }}>2. How We Use Your Information</h2>
            <p className="mb-4">
              We process your personal information for a variety of reasons, depending on how you interact with our Website, including:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>To deliver and facilitate delivery of services to the user.</li>
              <li>To respond to user inquiries/offer support to users.</li>
              <li>To send administrative information to you.</li>
              <li>To protect our Services.</li>
              <li>To enforce our terms, conditions, and policies for business purposes, to comply with legal and regulatory requirements or in connection with our contract.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4" style={{ color: "#0F2439" }}>3. Information Sharing and Disclosure</h2>
            <p>
              We only share information with your consent, to comply with laws, to provide you with services, to protect your rights, or to fulfill business obligations. We may process or share your data that we hold based on the following legal basis: Consent, Legitimate Interests, Performance of a Contract, or Legal Obligations.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4" style={{ color: "#0F2439" }}>4. Cookies and Similar Technologies</h2>
            <p>
              We may use cookies and similar tracking technologies (like web beacons and pixels) to access or store information. Specific information about how we use such technologies and how you can refuse certain cookies is set out in our Cookie Notice.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4" style={{ color: "#0F2439" }}>5. Data Retention</h2>
            <p>
              We will only keep your personal information for as long as it is necessary for the purposes set out in this privacy notice, unless a longer retention period is required or permitted by law.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4" style={{ color: "#0F2439" }}>6. Contact Us</h2>
            <p>
              If you have questions or comments about this notice, you may contact us using the information provided on our Contact page.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
