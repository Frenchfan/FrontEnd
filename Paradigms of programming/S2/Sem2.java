public class Sem2 {
    public static void main(String[] args) {
// След матрицы - это сумма чисел на её главной диагонали. След определён только для квадратных матриц
// (количество столбцов = количеству строк).
// ● Задача
// Реализовать чисто структурную реализацию вычисления следа для любой матрицы NxN.
        int [][] myMatrix = new int[][]{{1, 2, 3}, {4, 5, 6}, {7, 8, 9}};
        boolean isSquare = true;
        for (int i = 0; i < myMatrix.length; i++) {
            if (myMatrix[i].length != myMatrix.length) {
                isSquare = false;
                break;
            }
        }
        if (isSquare) {
            int sum = 0;
            for (int i = 0; i < myMatrix.length; i++) {
                sum += myMatrix[i][i];
            }
            System.out.println(sum);
        }
    }
}
