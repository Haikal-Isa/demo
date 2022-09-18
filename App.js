'use strict';
const summon = React.createElement;
const create = ReactDOM.createRoot;
const state = React.useState;
function Btn({msg}){
  let [C, setC] = state(false);
  return C?summon("em",null, msg):summon("button",{onClick: ()=>setC(true)},"ClickMe");
}
const root = create(document.getElementById('root'));
const another = create(document.getElementById('another-root'));
root.render(summon(Btn, {msg: "thanks"}));
another.render(summon(Btn, {msg: "I said Thanks"}));