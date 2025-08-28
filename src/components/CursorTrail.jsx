 import { useEffect } from "react";

function CursorTrail() {
  useEffect(() => {
    const dots = [];
    const dotCount = 15; // number of trailing dots

    // Create multiple dots
    for (let i = 0; i < dotCount; i++) {
      const dot = document.createElement("div");
      dot.style.position = "fixed";
      dot.style.width = "8px";
      dot.style.height = "8px";
      dot.style.backgroundColor = "#a5381c"; // your brand color
      dot.style.borderRadius = "50%";
      dot.style.pointerEvents = "none";
      dot.style.zIndex = "9999";
      dot.style.boxShadow = "0 0 8px rgba(165, 56, 28, 0.8)";
      document.body.appendChild(dot);
      dots.push(dot);
    }

    let mouseX = 0, mouseY = 0;
    const positions = Array(dotCount).fill({ x: 0, y: 0 });

    const handleMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const animate = () => {
      positions.pop();
      positions.unshift({ x: mouseX, y: mouseY });

      dots.forEach((dot, index) => {
        const pos = positions[index];
        dot.style.left = pos.x - 4 + "px";
        dot.style.top = pos.y - 4 + "px";
        dot.style.transform = `scale(${1 - index / dotCount})`;
        dot.style.opacity = `${1 - index / dotCount}`;
      });

      requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", handleMove);
    animate();

    return () => {
      window.removeEventListener("mousemove", handleMove);
      dots.forEach(dot => dot.remove());
    };
  }, []);

  return null;
}

export default CursorTrail;
