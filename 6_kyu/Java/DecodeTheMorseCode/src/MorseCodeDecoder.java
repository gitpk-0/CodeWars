import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.List;

public class MorseCodeDecoder {

    public static String decode(String morseCode) {

        // your brilliant code here, remember that you can access the preloaded Morse code table through MorseCode.get(code)

        HashMap<String, Character> MorseCode = new HashMap<>();
        MorseCode.put(".-", 'a');
        MorseCode.put("-...", 'b');
        MorseCode.put("-.-.", 'c');
        MorseCode.put("-..", 'd');
        MorseCode.put(".", 'e');
        MorseCode.put("..-.", 'f');
        MorseCode.put("--.", 'g');
        MorseCode.put("....", 'h');
        MorseCode.put("..", 'i');
        MorseCode.put(".---", 'j');
        MorseCode.put("-.-", 'k');
        MorseCode.put(".-..", 'l');
        MorseCode.put("--", 'm');
        MorseCode.put("-.", 'n');
        MorseCode.put("---", 'o');
        MorseCode.put(".--.", 'p');
        MorseCode.put("--.-", 'q');
        MorseCode.put(".-.", 'r');
        MorseCode.put("...", 's');
        MorseCode.put("-", 't');
        MorseCode.put("..-", 'u');
        MorseCode.put("...-", 'v');
        MorseCode.put(".--", 'w');
        MorseCode.put("-..-", 'x');
        MorseCode.put("-.--", 'y');
        MorseCode.put("--..", 'z');
        MorseCode.put(".----", '1');
        MorseCode.put("..---", '2');
        MorseCode.put("...--", '3');
        MorseCode.put("....-", '4');
        MorseCode.put(".....", '5');
        MorseCode.put("-....", '6');
        MorseCode.put("--...", '7');
        MorseCode.put("---..", '8');
        MorseCode.put("----.", '9');
        MorseCode.put("-----", '0');

        morseCode = morseCode.trim();
        String[] words = morseCode.split("   ");

        int count = 0;
        int wordCount = 0;
        StringBuilder output = new StringBuilder();

        while (count < words.length) {
            String[] letters = words[count].split("\\s"); // \\s = single whitespace character

            int innerCount = 0;
            while (innerCount < letters.length) {
                if (wordCount > 0) {
                    output.append(" ");
                    wordCount = 0;
                }

                String letter = letters[innerCount];

                output.append(MorseCode.get(letter));
                innerCount++;
            }

            wordCount++;
            count++;
        }


        return output.toString();
    }

    public static void main(String[] args) {

        String test1 = ".... . -.--   .--- ..- -.. ."; // "HEY JUDE"
        String test2 = " . "; // E

        System.out.println(decode(test1).toUpperCase());
        System.out.println(decode(test2).toUpperCase());


    }

}