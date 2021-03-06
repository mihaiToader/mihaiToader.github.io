let storyLine = {
    sound: new Audio(),
    current: {
        object: 'BIRD',
        speaking: true,
    },
    'bird': {
        story: '../resources/sounds/birdAsemanari.mp3',
        identifier: 'BIRD',
        onClick: (callback) => {$('#bird').click(callback)}
    },
    'corp': {
        story: '../resources/sounds/corp.mp3',
            identifier: 'CORP',
            onClick: (callback) => {$('#corp').click(callback)}
    },
    'glob': {
        story: '../resources/sounds/raspandire.mp3',
            identifier: 'GLOB',
            onClick: (callback) => {$('#glob').click(callback)}
    },
    'oua': {
        story: '../resources/sounds/inmultire.mp3',
            identifier: 'OUA',
            onClick: (callback) => {$('#oua').click(callback)}
    },
    'chitin': {
        story: '../resources/sounds/chitin.mp3',
            identifier: 'CHITIN',
            onClick: (callback) => {$('#chitin').click(callback)}
    },
    'antene': {
        story: '../resources/sounds/antene.mp3',
            identifier: 'ANTENE',
            onClick: (callback) => {$('#antene').click(callback)}
    },
    'aripi': {
        story: '../resources/sounds/aripi.mp3',
            identifier: 'ARIPI',
            onClick: (callback) => {$('#aripi').click(callback)}
    },
    'mediu': {
        story: '../resources/sounds/mediu.mp3',
            identifier: 'MEDIU',
            onClick: (callback) => {$('#mediu').click(callback)}
    },
    'grup': {
        story: '../resources/sounds/grup.mp3',
            identifier: 'GRUP',
            onClick: (callback) => {$('#grup').click(callback)}
    },
};

$(document).ready(() => {
    storyLine.sound.src = storyLine.bird.story;
    storyLine.sound.play();

    let nextSong = new Audio();
    let $nextBtn = $('.next-btn');

    $nextBtn.click(() => {
        setTimeout(() => {window.location.href = '../static/venn-mediu.html';}, 2000);
    storyLine.sound.pause();
    nextSong.src = '../resources/sounds/next.mp3';
    nextSong.play();
    });

    let backSong = new Audio();
    let $backBtn = $('.back-btn');

    $backBtn.click(() => {
        setTimeout(() => {window.location.href = '../index.html';},2000);
    storyLine.sound.pause();
    backSong.src = '../resources/sounds/back.mp3';
    backSong.play();
    });


    const clickOnCartoon = (cartoon) => {
        storyLine[cartoon].onClick(() => {
            if (storyLine.current.object !== storyLine[cartoon].identifier) {
            storyLine.current.object = storyLine[cartoon].identifier;
            storyLine.current.speaking = true;
            storyLine.sound.src = storyLine[cartoon].story;
            storyLine.sound.play();
        } else if (storyLine.current.speaking) {
            storyLine.current.speaking = false;
            storyLine.sound.pause();
        } else {
            storyLine.current.speaking = true;
            storyLine.sound.play();
            }
    });
    };
clickOnCartoon('bird');
clickOnCartoon('corp');
clickOnCartoon('glob');
clickOnCartoon('oua');
clickOnCartoon('chitin');
clickOnCartoon('antene');
clickOnCartoon('aripi');
clickOnCartoon('mediu');
clickOnCartoon('grup');
});