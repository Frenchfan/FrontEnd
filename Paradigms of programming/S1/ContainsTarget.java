public class ContainsTarget {
    public static void main(String[] args) {
        int[] myArray1 = { 1, 2, 3, 4, 5 };
        int[] myArray2 = new int[] { 35, 47, 18, 0, 54 };
        System.out.println(contains(myArray1, 3));
        System.out.println(contains(myArray2, 18));
        System.out.println(contains(myArray2, 42));
        int[] myArray3 = new int[] { -1, -2, 0, 0, 2, 3 };
        for (double i : getShare(myArray3)) {
            System.out.println(i);
        }

    }

    public static boolean contains(int[] arr, int target) {
        for (int i = 0; i < arr.length; i++) {
            if (arr[i] == target) {
                return true;
            }
        }
        return false;
    }

    public static double[] getShare(int[] array) {
        double[] result = new double[3];
        int positives = 0;
        int negatives = 0;
        int zeros = 0;
        for (int i : array) {
            if (i > 0) {
                positives++;
            } else if (i < 0) {
                negatives++;
            } else {
                zeros++;
            }
        }
        result[0] = (double) positives / array.length;        
        result[1] = (double) negatives / array.length;
        result[2] = (double) zeros / array.length;
        return result;
    }
}
