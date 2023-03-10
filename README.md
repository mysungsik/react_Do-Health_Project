# Do-Health! 식단 캘린더와 운동에 대한 모든 것을 알려드립니다!

<hr style="border: solid 2px black;">
<br>

## &#10004; 2023년 01월 11일 버젼 업데이트

달력의 week, month 서비스가 추가되었습니다.

## &#127828;서비스소개

<hr style="border: solid 1px black;">
<br>

**"운동을 하고싶어요! 다이어트를 하고싶어요! 어떻게하죠? "**

<br/>
Do-health 와 함께, 운동의 정보를 알아가고, 자신만의 식단을 만들어보세요
로그인을 하고 캘린더를 통해, 매일 먹은 식단을 적어보세요
<br>

**데모** : https://react-do-health-project.vercel.app/
<br><br>

## &#127828; 사용 기술

<hr style="border: solid 1px black;">
<p>
<img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black" style="border-radius:10px"> <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=JavaScript&logoColor=white" style="border-radius:10px">  
<img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=HTML5&logoColor=white" style="border-radius:10px"> <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=CSS3&logoColor=white" style="border-radius:10px"> 
<img src="https://img.shields.io/badge/reactrouter-CA4245?style=for-the-badge&logo=reactrouter&logoColor=white" style="border-radius:10px"><img src="https://img.shields.io/badge/firebase-FFCA28?style=for-the-badge&logo=firebase&logoColor=black" style="border-radius:10px"> 
<img src="https://img.shields.io/badge/typescript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" style="border-radius:10px"> <img src="https://img.shields.io/badge/redux-764ABC?style=for-the-badge&logo=redux&logoColor=white" style="border-radius:10px">
</p>

### 기타 애니메이션

```
React-Transition-group
Animated.css
react-animation-on-scroll
```

### 달력 라이브러리

```
FullCalendar
```

<br>

<hr>

### 주요 버전정보

```js

    react : v18.2.0
    typescript : v4.9.4
    firebase : v9.15.0
    fullcalendar : v6.0.2
    react-router : v5.3.4
    redux-toolkit : v1.9.1
    react-redux : v8.0.5


```

<hr>

<hr>

## 디렉토리 구조 설계

<br>

```
root
├─ public
└── src
    ├─ components      * 컴포넌트들이 들어있습니다.
    │ ├─ 0.adding           * ADMIN 유저가, DB에 데이터를 넣는 컴포넌트입니다.
    │ ├─ 1.main-components  * HOMEPAGE 컴포넌트가 들어있습니다.
    │ ├─ 2.how-to-workout
    │ ├─ 3.how-to-wight-loss
    │ ├─ 4.find-foods
    │ ├─ 5.sign-up
    │ ├─ 6.sign-in
    │ ├─ noutfound      * 페이지 주소를 잘못적을 경우 나오는 컴포넌트입니다.
    │ └─ UI
    │   ├─ descriptionCard
    │   ├─ foodsCard
    │   └─ layout
    ├─ fullcalendar   * fullcalendar Class Components 들이 들어있습니다.
    ├─ helper         * DB와 소통하는 로직과, 페이지를 동작하게하는 기본 로직(계산, 동작방식) 이 들어있습니다.
    ├─ pages          * pages 들이 들어있습니다.
    └─ store          * redux-toolkit 의 store 가 들어있습니다.


```

기본적인 pages 들에는 페이지의 기본이 되는 HEAD, 및 컴포넌트들이 들어있습니다.

componets 안에는 실제로 화면에 구현될 코드들이 들어있습니다.

helper 폴더 안에는 공통되는 기능 구현을 위한 로직들이 들어있습니다.
DB 와 소통하는 로직 뿐 아니라, 계산 로직 등 앱을 동작하게 만드는 로직도 함께 구성되어있습니다.

store 안에는 slice와 action 이 들어있습니다.
각각의 역할마다 다른 slice 를 구성합니다.

<hr>


<br>

### &#127775; 발전 사항

