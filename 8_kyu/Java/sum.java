public class Positive {
    public static int sum(int[] arr) {

        int total = 0;
        int arrLength = arr.length;

        for (int i = 0; i < arrLength; i++) {
            if (arr[i] > 0) {
                total = total + arr[i];
            }
        }
        return total;
    }
}