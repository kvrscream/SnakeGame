//Cria o canvas
let canvas = document.getElementById("cvMain");
let ctx = canvas.getContext("2d");
let box = 32;

//Criando a cobra 
let snake = [];
snake[0] = {
    x: 8 * box,
    y: 8 * box
}

//Variavel de direção
let direction = "RIGHT"

//Define onde vai estar a comida
let food = {
    x: Math.floor(Math.random() * 15 + 1) * box,
    y: Math.floor(Math.random() * 15 + 1) * box,
}

    //Monta o tabuleiro
    function drawContext() {
        ctx.fillStyle = "#000";
        ctx.fillRect(0,0,16 * box,16 * box);
    }

    //monta a cobra
    function drawSnake(){
        for(i = 0; i<snake.length; i++){    
            ctx.fillStyle = "#fff";
            ctx.fillRect(snake[i].x, snake[i].y, box, box);
        }
    }

    function draw(){

        if(snake[0].x > 15*box && direction && "RIGHT") snake[0].x = 0
        if(snake[0].x < 0 && direction && "LEFT") snake[0].x = 16*box;
        if(snake[0].y > 15*box && direction && "DOWN") snake[0].y = 0;
        if(snake[0].y < 0 && direction && "UP") snake[0].y = 16*box;

        drawContext();
        drawSnake();
        drawFood();

        let snakeX = snake[0].x;
        let snakeY = snake[0].y;

        if(direction == "RIGHT"){
            snakeX += box;
        }

        if(direction == "LEFT"){
            snakeX -= box;
        }

        if(direction == "UP"){
            snakeY -= box;
        }

        if(direction == "DOWN"){
            snakeY += box;
        }

        if(snakeX != food.x || snakeY != food.y) {
            snake.pop();
        } else {
           food.x =  Math.floor(Math.random() * 15 + 1) * box;
           food.y =  Math.floor(Math.random() * 15 + 1) * box;
        }

        let newHead = {
            x: snakeX,
            y: snakeY
        }

        snake.unshift(newHead);

    }

    //Pega as teclas e define as direções
    document.addEventListener("keydown", function(event){
     
        let code = event.keyCode;

        if(code == 38 && direction != "DOWN") direction = "UP";
        if(code == 39 && direction != "LEFT") direction = "RIGHT";
        if(code == 40 && direction != "UP") direction = "DOWN";
        if(code == 37 && direction != "RIGHT") direction = "LEFT";
    });

    //Cria a comida 
    function drawFood(){
        ctx.fillStyle = "red";
        ctx.fillRect(food.x, food.y,box,box)
    }


let game = setInterval(() => {draw();}, 100)

