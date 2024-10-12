import React, { useEffect, useRef, useState } from "react";
import { TweenLite, Circ } from "gsap";

const LargeHeader = () => {
  const canvasRef = useRef(null);
  const largeHeaderRef = useRef(null);
  const [points, setPoints] = useState([]);
  const [target, setTarget] = useState({
    x: window.innerWidth / 2,
    y: window.innerHeight / 2,
  });
  const [animateHeader, setAnimateHeader] = useState(true);

  useEffect(() => {
    const width = window.innerWidth;
    const height = window.innerHeight;
    const ctx = canvasRef.current.getContext("2d");

    largeHeaderRef.current.style.height = `${height}px`;
    canvasRef.current.width = width;
    canvasRef.current.height = height;

    const newPoints = [];
    for (let x = 0; x < width; x += width / 20) {
      for (let y = 0; y < height; y += height / 20) {
        const px = x + (Math.random() * width) / 20;
        const py = y + (Math.random() * height) / 20;
        newPoints.push({
          x: px,
          originX: px,
          y: py,
          originY: py,
          closest: [],
          circle: null,
        });
      }
    }

    // Find the 5 closest points
    for (let i = 0; i < newPoints.length; i++) {
      const closest = [];
      const p1 = newPoints[i];
      for (let j = 0; j < newPoints.length; j++) {
        const p2 = newPoints[j];
        if (p1 !== p2) {
          let placed = false;
          for (let k = 0; k < 5; k++) {
            if (!placed) {
              if (!closest[k]) {
                closest[k] = p2;
                placed = true;
              }
            }
          }

          for (let k = 0; k < 5; k++) {
            if (!placed) {
              if (getDistance(p1, p2) < getDistance(p1, closest[k])) {
                closest[k] = p2;
                placed = true;
              }
            }
          }
        }
      }
      p1.closest = closest;
    }

    // Assign a circle to each point
    for (const p of newPoints) {
      p.circle = new Circle(
        p,
        2 + Math.random() * 2,
        "rgba(255,255,255,0.3)",
        ctx
      );
    }

    setPoints(newPoints);

    const mouseMove = (e) => {
      setTarget({
        x:
          e.pageX ||
          e.clientX +
            document.body.scrollLeft +
            document.documentElement.scrollLeft,
        y:
          e.pageY ||
          e.clientY +
            document.body.scrollTop +
            document.documentElement.scrollTop,
      });
    };

    const scrollCheck = () => {
      setAnimateHeader(document.body.scrollTop <= height);
    };

    const resize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      largeHeaderRef.current.style.height = `${height}px`;
      canvasRef.current.width = width;
      canvasRef.current.height = height;
    };

    window.addEventListener("mousemove", mouseMove);
    window.addEventListener("scroll", scrollCheck);
    window.addEventListener("resize", resize);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
      window.removeEventListener("scroll", scrollCheck);
      window.removeEventListener("resize", resize);
    };
  }, []);

  useEffect(() => {
    const animate = () => {
      if (animateHeader) {
        const ctx = canvasRef.current.getContext("2d");
        const width = window.innerWidth;
        const height = window.innerHeight;
        ctx.clearRect(0, 0, width, height);
        for (const p of points) {
          const distance = Math.abs(getDistance(target, p));
          if (distance < 4000) {
            p.active = 0.3;
            p.circle.active = 0.6;
          } else if (distance < 20000) {
            p.active = 0.1;
            p.circle.active = 0.3;
          } else if (distance < 40000) {
            p.active = 0.02;
            p.circle.active = 0.1;
          } else {
            p.active = 0;
            p.circle.active = 0;
          }

          drawLines(p, ctx);
          p.circle.draw();
        }
      }
      requestAnimationFrame(animate);
    };

    const shiftPoint = (p) => {
      TweenLite.to(p, 1 + 1 * Math.random(), {
        x: p.originX - 50 + Math.random() * 100,
        y: p.originY - 50 + Math.random() * 100,
        ease: Circ.easeInOut,
        onComplete: () => {
          shiftPoint(p);
        },
      });
    };

    for (const p of points) {
      shiftPoint(p);
    }

    animate();
  }, [points, target, animateHeader]);

  const getDistance = (p1, p2) => {
    return Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2);
  };

  const drawLines = (p, ctx) => {
    if (!p.active) return;
    for (const closestPoint of p.closest) {
      ctx.beginPath();
      ctx.moveTo(p.x, p.y);
      ctx.lineTo(closestPoint.x, closestPoint.y);
      ctx.strokeStyle = `rgba(156,217,249,${p.active})`;
      ctx.stroke();
    }
  };

  class Circle {
    constructor(pos, radius, color, ctx) {
      this.pos = pos;
      this.radius = radius;
      this.color = color;
      this.ctx = ctx;
      this.active = 0;
    }

    draw() {
      if (!this.active) return;
      this.ctx.beginPath();
      this.ctx.arc(this.pos.x, this.pos.y, this.radius, 0, 2 * Math.PI, false);
      this.ctx.fillStyle = `rgba(156,217,249,${this.active})`;
      this.ctx.fill();
    }
  }

  return (
    <div
      ref={largeHeaderRef}
      className="relative w-full bg-gray-800 overflow-hidden bg-cover bg-center z-10"
    >
      <canvas
        ref={canvasRef}
        width="1366"
        height="340"
        className="block"
      ></canvas>
      <h1 className="main-title text-white text-center text-5xl font-bold">
        Connect <span className="font-thin">Three</span>
      </h1>
    </div>
  );
};

export default LargeHeader;
