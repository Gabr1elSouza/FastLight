import React from 'react';

const Banner: React.FC = () => {
  return (
    <section className="relative bg-cover bg-center bg-no-repeat h-[800px] flex items-center justify-center"
      style={{ backgroundImage: "url('../../public/imagem neutra.jpg')" }}
    >
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40"></div>
      <div className="relative text-white p-4 text-center max-w-md">
        <h2 className="text-4xl font-semibold">Temos energia até 20%* mais barata para você.</h2>
      </div>
    </section>
  );
};

export default Banner;
