import React, { useState } from 'react';

const Chess = () => {
  const initialBoard = [
    ['♜', '♞', '♝', '♛', '♚', '♝', '♞', '♜'],
    ['♟', '♟', '♟', '♟', '♟', '♟', '♟', '♟'],
    ['', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', ''],
    ['♙', '♙', '♙', '♙', '♙', '♙', '♙', '♙'],
    ['♖', '♘', '♗', '♕', '♔', '♗', '♘', '♖']
  ];

  const [board, setBoard] = useState(initialBoard);
  const [selectedSquare, setSelectedSquare] = useState(null);
  const [validMoves, setValidMoves] = useState([]);

  const isWhitePiece = (piece) => ['♙', '♖', '♘', '♗', '♕', '♔'].includes(piece);
  const isBlackPiece = (piece) => ['♟', '♜', '♞', '♝', '♛', '♚'].includes(piece);

  const getValidMoves = (row, col, piece) => {
    const moves = [];
    const isWhite = isWhitePiece(piece);

    // Basic move logic (simplified for portfolio demo)
    // Pawn
    if (piece === '♙') {
      if (row > 0 && !board[row - 1][col]) moves.push([row - 1, col]);
      if (row === 6 && !board[row - 2][col] && !board[row - 1][col]) moves.push([row - 2, col]);
      if (row > 0 && col > 0 && isBlackPiece(board[row - 1][col - 1])) moves.push([row - 1, col - 1]);
      if (row > 0 && col < 7 && isBlackPiece(board[row - 1][col + 1])) moves.push([row - 1, col + 1]);
    } else if (piece === '♟') {
      if (row < 7 && !board[row + 1][col]) moves.push([row + 1, col]);
      if (row === 1 && !board[row + 2][col] && !board[row + 1][col]) moves.push([row + 2, col]);
      if (row < 7 && col > 0 && isWhitePiece(board[row + 1][col - 1])) moves.push([row + 1, col - 1]);
      if (row < 7 && col < 7 && isWhitePiece(board[row + 1][col + 1])) moves.push([row + 1, col + 1]);
    }

    // Rook logic (horizontal/vertical)
    if (['♖', '♜'].includes(piece)) {
      const directions = [[0, 1], [0, -1], [1, 0], [-1, 0]];
      directions.forEach(([dr, dc]) => {
        for (let i = 1; i < 8; i++) {
          const newRow = row + dr * i;
          const newCol = col + dc * i;
          if (newRow < 0 || newRow > 7 || newCol < 0 || newCol > 7) break;
          if (!board[newRow][newCol]) {
            moves.push([newRow, newCol]);
          } else {
            if ((isWhite && isBlackPiece(board[newRow][newCol])) || (!isWhite && isWhitePiece(board[newRow][newCol]))) {
              moves.push([newRow, newCol]);
            }
            break;
          }
        }
      });
    }

    // Knight moves
    if (['♘', '♞'].includes(piece)) {
      const knightMoves = [[-2, -1], [-2, 1], [-1, -2], [-1, 2], [1, -2], [1, 2], [2, -1], [2, 1]];
      knightMoves.forEach(([dr, dc]) => {
        const newRow = row + dr;
        const newCol = col + dc;
        if (newRow >= 0 && newRow < 8 && newCol >= 0 && newCol < 8) {
          if (!board[newRow][newCol] || (isWhite && isBlackPiece(board[newRow][newCol])) || (!isWhite && isWhitePiece(board[newRow][newCol]))) {
            moves.push([newRow, newCol]);
          }
        }
      });
    }
    // Note: Other pieces (Bishop, Queen, King) logic omitted for brevity in portfolio verification, but can be added. 
    // Keeping it simple to ensure the visual update is the focus.

    return moves;
  };

  const handleSquareClick = (rowIndex, colIndex) => {
    const piece = board[rowIndex][colIndex];
    if (selectedSquare) {
      const [selectedRow, selectedCol] = selectedSquare;
      const isValidMove = validMoves.some(([r, c]) => r === rowIndex && c === colIndex);
      if (isValidMove) {
        const newBoard = board.map(row => [...row]);
        newBoard[rowIndex][colIndex] = newBoard[selectedRow][selectedCol];
        newBoard[selectedRow][selectedCol] = '';
        setBoard(newBoard);
        setSelectedSquare(null);
        setValidMoves([]);
      } else {
        setSelectedSquare(null);
        setValidMoves([]);
        if (piece) {
          setSelectedSquare([rowIndex, colIndex]);
          setValidMoves(getValidMoves(rowIndex, colIndex, piece));
        }
      }
    } else if (piece) {
      setSelectedSquare([rowIndex, colIndex]);
      setValidMoves(getValidMoves(rowIndex, colIndex, piece));
    }
  };

  const isSelected = (row, col) => selectedSquare && selectedSquare[0] === row && selectedSquare[1] === col;
  const isValidMove = (row, col) => validMoves.some(([r, c]) => r === row && c === col);

  return (
    <section className="relative min-h-screen overflow-visible font-sans p-0 bg-[#0f0f1e]">
      {/* Background Glows (consistent with Projects) */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-[20%] left-[-10%] w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[20%] right-[-10%] w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[100px]"></div>
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 z-[1] bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px] opacity-20"></div>


      <div className="relative z-[5] max-w-[1400px] mx-auto py-20 px-[5%] min-h-screen flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[60px] items-center">

          {/* Chess Board Container */}
          <div className="p-8 rounded-[30px] flex justify-center items-center glass-glow">
            <div className="grid gap-0 w-full max-w-[500px] aspect-square border-4 border-white/20 rounded-xl overflow-hidden shadow-2xl"
              style={{ gridTemplateRows: 'repeat(8, 1fr)' }}>
              {board.map((row, rowIndex) => (
                <div key={rowIndex} className="grid gap-0" style={{ gridTemplateColumns: 'repeat(8, 1fr)' }}>
                  {row.map((piece, colIndex) => (
                    <div
                      key={`${rowIndex}-${colIndex}`}
                      className={`aspect-square flex justify-center items-center transition-all duration-300 cursor-pointer relative
                        ${(rowIndex + colIndex) % 2 === 0 ? 'bg-[#ebecd0]' : 'bg-[#779556]'}
                        ${isSelected(rowIndex, colIndex) ? '!bg-yellow-200/80 shadow-[inset_0_0_20px_rgba(255,200,50,0.5)]' : ''}
                        ${isValidMove(rowIndex, colIndex) ? 'after:content-[""] after:absolute after:w-4 after:h-4 after:rounded-full after:bg-black/20' : ''}
                        hover:opacity-90`}
                      onClick={() => handleSquareClick(rowIndex, colIndex)}
                    >
                      {piece && <span className="text-[2.5rem] lg:text-[2.8rem] select-none drop-shadow-md text-black font-bold">{piece}</span>}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* Text Content */}
          <div className="flex flex-col items-center text-center gap-6 text-white">
            <div className="relative w-[150px] h-[150px] rounded-full flex justify-center items-center mb-4 glass animate-float">
              <div className="absolute w-full h-full bg-purple-500/20 rounded-full blur-xl animate-pulse"></div>
              <div className="relative z-[1] text-[5rem]">🤖</div>
            </div>

            <h3 className="text-[3rem] font-black uppercase tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 drop-shadow-sm">
              Chess AI
            </h3>

            <p className="text-lg text-white/70 max-w-[400px]">
              Challenge the machine. Test your strategic thinking in this interactive demonstration.
            </p>

            <button
              className="py-4 px-12 rounded-full glass hover:bg-white/20 hover:scale-105 border border-white/20 text-white font-bold tracking-widest uppercase text-sm transition-all duration-300 shadow-[0_0_20px_rgba(168,85,247,0.4)]"
              onClick={() => setBoard(initialBoard)}
            >
              Reset Game
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Chess;
