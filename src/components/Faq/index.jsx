const FaqComponents = () => {
  return (
    <div className="my-12">
      <div className="bg-gradient-to-t from-biru to-hijau">
        <div className="md:container px-3 py-12">
          <div className="flex flex-wrap justify-between">
            <div>
              <span className="grid mb-4 text-white font-semibold text-2xl md:text-4xl">
                Konsultasi Medis Sekarang
              </span>
              <span className="text-white font-semibold text-xl">
                Konsultasi medis bersama dokter insan Agung Nugroho.
              </span>
            </div>
            <div className="flex justify-center items-center">
              <div>
                <button className="bg-white py-3 px-5 rounded-lg m-3 font-semibold">
                  Konsultasi
                </button>
                <button className="bg-white py-3 px-5 rounded-lg m-3 font-semibold">
                  Faq
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaqComponents;
