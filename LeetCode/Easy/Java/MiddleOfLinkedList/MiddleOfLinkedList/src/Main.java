import java.util.ArrayList;
import java.util.List;

public class Main {

    public static ListNode middleNode(ListNode head) {
        ListNode mid = head;
        ListNode end = head;

        while (end != null && end.next != null) {
            mid = mid.next;
            end = end.next.next;
        }
        return mid;
    }


    public static void main(String[] args) {
        System.out.println();
    }
}

