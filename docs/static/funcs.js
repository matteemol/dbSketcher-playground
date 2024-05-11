var shortlink = "";

function callfuncs() {
//    document.getElementById('render-image').style.display="block";
    alert("Click!");
  }

function adjust_size() {
    document.getElementById('render-image').style.width="100%";
    document.getElementById('render-image').style.height="100%";
    document.getElementById('render-image').style.objectFit="contain";
    }
    
function generate_link() {
text = document.getElementById('uml').value;
console.log("text="+text);
cjCall("com.plantuml.api.cheerpj.v1.Info", "encode", text).then((res) => {
    console.log("res="+res);
    shortlink = res;
    url = "https://www.plantuml.com/plantuml/uml/" + res;
    // alert(url);
//    document.getElementById('permlink').innerText="See in PlantUML Server";
});
}

function createPNG() {
    text = document.getElementById('uml').value;
    console.log("text="+text);
    cjCall("com.plantuml.api.cheerpj.v1.Png", "convertToBlob", "light", text, "/files/result.png").then((res) => {
        console.log("png res="+res);
        cjFileBlob("result.png").then((blob) => {
            document.getElementById('render-image').src = window.URL.createObjectURL(blob);
        });
        document.getElementsByClassName('render-button')[0].style.visibility="visible";
        adjust_size();
    });
/*    cjCall("com.plantuml.api.cheerpj.v1.Png", "encode", text).then((res) => {
        console.log("res="+res);    
*/
}
    /*
function createPNG() {
text = document.getElementById('uml').value;
//	document.getElementById('permlink').innerText="";
cjCall("com.plantuml.api.cheerpj.v1.Raw", "convert", "light", text).then((raw) => {
    if (raw.constructor.name=='Int8Array') {
        document.getElementById("popup").style.visibility = "hidden";
        const canvas = document.getElementById('canvas');
        canvas.style.visibility = "visible";
        const ctx = canvas.getContext('2d');

        const width = (255&raw[1]) * 256 + (255&raw[2]); 
        const height = (255&raw[3]) * 256 + (255&raw[4]);

        console.log("width="+ width+" height="+height);
        canvas.width = width;
        canvas.height = height;

        const imageData = ctx.createImageData(width, height);

        // Fill the array with RGBA values
        for (let i = 0; i < imageData.data.length; i ++)
          imageData.data[i] = 255&raw[5+i]

        // Force refresh?
        canvas.width+=10;
        ctx.putImageData(imageData, 0, 0);

    } else {
        const obj = JSON.parse(raw);
        document.getElementById('popup').innerText=raw;
        document.getElementById("popup").style.visibility = "visible";
    }
});
}
*/

function loadEngine() {
cheerpjInit({disableLoadTimeReporting:false,disableErrorReporting:false}).then( (val0) => {
cheerpjRunMain("com.plantuml.api.cheerpj.v1.RunInit", "/app/dbSketcher-playground/static/plantuml-core.jar", "/app/dbSketcher-playground/static/", "debugjava").then ( (val1) => {
console.log("Engine started");
/*generate_link();*/
});
});
}