import java.util.*;
public class leetcode6 {
    public static void main(String[] args) {
    Scanner scn = new Scanner(System.in);
    System.out.print("Enter a Num: ");
    int n = scn.nextInt();
        while(n != 0){
            if(n < 0){
                int x = n % 10;
                System.out.print(x);
                n = n * -1;
                n = n / 10;
            }else if(n > 0){
                int x = n % 10;
                System.out.print(x);
                n = n / 10;
            }
        }
    }
}
