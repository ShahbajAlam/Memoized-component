import { Dispatch, SetStateAction, memo, useState } from "react";

type ChildProps = {
    childCounter: number;
    onUpdate: Dispatch<SetStateAction<number>>;
};

const MemoizedChild = memo(function Child({
    childCounter,
    onUpdate,
}: ChildProps) {
    console.log("I am child");

    return (
        <div>
            <h1>Child counter value : {childCounter}</h1>
            <div>
                <button onClick={() => onUpdate((prev) => prev + 1)}>
                    Increase
                </button>
                <button onClick={() => onUpdate((prev) => prev - 1)}>
                    Decrease
                </button>
            </div>
        </div>
    );
});

function App() {
    const [appCounter, setAppCounter] = useState(0);
    const [childCounter, setChildCounter] = useState(0);

    console.log("I am app");

    return (
        <div>
            <h1>App counter value : {appCounter}</h1>

            <div>
                <button onClick={() => setAppCounter((prev) => prev + 1)}>
                    Increase
                </button>
                <button onClick={() => setAppCounter((prev) => prev - 1)}>
                    Decrease
                </button>
            </div>

            <MemoizedChild
                childCounter={childCounter}
                onUpdate={setChildCounter}
            />
        </div>
    );
}

export default App;
