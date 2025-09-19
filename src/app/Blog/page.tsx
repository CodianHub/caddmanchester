import Link from 'next/link';

const Page = () => {
  return (
    <>
      {/* Hero Section */}
      <section
        className="relative w-full h-[70vh] md:h-[calc(100vh-80px)] bg-cover bg-no-repeat bg-center flex items-end justify-center pt-20 pb-[100px]"
        style={{
          backgroundImage: "url('/about/img1.png')",
          height: '650px',
          width: '100%',
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

        {/* Text Content */}
        <div className="relative z-10 text-center text-white px-4 max-w-2xl animate-fade-up">
          <h1 className="text-4xl sm:text-5xl font-extrabold drop-shadow-lg leading-tight">
        About Us
          </h1>
          <p className="text-lg sm:text-xl mt-4 text-gray-200">
        We are crafting something great behind the scenes — launching soon!
          </p>
        </div>
      </section>

      {/* Under Development Section */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-2xl mx-auto text-center animate-fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            🚧 Page Under Development
          </h2>
          <p className="text-lg text-gray-600 mb-3">
            This section is still a work in progress.
          </p>
          <p className="text-sm text-gray-500 mb-6">
            We are working hard to bring you something awesome. Meanwhile, feel free to explore the rest of our site.
          </p>
          <Link
            href="/"
            className="inline-block px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold shadow-lg transition duration-300"
          >
            ⬅ Back to Home
          </Link>
        </div>
      </section>
    </>
  );
};

export default Page;
