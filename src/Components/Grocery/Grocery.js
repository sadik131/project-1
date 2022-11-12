import React, { useEffect, useState } from 'react'
import Alert from './Alert';
import List from './List';

const getStore = () =>{
    const list = localStorage.getItem("list")
    if(list){
        // console.log(localStorage.getItem("list"))        [{"id":"1668148775053","title":"sdfasdf"},{"id":"1668149042809","title":"rosni"}]    /  [{…}, {…}]
        return JSON.parse(localStorage.getItem("list"))
    }
    // console.log(JSON.parse(localStorage.getItem(list)))
    return []
}
// getStore()

export default function Grocery() {
    const [name, setName] = useState('')
    const [list, setList] = useState(getStore())
    const [edit, setedit] = useState(false);
    const [id, setId] = useState('');
    const [alert, setAlert] = useState({ type: false, status: "", message: "" });

    const handelfrom = (e) => {
        e.preventDefault()
        if (!name) {
            setAlert({ type: true, status: "fail", message: "Please enter some value" })
        } else if (name && edit) {
            setList(
                list.map(item => {
                    if (item.id == id) {
                        setName("")
                        setedit(false)
                        setAlert({ type: true, status: "success", message: "Item Name Change Successfully" })
                        return { title: name }

                    }
                    return item
                }
                )
            )
        } else {
            const newItem = { id: new Date().getTime().toString(), title: name }
            setList([...list, newItem])
            setAlert({ type: true, status: "success", message: "Item add successfully" })
            setName('')
        }

    }


    const clearList = () => {
        setAlert({ type: true, status: "delete", message: "Empty the list" })
        setList([])
    }
    const deleteListItem = (id) => {
        const item = list.filter(item => item.id !== id)
        setList(item)
        setAlert({ type: true, status: "delete", message: "Item delete from the list" })
    }

    const editListItem = (id) => {
        const item = list.find(item => item.id == id)
        setId(item.id)
        setedit(true)
        // setAlert({ type: true, status: "success", message: "Item delete from the list" })
    }

    useEffect(() => {
        localStorage.setItem("list" , JSON.stringify(list))
    }, [list]);

    return (
        <div className='bg-slate-300 h-screen flex justify-center items-center'>
            <div className='card shadow-md w-96 bg-slate-100 p-4'>
                {alert.type && <Alert alert={alert} list={list} setAlert={setAlert}></Alert>}
                <h1 className='text-xl font-bold text-center'>Grocery bud</h1>
                <form className='flex' onSubmit={handelfrom}>
                    <input onChange={(e) => setName(e.target.value)} value={name} type="text" className='w-full bg-blue-100' />
                    <button type='submit' className='bg-blue-400 px-1 py-1 text-white'>{edit ? "Edit " : "Submit"}</button>
                </form>
                {
                    list.length === 0 ? <></> :
                        <>
                            <List list={list} editListItem={editListItem} removeItem={deleteListItem}></List>
                            <button className='text-orange-600' onClick={clearList}>Clear Items</button>
                        </>
                }
            </div>

        </div>
    )
}
