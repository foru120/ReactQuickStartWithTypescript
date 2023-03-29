import React from "react";

type Props = {
    id: number;
    deleteJob: (id: number) => void;
};

const TodoListItemDeleteButton = (props: Props) => {
    console.log("## TodoListItemDeleteButton");

    return (
        <span style={{ cursor: "pointer", color: "blue" }}
            onClick={() => props.deleteJob(props.id)}>
            삭제
        </span>
    );
};

export default React.memo(TodoListItemDeleteButton);