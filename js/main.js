const table = document.createElement('table');

document.body.appendChild(table);
table.classList.add('br');
for (let i = 1; i < 51; i++) {
    let tr = document.createElement('tr');
    table.appendChild(tr);
    for (let i = 1; i < 101; i++) {
        let td = document.createElement('td');
        tr.appendChild(td);
        td.classList.add('wh');
    }
}
let excel = document.getElementsByTagName('td');

let x = 1,
    y = 50;
for (let i = 0; i < excel.length; i++) {
    if (x > 100) {
        x = 1;
        y--;
    }
    excel[i].setAttribute('posX', x);
    excel[i].setAttribute('posY', y);
    excel[i].setAttribute('data-clouse', 'true');
    x++;
}

function generateTanks() {
    let posX = 50;
    let posY = 10;
    return [posX, posY];
}

let coordinates = generateTanks();
console.log(coordinates);
let myTankBody = [
    document.querySelector('[posX = "' + coordinates[0] + '"][posY = "' + (coordinates[1]) + '"]'),
    document.querySelector('[posX = "' + coordinates[0] + '"][posY = "' + (coordinates[1] + 1) + '"]'),
    document.querySelector('[posX = "' + (coordinates[0] - 1) + '"][posY = "' + (coordinates[1]) + '"]'),
    document.querySelector('[posX = "' + (coordinates[0] + 1) + '"][posY = "' + (coordinates[1]) + '"]'),
    document.querySelector('[posX = "' + (coordinates[0] - 1) + '"][posY = "' + (coordinates[1] - 1) + '"]'),
    document.querySelector('[posX = "' + (coordinates[0] + 1) + '"][posY = "' + (coordinates[1] - 1) + '"]')
];
let position = 'up';
addClass();

// function genereateBot(position) {
//     let flag = 'up';
//     let bot = [];
//     function push(tank) {
//         tank.push(
//             document.querySelector('[posX = "' + positionBot[position][0] + '"][posY = "' + (positionBot[position][1]) + '"]'),
//             document.querySelector('[posX = "' + positionBot[position][0] + '"][posY = "' + (positionBot[position][1] - 1) + '"]'),
//             document.querySelector('[posX = "' + (positionBot[position][0] - 1) + '"][posY = "' + (positionBot[position][1]) + '"]'),
//             document.querySelector('[posX = "' + (positionBot[position][0] + 1) + '"][posY = "' + (positionBot[position][1]) + '"]'),
//             document.querySelector('[posX = "' + (positionBot[position][0] - 1) + '"][posY = "' + (positionBot[position][1] + 1) + '"]'),
//             document.querySelector('[posX = "' + (positionBot[position][0] + 1) + '"][posY = "' + (positionBot[position][1] + 1) + '"]')
//         );
//         for(let i = 0; i < tank.length; i++) {
//             tank[i].classList.add('bot-body');
//             tank[i].dataset.close = 'false';
//         }
//     }
//     push(bot);
// }
// let tankBot1 = genereateBot(0);
// let tankBot2 = genereateBot(1);
// function f() {
//
// }


