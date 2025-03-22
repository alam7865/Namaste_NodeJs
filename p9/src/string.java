import java.util.*;

public class string {
    public static void Permutation(String s, String sb, ArrayList<String> list) {
        if (s.length() == 0) {
            if (!list.contains(sb)) {
                list.add(sb);
            }
            return;
        }

        for (int i = 0; i < s.length(); i++) {
            char ch = s.charAt(i);
            String newStr = s.substring(0, i) + s.substring(i + 1);
            // sb += ch;
            Permutation(newStr, sb + ch, list);
        }

    }

    public static void main(String[] args) {
        String s = "ABC";
        ArrayList<String> list = new ArrayList<>();
        // StringBuilder sb=new StringBuilder();
        String sb = "";
        Permutation(s, sb, list);

        // return list;
        System.out.println(list.toString());
    }
}



class Solution {
    
    public static void Permutation(String s, StringBuilder sb, ArrayList<String> list) {
       if (s.length() == 0) {
           if (!list.contains(sb.toString())) {
               list.add(sb.toString());
           }
           return;
       }

       for (int i = 0; i < s.length(); i++) {
           char ch = s.charAt(i);
           String newStr = s.substring(0, i) + s.substring(i + 1);
           // sb += ch;
           StringBuilder sb1=sb;
           sb1.append(ch);
           
           Permutation(newStr,sb1, list);
       }

   }
   public ArrayList<String> findPermutation(String s) {
       // Code here
       
       ArrayList<String>list=new ArrayList<>();
       StringBuilder sb=new StringBuilder();
           Permutation(s,sb,list);
       
       
       return list;
   }
}