/**
 * Duplicate_Brackets
 */
import java.util.*;
public class Duplicate_Brackets {

    public static void main(String[] args) {
        Scanner scn = new Scanner(System.in);
        String str = scn.nextLine();
        Stack<Character> stk = new Stack<>();
        for(int i = 0; i < str.length(); i++){
            char chr = str.charAt(i);
            if(chr == ')'){
                if(stk.peek() == '('){
                    System.out.print(true);
                    return;
                }else{
                    while(stk.peek() != '('){
                        stk.pop();
                    }
                }
            }else{
                stk.push(chr);
            }
        }
        System.out.print(false);
    }
}