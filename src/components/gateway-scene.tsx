import { useEffect, useRef } from "react";

export function GatewayScene() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = 0;
    let height = 0;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener("resize", resize);

    type P = {
      x: number; y: number; vx: number; dir: 1 | -1;
      radius: number; allowed: boolean; passed: boolean;
      alpha: number; color: string;
    };

    const particles: P[] = [];
    const count = Math.floor(Math.min(180, Math.max(70, width / 8)));

    const spawn = (): P => {
      const dir: 1 | -1 = Math.random() > 0.5 ? 1 : -1;
      const allowed = Math.random() > 0.18;
      return {
        x: dir === 1 ? -10 : width + 10,
        y: height * (0.15 + Math.random() * 0.7),
        vx: (0.6 + Math.random() * 1.6) * dir,
        dir,
        radius: 0.6 + Math.random() * 1.6,
        allowed,
        passed: false,
        alpha: 0.4 + Math.random() * 0.6,
        color: allowed ? "#2ED9A8" : "#8C9490",
      };
    };

    for (let i = 0; i < count; i++) {
      const p = spawn();
      p.x = Math.random() * width;
      particles.push(p);
    }

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let raf = 0;

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      const gx = width / 2;
      const gateHeight = height * 0.55;
      const gateY = (height - gateHeight) / 2;
      const grad = ctx.createLinearGradient(gx, gateY, gx, gateY + gateHeight);
      grad.addColorStop(0, "rgba(46,217,168,0)");
      grad.addColorStop(0.5, "rgba(46,217,168,0.7)");
      grad.addColorStop(1, "rgba(46,217,168,0)");
      ctx.strokeStyle = grad;
      ctx.lineWidth = 1.2;
      ctx.beginPath();
      ctx.moveTo(gx, gateY);
      ctx.lineTo(gx, gateY + gateHeight);
      ctx.stroke();

      ctx.shadowBlur = 12;
      ctx.shadowColor = "#2ED9A8";
      ctx.strokeStyle = "rgba(46,217,168,0.35)";
      ctx.beginPath();
      ctx.moveTo(gx, gateY);
      ctx.lineTo(gx, gateY + gateHeight);
      ctx.stroke();
      ctx.shadowBlur = 0;

      for (const p of particles) {
        const distToGate = (gx - p.x) * p.dir;
        if (!p.passed && distToGate <= 0) {
          if (p.allowed) {
            p.passed = true;
          } else {
            p.vx = -p.vx * 0.6;
            p.dir = (p.dir * -1) as 1 | -1;
            p.color = "#5a615d";
            p.alpha *= 0.85;
          }
        }

        p.x += p.vx;

        ctx.strokeStyle = `${p.color}${Math.floor(p.alpha * 80).toString(16).padStart(2, "0")}`;
        ctx.lineWidth = p.radius;
        ctx.beginPath();
        ctx.moveTo(p.x - p.vx * 6, p.y);
        ctx.lineTo(p.x, p.y);
        ctx.stroke();

        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.alpha;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();
        ctx.globalAlpha = 1;

        if (p.x < -30 || p.x > width + 30) {
          Object.assign(p, spawn());
        }
      }

      if (!reduced) raf = requestAnimationFrame(draw);
    };

    raf = requestAnimationFrame(draw);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 h-full w-full"
      aria-hidden="true"
    />
  );
}