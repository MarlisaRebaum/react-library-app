import { createSlice } from '@reduxjs/toolkit';

const rootSlice = createSlice({
    name: "root",
    initialState: {
        book_title: 'book_title',
        author: 'author',
        ISBN: 'ISBN',
        length: 'length',
        cover_type: 'cover_type',
    },
    reducers: {
        chooseTitle: (state, action) => { state.book_title = action.payload},
        chooseAuthor: (state, action) => { state.author = action.payload},
        chooseIsbn: (state, action) => { state.ISBN = action.payload},
        chooseLength: (state, action) => { state.length = action.payload},
        chooseCover: (state, action) => { state.cover_type = action.payload},
    }
});

export const reducer = rootSlice.reducer;
export const { chooseTitle, chooseAuthor, chooseIsbn, chooseLength, chooseCover } = rootSlice.actions;