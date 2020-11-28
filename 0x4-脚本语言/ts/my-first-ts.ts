function hello(name: string) {
  return "Hello, " + name;
}

// 接口定义
interface Person {
  fn: string;
  ln: string;
}

function helloPerson(person: Person) {
  return person.fn + person.ln;
}

// 面向对象
class Student {
  fullName: string;
  // public 默认生成成员
  constructor(public fn, public ln) {
    this.fullName = fn + ln;
  }
}

let userName = "Wnag";
let person = {
  fn: "xiao",
  ln: "ming",
};
let stu = new Student("xiao", "hua");

document.body.innerHTML = hello(userName);
document.body.innerHTML = helloPerson(person);
document.body.innerHTML = helloPerson(stu);
