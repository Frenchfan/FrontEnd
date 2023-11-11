// Написать скрипт для расчета корреляции Пирсона между
// двумя случайными величинами (двумя массивами). Можете
// использовать любую парадигму, но рекомендую использовать
// функциональную, т.к. в этом примере она значительно
// упростит вам жизнь.

import java.util.Arrays;

public class Pearson {
    public static void main(String[] args) {
        double[] arr1 = { 1, 2, 3, 4, 5, 45, 2667 };
        double[] arr2 = { 6, 7, 8, 9, 10, 2, 1 };

        double correlation = calculatePearsonCorrelation(arr1, arr2);
        System.out.println("Pearson correlation coefficient: " + correlation);
    }

    private static double calculatePearsonCorrelation(double[] arr1, double[] arr2) {
        double sum1 = Arrays.stream(arr1).sum();
        double sum2 = Arrays.stream(arr2).sum();

        double sum1Sq = Arrays.stream(arr1).map(x -> x * x).sum();
        double sum2Sq = Arrays.stream(arr2).map(x -> x * x).sum();

        double productSum = 0;
        for (int i = 0; i < arr1.length; i++) {
            productSum += arr1[i] * arr2[i];
        }

        int n = arr1.length;

        double numerator = (n * productSum) - (sum1 * sum2);
        double denominator = Math.sqrt((n * sum1Sq - sum1 * sum1) * (n * sum2Sq - sum2 * sum2));

        return numerator / denominator;
    }
}