// 액션 타입을 선언합니다
// 뒤에 as const 를 붙여줌으로써 나중에 액션 객체를 만들게 action.type 의 값을 추론하는 과정에서
// action.type 이 string 으로 추론되지 않고 'counter/ACTIVE' 와 같이 실제 문자열 값으로 추론 되도록 해줍니다.
const ACTIVE = 'counter/ACTIVE' as const;
const DEACTIVE = 'counter/DEACTIVE' as const;
const ACTIVE_BY = 'counter/ACTIVE_BY' as const;

// 액션 생성함수를 선언합니다
export const activate = () => ({
  state: ACTIVE
});

export const deactivate = () => ({
  state: DEACTIVE
});

type ActiveAction =
  | ReturnType<typeof activate>
  | ReturnType<typeof deactivate>

// 이 리덕스 모듈에서 관리 할 상태의 타입을 선언합니다
type ActiveState = {
  state: Boolean;
};

// 초기상태를 선언합니다.
const initialState: ActiveState = {
  state: false
};

// 리듀서를 작성합니다.
// 리듀서에서는 state 와 함수의 반환값이 일치하도록 작성하세요.
// 액션에서는 우리가 방금 만든 CounterAction 을 타입으로 설정합니다.
function NavState(
  state: ActiveState = initialState,
  action: ActiveAction
): ActiveState {
  switch (action.state) {
    case ACTIVE: // case 라고 입력하고 Ctrl + Space 를 누르면 어떤 종류의 action.type들이 있는지 확인 할 수 있습니다.
      return { state: true };
    case DEACTIVE:
      return { state: false };
    default:
      return state;
  }
}

export default NavState;