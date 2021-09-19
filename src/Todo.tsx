import { VFC } from "react";
import { TodoType } from "./types/todo";

export const Todo: VFC<Omit<TodoType, "id">> = (props) =>
  // props: Pick<TodoType, "userId" | "title" | "completed">
  {
    const { title, userId, completed = false } = props;
    const competedMark = completed ? "[完]" : "[未]";
    return <p>{`${competedMark} ${title}(ユーザー: ${userId})`}</p>;
  };
