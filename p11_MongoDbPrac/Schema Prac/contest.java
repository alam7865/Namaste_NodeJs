import java.util.*;

public class contest {

    public static String findCommonResponse(List<List<String>> responses) {

        HashMap<String, Integer> map = new HashMap<>();

        int max = 0;
        for (int i = 0; i < responses.size(); i++) {
            ArrayList<String> list = new ArrayList<>(responses.get(i));
            HashSet<String> set = new HashSet<>();
            for (int j = 0; j < list.size(); j++) {
                if (set.add(list.get(j))) {
                    map.put(list.get(j), map.getOrDefault(list.get(j), 0) + 1);
                }
                max = Math.max(max, map.get(list.get(j)));
            }
        }

        String res = "z";
        int count = 0;

        // System.out.println(map.toString());
        // System.out.println(max);
        for (Map.Entry<String, Integer> set : map.entrySet()) {
            String key = set.getKey();
            int val = set.getValue();

            if (max == val) {
                count++;
            }
        }

        for (Map.Entry<String, Integer> set : map.entrySet()) {
            String key = set.getKey();
            int val = set.getValue();

            if (val == max && count == 1) {
                res = key;
                break;
            }

            if (val == max) {
                if (res.charAt(0) >= key.charAt(0)) {
                    res = key;
                }
            }
        }

        return res;
        // return "abc";
    }

    public static void main(String args[]) {
        List<List<String>> responses = new ArrayList<>();
        responses.add(new ArrayList<>(Arrays.asList("good", "ok", "good", "ok")));
        responses.add(new ArrayList<>(Arrays.asList("ok", "bad", "good", "ok", "ok")));
        responses.add(new ArrayList<>(Arrays.asList("good")));
        responses.add(new ArrayList<>(Arrays.asList("bad")));

        String ans = findCommonResponse(responses);
        System.out.println("Result: " + ans);
    }
}