import java.util.Arrays;

public class MinimumWaitingTime {

    public static void main(String[] args) {
        int[] queries = new int[]{3, 2, 1, 2, 6}; // sorted = 1,2,2,3,6
        System.out.println(MinimumWaitingTimeProgram0.minimumWaitingTime(queries));   // 17
    }
}

// my solution without hints - time = O(nlogn) | space = O(1)
class MinimumWaitingTimeProgram0 {
    public static int minimumWaitingTime(int[] queries) {
        queries = Arrays.stream(queries).sorted().toArray();

        int prev = 0;
        int sum = 0;

        for (int i = 0; i < queries.length-1; i++) {
            sum = sum + prev + queries[i];
            prev = prev + queries[i];
        }

        return sum;
    }
}
