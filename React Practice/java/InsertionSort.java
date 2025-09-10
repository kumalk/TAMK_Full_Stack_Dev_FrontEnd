import java.util.Random;

public class InsertionSort {
    void sort(int arr[]) {
        int n = arr.length;
        for (int i = 1; i < n; ++i) {
            int key = arr[i];
            int j = i - 1;
            while (j >= 0 && arr[j] > key) {
                arr[j + 1] = arr[j];
                j = j - 1;
            }
            arr[j + 1] = key;
        }
    }

    static void printArray(int arr[]) {
        for (int value : arr) {
            System.out.print(value + " ");
        }
        System.out.println();
    }

    public static void main(String args[]) {
        Random rand = new Random();
        int[] arr = new int[20]; // Bigger array of size 20

        // Fill with random integers between 1–1000
        for (int i = 0; i < arr.length; i++) {
            arr[i] = rand.nextInt(1000) + 1;
        }

        System.out.println("Unsorted array:");
        printArray(arr);

        InsertionSort ob = new InsertionSort();
        ob.sort(arr);

        System.out.println("\nSorted array:");
        printArray(arr);
    }
}