```
1. 타입 스크립트의 사용
    암묵적 타입변환에 의한 오류와 컴파일 단계에서 코드오류를 해결할 수 있었습니다.
    지정한 변수를 전부 외워야 하는 불상사를 방지하고 타이핑 오류를 방지할 수 있었습니다.    
   
2. Redux-toolkit 의 사용
     중앙저장소를 사용하여 props-drilling 을 방지했습니다.
     그로인한 가독성 증가와 유지보수를 간편하게 할 수 있게되었습니다.

3. 외부 API 통신을 이용
     Firebase Auth 를 사용하기 위해 외부의 API(Firebase API) 를 사용하여
    로그인 기능을 구현할 수 있게 되었습니다.

4. React-Router 의 적응
    React-Router 기능을 이해하고 그것에 사용에 익숙해졌습니다.
    SPA에서의 Link 의 사용 이유와  그것을 배포할때 새로고침 오류가 발생하는 이유에 대해 이해할 수 있었습니다.    

5. 새로운 라이브러리 사용에 대한 적응
     DOCS 를 찾고 그것을 앱에 적용시키는데 익숙해졌습니다.
     Full-Calendar 같은 달력 라이브러리나,  간단한 애니메이션 라이브러리 등을 사용하여 익숙해졌습니다.

6. 환경변수를 사용한 데이터 보호
    dotenv 를 사용해 환경변수를 사용해보았습니다.
    API KEY, ID, PASSWORD 등을 숨긴채 데이터 통신을 할 수 있습니다. 


```

## 기능 설계와 기본 로직
<hr>

#### 구현기능

1. 로그인과 회원가입 기능을 Firebase-auth 기능을 이용합니다. email 과 password 를 이용한 인증을 합니다.
2. 헬스 방법을 알아보는 정보전달 페이지를 작성합니다.
3. 활동량과 몸무게에 따른 AMR(하루 총 소비 칼로리) 를 계산해주고, 추가 운동을 추천합니다.
4. 식단 정보를 알려줍니다.
5. 유저는 로그인 이후에, 캘린더에 식단을 적을 수 있습니다.
   식단은 적고, 지울 수 있습니다.
6. "media-query" 를 통해 모바일 화면을 구현하였습니다.

<hr/>

#### 기본 로직

1. 각 컴포넌트 안의 선택 기능이 있다면, store 의 각 slice 안에 들어갑니다.
2. slice 의 reducer 로직에 따라 값이 변화합니다.
3. 각 정보는 페이지의 시작과 함께 firebase DB 에서 가져옵니다.
4. 캘린더는 유저의 정보와 함께, firebaseDB 에 저장됩니다.
5. fullcalendar 의 사용에 따라, 각 유저는 DB의 값을 가져와 자신의 캘린더에 표기됩니다.

<hr>

## &#127828;주요 기능과 코드

<hr style="border: solid 1px black;">

### &#129372; 로그인 및 회원가입


FireBase Auth 를 통해, 회원가입 및 로그인을 구현합니다

```js

Firebase AUTH 는 FireBase와의 "API 통신"을 통해 
firebase 에 CLIEND ID 와 CLIENT PASSWORD 를 포함한 URL 을 요청하여 
적절한 값일 경우 "Access_Token 을 JWT 의 형식으로 응답"하는 방식입니다.

JWT 의 값을 받은 유저는 쿠키에 해당 값을 저장하고 로그인 유지의 용도로 사용합니다.

쿠키를 사용한 이유는 Access_Token 자체에 중요 정보가 없기 때문입니다.
또한, 작은 용량을 가진 쿠키에도 충분히 데이터 크기가 작기 때문에 쿠키로 저장하였습니다.

```


<p> <img src= "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2F9ZkJt%2Fbtr0HSg1E4L%2F480UQW6Vk6oXnFUz6MPbpk%2Fimg.png" style="width=500px" style="height=350px"/>
</p>

<hr>



<p>
<img src="/public/for-markdown-img/1.login.png" style="width:300px"; style="height:480px"; >
<img src="/public/for-markdown-img/2.signup.png" style="width:300px"; style="height:480px";>
</p>



<br>

- fetch 를 통해, 적절한 검증 후 DB에 정보 저장
- FireBase Auth 를 통해, FireBase Auth API 에, DB 의 SECRET API KEY 를 포함한 요청 전달
- 요청에 따라, Token 을 발급할 유저 정보를 FireBase Auth 에 저장
- 로그인시, 유효한 유저정보라면, FireBase 에서 idToken 을 발급
- 발급받은 idToken을 react-cookie 를 통해, 유저의 브라우저(쿠키) 에 저장 후, 필요에 따라 요청
- 클라이언트 사이트 보호를 통해, 유저가 요청하는 정보에, idToken 이 담겨있지 않다면, 몇몇 페이지는 이용 불가
- FireBase Auth 에, 유저의 유효한 idToken 을 함께 보내, 유저의 아이디와 비밀번호 변경 가능

