var dialog = {
    intro: [
        { message: "I hope you had an awesome summer", id: 1 },
        { message: "The new school year will be here before you know it", id: 2 }
    ],
    freshman: [
        { message: "Your first day of orientation is Aug 28, 2018", id: 3 }
    ],
    upperClass: {
        upperClassDate: [
            { message: "Your first day of classes is Sept 4th, 2018", id: 4 }
        ],
        nonTransfer: [
            { message: "Please check in to your dorm by Sept 3rd", id: 5 }
        ],
        transfer: [
            { message: "And the new student orientation is on Sept 5th", id: 6 },
            { message: "Please check in to your dorm by Sept 3rd", id: 7 }
        ]
    }
}

var User = {
  school_year: 'JUNIOR',
  is_transfer: true,
  current_state: dialog.intro[0].id
}

var messages_sent_to_user = (user, dialog) => {
    var count = 0;
    count += dialog.intro.length;
    
    if(user.school_year === 'FRESHMAN') {
        count += dialog.freshman.length;
        user.current_state = dialog.freshman[0].id;
        console.log("Current State", user.current_state);
    } else {
        count += dialog.upperClass.upperClassDate.length;
        user.current_state = dialog.upperClass.upperClassDate[0].id;
        if(user.is_transfer === true) {
            count += dialog.upperClass.transfer.length;
            user.current_state = dialog.upperClass.transfer[1].id;
            console.log("Current State", user.current_state);
        } else {
            count += dialog.upperClass.nonTransfer.length;
            user.current_state = dialog.upperClass.nonTransfer[0].id;
            console.log("Current State", user.current_state);
        }
    }

    console.log("message count", count);
    return count;
    
}

console.log(messages_sent_to_user(User, dialog));

