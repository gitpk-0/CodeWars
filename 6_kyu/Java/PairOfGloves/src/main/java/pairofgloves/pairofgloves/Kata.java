package pairofgloves.pairofgloves;

import java.util.HashMap;

public class Kata {

    public static int numberOfPairs(String[] gloves) {

        HashMap<String, Integer> hashMap = new HashMap<>();
        int pairs = 0;

        for (String glove : gloves) {
            if (!hashMap.containsKey(glove)) {
                hashMap.put(glove, 1);
                continue;
            }

            hashMap.put(glove, hashMap.get(glove) + 1);
        }


        for (String glove : hashMap.keySet()) {
            int value = hashMap.get(glove);
            if (value % 2 == 0) { // even
                pairs += value / 2;
            } else if (value % 2 != 0) { // odd
                value = value - 1;
                pairs += value / 2;
            }
        }



        return pairs;
    }

    public static void main(String[] args) {
        System.out.println(numberOfPairs(new String[] {"red", "red"}));
        System.out.println(numberOfPairs(new String[] {"red", "red", "red", "red", "red", "red"}));
        System.out.println(numberOfPairs(new String[] {"red", "green", "blue"}));
        System.out.println(numberOfPairs(new String[] {"gray", "black", "purple", "purple", "gray", "black"}));
        System.out.println(numberOfPairs(new String[] {"red", "green", "blue", "blue", "red", "green", "red", "red", "red"}));
    }
}


