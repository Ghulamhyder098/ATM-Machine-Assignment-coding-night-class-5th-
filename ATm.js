import inquirer from "inquirer";
// Customer Balance
let balance = 10000;
// Customer ATM Pin
let pin = 2233;
// Asking For Pin
let cusPin = await inquirer.prompt([
    {
        message: "Enter Your Pincode",
        name: "pincode",
        type: "number",
    },
]);
// If Pin Code IS Correct Then this code will excecute otherwise else statement execute
if (cusPin.pincode === pin) {
    console.log(`Your Remaining Balance is ${balance}.`);
    let cusOptions = await inquirer.prompt([
        {
            message: "Select One OF This Options ",
            name: "Option",
            type: "list",
            choices: ["withdraw", "checkbalance"],
        },
    ]);
    //if customer click on withdraw then this program will run
    if (cusOptions.Option === "withdraw") {
        let enteramount = await inquirer.prompt([
            {
                message: "Select You Withdrawal Amount !",
                name: "amount",
                type: "list",
                choices: ["1000", "2500", "5000", "7500", "Otheramount"],
            },
        ]);
        //A persons will have options to withdraw amount
        if (enteramount.amount === "1000") {
            console.log(`Thanks For Using Hyder Banking !`);
            console.log(`your remaining amount is ${balance - 1000}.`);
        }
        else if (enteramount.amount === "2500") {
            console.log(`Thanks For Using Hyder Banking !`);
            console.log(`your remaining amount is ${balance - 2500}.`);
        }
        else if (enteramount.amount === "5000") {
            console.log(`Thanks For Using Hyder Banking !`);
            console.log(`your remaining amount is ${balance - 5000}.`);
        }
        else if (enteramount.amount === "7500") {
            console.log(`Thanks For Using Hyder Banking !`);
            console.log(`your remaining amount is ${balance - 7500}.`);
        }
        else if (enteramount.amount === "Otheramount") {
            let Otheramount = await inquirer.prompt([
                {
                    message: "Enter Your Withdrawal Amount",
                    name: "other",
                    type: "number",
                },
            ]);
            if (Otheramount.other > balance) {
                console.log("Your Balance is insufficient.");
            }
            else {
                console.log(`Thanks For Using Hyder Banking !`);
                console.log(`Now Your Remaining Balance is ${balance - Otheramount.other}.`);
            }
        }
        // if a person wants to check balance then this program will Ecxecute
    }
    else if (cusOptions.Option === "checkbalance") {
        console.log(`Your Balance is ${balance}.`);
    }
}
// if Pin code is not correct then this statement will execute
else {
    console.log("Enter Valid Pincode");
}
