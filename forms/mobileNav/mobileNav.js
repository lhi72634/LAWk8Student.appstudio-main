mobileNav.onshow = function() {
    hmbMenu.hidden = false
}

hmbMenu.onclick = function(s) {
        if (typeof(s) == "object")
            return
        else
            switch (s) {
                case "dessertVoting":
                    ChangeForm(dessertVoting)
                    break
                case "describeYou":
                    ChangeForm(describeYou)
                    break
                case "favExercises":
                    ChangeForm(favExercises)
                    break 
    }
}
