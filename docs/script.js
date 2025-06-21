function openContent(event, number) {
    const tabs = ['a', 'b', 'c'];
    tabs.forEach((id, index) => {
        const elem = document.getElementById(id);
        elem.style.display = (index + 1 === number) ? 'block' : 'none';
    });

    const buttons = document.querySelectorAll('.tab button');
    buttons.forEach(btn => btn.classList.remove('active'));

    event.currentTarget.classList.add('active');
}