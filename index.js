document.addEventListener('DOMContentLoaded', () => {
    const grid = document.querySelector(".block");
    let squares = Array.from(document.querySelectorAll(".block div"));
    const score_display = document.querySelector("#score");
    const startBtn = document.querySelector('#start-btn');
    const width = 10;

    const lTetromino = [
        [1, width + 1, width * 2 + 1, 2],
        [width, width + 1, width + 2, width * 2 + 2],
        [1, width + 1, width * 2 + 1, width * 2],
        [width, width * 2, width * 2 + 1, width * 2 + 2]
    ];

    const zTetromino = [
        [0, width, width + 1, width * 2 + 1],
        [width + 1, width + 2, width * 2, width * 2 + 1],
        [0, width, width + 1, width * 2 + 1],
        [width + 1, width + 2, width * 2, width * 2 + 1]
    ]

    const tTetromino = [
        [1, width, width + 1, width + 2],
        [1, width + 1, width + 2, width * 2 + 1],
        [width, width + 1, width + 2, width * 2 + 1],
        [1, width, width + 1, width * 2 + 1]
    ]

    const oTetromino = [
        [0, 1, width, width + 1],
        [0, 1, width, width + 1],
        [0, 1, width, width + 1],
        [0, 1, width, width + 1]
    ]

    const iTetromino = [
        [1, width + 1, width * 2 + 1, width * 3 + 1],
        [width, width + 1, width + 2, width + 3],
        [1, width + 1, width * 2 + 1, width * 3 + 1],
        [width, width + 1, width + 2, width + 3]
    ]

    const tetrominoes = [lTetromino, zTetromino, tTetromino, oTetromino, iTetromino];


    let currentPos = 4;
    let currentRotation = 0;
    let random = Math.floor(Math.random() * tetrominoes.length);


    let current = tetrominoes[random][currentRotation];

    function draw() {
        current.forEach(index => {
            squares[currentPos + index].classList.add('tetromino');
        })
    }



    function unDraw() {
        current.forEach(index => {
            squares[currentPos + index].classList.remove('tetromino');
        })
    }




    timerId = setInterval(moveDown, 1000);

    function moveDown() {
        unDraw();
        currentPos += width;
        draw();
    }

    console.log(random);
})  