```js
< helper / signin-handler.tsx >

    export const signinHandler = async (email: string, password: string) => {
      const sendRequest = await fetch(
        `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${process.env.REACT_APP_FIREBASE_API_KEY}`,
        {
          method: "POST",
          body: JSON.stringify({ email, password, returnSecureToken: true }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const responseData = await sendRequest.json();

      return responseData;
    };

```
```js

< components / 5.sign-in / signin-form.tsx >

const SignInForm = () => {
  const history = useHistory();
  const [cookies, setCookie] = useCookies(["auth-cookie"]);
  const [error, setError] = useState<string>("");
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);


  const submitHanlder = async (e: FormEvent) => {
    e.preventDefault();
    const email = emailRef.current!.value;
    const password = passwordRef.current!.value;
    const responseData = await signinHandler(email, password);

    if (responseData.idToken) {
      // idToken 이 있다면 OK
      setCookie("auth-cookie", {
        idToken: responseData.idToken,
        email: responseData.email,
      });
      history.replace("/");
    } else if (responseData.error.message === "EMAIL_NOT_FOUND") {
      // 아니면 에러메시지
      setError("이메일을 잘못 입력하셨습니다.");
    } else if (responseData.error.message === "INVALID_PASSWORD") {
      // 아니면 에러메시지
      setError("패스워드를 잘못 입력하셨습니다.");
    }
  };

```

<br>
<br>

### &#129372; 메인페이지

<hr>
<img src="/public/for-markdown-img/0.mainpage.PNG" style="width:300px"; style="height:480px"; >
<br>

- react-animation-on-scroll 을 이용해, 스크롤 애니메이션을 만들었습니다.
- 전체적인 페이지에 대한 설명이 나와있습니다.

```js

    import { AnimationOnScroll } from "react-animation-on-scroll";
    import "animate.css/animate.min.css";

    ...
        <AnimationOnScroll animateIn="animate__fadeInLeft" duration={2}>
            <h1>헬스 +</h1>
        </AnimationOnScroll>
    </div>
    <div className={styles.how_to_workout_text_div_desc}>
    ...
        <AnimationOnScroll
            animateIn="animate__fadeInLeftBig"
            duration={1.5}
        >
            <p>운동 부위를 선택하세요</p>
            <p>적절한 운동을 선택하세요</p>
            <p>주의사항에 유의하세요</p>
            <p>직접 따라해보세요!</p>
        </AnimationOnScroll>
```

<br>
<br>

### &#129372; 헬스 +

<hr>

<p>
<img src="/public/for-markdown-img/3.do-part.png" style="width:300px"; style="height:480px"; >
<img src="/public/for-markdown-img/4.do-part.png" style="width:300px"; style="height:480px"; >
<img src="/public/for-markdown-img/5.do-part.png" style="width:300px"; style="height:480px"; >
</p>

<br>

- 상단의 파츠 버튼을 누르면, 그에 따른 컨텐츠들이 변경됩니다.
- "모든 운동 데이터를 Redux-Store 에서 가져온 후", Array.filter() 매서드를 통해, 걸러냅니다.
- 파츠 버튼은, part를 담고있는 State를 boolean 타입으로 토글하며, 토글(true)된 파츠는, 활성화됩니다

**< Redux Toolkit Slice >**

```js
    <store / choose-part-slice.tsx >

    const ChoosPartsSlice = createSlice({
        name: "choose-part",
        initialState,
        reducers: {
            ChestDescription(state) {
            state.descriptionState = { ...initialState.descriptionState };
            state.descriptionState.onDefaultPart = false;
            state.descriptionState.onChestPart = true;
            },
            BackDescription(state) {
            state.descriptionState = { ...initialState.descriptionState };
            state.descriptionState.onDefaultPart = false;
                ...
```

**<선택파츠>**

```js
   const ChooseParts = () => {
    const dispatch = useDispatch();

    const onChestHandler = useCallback(() => {
        dispatch(ChooseActions.ChestDescription());
    }, [dispatch]);
    ...
```

