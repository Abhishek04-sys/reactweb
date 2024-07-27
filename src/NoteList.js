import React, { useState } from 'react';

const NotesList = ({ notes, onEdit, onDelete }) => {
    const [expandedNote, setExpandedNote] = useState(null);

    const handleExpand = (index) => {
        setExpandedNote(index === expandedNote ? null : index);
    };
    return ( 
        <div className='list'>
            {notes.map((note, index) => (
                <div key={index} className="note">
                    <p className='list-title'>{note.title}</p>
                    <p className='list-content'>
                        {expandedNote === index
                            ? note.content
                            : `${note.content.slice(0, 100)}${note.content.length > 100 ? '...' : ''}`}
                        <button className={note.content.length < 100 ? 'list-show-hide' : 'list-show'} onClick={() => handleExpand(index)}>
                              {expandedNote === index ? 'Show Less' : 'Show More'}
                        </button>
                    </p>
                    
                    <div className="actions">
                        <button className='edit' onClick={() => onEdit(index)}>Edit</button>
                        <button className='delete' onClick={() => onDelete(index)}>Delete</button>
                    </div>
                </div>
            ))}
        </div>
     );
}
 
export default NotesList;