public class Solution {


    public static String toCamelCase(String s) {

        StringBuilder camel = new StringBuilder();
        boolean upper = false;

        for (String letter : s.split("")) {
            if (letter.equals("-") || letter.equals("_")) {
                upper = true;
                continue;
            }

            if (upper) {
                camel.append(letter.toUpperCase());
                upper = false;
                continue;
            }

            camel.append(letter);
        }

        return camel.toString();
    }
    public static void main(String[] args) {
        String first = "the-stealth-warrior";
        String second = "The_Stealth_Warrior";

        toCamelCase(first);
        toCamelCase(second);
    }
}