function move(e) {
    let tankCoordinates = [myTankBody[0].getAttribute('posX'), myTankBody[0].getAttribute('posY')];
    if (e.which == 38) {
        if ((+tankCoordinates[1] + 2) != 51) {
            function moveUp() {
                removeClass();
                if (position != "up") {
                    turnUp();
                } else {
                    myTankBody.splice(0, myTankBody.length);
                    myTankBody.push(
                        document.querySelector('[posX = "' + (+tankCoordinates[0]) + '"][posY = "' + (+tankCoordinates[1] + 1) + '"]'),
                        document.querySelector('[posX = "' + (+tankCoordinates[0]) + '"][posY = "' + (+tankCoordinates[1] + 2) + '"]'),
                        document.querySelector('[posX = "' + (+tankCoordinates[0] + 1) + '"][posY = "' + (+tankCoordinates[1] + 1) + '"]'),
                        document.querySelector('[posX = "' + (+tankCoordinates[0] - 1) + '"][posY = "' + (+tankCoordinates[1] + 1) + '"]'),
                        document.querySelector('[posX = "' + (+tankCoordinates[0] + 1) + '"][posY = "' + (+tankCoordinates[1]) + '"]'),
                        document.querySelector('[posX = "' + (+tankCoordinates[0] - 1) + '"][posY = "' + (+tankCoordinates[1]) + '"]')
                    );
                }
                addClass();
            }

            moveUp();
        } else {
            removeClass();
            if (position != "up") {
                myTankBody.splice(0, myTankBody.length);
                myTankBody.push(
                    document.querySelector('[posX = "' + (+tankCoordinates[0]) + '"][posY = "' + (+tankCoordinates[1]) + '"]'),
                    document.querySelector('[posX = "' + (+tankCoordinates[0]) + '"][posY = "' + (+tankCoordinates[1] + 1) + '"]'),
                    document.querySelector('[posX = "' + (+tankCoordinates[0] - 1) + '"][posY = "' + (+tankCoordinates[1]) + '"]'),
                    document.querySelector('[posX = "' + (+tankCoordinates[0] + 1) + '"][posY = "' + (+tankCoordinates[1]) + '"]'),
                    document.querySelector('[posX = "' + (+tankCoordinates[0] - 1) + '"][posY = "' + (+tankCoordinates[1] - 1) + '"]'),
                    document.querySelector('[posX = "' + (+tankCoordinates[0] + 1) + '"][posY = "' + (+tankCoordinates[1] - 1) + '"]')
                );
                position = 'up';
            }
            addClass();
        }

    }
    if (e.which == 39) {
        if((+tankCoordinates[0] + 2) != 101) {
            function moveRight() {
                removeClass();
                if (position != 'right') {
                    myTankBody.splice(0, myTankBody.length);
                    myTankBody.push(
                        document.querySelector('[posX = "' + (+tankCoordinates[0]) + '"][posY = "' + (+tankCoordinates[1]) + '"]'),
                        document.querySelector('[posX = "' + (+tankCoordinates[0] + 1) + '"][posY = "' + (+tankCoordinates[1]) + '"]'),
                        document.querySelector('[posX = "' + (+tankCoordinates[0]) + '"][posY = "' + (+tankCoordinates[1] + 1) + '"]'),
                        document.querySelector('[posX = "' + (+tankCoordinates[0]) + '"][posY = "' + (+tankCoordinates[1] - 1) + '"]'),
                        document.querySelector('[posX = "' + (+tankCoordinates[0] - 1) + '"][posY = "' + (+tankCoordinates[1] + 1) + '"]'),
                        document.querySelector('[posX = "' + (+tankCoordinates[0] - 1) + '"][posY = "' + (+tankCoordinates[1] - 1) + '"]')
                    );
                    position = 'right';
                } else {
                    myTankBody.splice(0, myTankBody.length);
                    myTankBody.push(
                        document.querySelector('[posX = "' + (+tankCoordinates[0] + 1) + '"][posY = "' + (+tankCoordinates[1]) + '"]'),
                        document.querySelector('[posX = "' + (+tankCoordinates[0] + 2) + '"][posY = "' + (+tankCoordinates[1]) + '"]'),
                        document.querySelector('[posX = "' + (+tankCoordinates[0] + 1) + '"][posY = "' + (+tankCoordinates[1] + 1) + '"]'),
                        document.querySelector('[posX = "' + (+tankCoordinates[0] + 1) + '"][posY = "' + (+tankCoordinates[1] - 1) + '"]'),
                        document.querySelector('[posX = "' + (+tankCoordinates[0]) + '"][posY = "' + (+tankCoordinates[1] + 1) + '"]'),
                        document.querySelector('[posX = "' + (+tankCoordinates[0]) + '"][posY = "' + (+tankCoordinates[1] - 1) + '"]'),
                    );
                }
                addClass();
            }

            moveRight();

        }
        else {
            removeClass();
            if (position != 'right') {
                myTankBody.splice(0, myTankBody.length);
                myTankBody.push(
                    document.querySelector('[posX = "' + (+tankCoordinates[0]) + '"][posY = "' + (+tankCoordinates[1]) + '"]'),
                    document.querySelector('[posX = "' + (+tankCoordinates[0] + 1) + '"][posY = "' + (+tankCoordinates[1]) + '"]'),
                    document.querySelector('[posX = "' + (+tankCoordinates[0]) + '"][posY = "' + (+tankCoordinates[1] + 1) + '"]'),
                    document.querySelector('[posX = "' + (+tankCoordinates[0]) + '"][posY = "' + (+tankCoordinates[1] - 1) + '"]'),
                    document.querySelector('[posX = "' + (+tankCoordinates[0] - 1) + '"][posY = "' + (+tankCoordinates[1] + 1) + '"]'),
                    document.querySelector('[posX = "' + (+tankCoordinates[0] - 1) + '"][posY = "' + (+tankCoordinates[1] - 1) + '"]')
                );
                position = 'right';
            }
            addClass();
        }
    }
    if (e.which == 37) {
        if((+tankCoordinates[0] - 2) != 0){
            function moveLeft() {
                removeClass();
                if (position != 'left') {
                    myTankBody.splice(0, myTankBody.length);
                    myTankBody.push(
                        document.querySelector('[posX = "' + (+tankCoordinates[0]) + '"][posY = "' + (+tankCoordinates[1]) + '"]'),
                        document.querySelector('[posX = "' + (+tankCoordinates[0] - 1) + '"][posY = "' + (+tankCoordinates[1]) + '"]'),
                        document.querySelector('[posX = "' + (+tankCoordinates[0]) + '"][posY = "' + (+tankCoordinates[1] - 1) + '"]'),
                        document.querySelector('[posX = "' + (+tankCoordinates[0]) + '"][posY = "' + (+tankCoordinates[1] + 1) + '"]'),
                        document.querySelector('[posX = "' + (+tankCoordinates[0] + 1) + '"][posY = "' + (+tankCoordinates[1] - 1) + '"]'),
                        document.querySelector('[posX = "' + (+tankCoordinates[0] + 1) + '"][posY = "' + (+tankCoordinates[1] + 1) + '"]')
                    );
                    position = 'left';
                } else {
                    myTankBody.splice(0, myTankBody.length);
                    myTankBody.push(
                        document.querySelector('[posX = "' + (+tankCoordinates[0] - 1) + '"][posY = "' + (+tankCoordinates[1]) + '"]'),
                        document.querySelector('[posX = "' + (+tankCoordinates[0] - 2) + '"][posY = "' + (+tankCoordinates[1]) + '"]'),
                        document.querySelector('[posX = "' + (+tankCoordinates[0] - 1) + '"][posY = "' + (+tankCoordinates[1] - 1) + '"]'),
                        document.querySelector('[posX = "' + (+tankCoordinates[0] - 1) + '"][posY = "' + (+tankCoordinates[1] + 1) + '"]'),
                        document.querySelector('[posX = "' + (+tankCoordinates[0]) + '"][posY = "' + (+tankCoordinates[1] - 1) + '"]'),
                        document.querySelector('[posX = "' + (+tankCoordinates[0]) + '"][posY = "' + (+tankCoordinates[1] + 1) + '"]')
                    );
                }
                addClass();
            }

            moveLeft();
        }else {
            removeClass();
            if (position != 'left') {
                myTankBody.splice(0, myTankBody.length);
                myTankBody.push(
                    document.querySelector('[posX = "' + (+tankCoordinates[0]) + '"][posY = "' + (+tankCoordinates[1]) + '"]'),
                    document.querySelector('[posX = "' + (+tankCoordinates[0] - 1) + '"][posY = "' + (+tankCoordinates[1]) + '"]'),
                    document.querySelector('[posX = "' + (+tankCoordinates[0]) + '"][posY = "' + (+tankCoordinates[1] - 1) + '"]'),
                    document.querySelector('[posX = "' + (+tankCoordinates[0]) + '"][posY = "' + (+tankCoordinates[1] + 1) + '"]'),
                    document.querySelector('[posX = "' + (+tankCoordinates[0] + 1) + '"][posY = "' + (+tankCoordinates[1] - 1) + '"]'),
                    document.querySelector('[posX = "' + (+tankCoordinates[0] + 1) + '"][posY = "' + (+tankCoordinates[1] + 1) + '"]')
                );
                position = 'left';
            }
            addClass();
        }

    }
    if (e.which == 40) {
        if((+tankCoordinates[1] - 2) != 0){
            function moveDown() {
                removeClass();
                (position != 'down') ? createDown() : pushDown();
                addClass();
            }

            moveDown();
        }else {
            removeClass();
            if (position != 'down') {
                createDown();
            }
            addClass();
        }

    }
    function turnUp() {
        myTankBody.splice(0, myTankBody.length);
        myTankBody.push(
            document.querySelector('[posX = "' + (+tankCoordinates[0]) + '"][posY = "' + (+tankCoordinates[1]) + '"]'),
            document.querySelector('[posX = "' + (+tankCoordinates[0]) + '"][posY = "' + (+tankCoordinates[1] + 1) + '"]'),
            document.querySelector('[posX = "' + (+tankCoordinates[0] - 1) + '"][posY = "' + (+tankCoordinates[1]) + '"]'),
            document.querySelector('[posX = "' + (+tankCoordinates[0] + 1) + '"][posY = "' + (+tankCoordinates[1]) + '"]'),
            document.querySelector('[posX = "' + (+tankCoordinates[0] - 1) + '"][posY = "' + (+tankCoordinates[1] - 1) + '"]'),
            document.querySelector('[posX = "' + (+tankCoordinates[0] + 1) + '"][posY = "' + (+tankCoordinates[1] - 1) + '"]')
        );
        position = 'up';
    }
    function createDown() {
        myTankBody.splice(0, myTankBody.length);
        myTankBody.push(
            document.querySelector('[posX = "' + (+tankCoordinates[0]) + '"][posY = "' + (+tankCoordinates[1]) + '"]'),
            document.querySelector('[posX = "' + (+tankCoordinates[0]) + '"][posY = "' + (+tankCoordinates[1] - 1) + '"]'),
            document.querySelector('[posX = "' + (+tankCoordinates[0] + 1) + '"][posY = "' + (+tankCoordinates[1]) + '"]'),
            document.querySelector('[posX = "' + (+tankCoordinates[0] - 1) + '"][posY = "' + (+tankCoordinates[1]) + '"]'),
            document.querySelector('[posX = "' + (+tankCoordinates[0] + 1) + '"][posY = "' + (+tankCoordinates[1] + 1) + '"]'),
            document.querySelector('[posX = "' + (+tankCoordinates[0] - 1) + '"][posY = "' + (+tankCoordinates[1] + 1) + '"]')
        );
        position = 'down';
    }
    function pushDown() {
        myTankBody.splice(0, myTankBody.length);
        myTankBody.push(
            document.querySelector('[posX = "' + (+tankCoordinates[0]) + '"][posY = "' + (+tankCoordinates[1] - 1) + '"]'),
            document.querySelector('[posX = "' + (+tankCoordinates[0]) + '"][posY = "' + (+tankCoordinates[1] - 2) + '"]'),
            document.querySelector('[posX = "' + (+tankCoordinates[0] + 1) + '"][posY = "' + (+tankCoordinates[1] - 1) + '"]'),
            document.querySelector('[posX = "' + (+tankCoordinates[0] - 1) + '"][posY = "' + (+tankCoordinates[1] - 1) + '"]'),
            document.querySelector('[posX = "' + (+tankCoordinates[0] + 1) + '"][posY = "' + (+tankCoordinates[1]) + '"]'),
            document.querySelector('[posX = "' + (+tankCoordinates[0] - 1) + '"][posY = "' + (+tankCoordinates[1]) + '"]')
        );
    }
}
function getAttr() {
    for (let i = 0; i < myTankBody.length; i++) {
        if(myTankBody[i].getAttribute('data-clouse') == 'false') {
            return false;
        }else {
            return true
        }
    }
}

function removeClass() {
    for (let i = 0; i < myTankBody.length; i++) {
        myTankBody[i].classList.remove('tank-body');
        myTankBody[i].dataset.clouse = 'true'
    }
}

function addClass() {
    for (let i = 0; i < myTankBody.length; i++) {
        myTankBody[i].classList.add('tank-body');
        myTankBody[i].dataset.clouse = 'false'
    }
};

document.addEventListener('keydown', move);