// src/components/PredictionCards.jsx
const predictions = [
  "Diabetes Prediction",
  "Heart Disease Prediction",
  "Hypothyroidism Prediction",
  "Coming Soon",
];

export default function PredictionCards() {
  return (
    <section className="max-w-5xl mx-auto my-16 px-4 text-center">
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
        {predictions.map((text) => (
          <div key={text} className="bg-white p-8 rounded-lg shadow cursor-pointer hover:shadow-lg transition">
            <p className="font-semibold text-lg">{text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
