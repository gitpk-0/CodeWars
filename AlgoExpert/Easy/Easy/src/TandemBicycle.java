import java.util.Arrays;

public class TandemBicycle {

    public static void main(String[] args) {
        int[] redShirtSpeeds = new int[]{5, 5, 3, 9, 2};
        int[] blueShirtSpeeds = new int[]{3, 6, 7, 2, 1};
        boolean fastest = true;
        System.out.println(TandemBicycle0.tandemBicycle(redShirtSpeeds, blueShirtSpeeds, fastest)); // 32

        int[] redShirtSpeeds1 = new int[]{5, 5, 3, 9, 2};
        int[] blueShirtSpeeds1 = new int[]{3, 6, 7, 2, 1};
        boolean fastest1 = false;
        System.out.println(TandemBicycle0.tandemBicycle(redShirtSpeeds1, blueShirtSpeeds1, fastest1)); // 25
    }
}

class TandemBicycle0 {

    public static int tandemBicycle(int[] redShirtSpeeds, int[] blueShirtSpeeds, boolean fastest) {
        Arrays.sort(redShirtSpeeds);
        Arrays.sort(blueShirtSpeeds);

        int sum = 0;

        for (int i = 0; i < redShirtSpeeds.length; i++) {
            if (fastest) { // maximum total speed
                // search for max - start at redShirtSpeeds first index (go forward), and blueShirtSpeeds last index (go backwards)
                sum += Math.max(redShirtSpeeds[i], blueShirtSpeeds[(redShirtSpeeds.length - 1) - i]);
            } else { // minimum total speed
                // search for min - compare each index of both arrays, and add the maximum of the two
                sum += Math.max(redShirtSpeeds[i], blueShirtSpeeds[i]);
            }
        }

        return sum;
    }
}
