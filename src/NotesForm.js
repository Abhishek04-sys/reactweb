import React, { useState, useEffect } from 'react';

const NotesForm = ({onSave, currentNote}) => {

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    useEffect(() => {
        if (currentNote) {
            setTitle(currentNote.title);
            setContent(currentNote.content);
        }
    }, [currentNote]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (title && content) {
            onSave({ title, content });
            setTitle('');
            setContent('');
        } else {
            alert('Please enter both title and content.');
        }
    };

    return ( 
            <form className='form' onSubmit={handleSubmit}>
            <div>
            <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Title"
            />
            </div>
            <div>
            <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="Write the notes..."
            />
            </div>
            <button className='save' type="submit">Add Note</button>
        </form>
     );
}
 
export default NotesForm;