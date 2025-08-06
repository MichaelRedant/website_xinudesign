import { useState } from "react";
import GlassPane from "../components/GlassPane";

const Contact: React.FC = () => {
  const [status, setStatus] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("/contact.php", {
        method: "POST",
        body: data,
      });
      const result = await res.json();
      if (result.success) {
        setStatus("Bedankt voor je bericht! Ik laat snel iets weten.");
        form.reset();
      } else {
        setStatus("Er liep iets mis. Probeer later opnieuw.");
      }
    } catch {
      setStatus("Er liep iets mis. Probeer later opnieuw.");
    }
  };

  return (
    <main className="flex items-center justify-center min-h-screen p-6 bg-gradient-to-br from-white to-blue-100 dark:from-gray-900 dark:to-gray-800">
      <GlassPane className="w-full max-w-lg p-8">
        <h1 className="mb-6 text-3xl font-bold text-center">Contacteer mij</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block mb-1 font-medium">
              Naam
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              className="w-full rounded-md border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label htmlFor="email" className="block mb-1 font-medium">
              E-mail
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="w-full rounded-md border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label htmlFor="message" className="block mb-1 font-medium">
              Bericht
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              className="w-full rounded-md border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="hidden">
            <label htmlFor="website">Website</label>
            <input
              id="website"
              name="website"
              type="text"
              tabIndex={-1}
              autoComplete="off"
            />
          </div>
          <button
            type="submit"
            className="w-full rounded-md bg-blue-600 py-2 px-4 font-medium text-white transition hover:bg-blue-700"
          >
            Verstuur
          </button>
        </form>
        {status && <p className="mt-4 text-center">{status}</p>}
      </GlassPane>
    </main>
  );
};

export default Contact;
