package main;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;

public class Kata {

    public static int getLengthOfMissingArray(Object[][] arrayOfArrays) {
        if (arrayOfArrays == null || arrayOfArrays.length == 0) {
            return 0;
        }

        ArrayList<Integer> innerArrLengths = new ArrayList<>();

        for (int i = 0; i < arrayOfArrays.length; i++) {
            if (arrayOfArrays[i] == null || arrayOfArrays[i].length == 0) {
                return 0;
            }
            innerArrLengths.add(arrayOfArrays[i].length);
        }

        Collections.sort(innerArrLengths);

        int current = innerArrLengths.get(0);
        for (int i = 1; i < innerArrLengths.size(); i++) {
            if (innerArrLengths.get(i) != current + 1) {
                return innerArrLengths.get(i) - 1;
            }
            current = innerArrLengths.get(i);
        }

        return 0;
    }
}