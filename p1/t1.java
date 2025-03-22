import java.util.*;

public class t1 {
    public static void main(String[] args) {
        String str = "     i   like  this  program  very  much ";
        str = str.trim().replaceAll("\\s+", " ");
        String str1[] = str.split(" ");

        // System.out.println(Arrays.toString(str1));

        StringBuilder sb = new StringBuilder();

        for (int i = str1.length - 1; i >= 0; i--) {
            String ss = str1[i];
            if (ss != " ") {
                sb.append(ss);

                if (i != 0) {
                    sb.append(" ");
                }

            }
        }

        // System.out.println(sb.toString());
        for (int i = 0; i < str1.length; i++) {
            System.out.println(str1[i]);
        }
    }
}
