/*
            No typecasting
   ------------------------------>
    byte---> short--->int--->long
   <------------------------------ 
           Typecasting is required..
-----------------------------------------------------
   b * b = i
   b + s = i
   b + i = i
   s + i = i
   s + s = i
   i + i = i
   b + L = L
   s + L = L
   L + i = L
   L + L = L 

 */
class TestMain{
    public static void main(String arsg[]){
            System.out.println(2147483647 + 1); // Compile time
            int x = 2147483647 + 1;
            System.out.println(x);

            long y = 2147483648L;
            System.out.println(y);
            
            long z = 1;
            System.out.println(z);

            int a = 1L;
            System.out.println(a);
    }
}