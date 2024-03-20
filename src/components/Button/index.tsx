import "./style/style.css"

export default function Button(props:any) {
  return (
    <a><button className="mainButton">{props.children}</button></a>
  );
}
