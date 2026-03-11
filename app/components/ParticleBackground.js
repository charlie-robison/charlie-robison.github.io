"use client";

import { useEffect, useRef } from "react";

export default function ParticleBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let animationId;
    let particles = [];
    let mouse = { x: null, y: null };

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const handleMouse = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };
    window.addEventListener("mousemove", handleMouse);

    const PARTICLE_COUNT = 80;
    const CONNECTION_DIST = 150;
    const MOUSE_DIST = 200;

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * 0.4;
        this.vy = (Math.random() - 0.5) * 0.4;
        this.radius = Math.random() * 2 + 0.5;
        this.baseAlpha = Math.random() * 0.5 + 0.1;
        this.alpha = this.baseAlpha;
        // Random hue between cyan and purple
        this.hue = Math.random() > 0.5 ? 180 + Math.random() * 40 : 260 + Math.random() * 40;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
        if (this.y < 0 || this.y > canvas.height) this.vy *= -1;

        // Mouse interaction
        if (mouse.x !== null) {
          const dx = mouse.x - this.x;
          const dy = mouse.y - this.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < MOUSE_DIST) {
            const force = (MOUSE_DIST - dist) / MOUSE_DIST;
            this.alpha = this.baseAlpha + force * 0.6;
            this.vx += (dx / dist) * force * 0.02;
            this.vy += (dy / dist) * force * 0.02;
          } else {
            this.alpha += (this.baseAlpha - this.alpha) * 0.05;
          }
        }

        // Dampen velocity
        this.vx *= 0.999;
        this.vy *= 0.999;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${this.hue}, 80%, 70%, ${this.alpha})`;
        ctx.fill();
      }
    }

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      particles.push(new Particle());
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();

        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < CONNECTION_DIST) {
            const alpha = (1 - dist / CONNECTION_DIST) * 0.15;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(139, 92, 246, ${alpha})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      animationId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouse);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        zIndex: 0,
      }}
    />
  );
}
