import java.util.HashMap;

public class GenerateDocument {

    public static void main(String[] args) {
        String characters = "Bste!hetsi ogEAxpelrt x ";
        String document = "AlgoExpert is the Best!";
        System.out.println(GenerateDocument0.generateDocument(characters, document)); // true

        String characters1 = "Bste!hetsi ogEAxpelrtx ";
        String document1 = "AlgoExpert is the Best!";
        System.out.println(GenerateDocument0.generateDocument(characters1, document1)); // false - missing 1 space

        String characters2 = "Bste!hetsi ogEApelrt  ";
        String document2 = "AlgoExpert is the Best!";
        System.out.println(GenerateDocument0.generateDocument(characters2, document2)); // false - missing letter x
    }
}

class GenerateDocument0 {

    public static boolean generateDocument(String characters, String document) {

        HashMap<Character, Integer> map = new HashMap<>();

        for (int i = 0; i < characters.length(); i++) {
            Character current = characters.charAt(i);

            if (!map.containsKey(current)) {
                map.put(current, 1);
            } else {
                map.put(current, map.get(current) + 1);
            }
        }

        for (int i = 0; i < document.length(); i++) {
            Character current = document.charAt(i);

            if (map.containsKey(current)) {
                if (map.get(current) < 1) {
                    return false;
                } else {
                    map.put(current, map.get(current) - 1);
                }
            } else { // map doesn't have this character
                return false;
            }
        }

        return true;
    }
}
