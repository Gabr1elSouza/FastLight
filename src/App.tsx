import React from "react";
import Benefits from "./Componets/beneficios";
import Contact from "./Componets/contact";
import Footer from "./Componets/footer";
import Header from "./Componets/header";
import Hero from "./Componets/Hero";
import Steps from "./Componets/stepsSection";

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Benefits />
        <Steps />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
