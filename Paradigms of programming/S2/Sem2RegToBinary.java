import java.util.Scanner;

public class Sem2RegToBinary {
// На вход подается число в десятичной системе счисления
// ● Задача
// Написать скрипт в любой парадигме, который возвращает полученное число переведенное в двоичную
// систему счисления. Обоснуйте сделанный выбор парадигм.
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter number in decimal system:");
        int number = sc.nextInt();
        System.out.println(Integer.toBinaryString(number));
        sc.close();        
    }
}
