import React from 'react'
// import PropTypes from 'prop-types'
import { useState } from 'react'

export default function TextForm() {
    const [text, setText] = useState('');

    const onChangeText = () => {
        let text = document.getElementById('textBox').value;
        setText(text);
    }
    const clickUppercase = () => {
        setText(text.toUpperCase());
    }
    const clickLowercase = () => {
        setText(text.toLowerCase());
    }
    const clickClearText = () => {
        setText('');
    }
    const clickCopyText = () => {
        /* Get the text field */
        let copyText = document.getElementById("textBox");

        /* Select the text field */
        copyText.select();
        // copyText.setSelectionRange(0, 99999); /* For mobile devices */
        /* Copy the text inside the text field */
        navigator.clipboard.writeText(copyText.value);
    }
    const clickRemoveSpaces = () => {
        let newText = document.getElementById('textBox').value;
        let newArr = newText.replace(/  +/g, ' ');
        setText(newArr);
    }
    return (
        <>
            <div className="container my-3">
                <h1>Enter Your Text Here!</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={onChangeText} id="textBox" rows="12"></textarea>
                </div>
                <div className="my-3">
                    <button type="button" className="btn btn-sm btn-primary mx-2" onClick={clickUppercase}>UPPERCASE</button>
                    <button type="button" className="btn btn-sm btn-primary mx-2" onClick={clickLowercase}>lowercase</button>
                    <button type="button" className="btn btn-sm btn-primary mx-2" onClick={clickClearText}>Clear Text</button>
                    <button type="button" className="btn btn-sm btn-primary mx-2" onClick={clickCopyText}>Copy Text</button>
                    <button type="button" className="btn btn-sm btn-primary mx-2" onClick={clickRemoveSpaces}>Remove Spaces</button>
                </div>
            </div>
        </>
    )
}
