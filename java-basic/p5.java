/*
   Default Value concept is applicable for array,data member 
   of the class
   byte,short,int,long = 0
   
   If you are defining/declaring varaible in constructor, static block,
   initializer block or in method is called local.
   c.E:- Variable x might not have been initialized
 */
class TestMain{
    public static void main(String args[]){
        short x = 130;
        System.out.println(x);
    }
}