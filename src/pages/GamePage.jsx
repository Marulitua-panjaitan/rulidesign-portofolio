import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion } from 'framer-motion';
import { Terminal, Trophy, RefreshCcw } from 'lucide-react';

const HeaderGame = () => {
  const canvasRef = useRef(null);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [gameStarted, setGameStarted] = useState(false);

  const GRID_SIZE = 20;
  const INITIAL_SNAKE = [{ x: 10, y: 10 }];
  const INITIAL_FOOD = { x: 15, y: 10 };

  const [snake, setSnake] = useState(INITIAL_SNAKE);
  const [food, setFood] = useState(INITIAL_FOOD);
  const [dir, setDir] = useState({ x: 0, y: -1 });

  const moveSnake = useCallback(() => {
    if (gameOver || !gameStarted) return;

    const newSnake = [...snake];
    const head = { x: newSnake[0].x + dir.x, y: newSnake[0].y + dir.y };

    // Wall Collision
    if (head.x < 0 || head.x >= GRID_SIZE || head.y < 0 || head.y >= GRID_SIZE) {
      return setGameOver(true);
    }

    // Self Collision
    if (newSnake.some(seg => seg.x === head.x && seg.y === head.y)) {
      return setGameOver(true);
    }

    newSnake.unshift(head);

    if (head.x === food.x && head.y === food.y) {
      setScore(s => s + 10);
      setFood({
        x: Math.floor(Math.random() * GRID_SIZE),
        y: Math.floor(Math.random() * GRID_SIZE)
      });
    } else {
      newSnake.pop();
    }

    setSnake(newSnake);
  }, [snake, dir, food, gameOver, gameStarted]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!gameStarted) setGameStarted(true);
      switch (e.key) {
        case 'ArrowUp': if (dir.y === 0) setDir({ x: 0, y: -1 }); break;
        case 'ArrowDown': if (dir.y === 0) setDir({ x: 0, y: 1 }); break;
        case 'ArrowLeft': if (dir.x === 0) setDir({ x: -1, y: 0 }); break;
        case 'ArrowRight': if (dir.x === 0) setDir({ x: 1, y: 0 }); break;
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    const gameInterval = setInterval(moveSnake, 150);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      clearInterval(gameInterval);
    };
  }, [moveSnake, dir, gameStarted]);

  useEffect(() => {
    const ctx = canvasRef.current.getContext('2d');
    ctx.clearRect(0, 0, 400, 400);
    
    // Draw Food
    ctx.fillStyle = '#ef4444';
    ctx.fillRect(food.x * 20, food.y * 20, 18, 18);

    // Draw Snake
    ctx.fillStyle = '#22c55e';
    snake.forEach(seg => ctx.fillRect(seg.x * 20, seg.y * 20, 18, 18));
  }, [snake, food]);

  const resetGame = () => {
    if (score > highScore) setHighScore(score);
    setSnake(INITIAL_SNAKE);
    setFood(INITIAL_FOOD);
    setScore(0);
    setGameOver(false);
    setDir({ x: 0, y: -1 });
  };

  return (
    <div className="flex flex-col items-center bg-black/40 backdrop-blur-md p-6 rounded-3xl border border-white/10 shadow-2xl">
      <div className="w-full flex justify-between items-center mb-4 px-2 font-mono text-[10px]">
        <div className="flex items-center gap-2 text-green-500">
          <Terminal size={14} /> SCORE: {score}
        </div>
        <div className="flex items-center gap-2 text-yellow-500">
          <Trophy size={14} /> HIGH: {highScore}
        </div>
      </div>

      <div className="relative">
        <canvas 
          ref={canvasRef} 
          width={400} 
          height={400} 
          className="bg-green-500/5 border border-green-500/20 rounded-xl"
        />
        
        {!gameStarted && !gameOver && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/60 rounded-xl">
            <p className="text-green-500 font-mono text-xs animate-pulse">PRESS ANY ARROW KEY TO START</p>
          </div>
        )}

        {gameOver && (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/80 rounded-xl text-center p-4">
            <h3 className="text-red-500 font-bold mb-2">SYSTEM CRASHED</h3>
            <p className="text-gray-400 text-[10px] mb-4 uppercase tracking-widest">Snake collision detected</p>
            <button 
              onClick={resetGame}
              className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg text-xs font-bold hover:bg-green-500 transition-colors"
            >
              <RefreshCcw size={14} /> REBOOT_GAME
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default HeaderGame;