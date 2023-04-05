let char = createKnight('Arthur');
let monster = createbigMonster();
let monster2 = createlittleMonster();

stage.start(
    char,
    monster,
    document.querySelector('#char'),
    document.querySelector('#monster')
)