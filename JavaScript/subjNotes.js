
const li = document.querySelectorAll(".chapterLink");

        let flag = 1;
        li.forEach(function (item) {
            item.addEventListener("click", (e) => {
                if (flag === 1) {
                    e.target.children[0].style.display = "block"
                    flag = 0
                    console.log(flag);
                }
                else if (flag === 0) {
                    e.target.children[0].style.display = "none"
                    flag = 1
                    console.log(flag);
                }

            })
        })
        