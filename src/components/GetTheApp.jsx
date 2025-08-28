export default function GetTheApp() {
  return (
    <section id="get-the-app-now" className="bg-white px-6 md:px-20 py-16 text-center mt-16">
      <h1 className="text-4xl font-bold text-[#c94f2c] mb-4">Get the App Now</h1>
      <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-8">
        Join thousands who’ve embraced the power of faith in the digital age.
      </p>
      <div className="flex justify-center space-x-6">
        <a href="https://apps.apple.com" target="_blank" rel="noopener noreferrer">
          <img src="/apple-store.jpeg" alt="Download on App Store" className="w-44" />
        </a>
        <a href="https://play.google.com" target="_blank" rel="noopener noreferrer">
          <img src="/google-play.jpeg" alt="Get it on Google Play" className="w-44" />
        </a>
      </div>
    </section>
  );
}
