import java.util.Scanner;
import java.util.Stack;

public class Balanced_Brackets {
    public static Boolean handelclosing(Stack<Character> stk, char corresOchar){
        if(stk.size() == 0){
            return false;
        }else if(stk.peek() != corresOchar){
            return false;
        }else{
            stk.pop();
            return true;
        }
    }
    public static void main(String[] args) {
        Scanner scn = new Scanner(System.in);
        String str = scn.nextLine();

        Stack<Character> stk = new Stack();
        for(int i = 0; i < str.length(); i++){
            char ch = str.charAt(i);
            if(ch == '(' || ch == '{' || ch == '['){
                stk.push(ch);
            }else if(ch == ')'){
                Boolean val = handelclosing(stk, '(');
                if(val == false){
                    System.out.print(false);
                    return;
                }
            }else if(ch == '}'){
                Boolean val = handelclosing(stk, '{');
               if(val == false){
                    System.out.print(false);
                    return;
                } 
            }else if(ch == ']'){
                Boolean val = handelclosing(stk, '[');
                if(val == false){
                    System.out.print(false);
                    return;
                }
            }
        }
        if(stk.size() == 0){
            System.out.print(true);
        }else{
            System.out.print(false);
        }
    }
}
