const downloadButton = document.getElementById('downloadButton');
const downloadStatus = document.getElementById('downloadStatus');
const typingText = document.getElementById('typingText');

downloadButton.addEventListener('click', () => {
    downloadStatus.style.display = 'block';

    // Simulasi animasi ketikan
    let i = 0;
    let txt = 'T̸͟͞I̸͟͞D̸͟͞A̸͟͞K̸͟͞ M̸͟͞A̸͟͞U̸͟͞ P̸͟͞E̸͟͞R̸͟͞G̸͟͞I̸͟͞ S̸͟͞E̸͟͞B̸͟͞E̸͟͞L̸͟͞U̸͟͞M̸͟͞ K̸͟͞U̸͟͞M̸͟͞A̸͟͞N̸͟͞ K̸͟͞U̸͟͞M̸͟͞A̸͟͞N̸͟͞N̸͟͞Y̸͟͞A̸͟͞ P̸͟͞A̸͟͞D̸͟͞A̸͟͞ B̸͟͞U̸͟͞B̸͟͞A̸͟͞R̸͟͞ D̸͟͞A̸͟͞R̸͟͞I̸͟͞ S̸͟͞I̸͟͞N̸͟͞I̸͟͞I⃟~GhostName~ *~I⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟~* TAPI BOONG HAYUKKKK *~I⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟~* *~I⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟~* *~I⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟~**~I⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟~* *~I⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟~* *~I⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟~* *~I⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟~**~I⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟~* *~I⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟~* *~I⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟~* *~I⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟~*🈲🃏🀄🈴4⃣5⃣8⃣🈴🀄🃏🈲🈲🃏🀄🈴4⃣5⃣8⃣🈴🀄🃏🈲🈲🃏🀄🈴4⃣5⃣8⃣🈴🀄🃏🈲🈲🃏🀄🈴4⃣5⃣8⃣🈴🀄🃏🈲🈲🃏🀄🈴4⃣5⃣8⃣🈴🀄🃏🈲🈲🃏🀄🈴4⃣5⃣8⃣🈴🀄🃏🈲🈲🃏🀄🈴4⃣5⃣8⃣🈴🀄🃏🈲🈲🃏🀄🈴4⃣5⃣8⃣🈴🀄🃏🈲🈲🃏🀄🈴4⃣5⃣8⃣🈴🀄🃏🈲🈲🃏🀄🈴4⃣5⃣8⃣🈴🀄🃏🈲🈲🃏🀄🈴4⃣5⃣8⃣🈴🀄🃏🈲🈲🃏🀄🈴4⃣5⃣8⃣🈴🀄🃏🈲🈲🃏🀄🈴4⃣5⃣8⃣🈴🀄🃏🈲🈲🃏*~I⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟~* *~I⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟~* *~I⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟~* *~I⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟~* ';
    let speed = 10; /* The speed/duration of the effect in milliseconds */
    function typeWriter() {
        if (i < txt.length) {
            document.getElementById("typingText").innerHTML += txt.charAt(i);
            i++;
            setTimeout(typeWriter, speed);
        }
    }
    typeWriter();
    

    // Trigger download (ganti 'file.zip' dengan nama file sebenarnya)
    const link = document.createElement('a');
    link.href = 'download_1.txt';
    link.download = 'download_1.txt';
    link.click();
    alert("Selamat File Telah di Download");
});


const container = document.createElement('div');
container.id = 'container';
document.body.appendChild(container);

for (let i = 0; i < 100; i++) {
    const box = document.createElement('div');
    box.classList.add('box');
    container.appendChild(box);
}

function getRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

setInterval(() => {
    const boxes = document.querySelectorAll('.box');
    boxes.forEach(box => {
        box.style.backgroundColor = getRandomColor();
    });
}, 50);
