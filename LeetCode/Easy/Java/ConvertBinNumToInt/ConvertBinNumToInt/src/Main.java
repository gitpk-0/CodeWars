import java.util.ArrayList;
import java.util.HashMap;
import java.util.Scanner;


public class Main {

    public int getDecimalValue(ListNode head) {
        ListNode temp = head;
        int sum = 0;
        int count = 0;
        while (temp != null) {
            try {
                temp = head.next;
                count++;
            } catch (Exception e) {
                break;
            }
        }

        while (head != null) {
            sum += (head.val * ((int) Math.pow(2, count)));
            try {
                head = head.next;
                count--;
            } catch (Exception e) {
                break;
            }
        }
        return sum;
    }

    public static void main(String[] args) {
        System.out.println("Hello world!");
    }
}

