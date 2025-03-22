import java.util.*;

public class carColl {
    public static int[] solve(int arr[]) {
        for (int i = 0; i < arr.length; i++) {
            arr[i] = arr[i] * 2;
        }

        return arr;
    }

    public static void main(String[] args) {
        // int arr[] = { 1, 2, 3 };

        // int solves[] = solve(arr);
        // System.out.println(Arrays.toString(solves));
        String words2[] = { "e", "oo" };
        HashMap<Character, Integer> map2 = new HashMap<>();

        for (int i = 0; i < words2.length; i++) {
            String str1 = words2[i];

            for (int i1 = 0; i1 < str1.length(); i1++) {
                map2.put(str1.charAt(i1), map2.getOrDefault(str1.charAt(i1), 0) + 1);
            }
        }

        for (Map.Entry<Character, Integer> set : map2.entrySet()) {
            System.out.println(set.getKey() + " " + set.getValue());
        }
    }
}