var menuBox = document.querySelector(".menu-box");
        var dropDownButton = document.getElementById("drop-down");

        function onClickMenu() {
            var menu = document.getElementById("menu");
            menu.classList.toggle("icon");
            if (menu.classList.contains("icon")) {
                menuBox.style.display = "block";
                dropDownButton.style.backgroundColor = "rgb(56, 56, 230)";
                dropDownButton.innerHTML = "X";
            } else {
                menuBox.style.display = "none";
                dropDownButton.style.backgroundColor = "white";
                dropDownButton.innerHTML = "Open Dropdown";
            }
        }