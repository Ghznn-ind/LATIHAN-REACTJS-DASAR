import Latihan01_Components from './01_basics/Latihan01_Components'
import Latihan02_FunctionalComponents from './01_basics/Latihan02_FunctionalComponents'
import Latihan03_ClassComponents from './01_basics/Latihan03_ClassComponents'
import Latihan04_JSX from './01_basics/Latihan04_JSX'
import Latihan05_Props from './01_basics/Latihan05_Props'
import Latihan06_State from './01_basics/Latihan06_State'
import Latihan07_SetState from './01_basics/Latihan07_SetState'
import Latihan08_Destructuring from './01_basics/Latihan08_Destructuring'

import Latihan09_EventHandling from './02_events_and_lists/Latihan09_EventHandling'
import Latihan10_BindingEventHandlers from './02_events_and_lists/Latihan10_BindingEventHandlers'
import Latihan11_MethodsAsProps from './02_events_and_lists/Latihan11_MethodsAsProps'
import Latihan12_ConditionalRendering from './02_events_and_lists/Latihan12_ConditionalRendering'
import Latihan13_ListRendering from './02_events_and_lists/Latihan13_ListRendering'
import Latihan14_ListsAndKeys from './02_events_and_lists/Latihan14_ListsAndKeys'
import Latihan15_IndexAsKey from './02_events_and_lists/Latihan15_IndexAsKey'
import Latihan16_FormHandling from './02_events_and_lists/Latihan16_FormHandling'

import Latihan17_ContextPart1 from './03_context_and_http/Latihan17_ContextPart1'
import Latihan18_ContextPart2 from './03_context_and_http/Latihan18_ContextPart2'
import Latihan19_ContextPart3 from './03_context_and_http/Latihan19_ContextPart3'
import Latihan20_HttpIntro from './03_context_and_http/Latihan20_HttpIntro'
import Latihan21_HttpGet from './03_context_and_http/Latihan21_HttpGet'
import Latihan22_HttpPost from './03_context_and_http/Latihan22_HttpPost'

import Latihan23_UseState from './04_use_state/Latihan23_UseState'
import Latihan24_UseStatePrevState from './04_use_state/Latihan24_UseStatePrevState'
import Latihan25_UseStateObject from './04_use_state/Latihan25_UseStateObject'
import Latihan26_UseStateArray from './04_use_state/Latihan26_UseStateArray'

import Latihan27_UseEffectIntro from './05_use_effect/Latihan27_UseEffectIntro'
import Latihan28_UseEffectAfterRender from './05_use_effect/Latihan28_UseEffectAfterRender'
import Latihan29_UseEffectConditional from './05_use_effect/Latihan29_UseEffectConditional'
import Latihan30_UseEffectOnce from './05_use_effect/Latihan30_UseEffectOnce'
import Latihan31_UseEffectCleanup from './05_use_effect/Latihan31_UseEffectCleanup'
import Latihan32_UseEffectDependency from './05_use_effect/Latihan32_UseEffectDependency'
import Latihan33_FetchUseEffectPart1 from './05_use_effect/Latihan33_FetchUseEffectPart1'
import Latihan34_FetchUseEffectPart2 from './05_use_effect/Latihan34_FetchUseEffectPart2'
import Latihan35_FetchUseEffectPart3 from './05_use_effect/Latihan35_FetchUseEffectPart3'

import Latihan36_UseContextIntro from './06_use_context_and_reducer/Latihan36_UseContextIntro'
import Latihan37_UseContextPart2 from './06_use_context_and_reducer/Latihan37_UseContextPart2'
import Latihan38_UseContextPart3 from './06_use_context_and_reducer/Latihan38_UseContextPart3'
import Latihan39_UseReducerIntro from './06_use_context_and_reducer/Latihan39_UseReducerIntro'
import Latihan40_UseReducerSimple from './06_use_context_and_reducer/Latihan40_UseReducerSimple'
import Latihan41_UseReducerComplex from './06_use_context_and_reducer/Latihan41_UseReducerComplex'
import Latihan42_MultipleUseReducers from './06_use_context_and_reducer/Latihan42_MultipleUseReducers'
import Latihan43_UseReducerWithUseContext from './06_use_context_and_reducer/Latihan43_UseReducerWithUseContext'
import Latihan44_FetchUseReducerPart1 from './06_use_context_and_reducer/Latihan44_FetchUseReducerPart1'
import Latihan45_FetchUseReducerPart2 from './06_use_context_and_reducer/Latihan45_FetchUseReducerPart2'

