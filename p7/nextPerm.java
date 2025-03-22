import java.util.*;

public class nextPerm {

    public static void swap(int arr[], int i, int j) {
        int temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }

    public static void reverse(int arr[], int i, int j) {
        while (i < j) {
            swap(arr, i, j);
            i++;
            j--;
        }
    }

    public static void main(String[] args) {
        int arr[] = { 1, 2, 3 }; //// => 1 3 2

        int i = arr.length - 2;

        while (i >= 0 && arr[i] > arr[i + 1]) {
            i--;
        }

        int j = arr.length - 1;

        while (arr[i] >= arr[j]) {
            j--;
        }

        // swap
        swap(arr, i, j);

        reverse(arr, i + 1, arr.length - 1);
        System.out.println(Arrays.toString(arr));
    }
}
