import java.lang.reflect.Array;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class Main {
    public static void main(String[] args) {

        // System.out.println(Arrays.toString(Program.sortedSquaredArray(new int[]{1, 2, 3, 5, 6, 8, 9})));
        // System.out.println(Arrays.toString(Program.sortedSquaredArray(new int[]{-2, -1})));
        // System.out.println(Arrays.toString(Program.sortedSquaredArray(new int[]{-5, -4, -3, -2, -1})));
        // System.out.println(Arrays.toString(Program.sortedSquaredArray(new int[]{-10, -5, 0, 5, 10})));


        System.out.println(Arrays.toString(Program1.sortedSquaredArray(new int[]{1, 2, 3, 5, 6, 8, 9})));
        System.out.println(Arrays.toString(Program1.sortedSquaredArray(new int[]{-2, -1})));
        System.out.println(Arrays.toString(Program1.sortedSquaredArray(new int[]{-5, -4, -3, -2, -1})));
        System.out.println(Arrays.toString(Program1.sortedSquaredArray(new int[]{-10, -5, 0, 5, 10})));


    }
}


// my solution - time complexity = O(n log n) [Arrays.sort adds n log n time], space complexity = O(1) [manipulating the existing array]
class Program {
    public static int[] sortedSquaredArray(int[] array) {

        int i = 0;
        for (int value : array) {
            array[i] = value * value;
            i++;
        }

        Arrays.sort(array);
        return array;
    }
}

// my solution w/ hints - time complexity = O(n), space complexity = O(n)
class Program1 {
    public static int[] sortedSquaredArray(int[] array) {

        int[] out = new int[array.length];

        int sInd = 0;
        int lInd = array.length - 1;

        int count = array.length - 1;

        while (count >= 0) {
            int small = Math.abs(array[sInd]);
            int large = Math.abs(array[lInd]);

            if (small < large) {
                out[count] = large * large;
                lInd--;
                count--;
            } else if (small > large) {
                out[count] = small * small;
                sInd++;
                count--;
            } else {
                out[count] = large * large;
                count--;
                lInd--;

                if (count < 0) {
                    break;
                }
                out[count] = small * small;
                count--;
                sInd++;
            }

        }

        return out;
    }
}

