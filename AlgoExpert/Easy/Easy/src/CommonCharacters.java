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

// my solution -
class CommonCharactersProgram0 {
    public static String[] commonCharacters(String[] strings) {
        HashMap<Character, ArrayList<Integer>> map = new HashMap<>();

        for (int i = 0; i < strings[0].length(); i++) {
            map.put(strings[0].charAt(i), new ArrayList<>());
            ArrayList<Integer> itemList = map.get(strings[0].charAt(i));
            itemList.add(0);
        }

        for (int i = 1; i < strings.length; i++) {
            for (int j = 0; j < strings[i].length(); j++) {
                char current = strings[i].charAt(j);

                if (map.containsKey(current)) {
                    if (!map.get(current).contains(i)) {
                        map.get(current).add(i);
                    }
                }
            }
        }
        System.out.println(map);

        ArrayList<String> out = new ArrayList<>();

        for (char key : map.keySet()) {
            if (map.get(key).size() == strings.length) {
                out.add(String.valueOf(key));
            }
        }




        return out.toArray(new String[0]);
    }
}


