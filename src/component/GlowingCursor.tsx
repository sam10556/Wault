import { useState, useEffect } from "react";

const GlowingCursor = () => {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      className="pointer-events-none fixed top-0 left-0 w-[400px] h-[400px] rounded-full bg-blue-500 opacity-20 blur-[200px] transition-transform duration-75"
      style={{
        transform: `translate(${pos.x - 200}px, ${pos.y - 200}px)`,
      }}
    ></div>
  );
};

export default GlowingCursor;
