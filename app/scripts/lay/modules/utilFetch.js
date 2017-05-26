
// export  async function fetchPost(postUrl, postDate) {
//     try {
//         let request = await fetch(postUrl, {
//             method: 'post',
//             headers: {
//             },
//             body: JSON.stringify(postDate)
//         });
//         let text = await request.text();
//         return JSON.parse(text);
//     } catch (error) {
//         console.log(`ERROR: ${error.stack}`);
//     }
// }

layui.define(function(exports){
  "use strict";
  
  exports('utilFetch', function(){
    alert("hellow");
  });
});