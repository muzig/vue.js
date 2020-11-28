function hello(name) {
  return "Hello, " + name;
}
function helloPerson(person) {
  return person.fn + person.ln;
}
// 面向对象
var Student = /** @class */ (function () {
  // public 默认生成成员
  function Student(fn, ln) {
    this.fn = fn;
    this.ln = ln;
    this.fullName = fn + ln;
  }
  return Student;
})();
var userName = "Wnag";
var person = {
  fn: "xiao",
  ln: "ming",
};
var stu = new Student("xiao", "hua");
document.body.innerHTML = hello(userName);
document.body.innerHTML = helloPerson(person);
document.body.innerHTML = helloPerson(stu);
