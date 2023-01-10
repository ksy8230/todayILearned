---
title: Javascript 면접 주제
date: 2022-01-09
tags: ["javascript"]
publish: false
image: "./javascript.jpg"
---

## 1. prototype이란?

- 클래스 없이 상속의 효과를 구현하게 해주는 방법

### 1.1 Function.bind 가능한 이유?

- 자바스크립트에서 객체는 모두 숨김 프로퍼티 [[Prototype]] 를 갖고 있다. 함수도 객체이므로 마찬가지이다. 다만 함수 객체 내에는 기본적으로 prototype이라는 프로퍼티가 존재하고 이 프로퍼티 내부에 bind라는 메서드가 존재한다. 따라서 Function.bind가 실행 가능하다.

### 1.2 prototype을 이용해 상속 구현해 보기

```js
/**
 * 외부에서 받은 name 인자값을 name 프로퍼티로 갖는 함수 객체 생성
 * 이때 디폴트 프로퍼티가 constructor 프로퍼티로 설정된다
 * Rabbit.prototype = { constructor: Rabbit }
 * 그리고 constructor 프로퍼티는 함수 자신을 가리킨다
 */
function Rabbit(name) {
  this.name = name
}
// 해당 함수 객체의 프로퍼티에 eat=true 속성을 부여시킨다
Rabbit.prototype.eats = true
/**
 * 함수 객체를 new 생성자로 호출하면 만들어진 인스턴스는 { constructor: Rabbit }을 상속 받는다
 * 그리고 함수 객체를 new 생성자로 호출할 때 빈 객체를 만들어 해당 객체에 this를 할당시킨다
 * 따라서 만들어진 인스턴스의 name 값은 토끼1이 할당된다
 */
const rabbit = new Rabbit("토끼1")
/**
 * 만들어진 인스턴스는 {constructor: Rabbit}을 상속 받았으므로 아래의 콘솔 결과는 true가 나온다
 */
console.log(rabbit.eats)
```

## 2. this

- 현재 실행 문맥을 의미
- 전역 공간에선 전역 객체를 가리키고 호출한 객체가 있는 경우 그 객체를 가리킨다

### 2-1. 언제 결정되나?

- 함수를 메서드로 호출할 때 호출 주체를 가리킨다

### 2-2. 화살표 함수의 this는?

- 자바스크립트에서 함수는 호출될 때 매개변수로 전달되는 인자값 외에 암묵적으로 `arguments 객체`와 `this`를 전달 받는다.
- 그런데 화살표 함수는 함수를 호출할 때 this 바인딩 과정을 하지 않는다.

### 2-3. this를 변경시키는 방법은?

- 함수를 호출하는 방식은 크게 함수호출/메서드호출/생성자함수호출/call,apply,bind 호출로 가능하다

```js
// 함수 호출
let test = function () {
  console.log(this)
}
test()

// 메서드 호출
let obj = { method: test }
obj.method()

// 생성자 함수 호출
let instance = new test()

// apply/call/bind 호출
let obj2 = { name: "obj2" }
test.call(obj2)
test.apply(obj2)
test.bind(obj2)()
```

- call, apply를 이용해 `첫번째 매개변수`에 객체를 제공하면 `this`가 해당 객체에 할당된다

```js
let obj = { me: "me" }
function findThis() {
  return this.me
}
findThis.call(obj)
findThis.apply(obj)
```

- call, apply의 `두번째 매개변수`를 이용해 호출할 함수의 매개변수를 제공한다.

```js
function add(c, d) {
  return this.a + this.b + c + d
}
let obj = { a: 1, b: 2 }
/**
 * apply는 두번째 매개변수로 배열을 받는다
 */
add.call(obj, 3, 4) // 10
add.apply(obj, [3, 4]) // 10
```

- bind 함수로 호출하면 `첫번째 매개변수`의 값을 this로 할당한 새로운 함수를 생성한다.

```js
let obj = {
  x: 1,
  method: function () {
    return this.x
  },
}
console.log(obj.method()) // 1

let onlyMethod = obj.method
/**
 * 객체의 메서드 함수만 변수에 할당시켜 해당 함수를 호출하면 this가 obj 객체를 가리키는게 아닌 전역 객체를 가리킨다. 전역 객체는 x 값이 없어서 undefined가 된다.
 */
onlyMethod() // undefined

// onlyMethod
let bindx = onlyMethod.bind(obj)
```

## debugging

-버그 문제를 어떻게 해결? -디버깅 방식은?
-call stack?
-network 오류 상황 어떻게 확인?

## 클로저

4. 클로저 -클로저 정의한다면? -클로저를 활용한 구현경험? -커링이란? -고차함수란?

## FP

5. FP -배열의 고차함수 어떤걸 사용?
   -reduce 한번 구현해보기 -합성은 상속과 어떤 장점이 있는지?
   -immutable? 이것의 단점도 있는지?

## oop

6. oop
   -es classes 상속 경험이 있는가? -객체를 나누는 단위는? -어플리케이션 의존성을 낮추는 방법은?

## 비동기

7. 비동기

- promise, async/await 차이는?
- promise 패턴 설명
- setTimout에 promise를 적용한다면?
- 동시에 여러개의 관계없는 요청을 한다면?
- task queue? micro task queue?

## 객체

8. 객체

- 객체 표현 방식 중 자주 사용하는 것은?
- class, prototype, literal 차이?
- 자주 사용하는 메서드는?
- JSON 데이터 파싱 시 가장 신경쓰는 것은?

## 기타

9. 기타

- generator란?
- es next 관심있는 문법은?
- 정규표현식은 언제 써봤나?
