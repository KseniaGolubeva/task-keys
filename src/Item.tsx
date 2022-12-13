import React, { useState } from 'react';

export function Item(props: { name: string }) {
    const [isEdit, setIsEdit] = useState(false);
    const [name, setName] = useState(props.name);
    const [editName, setEditName] = useState(props.name);

    const keyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            setName(editName);
            setIsEdit(false);
        } else if (e.key === 'Escape') {
            setIsEdit(false);
        }
    };

    if (isEdit) {
        return (
            <input
                type="text"
                onKeyDown={keyDown}
                defaultValue={name}
                onChange={(e) => setEditName(e.target.value)}
            />
        );
    } else {
        return <div onClick={() => setIsEdit(true)}>{name}</div>;
    }
}
