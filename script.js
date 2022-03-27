const { body } = document;

function changeBackground(number) {
    // check if background already showing
    let previosBackground;
    if(body.className) {
        previosBackground = body.className;
    }

    body.className = '';
    switch (number) {
        case '1':
            return (previosBackground === 'background-1' ? false : body.classList.add('background-1'));
        case '2':
            return (previosBackground === 'background-2' ? false : body.classList.add('background-2'));
        case '3':
            return (previosBackground === 'background-3' ? false : body.classList.add('background-3'));
        default:
            break;
    }
}