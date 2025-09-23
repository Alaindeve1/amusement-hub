export default function PrivacyPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 md:px-6 py-12">
      <h1 className="text-3xl font-extrabold tracking-tight mb-4">Privacy Policy</h1>
      <p className="text-gray-700 leading-relaxed mb-4">
        Your privacy is important to us. This policy explains what information we collect and how we use it.
      </p>
      <h2 className="text-xl font-semibold mt-6 mb-2">Information We Collect</h2>
      <ul className="list-disc pl-6 text-gray-700 space-y-1">
        <li>Account information (e.g., email, username) if you register</li>
        <li>Usage data (e.g., pages visited, interactions)</li>
      </ul>
      <h2 className="text-xl font-semibold mt-6 mb-2">How We Use Information</h2>
      <ul className="list-disc pl-6 text-gray-700 space-y-1">
        <li>To provide and improve our services</li>
        <li>To personalize your experience</li>
        <li>To ensure platform security and reliability</li>
      </ul>
      <p className="text-gray-700 leading-relaxed mt-6">
        If you have questions about this policy, please contact us.
      </p>
    </main>
  );
}
