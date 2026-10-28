
"use strict";

const user = {
    name: "Anshika",
    showName: () => {
        console.log(this.name);
    }
};

user.showName();

user.showName = function() {
    console.log(this.name);
};

user.showName();
