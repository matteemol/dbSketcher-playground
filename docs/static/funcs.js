var shortlink = "";

function callfuncs() {
//    document.getElementById('render-image').style.display="block";
    document.getElementsByClassName('render-button')[0].style.visibility="visible";
    alert("Click!");
  }

function adjust_size(elementId) {
    document.getElementById(elementId).style.width="100%";
    document.getElementById(elementId).style.height="100%";
    document.getElementById(elementId).style.objectFit="contain";
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
            blob_dir = window.URL.createObjectURL(blob);
            console.log("blob_dir="+blob_dir);
            document.getElementById('render-image').src = blob_dir;
        });
        document.getElementsByClassName('render-button')[0].style.visibility="visible";
        document.getElementById('diagram').setAttribute('href', blob_dir);
        adjust_size('render-image');
    });
}

function createSVG() {
    text = document.getElementById('uml').value;
    console.log("text="+text);
    cjCall("com.plantuml.api.cheerpj.v1.Svg", "convert", "light", text).then((res) => {
        console.log("svg res="+res);
        document.getElementById('colb').innerHTML=res;
        document.getElementsByClassName('render-button')[0].style.visibility="visible";
        adjust_size('colb');
    });
}




function loadEngine() {
cheerpjInit({disableLoadTimeReporting:false,disableErrorReporting:false}).then( (val0) => {
cheerpjRunMain("com.plantuml.api.cheerpj.v1.RunInit", "/app/dbSketcher-playground/static/plantuml-core.jar", "/app/dbSketcher-playground/static/", "debugjava").then ( (val1) => {
console.log("Engine started");
/*generate_link();*/
});
});
}