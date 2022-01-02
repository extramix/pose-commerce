import { useContext } from "react";
import { DataContext } from "../../store/GlobalState";

export default function Modal({}) {
  const { state, dispatch } = useContext(DataContext);
  const { modal, auth } = state;

  return <>
  <div>Modal pops!</div>
  </>;
}
