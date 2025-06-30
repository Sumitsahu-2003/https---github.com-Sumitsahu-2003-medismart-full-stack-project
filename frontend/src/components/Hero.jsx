// src/components/Hero.jsx
import doctor from '../assets/Doctors.webp';
import WelcomeCarousel from "../components/WelcomeCarousel";

export default function Hero() {
  return (
    <section className="flex flex-col md:flex-row items-center bg-gradient-to-r from-cyan-100 to-teal-100 py-6 px-4 rounded-lg mt-6 gap-6">
      {/* Doctor Image */}
      <img src={doctor} alt="Doctors" className="w-52 h-60  md:w-80 md:h-96object-cover rounded-lg mx-auto md:mx-0" />
      
      {/* Welcome Text and Carousel */}
      <div className="flex flex-col items-center w-full px-2">
        <h1 className="text-4xl font-bold mb-2 text-center">Medismart Welcomes You!!</h1>
        <p className="text-xl mb-1 text-center">Your Journey To Wellness Start Here!!</p>
        <p className="text-base mb-4 text-center uppercase tracking-wide">LET'S BUILD A HEALTHY TOMORROW TOGETHER</p>
        <div className="w-full flex justify-center">
          <WelcomeCarousel />
        </div>
      </div>
    </section>
  );
}
