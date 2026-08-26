function extractBodyContent(htmlString) {
    if (typeof htmlString === 'string' && htmlString.length <= 10000) {
        let bodyStart = htmlString.indexOf('<body>');
        let bodyEnd = htmlString.indexOf('</body>');
        return htmlString.slice(bodyStart+6,bodyEnd);
       
        
    }
}
console.log(extractBodyContent(extractBodyContent(`
   "<!DOCTYPE html>
<html>
  <body>
    <p>Hello world!</p>
    <div>
      <span>Nested content.</span>
    </div>
  </body>
</html>
    `)))
console.log(extractBodyContent(extractBodyContent(`
   "<html>
  <head>
    <title>My Page</title>
  </head>
  <body>
    <h1>Welcome!</h1>
    <p>This is my new React app.</p>
  </body>
</html>"
    `)))
console.log(extractBodyContent(extractBodyContent(`
   "<html>
  <head>
    <title>My Page</title>
  </head>
  <body>
    
  </body>
</html>"
    `)))