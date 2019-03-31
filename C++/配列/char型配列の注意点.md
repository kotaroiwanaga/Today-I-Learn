char型の配列で文字列を扱う場合、末尾にNULL文字を入れる必要がある  
 ⇒N文字の文字列を扱うにはN+1サイズの配列が必要  
 ⇒配列はポインタであるため、標準出力する際は先頭アドレスから順々に表示していき、NULL文字が出たら終了する  

サンプルコード
```
#include <iostream>
#include <cstring>

int main(int argc, const char* argv[])
{
    char str0[10];
    char str1[10];
    
    std::strcpy(str0, "Hello");
    std::strcpy(str1, "Goobye");
    
    std::cout << "befor strcat" << std::endl;
    
    for(int i = 0; i < sizeof(str0); i++)
    {
        std::cout << i << " : " << str0[i] << std::endl;
    }
    
    std::cout << "str0 size : " <<  sizeof(str0) << std::endl;
    
    std::strcat(str0, str1);
    
    std::cout << std::endl << "after strcat" << std::endl;
    
    for(int i = 0; i < sizeof(str0); i++)
    {
        std::cout << i << " : " << str0[i] << std::endl;
    }
    
    std::cout <<  "str0 size : " << sizeof(str0) << std::endl;
    
    std::cout << std::endl << "cout str0 : " << str0 << std::endl;
}
```

標準出力
```
befor strcat
0 : H
1 : e
2 : l
3 : l
4 : o
5 : 
6 : 
7 : 
8 : 
9 : 
str0 size : 10

after strcat
0 : H
1 : e
2 : l
3 : l
4 : o
5 : G
6 : o
7 : o
8 : b
9 : y
str0 size : 10

cout str0 : HelloGoobye
```
