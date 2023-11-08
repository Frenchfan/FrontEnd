package org.example;

import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.println("Введите число:");
        int number = scanner.nextInt();
        multiplyTable(number);
        scanner.close();
    }

    /**
     * Generates a multiplication table for a given number.
     *
     * @param  number  the number for which to generate the table
     */
    private static void multiplyTable(int number) {
        for (int i = 1; i < 10; i++) {
            System.out.println(number + " * " + i + " = " + number * i);
        }
    }
}