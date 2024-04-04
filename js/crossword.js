
let input  = document.getElementById("input1");
input.addEventListener("keypress", function(event){
    if (event.key === "Enter"){
        event.preventDefault();
        document.getElementById("myBtn").click();
        event.target.value = "";
    }
});

let list = ["boolean","model","variables","properties","and","concatenation","method","not","null","or","case","array","event","string"];

function submit1(){
    let enterWord = input1.value;
    let result = enterWord.toLowerCase();
    if (result == list[0]){
        a1.innerHTML = "B";
        a2.innerHTML = "O";
        a3.innerHTML = "O";
        a6.innerHTML = "L";
        a11.innerHTML = "E";
        a21.innerHTML = "A";
        a27.innerHTML = "N";
    }
    if (result == list[1]){
        a41.innerHTML = "M";
        a42.innerHTML = "O";
        a43.innerHTML = "D";
        a44.innerHTML = "E";
        a45.innerHTML = "L";
    }
    if (result == list[2]){
        a4.innerHTML = "V";
        a7.innerHTML = "A";
        a12.innerHTML = "R";
        a23.innerHTML = "I";
        a28.innerHTML = "A";
        a37.innerHTML = "B";
        a45.innerHTML = "L";
        a49.innerHTML = "E";
        a53.innerHTML = "S";
    }
    if (result == list[3]){
        a5.innerHTML = "P";
        a10.innerHTML = "R";
        a14.innerHTML = "O";
        a26.innerHTML = "P";
        a31.innerHTML = "E";
        a39.innerHTML = "R";
        a47.innerHTML = "T";
        a50.innerHTML = "I";
        a55.innerHTML = "E";
        a58.innerHTML = "S";
    }
    if (result == list[4]){
        a7.innerHTML = "A";
        a8.innerHTML = "N";
        a9.innerHTML = "D";
    }
    if (result == list[5]){
        a13.innerHTML = "C";
        a14.innerHTML = "O";
        a15.innerHTML = "N";
        a16.innerHTML = "C";
        a17.innerHTML = "A";
        a18.innerHTML = "T";
        a19.innerHTML = "E";
        a20.innerHTML = "N";
        a21.innerHTML = "A";
        a22.innerHTML = "T";
        a23.innerHTML = "I";
        a24.innerHTML = "O";
        a25.innerHTML = "N";
    }
    if (result == list[6]){
        a30.innerHTML = "M";
        a31.innerHTML = "E";
        a32.innerHTML = "T";
        a33.innerHTML = "H";
        a34.innerHTML = "O";
        a35.innerHTML = "D";
    }
    if (result == list[7]){
        a36.innerHTML = "N";
        a42.innerHTML = "O";
        a48.innerHTML = "T";
    }
    if (result == list[8]){
        a25.innerHTML = "N";
        a29.innerHTML = "U";
        a38.innerHTML = "L";
        a46.innerHTML = "L";
    }
    if (result == list[9]){
        a34.innerHTML = "O";
        a40.innerHTML = "R";
    }
    if (result == list[10]){
        a51.innerHTML = "C";
        a52.innerHTML = "A";
        a53.innerHTML = "S";
        a54.innerHTML = "E";
    }
    if (result == list[11]){
        a52.innerHTML = "A";
        a56.innerHTML = "R";
        a64.innerHTML = "R";
        a66.innerHTML = "A";
        a68.innerHTML = "Y";
    }
    if (result == list[12]){
        a54.innerHTML = "E";
        a57.innerHTML = "V";
        a65.innerHTML = "E";
        a67.innerHTML = "N";
        a69.innerHTML = "T";
    }
    if (result == list[13]){
        a58.innerHTML = "S";
        a59.innerHTML = "T";
        a60.innerHTML = "R";
        a61.innerHTML = "I";
        a62.innerHTML = "N";
        a63.innerHTML = "G";
    }
}