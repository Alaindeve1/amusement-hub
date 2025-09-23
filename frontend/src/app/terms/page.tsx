export default function TermsPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 md:px-6 py-12">
      <h1 className="text-3xl font-extrabold tracking-tight mb-4">Terms of Service</h1>
      <p className="text-gray-700 leading-relaxed mb-4">
        By using this site, you agree to the following terms and conditions. Please read them carefully.
      </p>
      <h2 className="text-xl font-semibold mt-6 mb-2">Use of Service</h2>
      <ul className="list-disc pl-6 text-gray-700 space-y-1">
        <li>Do not misuse or interfere with the platform</li>
        <li>Respect other users and content guidelines</li>
      </ul>
      <h2 className="text-xl font-semibold mt-6 mb-2">Accounts</h2>
      <ul className="list-disc pl-6 text-gray-700 space-y-1">
        <li>You are responsible for your account credentials</li>
        <li>We may suspend accounts that violate these terms</li>
      </ul>
      <p className="text-gray-700 leading-relaxed mt-6">
        These terms may change over time. Continued use of the site constitutes acceptance of updated terms.
      </p>
    </main>
  );
}
