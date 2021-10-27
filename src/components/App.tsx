const App = () => {
    return (
        <div>
            <Child color="red"/>
            <Child color="blue"/>
            <Child color="yellow"/>
        </div>
    );
};

interface ChildProps {
    color : string;
}


const Child = ({ color } : ChildProps) => {
    return (
        <div>
            { color }
        </div>
    );
}




export default App;