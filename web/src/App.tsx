import { Widget } from "./components/Widget";

interface ButtonProps {
  text?: string;
}

function Button(props: ButtonProps) {
  return <button className="bg-violet-500 text-violet-100 px-4 h-10 rounded hover:bg-violet-700 transition-colors">{props.text ?? 'Default'}</button>
}

export function App() {
  return <Widget />
}