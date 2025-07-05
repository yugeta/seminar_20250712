/* <script src="https://cdn.jsdelivr.net/npm/mermaid/dist/mermaid.min.js"></script>
<script>mermaid.initialize({ startOnLoad: true });</script> */

/**
 * [Install]
 * <script type="module" src="mermaid.js"></script>
 */


class Main{
  constructor(){
    const script = document.createElement("script")
    script.src = "https://cdn.jsdelivr.net/npm/mermaid/dist/mermaid.min.js"
    script.onliad = (()=>this.loaded.bind(this))
    document.head.appendChild(script)
  }
  loaded(){
    mermaid.initialize({ startOnLoad: true })
  }
}

switch(document.readyState){
  case "complete":
  case "interactive":
    new Main();break
  default:
    window.addEventListener("DOMContentLoaded", (()=>new Main()))
}