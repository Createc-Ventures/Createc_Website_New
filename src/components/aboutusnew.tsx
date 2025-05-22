import React, { useEffect, useRef, useState } from 'react'; // Import useState

// Main App component to render the AboutUs section
export default function App() {
  return (
    // Changed min-h-screen to h-screen to strictly define height
    <div className="h-screen bg-createc-platinum flex items-center justify-center p-4 sm:p-6 lg:p-8 font-sans">
      <AboutUs />
    </div>
  );
}

function AboutUs() {
  const canvasRef = useRef(null);
  const loadedImages = useRef(new Map()); // Use a ref to store loaded Image objects
  const [isLoading, setIsLoading] = useState(true); // Add loading state

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) { // Explicit check for 2D rendering context support
      console.error("2D rendering context not supported on this browser.");
      setIsLoading(false); // Stop loading if context is not available
      return;
    }

    let animationFrameId; // Declare animationFrameId here

    // Central Company Logo properties (x, y will be updated by setCanvasSize)
    const logo = {
      x: 0,
      y: 0,
      radius: 80, // Slightly smaller radius for central logo to fit React paths
      textPart1: 'CREA',
      textPart1Color: 'black',
      textPart2: 'TEC',
      textPart2Color: '#ec7c30' // Tailwind orange-500
    };

    // Define the fixed React logo path properties
    const reactPathConfigs = [
      { rotationAngle: 0, speedFactor: 1 }, // First ellipse
      { rotationAngle: Math.PI / 3, speedFactor: -1 }, // Second ellipse (60 degrees, reverse direction)
      { rotationAngle: 2 * Math.PI / 3, speedFactor: 1 }, // Third ellipse (120 degrees)
    ];

    // Orbiting elements properties - now assigned to specific paths
    const elements = [
      
      {
        imageUrl: '/assets/img/ai.svg', // AI icon placeholder
        backgroundCircleColor: '#ec7c30', // Orange background
        imageSize: 50,
        backgroundRadius: 40,
        pathIndex: 0, // Assigned to the first React path
        initialAngle: 0, // Starting angle on its path
        speed: 0.12 // Increased speed
      },
      {
        imageUrl: '/assets/img/ad.svg', // Advertising icon placeholder
        backgroundCircleColor: '#ec7c30', // Orange background
        imageSize: 50,
        backgroundRadius: 40,
        pathIndex: 0, // Assigned to the first React path
        initialAngle: Math.PI, // Starting angle on its path (opposite side)
        speed: 0.12 // Increased speed
      },
      {
        imageUrl: '/assets/img/code.svg', // Code icon placeholder
        backgroundCircleColor: '#ec7c30', // Orange background
        imageSize: 50,
        backgroundRadius: 40,
        pathIndex: 1, // Assigned to the second React path
        initialAngle: Math.PI / 2, // Starting angle
        speed: 0.12 // Increased speed
      },
      {
        imageUrl: '/assets/img/social.svg', // Social Media icon placeholder
        backgroundCircleColor: '#ec7c30', // Orange background
        imageSize: 50,
        backgroundRadius: 40,
        pathIndex: 1, // Assigned to the second React path
        initialAngle: 3 * Math.PI / 2, // Starting angle (opposite side)
        speed: 0.12 // Increased speed
      },
      {
        imageUrl: '/assets/img/vid.svg', // Video icon placeholder
        backgroundCircleColor: '#ec7c30', // Orange background
        imageSize: 50,
        backgroundRadius: 40,
        pathIndex: 2, // Assigned to the third React path
        initialAngle: Math.PI / 4, // Starting angle
        speed: 0.12 // Increased speed
      },
      {
        imageUrl: '/assets/img/web.svg', // Web Development icon placeholder
        backgroundCircleColor: '#ec7c30', // Orange background
        imageSize: 50,
        backgroundRadius: 40,
        pathIndex: 2, // Assigned to the third React path
        initialAngle: 5 * Math.PI / 4, // Starting angle (opposite side)
        speed: 0.12 // Increased speed
      },
      
    ];

    // Function to set canvas size based on its parent container and update logo position
    const setCanvasSize = () => {
      const parent = canvas.parentElement;
      if (parent) { // Added null check for parent
        canvas.width = parent.clientWidth;
        canvas.height = parent.clientHeight;
        // Update logo position to be centered on resize
        logo.x = canvas.width / 2;
        logo.y = canvas.height / 2;
      } else {
        console.warn("Canvas parent element not found during resize setup.");
      }
    };

    // Function to draw the central logo
    const drawLogo = () => {
      // Draw "Crea"
      ctx.font = 'Bold 40px Arial';
      ctx.fillStyle = logo.textPart1Color;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';

      const creaWidth = ctx.measureText(logo.textPart1).width;
      const totalWidth = creaWidth + ctx.measureText(logo.textPart2).width;

      // Position "Crea"
      ctx.fillText(logo.textPart1, logo.x - totalWidth / 2 + creaWidth / 2, logo.y);

      // Draw "tec"
      ctx.fillStyle = logo.textPart2Color;
      ctx.fillText(logo.textPart2, logo.x - totalWidth / 2 + creaWidth + ctx.measureText(logo.textPart2).width / 2, logo.y);
    };

    // Function to draw the React logo paths permanently
    const drawReactLogoPaths = () => {
      const centerX = logo.x;
      const centerY = logo.y;
      const baseRadiusX = logo.radius * 4.0; // Further increased size for paths
      const baseRadiusY = logo.radius * 1.5; // Further increased size for paths

      ctx.strokeStyle = 'black'; // React blue, slightly transparent
      ctx.lineWidth = 2;

      // Draw the three ellipses
      for (let i = 0; i < 3; i++) {
        const rotationAngle = i * Math.PI / 3; // 0, 60, 120 degrees in radians
        ctx.beginPath();
        ctx.ellipse(centerX, centerY, baseRadiusX, baseRadiusY, rotationAngle, 0, Math.PI * 2);
        ctx.stroke();
      }
    };

    // Function to draw an orbiting element
    const drawElement = (element, index) => {
      const centerX = logo.x;
      const centerY = logo.y;
      const baseRadiusX = logo.radius * 4.0; // Use the same increased size for element positioning
      const baseRadiusY = logo.radius * 1.5; // Use the same increased size for element positioning
      const rotationAngle = reactPathConfigs[element.pathIndex].rotationAngle;

      // Calculate position on the rotated ellipse
      const currentAngle = element.initialAngle + element.speed * Date.now() / 100; // Use Date.now() for continuous animation
      const cosAngle = Math.cos(currentAngle);
      const sinAngle = Math.sin(currentAngle);

      // Apply rotation to the elliptical coordinates
      const rotatedX = baseRadiusX * cosAngle * Math.cos(rotationAngle) - baseRadiusY * sinAngle * Math.sin(rotationAngle);
      const rotatedY = baseRadiusX * cosAngle * Math.sin(rotationAngle) + baseRadiusY * sinAngle * Math.cos(rotationAngle);

      const x = centerX + rotatedX;
      const y = centerY + rotatedY;

      // Apply glow effect
      ctx.shadowColor = element.backgroundCircleColor; // Use the background color for the glow
      ctx.shadowBlur = 15; // Adjust blur amount for desired glow intensity

      // Draw circular background
      ctx.beginPath();
      ctx.arc(x, y, element.backgroundRadius, 0, Math.PI * 2);
      ctx.fillStyle = element.backgroundCircleColor;
      ctx.fill();
      ctx.closePath();

      // Reset shadow properties to avoid affecting other elements
      ctx.shadowBlur = 0;
      ctx.shadowColor = 'transparent'; // Or 'rgba(0,0,0,0)'

      // Draw the image if loaded
      const img = loadedImages.current.get(index);
      if (img) {
        // Adjust position to center the image on the background circle
        ctx.drawImage(img, x - element.imageSize / 2, y - element.imageSize / 2, element.imageSize, element.imageSize);
      } else {
        // Draw a placeholder or empty space while loading, or if image failed to load
        ctx.fillStyle = 'rgba(255,255,255,0.5)'; // Light grey placeholder
        ctx.fillRect(x - element.imageSize / 2, y - element.imageSize / 2, element.imageSize, element.imageSize);
      }
    };

    // Main animation loop
    const animate = () => {
      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw React logo paths first (permanent background)
      drawReactLogoPaths();

      // Draw elements
      drawLogo();
      elements.forEach((element, index) => drawElement(element, index)); // Pass index to drawElement

      animationFrameId = requestAnimationFrame(animate);
    };

    // Initial draw and start animation (only starts after images are loaded)
    const drawScene = () => {
      setCanvasSize(); // Ensure canvas size is correct before drawing
      drawReactLogoPaths(); // Draw React logo paths on initial scene load
      drawLogo();
      elements.forEach((element, index) => drawElement(element, index));
    };

    // Handle window resize to keep canvas responsive
    const handleResize = () => {
      setCanvasSize();
      drawScene(); // Redraw scene after resize
    };

    // Load images
    let imagesToLoadCount = elements.length;
    let imagesLoadedCounter = 0;

    if (imagesToLoadCount === 0) { // Handle case with no images to load
      setIsLoading(false);
      drawScene(); // Draw initial scene
      animate();  // Start animation immediately
    } else {
      elements.forEach((element, index) => {
        const img = new Image();
        img.src = element.imageUrl;
        img.onload = () => {
          loadedImages.current.set(index, img);
          imagesLoadedCounter++;
          if (imagesLoadedCounter === imagesToLoadCount) {
            setIsLoading(false); // All images loaded
            drawScene(); // Draw final scene with all images
            animate();  // Start animation
          }
        };
        img.onerror = () => {
          console.error(`Failed to load image: ${element.imageUrl}`);
          imagesLoadedCounter++; // Still count to ensure animation starts even if some fail
          if (imagesLoadedCounter === imagesToLoadCount) {
            setIsLoading(false); // All images (or attempts) processed
            drawScene(); // Draw final scene even if some failed
            animate();  // Start animation
          }
        };
      });
    }

    // Draw initial scene (only logo will appear until images load)
    drawScene();

    // Handle window resize to keep canvas responsive
    window.addEventListener('resize', handleResize);

    // Cleanup function
    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []); // Empty dependency array means this effect runs once on component mount

  return (
    <div className="flex flex-col lg:flex-row bg-createc-platinum rounded-xl overflow-hidden h-full w-full p-6 sm:p-8 lg:p-10"> {/* Added h-full here */}
      {/* Left Section: About Us Text */}
      <div className="lg:w-1/2 p-4 lg:pr-8 flex flex-col justify-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-6 ">
          About Our <span className="text-createc-orange">Company</span>
        </h2>
        <p className="text-gray-700 text-lg mb-4 leading-relaxed">
          Welcome to our innovative world! We are a passionate team dedicated to crafting cutting-edge solutions that empower businesses and individuals alike. Our journey began with a simple idea: to bridge the gap between complex technology and everyday usability.
        </p>
        <p className="text-gray-700 text-lg mb-4 leading-relaxed">
          With years of expertise in software development, design, and strategic consulting, we pride ourselves on delivering high-quality, scalable, and user-centric products. We believe in continuous learning, embracing new challenges, and fostering a collaborative environment that drives creativity and excellence.
        </p>

      </div>

      {/* Right Section: 2D Animation */}
      <div className="lg:w-1/2 flex items-center justify-center p-4 min-h-[400px] lg:min-h-[500px] relative flex-grow">
        <canvas
          ref={canvasRef}
          className="w-full h-full bg-createc-platinum rounded-lg  "
        >
          Your browser does not support the HTML canvas tag.
        </canvas>
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-200 bg-opacity-75 rounded-lg">
            <p className="text-gray-700 text-lg font-semibold animate-pulse">Loading icons...</p>
          </div>
        )}
      </div>
    </div>
  );
}
