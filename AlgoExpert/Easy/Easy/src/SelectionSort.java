import java.util.Arrays;

public class SelectionSort {

    public static void main(String[] args) {
        int[] array = new int[]{8, 5, 2, 9, 5, 6, 3};
        System.out.println(Arrays.toString(SelectionSort0.selectionSort(array)));
    }
}


// Time Complexity: O(n^2)
// Space Complexity: O(1)


// my solution with hints - time = O(n^2) | space = O(1)
class SelectionSort0 {
    public static int[] selectionSort(int[] array) {

        for (int i = 0; i < array.length; i++) {
            boolean smaller = false;
            int smallest = array[i];
            int index = array[i];

            for (int j = i + 1; j < array.length; j++) {
                if (array[j] < smallest) {
                    smallest = array[j];
                    index = j;
                    smaller = true;
                }
            }

            if (smaller) {
                int tmp = array[i];
                array[i] = array[index];
                array[index] = tmp;
            }
        }

        return array;
    }
}
