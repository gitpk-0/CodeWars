import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;

public class Greed{
    public static int greedy(int[] dice){

        // create hashmap to track count of each dice value (1-6)
        // loop through dice input
            // update hashmap values with counts
        // create arraylist that consists of the scoring system (50 - 1000)
        // loop thru hashmap
            // subtract counts once value has been updated


        for (int roll : dice) {
            System.out.print(roll + ",");
        }
        System.out.println("");

        HashMap<Integer, Integer> rollCounts = new HashMap<>();
        int dieVals = 1;
        while (dieVals <= 6) {
            rollCounts.put(dieVals, 0);
            dieVals++;
        }

        int count = 0;
        while (count < dice.length) {
            int current = dice[count];
            rollCounts.put(current, rollCounts.get(current) + 1);
            count++;
        }

        int total = 0;

        for (Integer diceValue : rollCounts.keySet()) {
            int value = rollCounts.get(diceValue);

            if (diceValue == 1) {

                if (value >= 3) {
                    total += 1000;
                    rollCounts.put(diceValue, rollCounts.get(diceValue) - 3);
                    value = rollCounts.get(diceValue);
                }

                if (value == 2) {
                    total += 200;
                    rollCounts.put(diceValue, rollCounts.get(diceValue) - 2);
                    value = rollCounts.get(diceValue);
                }

                if (value == 1) {
                    total += 100;
                    rollCounts.put(diceValue, rollCounts.get(diceValue) - 1);
                    value = rollCounts.get(diceValue);
                }
            }

            if (diceValue == 2) {
                if (value >= 3) {
                    total += 200;
                    rollCounts.put(diceValue, rollCounts.get(diceValue) - 3);
                    value = rollCounts.get(diceValue);
                }
            }

            if (diceValue == 3) {
                if (value >= 3) {
                    total += 300;
                    rollCounts.put(diceValue, rollCounts.get(diceValue) - 3);
                    value = rollCounts.get(diceValue);
                }
            }

            if (diceValue == 4) {
                if (value >= 3) {
                    total += 400;
                    rollCounts.put(diceValue, rollCounts.get(diceValue) - 3);
                    value = rollCounts.get(diceValue);
                }
            }

            if (diceValue == 5) {
                if (value >= 3) {
                    total += 500;
                    rollCounts.put(diceValue, rollCounts.get(diceValue) - 3);
                    value = rollCounts.get(diceValue);
                }

                if (value == 2) {
                    total += 100;
                    rollCounts.put(diceValue, rollCounts.get(diceValue) - 2);
                    value = rollCounts.get(diceValue);
                }

                if (value == 1) {
                    total += 50;
                    rollCounts.put(diceValue, rollCounts.get(diceValue) - 1);
                    value = rollCounts.get(diceValue);
                }
            }

            if (diceValue == 6) {
                if (value >= 3) {
                    total += 600;
                    rollCounts.put(diceValue, rollCounts.get(diceValue) - 3);
                    value = rollCounts.get(diceValue);
                }
            }


        }

        return total;
    }
}