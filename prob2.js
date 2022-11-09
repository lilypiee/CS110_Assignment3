let n=98;

if (n>=0 && n<60){
    letter = "F";
}
else if(n>=60 && n<=62){
    letter = "D-";
}
else if(n>=63 && n<=66){
    letter = "D";
}
else if(n>=67 && n<=69){
    letter = "D+";
}
else if(n>=70 && n<=72){
    letter = "C-";
}
else if(n>=73 && n<=76){
    letter = "C";
}
else if(n>=77 && n<=79){
    letter = "C+";
}
else if(n>=80 && n<=82){
    letter = "B-";
}
else if(n>=83 && n<=86){
    letter = "B";
}
else if(n>=87 && n<=89){
    letter = "B+";
}
else if(n>=90 && n<=92){
    letter = "A-";
}
else if(n>=93 && n<=96){
    letter = "A";
}
else if(n>=97 && n<=100){
    letter = "A+";
}

switch (letter){
    case "F":
    case "D-":
    case "D":
    case "D+":
        console.log("Your grade is " + n + " which corresponds to " + letter +". You failed!");
        break;
    default:
        console.log("Your grade is " + n + " which corresponds to " + letter +". You Passed!");
}