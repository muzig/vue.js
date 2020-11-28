# TypeScript

## 入门

ts 分为三个部分:

- 语言(提供语法)
- 解析器(解析为js代码)
- 语言服务(IDE类似)

安装:

```bash
npm i -g typescript
```

## 接口

```ts
interface Person {
    fn: string;
}
```

## 面向对象编程

```ts
class Student {
    fullName: string;
    constructor(public fn, public ln) {
        return this.fullName = fn+ln;
    }
}
```
