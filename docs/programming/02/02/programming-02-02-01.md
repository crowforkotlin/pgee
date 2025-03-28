# 2.2.1 选择

当需要根据不同条件来选择是否执行语句的时候，可以使用选择结构。

## 2.2.1.1 if 语句

使用 `if`-`else if`-`else` 语句可以实现选择结构。例如：

```c
#include <stdio.h>

int main() {
    int a;
    scanf("%d", &a);

    if (a < 60) {
        printf("不及格");
    } else if (a < 70) {
        printf("合格");
    } else if (a < 80) {
        printf("中等");
    } else if (a < 90) {
        printf("良好");
    } else {
        printf("优秀");
    }

    return 0;
}
```

输出：

```
/Users/madray/Documents/JetBrains/CLion/CTest/cmake-build-debug/CTest
78
中等
Process finished with exit code 0
```

## 2.2.1.2 switch 语句

对于输入值可枚举的情况，可以使用 switch 语句。

switch 语句仅能使用整数类型，例如 `int`、`long` 等。

```c
#include <stdio.h>

int main() {
    int a;
    scanf("%d", &a);

    switch (a) {
        case 1:
            printf("星期一\n");
            break;
        case 2:
            printf("星期二\n");
            break;
        case 3:
            printf("星期三\n");
            break;
        case 4:
            printf("星期四\n");
            break;
        case 5:
            printf("星期五\n");
            break;
        case 6:
            printf("星期六\n");
            break;
        case 7:
            printf("星期日\n");
            break;
        default:
            printf("未知\n");
    }

    return 0;
}
```

输出：

```
/Users/madray/Documents/JetBrains/CLion/CTest/cmake-build-debug/CTest
2
星期二

Process finished with exit code 0
```

需要注意的是，每一个 `case` 表达式后面的语句里，都有一句 `break;`，这表示执行完这些语句后结束 `switch` 表达式的执行，如果没有 `break;`，会出现穿透现象，即 `switch` 语句会将后续所有的语句依次执行，无论是否匹配，直到遇到 `break;`。例如：

```c
#include <stdio.h>

int main() {
    int a;
    scanf("%d", &a);

    switch (a) {
        case 1: printf("星期一\n");
        case 2: printf("星期二\n");
        case 3: printf("星期三\n");
        case 4: printf("星期四\n");
        case 5: printf("星期五\n");
        case 6:
            printf("星期六\n");
            break;
        case 7: printf("星期日\n");
        default: printf("未知\n");
    }

    return 0;
}
```

输出：

```
/Users/madray/Documents/JetBrains/CLion/CTest/cmake-build-debug/CTest
2
星期二
星期三
星期四
星期五
星期六

Process finished with exit code 0
```

并且，由于 `default` 表达式不是必须放在末尾，若 `default` 放在前面，没有写 `break` 也会导致穿透现象。例如：

```c
#include <stdio.h>

int main() {
    int a;
    scanf("%d", &a);

    switch (a) {
        default: printf("未知\n");
        case 1: printf("星期一\n");
        case 2: printf("星期二\n");
        case 3: printf("星期三\n");
        case 4: printf("星期四\n");
        case 5: printf("星期五\n");
        case 6:
            printf("星期六\n");
            break;
        case 7: printf("星期日\n");
    }

    return 0;
}
```

输出：

```
/Users/madray/Documents/JetBrains/CLion/CPP_Test/cmake-build-debug/CPP_Test
10
未知
星期一
星期二
星期三
星期四
星期五
星期六

Process finished with exit code 0
```