import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, addBy } from '../store/slices/counterSlice';

function counter() {

    const count = useSelector((state) => state.counter.value);

    const dispatch = useDispatch();

    return (
        <>
            <h1>{count}</h1>
            <button onClick={() =>{console.log('dispatching increment from component.'); dispatch(increment())}}>Increment</button>
            <button onClick={() => dispatch(decrement())}>Decrement</button>
            <button onClick={() => dispatch(addBy(3))}>Add 3 to current value</button>
        </>
    );
}

export default counter;