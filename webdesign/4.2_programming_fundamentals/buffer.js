
if (score > 70) {
    message = "Pass";
} else {
    message = "Fail";
}

switch (color) {
case 'Green':
    message = 'Keep going';
    break;

case 'Yellow':
    message = 'Ready to stop';
    break;

case 'Red':
    message = 'Stop';
    break;
}

var dishes = 10; // number of dirty dishes
for (var i=0; i < dishes; i++) {
    wash_dish(i);   // wash the dish
    dry_dish(i);    // dry the dish
    store_dish(i);  // put away the dish
}

for (var i = 0; i < 10; i++){
    console.log(i);
}

while(true){
    forever(); // This goes on forever 
}
