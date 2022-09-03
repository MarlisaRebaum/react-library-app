import React from 'react';
import { useDispatch, useSelector, useStore } from 'react-redux';
import { useForm } from 'react-hook-form';
import { chooseTitle, chooseAuthor, chooseIsbn, chooseLength, chooseCover } from '../../redux/slices/RootSlice';
import { Input } from '../SharedComponents/input';
import { Button } from '@material-ui/core';
import { server_calls } from '../../api';

interface InventFormProps {
  id?: string;
  data?: {}
};

interface InventState {
  book_title: string;
  author: string;
  ISBN: string;
  length: string;
  cover_type: string;
};

export const InventoryForm = (props: InventFormProps) => {

  const dispatch = useDispatch();
  const store = useStore();
  const book_title = useSelector<InventState>(state => state.book_title);
  const { register, handleSubmit } = useForm({ })
  
  const onSubmit = (data:any, event:any) => {
    console.log(props.id)
    if(props.id!){
      server_calls.update(props.id!, data);
      console.log(`Updated:${data} ${props.id}`);
      console.log(data);
      setTimeout( () => {window.location.reload()}, 1000);
      event.target.reset();
    } else {
      dispatch(chooseTitle(data.book_title));
      dispatch(chooseAuthor(data.author));
      dispatch(chooseIsbn(data.ISBN));
      dispatch(chooseLength(data.length));
      dispatch(chooseCover(data.cover_type));
      server_calls.create(store.getState());
      setTimeout( () => {window.location.reload()}, 1000);
    };
  };

  return (
    <div>
      <form onSubmit = {handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="book_title">Book Title</label>
          <Input {...register('book_title')} name="book_title" placeholder="Title"/>
        </div>
        <div>
          <label htmlFor="author">Author's Name</label>
          <Input {...register('author')} name="author" placeholder="Author"/>
        </div>
        <div>
          <label htmlFor="ISBN">Book ISBN</label>
          <Input {...register('ISBN')} name="ISBN" placeholder="ISBN"/>
        </div>
        <div>
          <label htmlFor="length">Book Length</label>
          <Input {...register('length')} name="length" placeholder="Number of Pages"/>
        </div>
        <div>
          <label htmlFor="cover_type">Type of Cover</label>
          <Input {...register('cover_type')} name="cover_type" placeholder="Paperback or hardcover?"/>
        </div>
        <Button type='submit'>Submit</Button>
      </form>
    </div>
  )
}
