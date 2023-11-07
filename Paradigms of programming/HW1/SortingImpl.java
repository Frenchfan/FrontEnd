import java.util.Arrays;

public class SortingImpl {
    public static void main(String[] args) {
        int[] arr = { 15, 16, 17, 18, 1, 9, 10, 2, 3, 4, 5, 6, 7, 8, 11, 12, 13, 14, 19, 20 };
        System.out.println("The array before sorting: " + Arrays.toString(arr));
        myQuickSort(arr, 0, arr.length - 1);
        System.out.println("The array after sorting (imperative approach): " + Arrays.toString(arr));

        int[] arr2 = { 15, 16, 17, 18, 1, 9, 10, 2, 3, 4, 5, 6, 7, 8, 11, 12, 13, 14, 19, 20 };
        System.out.println("The array before sorting: " + Arrays.toString(arr2));

        // declarative approach
        Arrays.sort(arr2);
        System.out.println("The array after sorting (declarative approach): " + Arrays.toString(arr2));
    }

    private static void myQuickSort(int[] arr, int low, int high) {
        if (low < high) {
            int pivot = partition(arr, low, high);
            myQuickSort(arr, low, pivot - 1);
            myQuickSort(arr, pivot + 1, high);
        }
    }

    private static int partition(int[] arr, int low, int high) {
        int pivot = arr[high];
        int i = low - 1;
        for (int j = low; j < high; j++) {
            if (arr[j] < pivot) {
                i++;
                int temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
        int temp = arr[i + 1];
        arr[i + 1] = arr[high];
        arr[high] = temp;
        return i + 1;
    }

}
