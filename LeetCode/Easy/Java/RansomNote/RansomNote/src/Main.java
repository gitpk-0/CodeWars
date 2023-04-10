import java.util.HashMap;

public class Main {
    public static boolean canConstruct(String ransomNote, String magazine) {
        boolean result = true;
        HashMap<Character, Integer> letters = new HashMap<>();

        for (int i = 0; i < magazine.length(); i++) {
            char curr = magazine.charAt(i);
            if (letters.containsKey(curr)) {
                letters.put(curr, letters.get(curr) + 1);
            } else {
                letters.put(curr, 1);
            }
        }

        for (int i = 0; i < ransomNote.length(); i++) {
            char curr = ransomNote.charAt(i);
            if (letters.containsKey(curr)) {
                if (letters.get(curr) > 0) {
                    letters.put(curr, letters.get(curr) - 1);
                } else {
                    result = false;
                    break;
                }
            } else {
                result = false;
                break;
            }
        }
        return result;
    }

    public static void main(String[] args) {
        System.out.println(canConstruct("a", "b")); // false
        System.out.println(canConstruct("aa", "ab")); // false
        System.out.println(canConstruct("aa", "aab")); // true
        System.out.println(canConstruct("aab", "baa")); // true
    }
}