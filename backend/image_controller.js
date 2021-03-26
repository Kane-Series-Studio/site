const img_array = ["../frontend/img/test.png", "../frontend/img/KSS_Design_Group.jpg"]

function right_arrow_click(){
    var i = 0;
    var next_img = img_array[i+1]
    console.log(next_img)
    var img = document.getElementById("img-placeholder").src = "../frontend/img/test.png";
    if(img.src == "../frontend/img/test.png"){
        img.src = "../frontend/img/KSS_Design_Group.jpg"
    } else{
        img.src == "../frontend/img/test.png"
    }
    console.log("RIGHT ARROW CLICK")
}
function left_arrow_click(){
    console.log("LEFT ARROW CLICK")
}