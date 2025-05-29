import React from "react";

const clientLogos = [
  "/logos/client1.png",
  "/logos/client2.png",
  "/logos/client3.png",
  "/logos/client4.png",
  "/logos/client5.png",
  "/logos/client6.png",
  "/logos/client7.png",
  "/logos/client8.png",
];

const OurClients = () => {
  const seamlessLogos = [...clientLogos, ...clientLogos]; // duplicate for loop

  return (
    <div className="bg-gray-50 py-10">
      {/* Heading */}
      <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">
        Our Clients
      </h2>

      {/* Logo container */}
      <div className="overflow-hidden w-full max-w-6xl mx-auto">
        <div className="scroll-track">
          {seamlessLogos.map((logo, index) => (
            <div className="client-logo" key={index}>
              <div className="logo-card">
                <img
                  src={logo}
                  alt={`Client ${index + 1}`}
                  className="h-12 object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Styles */}
      <style>{`
        .scroll-track {
          display: flex;
          width: fit-content;
          animation: scroll-left 30s linear infinite;
        }

        .client-logo {
          flex: 0 0 16.6667%; /* 6 logos visible */
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 0 16px;
        }

        .logo-card {
          background: white;
          border-radius: 0.5rem;
          box-shadow: 0 4px 8px rgba(0,0,0,0.05);
          padding: 1.5rem;
          width: 100%;
          height: 100px;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  );
};

export default OurClients;
