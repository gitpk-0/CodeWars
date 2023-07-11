import java.util.Arrays;

public class ThreeLargestNumbers {

    public static void main(String[] args) {
        int[] array = new int[]{141, 1, 17, -7, -17, -27, 18, 541, 8, 7, 7};
        System.out.println(Arrays.toString(ThreeLargestNumbers0.findThreeLargestNumbers(array)));
    }
}


class ThreeLargestNumbers0 {
    public static int[] findThreeLargestNumbers(int[] array) {
        int low, mid, high;
        low = mid = high = Integer.MIN_VALUE;

        for (int i = 0; i < array.length; i++) {
            if (array[i] > high) {
                low = mid;
                mid = high;
                high = array[i];
            } else if (array[i] > mid) {
                low = mid;
                mid = array[i];
            } else if (array[i] > low) {
                low = array[i];
            }
        }

        return new int[]{low, mid, high};
    }
}