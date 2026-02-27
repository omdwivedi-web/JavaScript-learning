// switch (key) {
//     case value:
//         // code block
//         break;
//     case value2:
//         // code block
//         break;
//     default:
//         // code block
// }


const month = 3;    // in any case number,switch,etc just also write same data type as the case value to avoid unexpected results. 

switch (month) {
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("February");
        break;
    case 3:
        console.log("March");
        break;
    default:
        console.log("Invalid month");   
        break; //  it is use to exit the switch statement after executing the code block of the matched case, preventing the execution of subsequent cases.
}


