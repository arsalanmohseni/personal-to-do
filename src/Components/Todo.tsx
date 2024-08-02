interface TodoProps {
    text: string;
}

const Todo: React.FC<TodoProps> = (props) => {
    const todotext = props?.text;

    return <p className="text-2xl">{todotext}</p>;
};

export default Todo;
