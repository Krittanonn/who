    const btn = document.getElementById("runBtn");
    const counterText = document.getElementById("counter");
    const surprise = document.getElementById("surprise");

    let count = 0;
    const maxClicks = 10;

    function moveButton() {
        const rect = btn.getBoundingClientRect();

        const maxX = window.innerWidth - rect.width;
        const maxY = window.innerHeight - rect.height;

        const randomX = Math.random() * maxX;
        const randomY = Math.random() * maxY;

        btn.style.left = randomX + "px";
        btn.style.top = randomY + "px";
    }

    function handleClick() {
        count++;

        if (count >= maxClicks) {
            btn.classList.add("hidden");
            counterText.classList.add("hidden");
            surprise.classList.remove("hidden");
            document.body.classList.add("animate-pulse");
        } else {
            moveButton();
        }
    }

    btn.addEventListener("click", handleClick);

    moveButton();
    window.addEventListener("resize", moveButton);
