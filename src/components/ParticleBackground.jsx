import React, { useEffect, useRef } from 'react';

const ParticleBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let stars = [];
    const starCount = 200; // Lebih ramai biar lebih hidup

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initStars();
    };

    class Star {
      constructor() {
        this.reset();
      }

      reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        // Variasi ukuran: ada debu angkasa (kecil) dan bintang dekat (besar)
        this.size = Math.random() * 1.8; 
        this.baseOpacity = Math.random() * 0.7 + 0.3;
        this.opacity = this.baseOpacity;
        // Kecepatan berbeda buat efek Parallax (bintang besar lebih cepat)
        this.speed = this.size * 0.15 + 0.05; 
        this.blinkSpeed = Math.random() * 0.01 + 0.005;
        // Warna warni tipis khas nebula
        const colors = ['#ffffff', '#7dd3fc', '#a78bfa', '#f0f9ff'];
        this.color = colors[Math.floor(Math.random() * colors.length)];
      }

      update() {
        this.y += this.speed;
        
        // Efek Kerlip
        this.opacity += this.blinkSpeed;
        if (this.opacity > 1 || this.opacity < 0.2) {
          this.blinkSpeed = -this.blinkSpeed;
        }

        // Kalau lewat bawah, balik ke atas
        if (this.y > canvas.height) {
          this.y = -10;
          this.x = Math.random() * canvas.width;
        }
      }

      draw() {
        ctx.save();
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.globalAlpha = this.opacity;
        
        // Efek Cahaya (Glow) buat bintang yang dominan
        if (this.size > 1.2) {
          ctx.shadowBlur = 10;
          ctx.shadowColor = this.color;
        }
        
        ctx.fill();
        ctx.restore();
      }
    }

    const initStars = () => {
      stars = [];
      for (let i = 0; i < starCount; i++) {
        stars.push(new Star());
      }
    };

    const animate = () => {
      // Efek Trail: tidak pakai clearRect bersih, tapi timpa layer hitam transparan
      // Ini bikin ada efek "ekor" tipis di belakang bintang yang gerak
      ctx.fillStyle = 'rgba(1, 2, 6, 0.4)'; 
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      stars.forEach((star) => {
        star.update();
        star.draw();
      });
      requestAnimationFrame(animate);
    };

    resizeCanvas();
    animate();

    window.addEventListener('resize', resizeCanvas);
    return () => window.removeEventListener('resize', resizeCanvas);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-20 w-full h-full pointer-events-none"
    />
  );
};

export default ParticleBackground;