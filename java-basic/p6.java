/*
   Integer Data:
    byte  --> 1byte --> 8-bit --> -128 to 127
    short --> 2byte --> 16-bit--> -32768 to 32767
    int   --> 4byte --> 32-bit--> - 2147483648 to 2147483647
    long  --> 8byte --> 64-bit --> 2^63 to 2^63-1
 */
class TestMain{
    public static void main(String args[]){
       short x = 32767;
       x = (short)(x + 1); // 21(int)
       System.out.println(x); // Error : 
    }
}