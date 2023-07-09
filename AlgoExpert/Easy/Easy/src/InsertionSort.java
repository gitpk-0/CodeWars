import java.util.Arrays;

public class InsertionSort {

    public static void main(String[] args) {
        int[] array = new int[]{8, 5, 2, 9, 5, 6, 3};
        System.out.println(Arrays.toString(InsertionSort0.insertionSort(array)));
    }
}

// Insertion sort iterates, consuming one input element each repetition, and grows a sorted output list. At each
// iteration, insertion sort removes one element from the input data, finds the location it belongs within the
// sorted list, and inserts it there. It repeats until no input elements remain.

// Sorting is typically done in-place, by iterating up the array, growing the sorted list behind it.
// At each array-position, it checks the value there against the largest value in the sorted list (which happens
// to be next to it, in the previous array-position checked). If larger, it leaves the element in place and moves
// to the next. If smaller, it finds the correct position within the sorted list, shifts all the larger values up
// to make a space, and inserts into that correct position.

// Time Complexity: O(n^2)
// Space Complexity: O(1)

// my explanation:
// open a loop that starts at the second index of the array (i)
// open another loop that checks if the current index of the array (i/j) is greater than zero and also if
    // that value of the array is less than the value of the index in the array prior to it (j-1)
// if the value is less, swap the two indexes and decrement the value of (j)
// j is only decremented while it is greater than zero
// j is keeping track of the value of the current index until it is in its correct (sorted) position
// continue the outer loop until the end of the array is reached

// my solution with help
class InsertionSort0 {
    public static int[] insertionSort(int[] array) {

        for (int i = 1; i < array.length; i++) {
            for (int j = i; j > 0 && array[j] < array[j - 1]; j--) {
                // swap
                int tmp = array[j - 1];
                array[j - 1] = array[j];
                array[j] = tmp;
            }
        }

        return array;
    }
}