import Latihan46_UseCallback from './07_advanced_hooks/Latihan46_UseCallback'
import Latihan47_UseMemo from './07_advanced_hooks/Latihan47_UseMemo'
import Latihan48_UseRefPart1 from './07_advanced_hooks/Latihan48_UseRefPart1'
import Latihan49_UseRefPart2 from './07_advanced_hooks/Latihan49_UseRefPart2'
import Latihan50_CustomHooksIntro from './07_advanced_hooks/Latihan50_CustomHooksIntro'
import Latihan51_UseInputCustomHook from './07_advanced_hooks/Latihan51_UseInputCustomHook'
import Latihan52_StateImmutability from './07_advanced_hooks/Latihan52_StateImmutability'

export const DAFTAR_LATIHAN = [
    { id: 1, topic: '#04 – Components', category: 'Basics & Components', component: Latihan01_Components },
    { id: 2, topic: '#05 – Functional Components', category: 'Basics & Components', component: Latihan02_FunctionalComponents },
    { id: 3, topic: '#06 – Class Components', category: 'Basics & Components', component: Latihan03_ClassComponents },
    { id: 4, topic: '#08 – JSX', category: 'Basics & Components', component: Latihan04_JSX },
    { id: 5, topic: '#09 – Props', category: 'Basics & Components', component: Latihan05_Props },
    { id: 6, topic: '#10 – State', category: 'Basics & Components', component: Latihan06_State },
    { id: 7, topic: '#11 – setState', category: 'Basics & Components', component: Latihan07_SetState },
    { id: 8, topic: '#12 – Destructuring props and state', category: 'Basics & Components', component: Latihan08_Destructuring },

    { id: 9, topic: '#13 – Event Handling', category: 'Events & Forms', component: Latihan09_EventHandling },
    { id: 10, topic: '#14 – Binding Event Handlers', category: 'Events & Forms', component: Latihan10_BindingEventHandlers },
    { id: 11, topic: '#15 – Methods as props', category: 'Events & Forms', component: Latihan11_MethodsAsProps },
    { id: 12, topic: '#16 – Conditional Rendering', category: 'Events & Forms', component: Latihan12_ConditionalRendering },
    { id: 13, topic: '#17 – List Rendering', category: 'Events & Forms', component: Latihan13_ListRendering },
    { id: 14, topic: '#18 – Lists and Keys', category: 'Events & Forms', component: Latihan14_ListsAndKeys },
    { id: 15, topic: '#19 – Index as Key Anti-pattern', category: 'Events & Forms', component: Latihan15_IndexAsKey },
    { id: 16, topic: '#21 – Basics of Form Handling', category: 'Events & Forms', component: Latihan16_FormHandling },

    { id: 17, topic: '#38 – Context Part 1', category: 'Context & HTTP', component: Latihan17_ContextPart1 },
    { id: 18, topic: '#39 – Context Part 2', category: 'Context & HTTP', component: Latihan18_ContextPart2 },
    { id: 19, topic: '#40 – Context Part 3', category: 'Context & HTTP', component: Latihan19_ContextPart3 },
    { id: 20, topic: '#41 – HTTP and React', category: 'Context & HTTP', component: Latihan20_HttpIntro },
    { id: 21, topic: '#42 – HTTP GET Request', category: 'Context & HTTP', component: Latihan21_HttpGet },
    { id: 22, topic: '#43 – HTTP Post Request', category: 'Context & HTTP', component: Latihan22_HttpPost },

    { id: 23, topic: '#45 – useState Hook', category: 'useState Hook', component: Latihan23_UseState },
    { id: 24, topic: '#46 – useState with previous state', category: 'useState Hook', component: Latihan24_UseStatePrevState },
    { id: 25, topic: '#47 – useState with object', category: 'useState Hook', component: Latihan25_UseStateObject },
    { id: 26, topic: '#48 – useState with array', category: 'useState Hook', component: Latihan26_UseStateArray },

    { id: 27, topic: '#49 – useEffect Hook', category: 'useEffect Hook', component: Latihan27_UseEffectIntro },
    { id: 28, topic: '#50 – useEffect after render', category: 'useEffect Hook', component: Latihan28_UseEffectAfterRender },
    { id: 29, topic: '#51 – Conditionally run effects', category: 'useEffect Hook', component: Latihan29_UseEffectConditional },
    { id: 30, topic: '#52 – Run effects only once', category: 'useEffect Hook', component: Latihan30_UseEffectOnce },
    { id: 31, topic: '#53 – useEffect with cleanup', category: 'useEffect Hook', component: Latihan31_UseEffectCleanup },
    { id: 32, topic: '#54 – useEffect with incorrect dependency', category: 'useEffect Hook', component: Latihan32_UseEffectDependency },
    { id: 33, topic: '#55 – Fetching data with useEffect Part 1', category: 'useEffect Hook', component: Latihan33_FetchUseEffectPart1 },
    { id: 34, topic: '#56 – Fetching data with useEffect Part 2', category: 'useEffect Hook', component: Latihan34_FetchUseEffectPart2 },
    { id: 35, topic: '#57 – Fetching data with useEffect Part 3', category: 'useEffect Hook', component: Latihan35_FetchUseEffectPart3 },

    { id: 36, topic: '#58 – useContext Hook Part 1', category: 'useContext & useReducer', component: Latihan36_UseContextIntro },
    { id: 37, topic: '#59 – useContext Hook Part 2', category: 'useContext & useReducer', component: Latihan37_UseContextPart2 },
    { id: 38, topic: '#60 – useContext Hook Part 3', category: 'useContext & useReducer', component: Latihan38_UseContextPart3 },
    { id: 39, topic: '#61 – useReducer Hook', category: 'useContext & useReducer', component: Latihan39_UseReducerIntro },
    { id: 40, topic: '#62 – useReducer (simple state & action)', category: 'useContext & useReducer', component: Latihan40_UseReducerSimple },
    { id: 41, topic: '#63 – useReducer (complex state & action)', category: 'useContext & useReducer', component: Latihan41_UseReducerComplex },
    { id: 42, topic: '#64 – Multiple useReducers', category: 'useContext & useReducer', component: Latihan42_MultipleUseReducers },
    { id: 43, topic: '#65 – useReducer with useContext', category: 'useContext & useReducer', component: Latihan43_UseReducerWithUseContext },
    { id: 44, topic: '#66 – Fetching data with useReducer Part 1', category: 'useContext & useReducer', component: Latihan44_FetchUseReducerPart1 },
    { id: 45, topic: '#67 – Fetching data with useReducer Part 2', category: 'useContext & useReducer', component: Latihan45_FetchUseReducerPart2 },

    { id: 46, topic: '#69 – useCallback Hook', category: 'Advanced Hooks & State', component: Latihan46_UseCallback },
    { id: 47, topic: '#70 – useMemo Hook', category: 'Advanced Hooks & State', component: Latihan47_UseMemo },
    { id: 48, topic: '#71 – useRef Hook Part 1', category: 'Advanced Hooks & State', component: Latihan48_UseRefPart1 },
    { id: 49, topic: '#72 – useRef Hook Part 2', category: 'Advanced Hooks & State', component: Latihan49_UseRefPart2 },
    { id: 50, topic: '#73 – Custom Hooks', category: 'Advanced Hooks & State', component: Latihan50_CustomHooksIntro },
    { id: 51, topic: '#76 – useInput Custom Hook', category: 'Advanced Hooks & State', component: Latihan51_UseInputCustomHook },
    { id: 52, topic: '#82 – State Immutability', category: 'Advanced Hooks & State', component: Latihan52_StateImmutability },
]