import java.util.*;

public class firstRow {
    public static void main(String[] args) {

        int arr[] = { 1, 3, 4, 2 };
        int mat[][] = {
                { 1, 4 }, { 2, 3 }
        };

        int n = mat.length;
        int m = mat[0].length;

        int row[] = new int[n];
        int col[] = new int[m];
        HashMap<Integer, int[]> map = new HashMap<>();

        for (int i = 0; i < n; i++) {
            for (int j = 0; j < m; j++) {
                map.put(mat[i][j], new int[] { i, j });
            }
        }

        // for (Map.Entry<Integer, int[]> set : map.entrySet()) {
        // int key = set.getKey();
        // int[] val = set.getValue();
        // row[val[0]]++;
        // col[val[1]]++;

        // if(row[val[0]]==m|| col[val[1]]==n)
        // {
        // return i;
        // }
        // }

        for (int i = 0; i < arr.length; i++) {
            int key = arr[i];
            int val[] = map.get(key);

            row[val[0]]++;
            col[val[1]]++;

            if (row[val[0]] == m || col[val[1]] == n) {
                // return i;
                System.out.println("Result: " + i);
            }
        }

    }
}
