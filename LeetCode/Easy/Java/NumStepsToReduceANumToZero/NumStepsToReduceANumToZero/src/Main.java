public class Main {
    public static int numberOfSteps(int num) {
        int count = 0;
        while (num > 0) {
            if (num % 2 == 0) {
                num /= 2;
                count++;
            }
            else {
                num -= 1;
                count++;
            }
        }
        return count;
    }

    public static void main(String[] args) {
        System.out.println(numberOfSteps(14)); // 6
        System.out.println(numberOfSteps(8)); // 4
        System.out.println(numberOfSteps(123)); // 12
    }
}