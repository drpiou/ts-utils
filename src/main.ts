import './style.css'
import {append} from "../lib";

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <div class="card">
      <span id="counter">test...</span>
    </div>
  </div>
`

const element = document.querySelector<HTMLButtonElement>('#counter')!;

const source = ['a', 'b', 1];

const result = append(source, 'a', 'z', 2 as any);

element.innerHTML = `count is ${JSON.stringify(result)}`
