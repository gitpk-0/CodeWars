import java.util.Arrays;

public class BubbleSort {

    public static void main(String[] args) {
        int[] array = new int[]{8, 5, 2, 9, 5, 6, 3};
        System.out.println(Arrays.toString(BubbleSort0.bubbleSort(array)));
    }
}


// Bubble Sort
// Starting from the beginning of the list, compare every adjacent pair, swap their position if they are not in the
// right order (the latter one is smaller than the former one). After each iteration, one less element (the last one)
// is needed to be compared until there are no more elements left to be compared.

// Time Complexity: O(n^2)
// Space Complexity: O(1)

// Even other O(n^2) sorting algorithms, like insertion sort, tend to have better performance than bubble sort.
// For this reason, bubble sort is rarely used in real-world applications.


// my solution
class BubbleSort0 {
    public static int[] bubbleSort(int[] array) {

        int count = array.length - 1;

        boolean isSorted = false;

        while (!isSorted) {
            isSorted = true;
            for (int i = 0; i < count; i++) {
                if (array[i] > array[i + 1]) {
                    // perform swap
                    int tmp = array[i];
                    array[i] = array[i + 1];
                    array[i + 1] = tmp;
                    isSorted = false;
                }
            }
            count--;
        }

        return array;
    }
}