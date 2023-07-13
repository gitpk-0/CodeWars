import java.util.HashMap;
import java.util.HashSet;

public class FirstNonRepeatChar {
    public static void main(String[] args) {
        String string = "abcdcaf";
        System.out.println(FirstNonRepeatChar0.firstNonRepeatingCharacter(string)); // 1  faadabcbbebdf

        String string2 = "faadabcbbebdf";
        System.out.println(FirstNonRepeatChar0.firstNonRepeatingCharacter(string2)); // 6
    }
}

class FirstNonRepeatChar0 {
    public static int firstNonRepeatingCharacter(String string) {
        HashMap<Character, Integer> chars = new HashMap<>();

        for (int i = 0; i < string.length(); i++) {
            if (chars.containsKey(string.charAt(i))) {
                chars.put(string.charAt(i), chars.get(string.charAt(i)) + 1);
            } else {
                chars.put(string.charAt(i), 1);
            }
        }

        for (int i = 0; i < string.length(); i++) {
            if (chars.get(string.charAt(i)) == 1) {
                return i;
            }
        }

        return -1;
    }
}
