export default function CommunityUpdates() {
  const updates = [
    { id: 1, title: "Eid Prayer Gathering", date: "2025-06-06", details: "Join us at the central mosque for Eid Salah at 8 AM." },
    { id: 2, title: "Charity Drive", date: "2025-08-30", details: "Collecting donations for flood victims." },
    { id: 3, title: "Qur’an Recitation Contest", date: "2025-09-15", details: "Open for all ages, register online." },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50 p-8">
      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-2xl p-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">🕌 Community Updates</h1>
        
        <ul className="space-y-4">
          {updates.map(update => (
            <li key={update.id} className="border rounded-xl p-4 hover:shadow-md transition">
              <h2 className="text-xl font-semibold">{update.title}</h2>
              <p className="text-gray-500 text-sm">{update.date}</p>
              <p className="mt-2 text-gray-700">{update.details}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
