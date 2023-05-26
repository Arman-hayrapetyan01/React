let contain = document.getElementById("contain")
contain.style.display = "none"
let start_game_loading = document.createElement("div")
document.body.append(start_game_loading)
start_game_loading.setAttribute("class", "start_game_box")
setTimeout(() => {
    contain.style.display = "block"
    start_game_loading.style.display = "none"
}, 5000);
let econtain = document.getElementById("game_container")
let player1_input = document.getElementById("player1_name")
let player2_input = document.getElementById("player2_name")
let start_button = document.getElementById("start_game_btn")
let player1_count = document.getElementById("player1_score")
let player2_count = document.getElementById("player2_score")
let game_count = document.getElementById("game_score")
let foot = document.getElementById("foother")
let refresh_button = document.getElementById("win_btn")
refresh_button.addEventListener("click", Ref_button=()=>{
    location.reload()
})
let pl1 = 0;
let pl2 = 0;
player1_count.innerText = `${pl1}`
player2_count.innerText = `${pl2}`
let win_div = document.getElementById("winner_div")
let win_name = document.getElementById("winner_name")
win_div.style.display = "none"
start_button.addEventListener("click", StartGameFunc)
let start=0
let cont = 0;
function StartGameFunc() {
if(start==0){
    start_button.value = 'New Game'
    if(player1_input.value == ""){
        player1_input.value = "Player X"
        player1_input.disabled = true
    }
    if(player2_input.value == ""){
        player2_input.value = "Player O"
        player2_input.disabled = true
    }
    if(game_count.value == ""){
        game_count.value = 5
        game_count.disabled = true
    }
    player1_input.disabled = true
    player2_input.disabled = true
    game_count.disabled = true
let table = document.createElement("table")
table.setAttribute("id", "tableik")
table.setAttribute("border", "1")
for(let i = 0; i<=2; i++){
    let tr = document.createElement("tr")
    for(let j = 0; j<=2 ; j++){
        let td = document.createElement("td")
        let td_hover_sound = new Audio()
        td_hover_sound.src = "../sound/td-hover.wav"
        td.onmousemove=()=>{
            td_hover_sound.play()
            td_hover_sound.volume = 0.1
        }   
        td.setAttribute("class", "istd")
        td.setAttribute("id", "tdik")
        let click_x_sound = new Audio()
        let click_o_sound = new Audio()
        td.onclick=()=>{
            if(td.innerText==''){
                if(cont%2==0){
                   td.innerHTML = "X"
                   click_x_sound.src = "../sound/X-click.wav"
                   click_x_sound.play()
                   click_x_sound.volume = 0.3
                }
                else{
                    td.innerHTML = "O"
                    click_o_sound.src = "../sound/O-click.wav"
                    click_o_sound.play()
                    click_o_sound.volume = 0.3
                }
                cont++
                Win()
            }
        }
        tr.appendChild(td)
    }
    table.appendChild(tr)
    
}
contain.append(table)
start++
}   
else{
    location.reload()
    Refresh()
}
}
function Refresh() {
    let tdis = document.getElementsByClassName("istd")
    for(let q = 0; q<tdis.length; q++){
        tdis[q].innerHTML = ""
    }
    cont = 0
}
function Win(){
    let combination = [
        [0,1,2],
        [3,4,5],
        [6,7,8], 

        [0,3,6],
        [1,4,7],
        [2,5,8],

        [0,4,8],
        [2,4,6]
    ]
    let istdis = document.getElementsByClassName("istd")
    let y = false
    for(let p = 0; p<combination.length; p++){
        if(istdis[combination[p][0]].innerHTML == 'X' && istdis[combination[p][1]].innerHTML == "X" && istdis[combination[p][2]].innerHTML == "X"){
            y=true
            setTimeout(() => {
                player1_count.innerText = `${pl1 += 1}`
                return Refresh()
            }, 100);
        }
        if(istdis[combination[p][0]].innerHTML == 'O' && istdis[combination[p][1]].innerHTML == "O" && istdis[combination[p][2]].innerHTML == "O"){
            y=true
            setTimeout(() => {
                player2_count.innerText = `${pl2 += 1}`
                return Refresh()
            }, 100);
        }
    }
    let tble = document.getElementById("tableik")
    if(y == false && cont == 9){
        var draw_div = document.getElementById("draw_box")
        draw_div.style.top = "30%"
        tble.style.display = "none"
        setTimeout(() => {
            draw_div.style.top = "-40%"
        }, 1000);
        let tidis = document.getElementsByClassName("istd")
        for(let n = 0; n<tidis.length; n++){
            tidis[n].style.width = "130px"
            tidis[n].style.height = "130px"
        }
        setTimeout(() => {
            tble.style.display = "block"
            tble.style.width = "500px"
            tble.style.height = "500px"
            return Refresh()    
        }, 2000);
    }
    let win_sound = new Audio()
    if(player1_count.innerText == `${game_count.value}`){
        win_div.style.display = "block"
        win_name.innerText = `${player1_input.value} WIN!!`
        win_sound.src = "../sound/win-sound.mp3"
        win_sound.play()
        tble.style.display = "none"
        foot.style.display = "none"
    }
    if(player2_count.innerText == `${game_count.value}`){
        win_div.style.display = "block"
        win_name.innerText = `${player2_input.value} WIN!!`
        win_sound.src = "../sound/win-sound.mp3"
        win_sound.play()
        tble.style.display = "none"
        foot.style.display = "none"
    }
}



