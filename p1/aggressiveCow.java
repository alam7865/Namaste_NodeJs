import java.util.*;

public class aggressiveCow {

    public static boolean isPossible(int arr[], int n, int k, int minAllowDis) {
        int cow = 1;
        int lastPosPoll = arr[0];

        for (int i = 1; i < n; i++) {
            if (arr[i] - lastPosPoll >= minAllowDis) {
                cow++;
                lastPosPoll = arr[i];
            }

            if (cow == k) {
                return true;
            }
        }

        return false;
    }

    public static int getdistance(int arr[], int n, int k) {
        int low = 1;
        int high = arr[n - 1];
        int ans = -1;

        while (low <= high) {
            int mid = low + (high - low) / 2;

            if (isPossible(arr, n, k, mid)) {
                ans = mid;
                low = mid + 1;
            } else {
                high = mid - 1;
            }
        }

        return ans;
    }

    public static void main(String[] args) {
        int arr[] = { 1, 2, 4, 8, 9 };
        int k = 3;
        int n = arr.length;
        Arrays.sort(arr);
        int res = getdistance(arr, n, k);
        System.out.println("Result: " + res);
    }
}