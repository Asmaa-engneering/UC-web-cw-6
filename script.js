// function print(){
    // console.log("hello")
// }
// print();

// function sum(x,y) {
// let sum =x+y
    // console.log("the sum is" + sum) or 
    // console.log('the sum is' $ (sum))

    // return x+y
// }
// let total = sum(10,20);
// sum(2,3)
// function gan(){
    // alert("what happin")
// }
// let track=prompt("what is do")

// function play(){

    // let x=document.getElementById("winner").innerText="morocco";
    // لو ما حطيت innertext راح يجيب كل <h1 id="winner">?</h1> ويحطة كلة بال x
    // ممكن احط بدل علامة الاستفهام اي كلمة اذا كتبت داخل innerText "maroco " راح يكتب ماركو بدل ؟
    // console.log(x)
// }

function BMI(height=170,weight=50){
    let SUM= weight / (height * height)
    
    return SUM;
        
}
// let result = BMI(160,60)
// console.log(result)
// بدل الخطوتين هذي سويت هذا
//    console.log( BMI(170,50));
console.log( BMI());

    function Status(BMI){
        if (BMI <18.5){
        return( "لديك نقص في الوزن") ;
        
        
        }
        else if (BMI>=18.5 && BMI<25){
            return("وزنك صحي")
                }
                else if((BMI>=25)) {
            return("لديك زيادة في الوزن");
                }
                else{ 
                    return("انت في خطر");
                }
    }
    function calculation(){
        let weight= document.getElementById("weight").value;
        let height= document.getElementById("height").value;
        let bmiresult =BMI(height,weight);
        let desc= Status(bmiresult);
        return document.getElementById("result").innerText= bmiresult + "" +desc;

    }
    




