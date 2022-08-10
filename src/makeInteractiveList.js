export function makeInteractiveList(el) {
    const input = document.createElement("input");
    el.append(input);

    const button = document.createElement("button");
    el.append(button);
    button.innerHTML = "Add";
    button.hidden = true;

    function addParagraph(text) {
        const p = document.createElement("p");
        p.innerHTML = text;
        el.append(p);
    }

    addParagraph("1");
    addParagraph("22");
    addParagraph("333");

    input.addEventListener("input", function () {
        button.hidden = input.value === "";
    });

    button.addEventListener("click", function () {
        addParagraph(input.value);
        input.value = "";
        input.dispatchEvent(new Event("input"));
        let listP = el.querySelectorAll("p");
        if (listP.length > 5) {
            listP[0].remove();
        }
    });
}
