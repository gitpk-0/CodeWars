import java.util.*;

public class Semordnilap {
    public static void main(String[] args) {
        System.out.println(SemordnilapProgram1.semordnilap(new String[] {"diaper", "abc", "test", "cba", "repaid"}));
    }
}


// my solution with 1 hint
// time = O(n)
// space = O(n)
class SemordnilapProgram0 {
    public static ArrayList<ArrayList<String>> semordnilap(String[] words) {

        ArrayList<ArrayList<String>> output = new ArrayList<>(); // O(n/2) space worst case
        HashMap<String, Integer> set = new HashMap<>(); // O(n) space worst case (all unique words)

        for (String word : words) { // O(n) time
            String reverse = new StringBuilder(word).reverse().toString();
            if (set.containsKey(reverse)) {
                output.add(new ArrayList<>(Arrays.asList(reverse, word)));
            } else {
                set.put(word, 1);
            }
        }

        return output;
    }
}


// given solution
// time = O(n*m)
// space = O(n*m)
class SemordnilapProgram1 {
    public static ArrayList<ArrayList<String>> semordnilap(String[] words) {
        HashSet<String> set = new HashSet<String>(Arrays.asList(words));
        ArrayList<ArrayList<String>> output = new ArrayList<>();

        for (String word : words) {
            String reverse = new StringBuilder(word).reverse().toString();
            if (set.contains(reverse) && !reverse.equals(word)) {
                output.add(new ArrayList<>(Arrays.asList(word, reverse)));
                set.remove(word);
                set.remove(reverse);
            }
        }

        return output;
    }
}
