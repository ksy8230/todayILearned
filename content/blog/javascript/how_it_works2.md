---
title: Javascript 작동 원리
date: 2022-11-21
tags: ["javascript"]
publish: false
image: "./javascript.jpg"
---

새로운 프레임워크가 유난히 빠르게 등장하는 프론트엔드 영역이지만 코어에는 여전히 자바스크립트가 있고 이에 대한 학습이 부족하다는 생각이 들어 짬이 난 김에 공부한 내용을 글로, 그림으로 정리해 보려고 한다. 자바스크립트는 객체 기반의 스크립트 프로그래밍을 가능하게 해 주는 언어로 주로 웹 브라우저에서 사용이 되고 NodeJS와 같은 자바스크립트 런타임 환경에서도 활용이 가능하다. 자바스크립트를 구동할 수 있는 가장 대중적인 자바스크립트 엔진으로 V8이 있는데 이 엔진은 구글 크롬, NodeJS에서 사용 중이다.   
자바스크립트 코드 동작의 근간이 되는 곳부터 시작하기 위해 실행 컨텍스트와 콜스택부터 이해해보자.

***
자바스크립트 엔진 = 메모리 + 콜스택으로 이루어져있음 (그림 도식)
***

## 실행 컨텍스트
> 💡 자바스크립트 코드가 진행되는 상황을 추적하는데 필요한 정보를 모아둔 영역으로 자바스크립트 엔진의 메모리에 필요한 정보들이 할당된다   

동작의 개념을 이해하기 위해 크게 두 영역이 있음을 기억하자.   
코드를 실행시키는 **실행 컨텍스트 영역**   
코드 실행을 위해 저장되는 **메모리 영역**   

```js{numberLines: true}

function sum(a, b) {
    let result = a + b;
    return result;
}

let number = sum(1,2);

```

위 코드가 실제로는 어떤 과정을 거쳐 numer 변수 3이 할당되는 걸까.   
 
![Group 7](https://user-images.githubusercontent.com/24996316/203006199-a0310b46-e42d-450b-8631-50ce30686340.png)

자바스크립트(이하 js)는 우선 전역 메모리에 sum이라는 이름을 가진 함수 정보와 numer라는 변수를 등록시킨다.   
  

![Group 9](https://user-images.githubusercontent.com/24996316/203006312-553d6baf-cf0a-4ddd-bb18-11ea6bf48743.png)

함수 sum(1, 2)의 호출을 통해 전역 실행 컨텍스트에서 sum 함수 실행 컨텍스트가 실행된다. 이 실행 컨텍스트도 위 그림 도식과 마찬가지로 컨텍스트 영역과 메모리 영역(이하 지역 메모리 영역)을 생성한다. 이 지역 메모리 영역에서는 함수가 받은 매개 변수와 연산값을 담을 result 변수를 등록시킨다. 다시 sum 함수 실행 컨택스트로 돌아와서 함수 내부 연산을 실행하면 result에 3이라는 값이 할당된다.   

![Group 10](https://user-images.githubusercontent.com/24996316/203008449-c5fd724d-7e95-4dc8-bab5-7494706e2ab8.png)

그리고 이 result 값을 함수가 반환하면 전역 메모리 변수인 number에 3이 할당된다.   

![Group 11](https://user-images.githubusercontent.com/24996316/203007793-a1df4016-f966-4b94-beec-76a08e1f69d0.png)

sum 함수가 종료되면 실행 컨텍스트에서 sum 함수 실행 컨텍스트가 사라진다.   


## 콜스택
> 💡 엔진은 콜스택을 통해 현재 실행 중인 실행 컨텍스트가 어떤 것인지 알 수 있다. (aka. 실행 컨텍스트 추적기)   

비커처럼 생긴 콜스택이라는 구조체 바닥에 전역 컨텍스트가 있다고 가정하고 다시 다른 예시 코드를 보며 이해해 보자.   
![Group 12](https://user-images.githubusercontent.com/24996316/203011119-d35fbf6a-99dd-4640-af59-8dd835661313.png)


```js{numberLines: true}

function sum(c, d) {
    let sumResult = c + d;
    return sumResult;
}

function calc(a,b,expr) {
    let calcResult = expr(a,b);
    return calcResult;
}

let number = calc(1,2, sum);

```

![Group 7 (2)](https://user-images.githubusercontent.com/24996316/203011761-2ebcc9f2-6714-4ae4-ade9-a57bfb94c1e1.png)



```js{numberLines: true}

const discount = 0.5;

function getDiscountedPrice(price) {
    let result = price * discount;
    return result;
}

let totalPrice = getDiscountedPrice(10);

```

```js{numberLines: true}

function calc() {
    let number = 0;
    function increase() {
        number += 1;
    }
    return increase;
}

let newCalc = calc();
newCalc();
newCalc();

```
 
