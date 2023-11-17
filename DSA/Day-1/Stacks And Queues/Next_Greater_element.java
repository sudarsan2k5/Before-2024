import java.util.*;
public class Next_Greater_element {
    public static int[] ansArray(int[] arr){
        int[] nge = new int[arr.length];
        Stack<Integer> stk = new Stack<>();
        stk.push(arr[arr.length - 1]);
        nge[arr.length - 1] = -1;

        for(int i = arr.length - 2; i >= 0; i--){
            while(stk.size() > 0 && arr[i] >= stk.peek()){
                stk.pop();
            }
            if(stk.size() == 0){
                nge[i] = -1;
            }else{
                nge[i] = stk.peek();
            }
            stk.push(i);
        }
        return nge;
    }
    public static void main(String[] args) {
        int[] arr = {5, 3, 8, -2, 7};
        int[] finalArray = ansArray(arr);
        for(int i = 0; i < finalArray.length; i++){
            System.out.print(finalArray[i]);
        }
    }
}
