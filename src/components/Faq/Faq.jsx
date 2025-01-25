import React, { useState } from "react";

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqData = [
    {
      question: "What exactly is deep cleaning services in Bangalore?",
      answer:
        "Deep cleaning offerings in Bangalore talk to a complete and thorough cleaning technique especially tailor-made for houses inside the Bangalore vicinity. At Specific Home Services, our deep cleaning offerings in Bangalore make certain that each corner and cranny are meticulously cleaned and cleaned for a healthier dwelling environment.",
    },
    {
      question:
        "What types of cleaning services does Specific Home services offer Bangalore?",
      answer:
        "A wide range of cleaning services are available from Specific Home Services, all of which are customized to your needs. Our services, which are intended to keep your space fresh and clean, include deep cleaning, office cleaning, carpet cleaning, and more. We also offer packers and movers and pest control of India in Bangalore.",
    },
    {
      question:
        "How can I trust Specific Home Services' team with my home during deep cleaning services in Bangalore?",
      answer:
        "You can consider Specific Home Services' crew implicitly. Our professionals are thoroughly vetted, tremendously skilled, and dedicated to upholding the best requirements of professionalism, integrity, and respect for your house at some point of deep cleaning services in Bangalore.",
    },
    {
      question:
        "What cleaning products does Specific Home Services use for deep cleaning in Bangalore?",
      answer:
        "At Specific Home Services, we use brilliant, eco-friendly cleaning products especially formulated for deep cleansing functions. These merchandise is safe to your circle of relatives and pets while efficiently disposing of dirt and dust from your own home.",
    },
    {
      question: "Do you offer same-day cleaning services in Bangalore?",
      answer:
        "Yes, we do offer same-day cleaning services in Bangalore, subject to availability. We recommend booking in advance to secure your preferred time slot, especially during peak times.",
    },
    {
      question: "Can I customize my cleaning service package?",
      answer:
        "Absolutely! We understand that every client has unique cleaning needs. You can customize your cleaning service package by selecting the specific services you require. Our team will work with you to create a tailored solution that meets your needs and budget.",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto p-6 py-8">
      <h2 className="text-3xl text-slate-800 font-bold text-center mb-6">
        Frequently Asked Questions
      </h2>
      <div className="space-y-4">
        {faqData.map((faq, index) => (
          <div
            key={index}
            className="bg-blue-100 text-slate-800 rounded-lg shadow-md"
          >
            <div
              className="p-4 cursor-pointer flex justify-between items-center"
              onClick={() => toggleAccordion(index)}
            >
              <h3 className="text-lg font-semibold">{faq.question}</h3>
              <span className="text-2xl">
                {openIndex === index ? "-" : "+"}
              </span>
            </div>
            <div
              className={`overflow-hidden transition-all duration-500 ease-in-out max-h-0 ${
                openIndex === index ? "max-h-96" : ""
              }`}
            >
              {openIndex === index && (
                <div className="p-4 border-t border-gray-700 text-slate-700">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
