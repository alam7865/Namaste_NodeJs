import java.util.*;

public class ss {
    public static void main(String[] args) {
        // String s = "geeksforgeeks";
        // int frq[] = new int[26];

        // for (int i = 0; i < s.length(); i++) {
        // char ch = s.charAt(i);
        // int idx = ch - 'a';

        // frq[idx] = frq[idx] + 1;
        // }

        // for (int i = 0; i < 26; i++) {
        // System.out.print(frq[i] + " ");
        // }

        //////////////////////////////////////////////////////////////////////////
        String s = "geEksforGEeks";

        int frq1[] = new int[26];
        int frq2[] = new int[26];
        StringBuilder sb = new StringBuilder();

        for (int i = 0; i < s.length(); i++) {
            char ch = s.charAt(i);

            if (ch >= 'a' && ch <= 'z') {
                int idx = ch - 'a';
                frq1[idx] = frq1[idx] + 1;

                if (frq1[idx] == 1) {
                    sb.append(ch);
                }
            } else {
                int idx = ch - 'A';
                frq2[idx] = frq2[idx] + 1;

                if (frq2[idx] == 1) {
                    sb.append(ch);
                }
            }
        }
        System.out.println(sb.toString());
    }
}