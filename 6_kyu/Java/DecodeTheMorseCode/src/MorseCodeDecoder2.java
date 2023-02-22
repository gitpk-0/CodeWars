import java.util.HashMap;

public class MorseCodeDecoder2 {


    public static String decodeBits(String bits) {
        // convert the bits (1s,0s) to morse code (. & -)

        // 000000 = new letter
        // 1100 = dot
        // 111111 = dash
        // 0000000+ = new word

        // view 3 segments at once 0-3 4-7 8-11
        // vars -> consec1s, consec0s,
        // consec1s resets consec0s, vise versa
        // view in segments of 4 bits

        String[] bitArray = bits.split("(?<=\\G....)");
        StringBuilder output = new StringBuilder();

        boolean wasConsec0s = false;
        boolean wasConsec1s = false;
        boolean doubleConsec0s = false;

        String newLetter = " ";
        String newWord = "  ";

        for (String quad : bitArray) {
            if (quad.length() == 1) {
                quad = quad + "000";
            }
            if (quad.length() == 2) {
                quad = quad + "00";
            }
            if (quad.length() == 3) {
                quad = quad + "0";
            }
            // System.out.println(quad);
            //              .p__.p__.p__.p__H___.p__E___  -     .      -       -Y        >      .     -       -      -  J       .   .      -U          -    .   .D      .E
            String test1 = "1100110011001100000011000000111111001100111111001111110000000000000011001111110011111100111111000000110011001111110000001111110011001100000011";
            //                 -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -


            // dot
            if (quad.equals("1100") && !wasConsec1s) {
                output.append(".");
                wasConsec0s = false;
                wasConsec1s = false;
                doubleConsec0s = false;
            }

            // ship (tail end of dash)
            if (quad.equals("1100") && wasConsec1s) {
                wasConsec0s = false;
                wasConsec1s = false;
                doubleConsec0s = false;
            }

            // dash
            if (quad.equals("1111")) {
                output.append("-");
                wasConsec0s = false;
                wasConsec1s = true;
                doubleConsec0s = false;
            }


            if (quad.equals("0000")) {
                output.append(" ");
                // wasConsec0s = true;
                wasConsec1s = false;
            }


        }
        return output.toString();
    }

    public static String decodeMorse(String morseCode) {

        // HashMap<String, Character> MorseCode = new HashMap<>();
        // MorseCode.put(".-", 'a');
        // MorseCode.put("-...", 'b');
        // MorseCode.put("-.-.", 'c');
        // MorseCode.put("-..", 'd');
        // MorseCode.put(".", 'e');
        // MorseCode.put("..-.", 'f');
        // MorseCode.put("--.", 'g');
        // MorseCode.put("....", 'h');
        // MorseCode.put("..", 'i');
        // MorseCode.put(".---", 'j');
        // MorseCode.put("-.-", 'k');
        // MorseCode.put(".-..", 'l');
        // MorseCode.put("--", 'm');
        // MorseCode.put("-.", 'n');
        // MorseCode.put("---", 'o');
        // MorseCode.put(".--.", 'p');
        // MorseCode.put("--.-", 'q');
        // MorseCode.put(".-.", 'r');
        // MorseCode.put("...", 's');
        // MorseCode.put("-", 't');
        // MorseCode.put("..-", 'u');
        // MorseCode.put("...-", 'v');
        // MorseCode.put(".--", 'w');
        // MorseCode.put("-..-", 'x');
        // MorseCode.put("-.--", 'y');
        // MorseCode.put("--..", 'z');
        // MorseCode.put(".----", '1');
        // MorseCode.put("..---", '2');
        // MorseCode.put("...--", '3');
        // MorseCode.put("....-", '4');
        // MorseCode.put(".....", '5');
        // MorseCode.put("-....", '6');
        // MorseCode.put("--...", '7');
        // MorseCode.put("---..", '8');
        // MorseCode.put("----.", '9');
        // MorseCode.put("-----", '0');

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
        //              .p__.p__.p__.p__H___.p__E___  -     .      -       -Y        >      .     -       -      -  J       .   .      -U          -    .   .D      .E
        String test1 = "1100110011001100000011000000111111001100111111001111110000000000000011001111110011111100111111000000110011001111110000001111110011001100000011";
        //                 -   -   -   -   -   -   -   -   -   -   -   -   -

        System.out.println(decodeBits(test1)); // .... . -.--   .--- ..- -.. .
        System.out.println(decodeMorse(decodeBits(test1)).toUpperCase()); // "HEY JUDE"


    }
}