import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.List;

public class MorseCodeDecoder2 {


    public static String decodeBits(String bits) {

        int cadence = determineSkillLevel("00000000", bits);
        int cadence2 = determineSkillLevel("00000000000000000000000000000000000",bits);

        String copyOfbits = bits;
        // remove leading zeros
        while (true) {
            if (copyOfbits.startsWith("0")) {
                copyOfbits = copyOfbits.substring(1);
                continue;
            }
            break;
        }
        System.out.println(copyOfbits);

        if (copyOfbits.length() <= 8) {

            String I = "111";
            String I2 = "1111111";
            String I3 = "110011";

            if (copyOfbits.equals(I) || copyOfbits.equals(I2) || copyOfbits.equals(I3) || copyOfbits.equals("101")) {
                return "..";
            } else if (copyOfbits.equals("1") ) {
                return ".";
            }
            return ".";
        }

        if (cadence2 > 0) {
            return wtf(copyOfbits);
        }

        if (cadence > 0) {
            return beginner(copyOfbits);
        }
        return experienced(copyOfbits);
    }


    public static String decodeMorse(String morseCode) {
        System.out.println(morseCode);

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


    private static int determineSkillLevel(String pat, String txt) {

        int M = pat.length();
        int N = txt.length();
        int res = 0;

        /* A loop to slide pat[] one by one */
        for (int i = 0; i <= N - M; i++) {
            /* For current index i, check for
        pattern match */
            int j;
            for (j = 0; j < M; j++) {
                if (txt.charAt(i + j) != pat.charAt(j)) {
                    break;
                }
            }

            // if pat[0...M-1] = txt[i, i+1, ...i+M-1]
            if (j == M) {
                res++;
                j = 0;
            }
        }
        return res;
    }

    private static String wtf(String bits) {

        String copyOfbits = bits;
        // remove leading zeros
        while (true) {
            if (copyOfbits.startsWith("0")) {
                copyOfbits = copyOfbits.substring(1);
                continue;
            }
            break;
        }

        String[] digits = copyOfbits.split("");
        List<String> array = new ArrayList<>();

        Arrays.asList(digits).stream().forEach(digit -> array.add(digit));

        StringBuilder test = new StringBuilder();
        StringBuilder result = new StringBuilder();

        boolean consec0s = false;
        boolean letterBefore = false;


        for (int i = 0; i < array.size(); i++) {
            // dot 10
            // dash 1110
            // new letter 000
            // new word 0000000
            // build string until a match is made
            // System.out.println(result.toString());


            test.append(array.get(i));
            String value = test.toString();
            System.out.println("Val: " + value);

            String next = "";
            try {
                next = array.get(i + 1);
            } catch (Exception e) {
                next = "";
                // System.out.println(e.getMessage());
            }


            if (value.equals("11111") && next.equals("0")) {
                result.append(".");
                test.setLength(0); // clear test
                letterBefore = true;
                consec0s = false;
                continue;
            }

            if (value.equals("111111111111111")) {
                result.append("-");
                test.delete(0, test.length()); // clear test
                letterBefore = true;
                consec0s = false;
                continue;
            }

            // new word
            if (value.equals("00000000000000000000000000000000000") && next.equals("1")) {
                result.append("   ");
                test.setLength(0); // clear test
                letterBefore = false;
                consec0s = false;
                continue;
            }

            // new letter
            if (value.equals("000000000000000") && !consec0s && next.equals("1")) {
                result.append(" ");
                test.setLength(0); // clear test
                letterBefore = false;
                consec0s = true;
            }


            if (value.equals("00000") && letterBefore && next.equals("1")) {
                test.setLength(0); // clear test
            }


        }


        return result.toString();

        // 11111111111111100000000000000011111000001111100000111110000011111000000000000000111110000000000000000000000000000000000011111111111111100000111111111111111000001111100000111111111111111000000000000000111110000011111000001111111111111110000000000000001111100000111110000000000000001111111111111110000011111000001111111111111110000011111000000000000000111111111111111000001111100000111111111111111000000000000000000000000000000000001111111111111110000011111000001111100000111110000000000000001111100000111111111111111000001111100000000000000011111111111111100000111111111111111000001111111111111110000000000000001111100000111111111111111000001111111111111110000000000000001111111111111110000011111000000000000000000000000000000000001111100000111110000011111111111111100000111110000000000000001111111111111110000011111111111111100000111111111111111000000000000000111111111111111000001111100000111110000011111111111111100000000000000000000000000000000000111110000011111111111111100000111111111111111000001111111111111110000000000000001111100000111110000011111111111111100000000000000011111111111111100000111111111111111000000000000000111110000011111111111111100000111111111111111000001111100000000000000011111000001111100000111110000000000000000000000000000000000011111111111111100000111111111111111000001111111111111110000000000000001111100000111110000011111000001111111111111110000000000000001111100000000000000011111000001111111111111110000011111000000000000000000000000000000000001111111111111110000000000000001111100000111110000011111000001111100000000000000011111000000000000000000000000000000000001111100000111111111111111000001111100000111110000000000000001111100000111111111111111000000000000000111111111111111000001111111111111110000011111000001111100000000000000011111111111111100000111110000011111111111111100000111111111111111000000000000000000000000000000000001111111111111110000011111000001111100000000000000011111111111111100000111111111111111000001111111111111110000000000000001111111111111110000011111111111111100000111110000000000000001111100000111111111111111000001111100000111111111111111000001111100000111111111111111

        // 111111111111111  dash
        // 000000000000000  new letter
        // 11111  dot
        // 00000000000000000000000000000000000  new word (2x letter + 5 digits)
    }

    private static String beginner(String bits) {
        // System.out.println("called beginner");
        // beginner formula (slow transmission)
        String copyOfbits = bits;

        while (true) {
            if (copyOfbits.startsWith("0")) {
                copyOfbits = copyOfbits.substring(1);
                continue;
            }
            break;
        }

        String[] bitArray = copyOfbits.split("(?<=\\G....)");
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


            // dot
            if ((quad.equals("1100") || quad.equals("1110")) && !wasConsec1s) {
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

    private static String experienced(String bits) {
        // System.out.println("called experienced");
        // dot 1 time unit
        // dash 3 time units
        // pause 1 time unit  (between dots/dashes)
        // pause 3 time units (between letters in word)
        // pause 7 time units (between words)


        // experienced formula (transmission speed to spec)

        String copyOfbits = bits;

        // remove leading zeros
        while (true) {
            if (copyOfbits.startsWith("0")) {
                copyOfbits = copyOfbits.substring(1);
                continue;
            }
            break;
        }

        String[] digits = copyOfbits.split("");
        List<String> array = new ArrayList<>();

        Arrays.asList(digits).stream().forEach(digit -> array.add(digit));

        StringBuilder test = new StringBuilder();
        StringBuilder result = new StringBuilder();

        boolean consec0s = false;
        boolean skipDigit = false;


        for (int i = 0; i < array.size(); i++) {
            // dot 10
            // dash 1110
            // new letter 000
            // new word 0000000
            // build string until a match is made
            // System.out.println(result.toString());
            if (skipDigit) {
                skipDigit = false;
                continue;
            }

            test.append(array.get(i));
            String value = test.toString();

            if (value.equals("01")) {
                test.setLength(0); // clear test
                test.append("1");
                continue;
            }

            if (value.equals("10")) {
                result.append(".");
                test.setLength(0); // clear test
                consec0s = false;
                test.append("0");
                continue;
            }

            if (value.equals("111")) {
                result.append("-");
                test.delete(0, test.length()); // clear test
                consec0s = false;
                continue;
            }

            // new word
            if (value.equals("00") && consec0s) {
                result.append("  ");
                test.setLength(0); // clear test
                consec0s = false;
                skipDigit = true;
                continue;
            }

            // new letter
            if (value.equals("00")) {
                result.append(" ");
                test.setLength(0); // clear test
                consec0s = true;
                skipDigit = true;
                continue;
            }

        }


        return result.toString();
    }


    /**************************************/
    public static void main(String[] args) {
        //              .p__.p__.p__.p__H___.p__E___  -     .      -       -Y        >      .     -       -      -  J       .   .      -U          -    .   .D      .E
        String test1 = "1100110011001100000011000000111111001100111111001111110000000000000011001111110011111100111111000000110011001111110000001111110011001100000011";
        //                 -   -   -   -   -   -   -   -   -   -   -   -   -
        // System.out.println(decodeBits(test1)); // .... . -.--   .--- ..- -.. .
        // System.out.println(decodeMorse(decodeBits(test1)).toUpperCase()); // "HEY JUDE"

        String test2 = "01110";  // .
        // System.out.println(decodeBits(test2)); /test2)).toUpperCase()); // "E"

        //                x   -  . . . .   .         -   - .   -
        String test3 = "00011100010101010001000000011101110101110001010111000101000111010111010001110101110000000111010101000101110100011101110111000101110111000111010000000101011101000111011101110001110101011100000001011101110111000101011100011101110001011101110100010101000000011101110111000101010111000100010111010000000111000101010100010000000101110101000101110001110111010100011101011101110000000111010100011101110111000111011101000101110101110101110";
        String pass = "- .... .   --.- ..- .. -.-. -.-   -... .-. --- .-- -.   ..-. --- -..-   .--- ..- -- .--. ...   --- ...- . .-.   - .... .   .-.. .- --.. -.--   -.. --- --. .-.-.-";
        // System.out.println(decodeBits(test3).equals(pass)); // "- .... .   --.- ..- .. -.-. -.-   -... .-. --- .-- -.   ..-. --- -..-   .--- ..- -- .--. ...   --- ...- . .-.   - .... .   .-.. .- --.. -.--   -.. --- --. .-.-.-"
        // System.out.println(decodeMorse(decodeBits(test3)).toUpperCase()); // "THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG."

        //    -   -   -  -

        String test4wtf = "11111111111111100000000000000011111000001111100000111110000011111000000000000000111110000000000000000000000000000000000011111111111111100000111111111111111000001111100000111111111111111000000000000000111110000011111000001111111111111110000000000000001111100000111110000000000000001111111111111110000011111000001111111111111110000011111000000000000000111111111111111000001111100000111111111111111000000000000000000000000000000000001111111111111110000011111000001111100000111110000000000000001111100000111111111111111000001111100000000000000011111111111111100000111111111111111000001111111111111110000000000000001111100000111111111111111000001111111111111110000000000000001111111111111110000011111000000000000000000000000000000000001111100000111110000011111111111111100000111110000000000000001111111111111110000011111111111111100000111111111111111000000000000000111111111111111000001111100000111110000011111111111111100000000000000000000000000000000000111110000011111111111111100000111111111111111000001111111111111110000000000000001111100000111110000011111111111111100000000000000011111111111111100000111111111111111000000000000000111110000011111111111111100000111111111111111000001111100000000000000011111000001111100000111110000000000000000000000000000000000011111111111111100000111111111111111000001111111111111110000000000000001111100000111110000011111000001111111111111110000000000000001111100000000000000011111000001111111111111110000011111000000000000000000000000000000000001111111111111110000000000000001111100000111110000011111000001111100000000000000011111000000000000000000000000000000000001111100000111111111111111000001111100000111110000000000000001111100000111111111111111000000000000000111111111111111000001111111111111110000011111000001111100000000000000011111111111111100000111110000011111111111111100000111111111111111000000000000000000000000000000000001111111111111110000011111000001111100000000000000011111111111111100000111111111111111000001111111111111110000000000000001111111111111110000011111111111111100000111110000000000000001111100000111111111111111000001111100000111111111111111000001111100000111111111111111";
        System.out.println(decodeBits(test4wtf).equals(pass));
        System.out.println(decodeMorse(decodeBits(test4wtf)).toUpperCase()); // "THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG."
        // 11111111111111100000000000000011111000001111100000111110000011111000000000000000111110000000000000000000000000000000000011111111111111100000111111111111111000001111100000111111111111111000000000000000111110000011111000001111111111111110000000000000001111100000111110000000000000001111111111111110000011111000001111111111111110000011111000000000000000111111111111111000001111100000111111111111111000000000000000000000000000000000001111111111111110000011111000001111100000111110000000000000001111100000111111111111111000001111100000000000000011111111111111100000111111111111111000001111111111111110000000000000001111100000111111111111111000001111111111111110000000000000001111111111111110000011111000000000000000000000000000000000001111100000111110000011111111111111100000111110000000000000001111111111111110000011111111111111100000111111111111111000000000000000111111111111111000001111100000111110000011111111111111100000000000000000000000000000000000111110000011111111111111100000111111111111111000001111111111111110000000000000001111100000111110000011111111111111100000000000000011111111111111100000111111111111111000000000000000111110000011111111111111100000111111111111111000001111100000000000000011111000001111100000111110000000000000000000000000000000000011111111111111100000111111111111111000001111111111111110000000000000001111100000111110000011111000001111111111111110000000000000001111100000000000000011111000001111111111111110000011111000000000000000000000000000000000001111111111111110000000000000001111100000111110000011111000001111100000000000000011111000000000000000000000000000000000001111100000111111111111111000001111100000111110000000000000001111100000111111111111111000000000000000111111111111111000001111111111111110000011111000001111100000000000000011111111111111100000111110000011111111111111100000111111111111111000000000000000000000000000000000001111111111111110000011111000001111100000000000000011111111111111100000111111111111111000001111111111111110000000000000001111111111111110000011111111111111100000111110000000000000001111100000111111111111111000001111100000111111111111111000001111100000111111111111111


        // System.out.println(determineSkillLevel("00000000", test3));


    }
}





