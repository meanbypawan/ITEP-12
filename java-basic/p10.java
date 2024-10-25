/*
   char x = 'A';
   
   c/c++ char v/s java char

   c/c++
    1. char x = 'A'; // 1byte-->8-bit --> 2^8 --> 256
    2. ASCII
   java
    1. char x = 'A'; // 2byte--> 16-bit--> 2^16 --> 65536
    2. Unicode :-  (16-bit hexadecimal code)
 
   Integer data representation:-
     1. Decimal Integer [Base : 10 {0,1,2,3,4,5,6,7,8,9}]
     2. Octal Integer [Base : 8 [0,1,2,3,4,5,6,7]]
     3. Hexadecimal [Base : 16 [0,1,2,3,4,5,6,7,8,9,a,b,c,d,e,f]]

   Number System :-

   Decimal to octal conversion
   Decimal to hexadecimal
   octal to decimal
   hexadecimal to decimal

   ------------
   Binary

   Operator :-
   
 */
class TestMain{
    public static void main(String args[]){
        int a = 85; // decimal
        int b = 056; // octal
        int c = 0x41;
        System.out.println("a : "+a);
        System.out.println("b : "+b);
        System.out.println("c : "+c);
    }
}