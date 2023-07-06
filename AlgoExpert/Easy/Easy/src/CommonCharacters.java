import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.HashSet;

public class CommonCharacters {

    public static void main(String[] args) {
        String[] strings = new String[]{"abc", "bcd", "cbaccd"};
        System.out.println(Arrays.asList(CommonCharactersProgram0.commonCharacters(strings))); // "b", "c"
    }
}

// my solution with one hint - time = O(n*m) | space = O(m), m = length of the longest string
class CommonCharactersProgram0 {
    public static String[] commonCharacters(String[] strings) {
        // create a hashmap to track characters in use and which strings use them
        HashMap<Character, ArrayList<Integer>> map = new HashMap<>(); // O(m) space


        for (int i = 0; i < strings[0].length(); i++) { // O(m) time, m = length of first string
            // add each character of the first string to the map and initialize each character's list
            map.put(strings[0].charAt(i), new ArrayList<>());

            // save the characters list to a variable for further use
            ArrayList<Integer> itemList = map.get(strings[0].charAt(i));

            // add the integer 0 to the characters list to indicate the character is in the first string of the strings list
            itemList.add(0);
        }

        // O(n * m) time
        // loop through each string starting from the second string
        for (int i = 1; i < strings.length; i++) { // O(n)-1 | O(n) time, n = number of strings
            // loop through each character in the current string
            for (int j = 0; j < strings[i].length(); j++) {  // O(m) time, m = length of the longest string
                char current = strings[i].charAt(j);

                // see if the map has the key of the current character
                if (map.containsKey(current)) {
                    // map has the current character key
                    if (!map.get(current).contains(i)) {
                        // the current character key's list does not already have the index of the current string
                        map.get(current).add(i); // add it
                    }
                }
            }
        }
        System.out.println(map);

        ArrayList<String> out = new ArrayList<>();

        for (char key : map.keySet()) { // O(m) time, m = length of first string (i.e. the number of keys)
            if (map.get(key).size() == strings.length) {
                out.add(String.valueOf(key));
            }
        }

        return out.toArray(new String[0]);
    }
}


