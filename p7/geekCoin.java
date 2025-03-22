import java.util.*;

public class geekCoin {
    public static void main(String args[]) {
        int mat[][] = {
                { 1, 1, 1, 1, 1 },
                { 2, 2, 2, 2, 2 },
                { 3, 8, 6, 7, 3 },
                { 4, 4, 4, 4, 4 },
                { 5, 5, 5, 5, 5 }
        };

        int n = mat.length;
        int k = 3;
        int max = Integer.MIN_VALUE;
        int p[][] = new int[n + 1][n + 1];

        for (int i = 1; i <= n; i++) {
            for (int j = 1; j <= n; j++) {
                p[i][j] = mat[i - 1][j - 1] + p[i - 1][j] + p[i][j - 1] - p[i - 1][j - 1];

                if (i >= k && j >= k) {
                    max = Math.max(max, p[i][j] - p[i - k][j] - p[i][j - k] + p[i - k][j - k]);
                }
            }

        }

        System.out.println("Result: " + max);

    }
}