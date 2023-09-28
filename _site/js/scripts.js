var scrolling = false

songupdate = function(target){
    if (document.getElementById(target).currentTime === document.getElementById(target).duration){
        audpause(target)
    }
    if (scrolling === false){
        document.getElementById(target + "scroll").value = document.getElementById(target).currentTime
    }
}

PAfunc = function(input){
    if (document.activeElement === document.getElementById(input.id + "scroll")){
        return
    }
    input.pause()
    input.currentTime = 0
    scrolltarget = (input.id + "scroll")
    document.getElementById(scrolltarget).value = 0
    document.querySelectorAll(".active-audio").forEach(activeaudio => activeaudio.classList.remove("active-audio"))
}

audpause = function(target){
    document.getElementById(target).pause()
    document.getElementById(target).currentTime = 0
    document.getElementById(target + "img").classList.remove("active-audio")
    setTimeout(clearInterval(songtick), 10)
}

audplay = function(target){
    document.querySelectorAll("audio").forEach(pauseaud => PAfunc(pauseaud));
    document.getElementById(target).play()
    document.getElementById(target + "img").classList.add("active-audio")
    songtick = setInterval(songupdate, 750, target)
}

play = function(target){
    if (document.getElementById(target + "img").classList.contains("active-audio")){
        audpause(target)
    }
    else {
        audplay(target)
    }
}

loadscroll = function(target){
    var x = document.getElementById(target).duration
    document.getElementById(target + "scroll").max = x
}

seekonclick = function(){
    scrolling = true
}

seeksong = function(target, value){
    try {audpause(target)} catch{}
    audplay(target)
    document.getElementById(target).currentTime = value
    scrolling = false
}