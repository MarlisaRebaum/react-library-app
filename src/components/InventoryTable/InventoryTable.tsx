import React, { useState } from 'react';
import { DataGrid, GridColDef } from '@material-ui/data-grid';
import { useGetData } from '../../custom-hooks';
import { server_calls } from '../../api';
import { Button, 
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle } from '@material-ui/core';
import { InventoryForm } from '../InventoryForm';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 90, hide: true },
  { field: 'book_title', headerName: 'Book Title', flex: 1},
  { field: 'author', headerName: 'Author', flex: 1},
  { field: 'ISBN', headerName: 'ISBN', flex: 1},
  { field: 'length', headerName: 'Number of Pages', flex: 1},
  { field: 'cover_type', headerName: 'Type of Cover', flex: 1},
];

interface gridData {
  data: {
    id?:string
  }
};

export const InventoryTable = () => {

  let { inventoryData, getData } = useGetData();
  let [ open, setOpen ] = useState(false);
  let [ gridData, setData ] = useState<gridData>({data:{}});
  const [selectionModel, setSelectionModel] = useState<any>([]);

  let handleOpen = () => {
    setOpen(true)
  };

  let handleClose = () => {
    setOpen(false)
  };

  let deleteData = () => {
    server_calls.delete(selectionModel);
    getData();
    setTimeout( () => { window.location.reload(); }, 1000)
  };

  return (
    <div style={{ height: 400, width: '100%' }}>
      <h2>Available Library Books</h2>

    <DataGrid 
      rows={ inventoryData } 
      columns={ columns } 
      pageSize={ 5 }
      checkboxSelection={true}
      onSelectionModelChange={ (item) => {
      setSelectionModel(item)
      // console.log(item)
    }}
    />

    <Button onClick={handleOpen}>Update</Button>
    <Button variant="contained" color="secondary" onClick={deleteData}>Delete</Button>

    <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
      <DialogTitle id="form-dialog-title">Update Book {selectionModel}</DialogTitle>
      <DialogContent>
        <DialogContentText>Update Book</DialogContentText>
          <InventoryForm id={selectionModel}/>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">Cancel</Button>
        <Button onClick={handleClose} color="primary">Done</Button>
      </DialogActions>
    </Dialog>

    </div>
  )
};
