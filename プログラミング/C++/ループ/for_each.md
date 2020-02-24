- vc++標準だとfor_eachってないっぽい(boostとかあればできる)

### forとiteratorを使う
```
#include <iostream>
#include <vector>

int main(int argc, const char* argv[])
{
    int intArray[] = {1, 2, 3};
    //std::vector<int> v(intArray, intArray+sizeof(intArray));
    std::vector<int> v;
    v.push_back(1);
    v.push_back(2);
    v.push_back(3);

    for(std::vector<int>::const_iterator itr = v.begin(); itr != v.end(); ++itr)
    {
        std::cout << *itr << std::endl;
    }
    
}
```
## 参考
https://cpprefjp.github.io/lang/cpp11/range_based_for.html

https://qiita.com/_EnumHack/items/f462042ec99a31881a81

https://stackoverflow.com/questions/2850312/use-of-for-each-on-map-elements

https://cpprefjp.github.io/reference/algorithm/for_each.html

https://boostjp.github.io/tips/foreach.html

https://cpprefjp.github.io/lang/cpp11/lambda_expressions.html