**<선택된파츠에따른설명 >**

```js
    import { RootState } from "../../store";

    const ChestPartDes = () => {
    const exerciseData = useSelector(
        (state: RootState) => state.exercise.exerciseData
    );
    const filterdData = exerciseData.filter((item) => item.part === "chest");
        ...

```

<br>
<br>

### &#129372; 체중 -

<hr>

<p>
<img src="/public/for-markdown-img/6.do-loss.png" style="width:300px"; style="height:480px"; >
<img src="/public/for-markdown-img/7.do-loss.png" style="width:300px"; style="height:480px"; >
<img src="/public/for-markdown-img/8.do-loss.png" style="width:300px"; style="height:480px"; >
<img src="/public/for-markdown-img/9.do-loss.png" style="width:300px"; style="height:480px"; >
</p>

<br>

- 해리스-베네딕트(Harris-Benedict) 공식을 통해, AMR(전체 소비 칼로리) 를 계산합니다.
- 유저의 input 으로, 하루 소비 칼로리를 받습니다.
- 받은 칼로리와 AMR 을 이용하여, 다이어트에 필요한 운동방법과 시간을 알려드립니다.

```js

    <helper / calculate-logic.tsx >

    // AMR 계산 로직
    export const CalculateFunction = (
    sex: number,
    age: number,
    weight: number,
    tall: number,
    activity: number
    ) => {
    let BMR;
    if (sex === 1) {
        BMR = 88.4 + 13.4 * weight + 4.8 * tall - 5.68 * age;
    } else {
        BMR = 447.6 + 9.25 * weight + 3.1 * tall - 4.33 * age;
    }
    const finalAMR = BMR * activity;

    return finalAMR;
    };

```

<br>
<br>

### &#129372; 식단 +

<hr>
<img src="/public/for-markdown-img/10.do-eat.png" style="width:300px"; style="height:480px"; >
<br>

- 각 음식을 카테고리별로 정리, 카테고리를 누르면, 그에 해당하는 음식들을 나열합니다.
- 각 음식들은 Food Card Module 에 의해 반복됩니다.
- 반응형 grid 를 만들었습니다.

```js

    움직이는 버튼 backround 를 위한 class 변경

    < comnponents / 4.find-foods / 1.Foods-List.tsx >

        if (selected === "탄수화물") {
            selected_style = styles.selected_hydro; // 선택시 클래스 변경
            text_highlight_hydro = styles.selected_text_hydro; // 선택시 클래스 변경
        }
        if (selected === "단백질") {
            selected_style = styles.selected_protein;
            text_highlight_protein = styles.selected_text_protein;
        }
        if (selected === "지방") {
            selected_style = styles.selected_fat;
            text_highlight_fat = styles.selected_text_fat;
        }
        return (
                ...
            <div className={selected_style}></div>
                        ...
```

<br>
<br>

### &#129372; 로그인 후 찜하기, 식단 캘린더 기능

<hr>
<img src="/public/for-markdown-img/11.calendar.png" style="width:300px"; style="height:480px"; >
<br>

- Full-Calendar 라이브러리를 사용하였습니다.
- 로그인을 하게되면, 캘린더 기능을 사용할 수 있습니다.
- 캘린더에 등록하는 모든 데이터는 Fire-Base DB 에 저장되며, 각 유저별 다른 데이터로 자동 필터됩니다.

```js

    <helper / calendar-add-to-DB.tsx >

    export const addCalendarToDb = async (exerciseData: PostCalendarType) => {
        await fetch(
            "https://do-health-project-default-rtdb.firebaseio.com/user/calendar.json",
            {
            method: "POST",
            body: JSON.stringify(exerciseData),
            headers: {
                "Content-Type": "application/json",
            },
            }
        );
    };

    <helper / remove-add-to-DB.tsx >

        export const removeCalendarToDb = async (firebaseid: string) => {
            await fetch(
        `https://do-health-project-default-rtdb.firebaseio.com/user/calendar/${firebaseid}.json`,
        {
            method: "DELETE",
        }
        );
    };


```

풀캘린더의 로직은 components 안의 fullcalendar 폴더에 있습니다.

<br>


### &#129372; 미디어쿼리와 모바일화면

** module.css 를 안에 미디어쿼리를 통한 모바일 화면을 구축하였습니다. **
