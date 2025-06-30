// src/components/AboutUs.jsx
import missionImg from "../assets/mission.webp";
import teamImg from "../assets/team.jpg";
import valueImg from "../assets/values.png";

export default function AboutUs() {
  return (
    <section className="my-16 px-4 bg-cyan-100 p-8 rounded-xl shadow-lg">
      <h2 className="text-3xl font-semibold mb-8 text-black text-center">About Us</h2>
      <div className="grid md:grid-cols-2 gap-14 items-start">
        {/* Left column: Text */}
        <div>
          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-4 text-pink-600">Our Mission</h3>
            <p className="mb-8 font-bold text-lg">
              Our mission is to revolutionize the healthcare industry by leveraging technology to provide efficient, accessible, and comprehensive healthcare services. We strive to enhance patient care through seamless integration of digital solutions.
            </p>
          </div>
          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-4 text-pink-600">Our Team</h3>
           
            <p className="mb-8 font-bold text-lg">
              We are a diverse team of professionals dedicated to improving healthcare outcomes. Our team includes experts in medicine, technology, and patient care.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-4 text-pink-600" style={{marginTop: "8.5rem" }}>Our Values</h3>
            <p className="text-lg font-bold mb-40">
              We believe in compassion, innovation, and integrity to deliver the best healthcare experience.
            </p>
          </div>
        </div>
        {/* Right column: Images */}
        <div className="flex flex-col gap-20 items-center">
          <img
            src={missionImg}
            alt="Healthcare technology"
            className="rounded-xl w-full max-w-lg shadow-lg mb-4"
            style={{ objectFit: "cover", width: "200px" }}
          />
          <img
            src={teamImg}
            alt="Our Team"
            className="rounded-xl w-full max-w-lg shadow-lg mb-8"
            style={{ objectFit: "cover", width: "200px" }}
          />
          <img
            src={valueImg}
            alt="Our Values"
            className="rounded-xl w-full max-w-lg shadow-lg mt-3"
            style={{ objectFit: "cover", width: "200px" }}
          />
        </div>
      </div>
    </section>
  );
}
