const createFootnote = ( text ) => {
    const footnote = document.getElementById( "footnote-text" );
    footnote.innerText = `${ text }`;
};

export default createFootnote;