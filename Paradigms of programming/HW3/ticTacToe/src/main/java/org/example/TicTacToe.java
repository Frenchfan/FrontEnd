package org.example;

import java.util.Scanner;

public class TicTacToe {
    private static char[][] board;
    private static char currentPlayer;
    private static int movesLeft;

    public static void main(String[] args) {
        initializeGame();

        while (true) {
            printBoard();
            makeMove();
            if (checkWin()) {
                printBoard();
                System.out.println("Player " + currentPlayer + " wins!");
                break;
            } else if (movesLeft == 0) {
                printBoard();
                System.out.println("It's a draw!");
                break;
            }
            switchPlayer();
        }
    }

    private static void initializeGame() {
        board = new char[3][3];
        currentPlayer = 'X';
        movesLeft = 9;

        for (int i = 0; i < 3; i++) {
            for (int j = 0; j < 3; j++) {
                board[i][j] = '-';
            }
        }
    }

    private static void printBoard() {
        System.out.println("---------");
        for (int i = 0; i < 3; i++) {
            System.out.print("| ");
            for (int j = 0; j < 3; j++) {
                System.out.print(board[i][j] + " | ");
            }
            System.out.println("\n---------");
        }
    }

    private static void makeMove() {
        Scanner scanner = new Scanner(System.in);
        int row, col;

        while (true) {
            System.out.print("Player " + currentPlayer + ", enter your move (row[1-3] column[1-3]): ");
            row = scanner.nextInt() - 1;
            col = scanner.nextInt() - 1;

            if (row >= 0 && row < 3 && col >= 0 && col < 3 && board[row][col] == '-') {
                break;
            } else {
                System.out.println("Invalid move. Please try again.");
            }
        }

        board[row][col] = currentPlayer;
        movesLeft--;
    }

    private static boolean checkWin() {
        // Check rows
        for (int i = 0; i < 3; i++) {
            if (board[i][0] == currentPlayer && board[i][1] == currentPlayer && board[i][2] == currentPlayer) {
                return true;
            }
        }

        // Check columns
        for (int i = 0; i < 3; i++) {
            if (board[0][i] == currentPlayer && board[1][i] == currentPlayer && board[2][i] == currentPlayer) {
                return true;
            }
        }

        // Check diagonals
        if (board[0][0] == currentPlayer && board[1][1] == currentPlayer && board[2][2] == currentPlayer) {
            return true;
        }
        if (board[0][2] == currentPlayer && board[1][1] == currentPlayer && board[2][0] == currentPlayer) {
            return true;
        }

        return false;
    }

    private static void switchPlayer() {
        currentPlayer = (currentPlayer == 'X') ? 'O' : 'X';
    }
}

