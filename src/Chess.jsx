import React, { useMemo, useState } from "react";

const createInitialBoard = () => [
  ["♜", "♞", "♝", "♛", "♚", "♝", "♞", "♜"],
  ["♟", "♟", "♟", "♟", "♟", "♟", "♟", "♟"],
  ["", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", ""],
  ["♙", "♙", "♙", "♙", "♙", "♙", "♙", "♙"],
  ["♖", "♘", "♗", "♕", "♔", "♗", "♘", "♖"],
];

const whitePieces = ["♙", "♖", "♘", "♗", "♕", "♔"];
const blackPieces = ["♟", "♜", "♞", "♝", "♛", "♚"];
const files = ["A", "B", "C", "D", "E", "F", "G", "H"];

const isWhitePiece = (piece) => whitePieces.includes(piece);
const isBlackPiece = (piece) => blackPieces.includes(piece);
const isOpponent = (piece, turn) =>
  piece && ((turn === "white" && isBlackPiece(piece)) || (turn === "black" && isWhitePiece(piece)));

const scanLineMoves = (board, row, col, directions, turn) => {
  const moves = [];

  directions.forEach(([dr, dc]) => {
    for (let step = 1; step < 8; step += 1) {
      const newRow = row + dr * step;
      const newCol = col + dc * step;

      if (newRow < 0 || newRow > 7 || newCol < 0 || newCol > 7) break;

      const target = board[newRow][newCol];
      if (!target) {
        moves.push([newRow, newCol]);
        continue;
      }

      if (isOpponent(target, turn)) {
        moves.push([newRow, newCol]);
      }
      break;
    }
  });

  return moves;
};

const getValidMoves = (board, row, col, piece, turn) => {
  const moves = [];

  if (!piece) return moves;

  if ((turn === "white" && !isWhitePiece(piece)) || (turn === "black" && !isBlackPiece(piece))) {
    return moves;
  }

  if (piece === "♙") {
    if (row > 0 && !board[row - 1][col]) moves.push([row - 1, col]);
    if (row === 6 && !board[row - 1][col] && !board[row - 2][col]) moves.push([row - 2, col]);
    if (row > 0 && col > 0 && isBlackPiece(board[row - 1][col - 1])) moves.push([row - 1, col - 1]);
    if (row > 0 && col < 7 && isBlackPiece(board[row - 1][col + 1])) moves.push([row - 1, col + 1]);
  }

  if (piece === "♟") {
    if (row < 7 && !board[row + 1][col]) moves.push([row + 1, col]);
    if (row === 1 && !board[row + 1][col] && !board[row + 2][col]) moves.push([row + 2, col]);
    if (row < 7 && col > 0 && isWhitePiece(board[row + 1][col - 1])) moves.push([row + 1, col - 1]);
    if (row < 7 && col < 7 && isWhitePiece(board[row + 1][col + 1])) moves.push([row + 1, col + 1]);
  }

  if (["♖", "♜"].includes(piece)) {
    moves.push(...scanLineMoves(board, row, col, [[0, 1], [0, -1], [1, 0], [-1, 0]], turn));
  }

  if (["♗", "♝"].includes(piece)) {
    moves.push(...scanLineMoves(board, row, col, [[1, 1], [1, -1], [-1, 1], [-1, -1]], turn));
  }

  if (["♕", "♛"].includes(piece)) {
    moves.push(
      ...scanLineMoves(
        board,
        row,
        col,
        [[0, 1], [0, -1], [1, 0], [-1, 0], [1, 1], [1, -1], [-1, 1], [-1, -1]],
        turn,
      ),
    );
  }

  if (["♘", "♞"].includes(piece)) {
    [[-2, -1], [-2, 1], [-1, -2], [-1, 2], [1, -2], [1, 2], [2, -1], [2, 1]].forEach(([dr, dc]) => {
      const newRow = row + dr;
      const newCol = col + dc;
      if (newRow < 0 || newRow > 7 || newCol < 0 || newCol > 7) return;
      const target = board[newRow][newCol];
      if (!target || isOpponent(target, turn)) moves.push([newRow, newCol]);
    });
  }

  if (["♔", "♚"].includes(piece)) {
    [[-1, -1], [-1, 0], [-1, 1], [0, -1], [0, 1], [1, -1], [1, 0], [1, 1]].forEach(([dr, dc]) => {
      const newRow = row + dr;
      const newCol = col + dc;
      if (newRow < 0 || newRow > 7 || newCol < 0 || newCol > 7) return;
      const target = board[newRow][newCol];
      if (!target || isOpponent(target, turn)) moves.push([newRow, newCol]);
    });
  }

  return moves;
};

const formatSquare = (row, col) => `${files[col]}${8 - row}`;

export default function Chess() {
  const [board, setBoard] = useState(createInitialBoard);
  const [selectedSquare, setSelectedSquare] = useState(null);
  const [validMoves, setValidMoves] = useState([]);
  const [turn, setTurn] = useState("white");
  const [moveCount, setMoveCount] = useState(0);
  const [hoveredSquare, setHoveredSquare] = useState(null);

  const boardGlow = useMemo(
    () =>
      turn === "white"
        ? "shadow-[0_0_30px_rgba(255,215,198,0.32)]"
        : "shadow-[0_0_30px_rgba(164,197,255,0.28)]",
    [turn],
  );

  const resetGame = () => {
    setBoard(createInitialBoard());
    setSelectedSquare(null);
    setValidMoves([]);
    setTurn("white");
    setMoveCount(0);
    setHoveredSquare(null);
  };

  const handleSquareClick = (rowIndex, colIndex) => {
    const piece = board[rowIndex][colIndex];

    if (selectedSquare) {
      const [selectedRow, selectedCol] = selectedSquare;
      const chosenMove = validMoves.some(([r, c]) => r === rowIndex && c === colIndex);

      if (chosenMove) {
        const newBoard = board.map((row) => [...row]);

        newBoard[rowIndex][colIndex] = newBoard[selectedRow][selectedCol];
        newBoard[selectedRow][selectedCol] = "";

        setBoard(newBoard);
        setSelectedSquare(null);
        setValidMoves([]);
        setMoveCount((current) => current + 1);
        setTurn((current) => (current === "white" ? "black" : "white"));
        return;
      }
    }

    if (!piece) {
      setSelectedSquare(null);
      setValidMoves([]);
      return;
    }

    if ((turn === "white" && isBlackPiece(piece)) || (turn === "black" && isWhitePiece(piece))) {
      return;
    }

    setSelectedSquare([rowIndex, colIndex]);
    setValidMoves(getValidMoves(board, rowIndex, colIndex, piece, turn));
  };

  const isSelected = (row, col) => selectedSquare && selectedSquare[0] === row && selectedSquare[1] === col;
  const isValidMove = (row, col) => validMoves.some(([r, c]) => r === row && c === col);

  return (
    <section id="chess" className="relative overflow-hidden px-4 py-24 sm:px-6 md:px-[5%]">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,#f4b6a0_0%,#e89a8c_36%,#c9b7b5_62%,#bfa6a0_82%,#a88c86_100%)]" />
        <div className="absolute inset-0 bg-[url('/herosectiondesktop.jpg')] bg-cover bg-center opacity-[0.16] blur-[3px] scale-105" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,244,237,0.42),transparent_32%),radial-gradient(circle_at_bottom,rgba(127,89,98,0.14),transparent_30%)]" />
        <div className="absolute inset-0 bg-white/10 backdrop-blur-[12px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.045)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:44px_44px] opacity-15" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className={`rounded-[34px] border border-white/16 bg-white/10 p-5 backdrop-blur-[22px] ${boardGlow}`}>
            <div className="mb-5 flex flex-wrap items-center justify-between gap-3 rounded-[24px] border border-white/14 bg-white/10 px-5 py-4">
              <div>
                <p className="font-tech text-[10px] uppercase tracking-[0.35em] text-white/50">Current Turn</p>
                <p className="mt-1 text-lg font-bold uppercase tracking-[0.18em] text-white drop-shadow-[0_8px_24px_rgba(255,255,255,0.2)]">
                  {turn === "white" ? "White To Move" : "Black To Move"}
                </p>
              </div>
              <div className="flex gap-3">
                <div className="rounded-2xl border border-white/12 bg-white/12 px-4 py-3 text-center">
                  <p className="text-[10px] uppercase tracking-[0.3em] text-white/50">Moves</p>
                  <p className="mt-1 text-lg font-bold text-white">{moveCount}</p>
                </div>
                <div className="rounded-2xl border border-white/12 bg-white/12 px-4 py-3 text-center">
                  <p className="text-[10px] uppercase tracking-[0.3em] text-white/50">Hover</p>
                  <p className="mt-1 text-lg font-bold text-white">
                    {hoveredSquare ? formatSquare(hoveredSquare[0], hoveredSquare[1]) : "--"}
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-[28px] border border-white/18 bg-black/20 p-3 sm:p-4">
              <div
                className="grid aspect-square w-full overflow-hidden rounded-[22px] border border-white/15"
                style={{ gridTemplateRows: "repeat(8, 1fr)" }}
              >
                {board.map((row, rowIndex) => (
                  <div key={rowIndex} className="grid" style={{ gridTemplateColumns: "repeat(8, 1fr)" }}>
                    {row.map((piece, colIndex) => (
                      <button
                        key={`${rowIndex}-${colIndex}`}
                        type="button"
                        className={`group relative flex aspect-square items-center justify-center transition duration-300
                          ${(rowIndex + colIndex) % 2 === 0 ? "bg-[#f4e5dc]" : "bg-[#b98e86]"}
                          ${isSelected(rowIndex, colIndex) ? "ring-2 ring-inset ring-[#fff3d0]" : ""}
                          hover:brightness-105`}
                        onClick={() => handleSquareClick(rowIndex, colIndex)}
                        onMouseEnter={() => setHoveredSquare([rowIndex, colIndex])}
                        onMouseLeave={() => setHoveredSquare(null)}
                      >
                        <span className="absolute left-1.5 top-1 text-[9px] font-bold text-black/30">
                          {colIndex === 0 ? 8 - rowIndex : ""}
                        </span>
                        <span className="absolute bottom-1.5 right-1.5 text-[9px] font-bold text-black/30">
                          {rowIndex === 7 ? files[colIndex] : ""}
                        </span>

                        {isValidMove(rowIndex, colIndex) && (
                          <span className="absolute h-4 w-4 rounded-full bg-black/18 shadow-[0_0_14px_rgba(255,255,255,0.45)]" />
                        )}

                        {piece && (
                          <span className="relative z-10 text-[1.85rem] drop-shadow-[0_6px_14px_rgba(0,0,0,0.28)] transition-transform duration-200 group-hover:scale-110 sm:text-[2.35rem] md:text-[2.6rem]">
                            {piece}
                          </span>
                        )}
                      </button>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="rounded-[34px] border border-white/16 bg-white/10 p-7 text-center backdrop-blur-[22px]">
            <div className="relative mx-auto flex h-[120px] w-[120px] items-center justify-center rounded-full bg-white/14 shadow-[0_0_45px_rgba(255,255,255,0.18)]">
              <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.32),transparent_65%)]" />
              <span className="relative text-[4rem]">♞</span>
            </div>

            <p className="mt-8 font-tech text-[11px] uppercase tracking-[0.35em] text-white/58">Golden Hour Mode</p>
            <h3 className="mt-4 text-[2.4rem] font-black uppercase tracking-[-0.05em] text-white md:text-[3rem]">
              Play Chess With Virtual Krish
            </h3>
            <p className="mx-auto mt-5 max-w-[34ch] text-sm leading-8 text-white/80 md:text-base">
              A softer, cinematic chess section designed to follow the portfolio mood while still letting you interact with the board and play through moves.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-3">
              {["Sunset Blend", "Glass Board", "Smooth Hover", "Playable Demo"].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/16 bg-white/12 px-4 py-2 text-[11px] uppercase tracking-[0.22em] text-white/80"
                >
                  {item}
                </span>
              ))}
            </div>

            <button
              className="mt-9 inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/14 px-7 py-3 font-tech text-xs uppercase tracking-[0.28em] text-white transition hover:bg-white/20"
              onClick={resetGame}
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/18">↺</span>
              Reset Game
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
