import Link from 'next/link';

const Page = () => {
  return (
    <>
      {/* Background Image Section */}
      <section
        className="relative w-full h-screen bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: "url('/about/image2.png')",
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black opacity-40 z-0" />

        {/* Optional overlay text */}
        {/* <div className="relative z-10 text-white text-center px-4">
          <h1 className="text-4xl sm:text-5xl font-bold drop-shadow-md">About Us</h1>
        </div> */}
      </section>

      {/* Under Development Section */}
      <section className="bg-gray-100 py-16 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">🚧 Under Development</h2>
          <p className="text-lg text-gray-600">
            We are currently working on this page. Stay tuned for updates!
          </p>
          <p className="text-sm text-gray-500 mt-4">
            In the meantime, feel free to check out other sections of the site.
          </p>
          <Link
            href="/"
            className="mt-6 inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md font-medium shadow transition duration-300"
          >
            ⬅ Back to Home
          </Link>
        </div>
        <hr />
      </section>
    </>
  );
};

export default Page;
