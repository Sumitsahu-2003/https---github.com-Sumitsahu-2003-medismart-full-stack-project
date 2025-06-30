import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const messages = [
  "Welcome to Medismart!",
  "Your Health, Our Priority",
  "Book Appointments Effortlessly",
  "Expert Doctors at Your Service"
];

const responsive = {
  all: { breakpoint: { max: 4000, min: 0 }, items: 1 }
};

export default function WelcomeCarousel() {
  return (
    <div className="w-full flex justify-center my-4">
      <div className="w-11/12 max-w-xl">
        <Carousel
          responsive={responsive}
          infinite
          autoPlay
          autoPlaySpeed={3000}
          showDots
          arrows={false}
          className="w-full"
          containerClass="w-full"
          dotListClass="flex justify-center mt-2 w-full"
        >
          {messages.map((msg, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl shadow-lg px-4 py-6 w-full text-2xl md:text-3xl font-bold text-center text-black"
            >
              {msg}
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
}
