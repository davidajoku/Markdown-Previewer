marked.setOptions({
    breaks: true
})

const renderer = new marked.Renderer();

const defaultText = 
`# HEADER
## SUB HEADER

Click here for the [link](https://www.youtube.com/watch?v=5deADutcmAY)!

This is inline code: \`<div></div>\`

\`\`\`
function() {
    return "This is multiline code"
}
\`\`\`



- This
    - Is
        - A
            - List


>This is a block quote!

**This text should appear bold**

![The king himself](https://static.wikia.nocookie.net/ousamaranking/images/2/2f/Bojji.png)
`


function App () {
    const [text, setText] = React.useState(`${defaultText}`)

    return (
        
    
       <div className='text-center px-4'>
            <h1 className='p-4'>My Markdown Previewer</h1>
            <h3 className='m-3'>Editor</h3>
            <textarea className="textarea"
                name="text"
                id="editor"
                rows="10"
                value={text}
                onChange={(e) => setText(e.target.value)}
            >
            </textarea>
            <h3 className="m-3">Previewer</h3>
            <Preview markdown={text} />
        </div>
       
      

    )
} 

function Preview ({markdown}) {
    return (
        <div 
            dangerouslySetInnerHTML= {{
                __html: marked(markdown, {renderer: renderer}),
            }}
            id="preview"
        ></div>
    );
}

ReactDOM.render(<App />, document.getElementById("root"))