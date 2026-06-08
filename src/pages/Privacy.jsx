import { Helmet } from "react-helmet-async";
const Privacy = () => (
  <>
    <Helmet><title>Privacy Policy – SAMPE Industrial</title></Helmet>
    <div className="container mx-auto px-4 py-16 max-w-4xl"><h1 className="text-4xl font-bold mb-4">Privacy Policy</h1><p className="text-gray-600 mb-8">Last Updated: June 10, 2025</p><div><h2 className="text-2xl font-bold mt-6">Core Principles</h2><p>At SAMPE, we treat your data like a technical blueprint: precise, confidential, and essential for the structural success of our partnership.</p><h2 className="text-2xl font-bold mt-6">Information We Collect</h2><p><strong>Personal Data:</strong> Name, email, phone number, project site addresses, billing information.</p><p><strong>Automated Telemetry:</strong> IP addresses, browser types, navigation patterns.</p><h2 className="text-2xl font-bold mt-6">How We Use Your Information</h2><p>To generate accurate quotes, schedule welding crews, deliver finished pieces, and send project updates.</p><p>We do not sell your personal data to third parties.</p><h2 className="text-2xl font-bold mt-6">Data Security</h2><p>AES-256 encryption for project files, strict access control, redundant backups.</p><h2 className="text-2xl font-bold mt-6">Your Rights</h2><p>You may inspect, rectify, or request erasure of your data by contacting privacy@sampe.com.</p></div></div>
  </>
);
export default Privacy;
