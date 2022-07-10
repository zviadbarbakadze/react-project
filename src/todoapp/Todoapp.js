import classNames from "classnames" ;
import { useState,useRef,useEffect } from "react";

const ITEMS=[
    {
        id:1,
        title:"lorem ipsum1",
        completed:false,
    },
    {
        id:2,
        title:"lorem ipsum2",
        completed:false,
    },
    {
        id:3,
        title:"lorem ipsum3",
        completed:true,
    },
    {
        id:4,
        title:"lorem ipsum4",
        completed:true,
    }
]
function Todoapp(){
    const [todos,setTodos]=useState(ITEMS)
    const[value,setValue]=useState('');
    const inputRef=useRef();
    useEffect(()=>{
        inputRef.current.focus()
    },[])
    function onItemChange(clikedItem){
        
            const newValue= todos.map(item=>{
                if(item.id===clikedItem.id){
                    item.completed=!item.completed;
                    
                }
                return item;
        })
        setTodos(newValue);
        

     
    }
    function onAddNewItem(e){
        e.preventDefault();
        const newItem=[
            ...todos,
            {
                id:Date.now(),
        title:"lorem ipsum5",
        completed:false,
            }
        ]
        setTodos(newItem)
        setValue('');
    }

    return (
        
        <div>
            <div>
                <form action="" onSubmit={onAddNewItem}>
                    <input type="text"
                     value={value}
                      onChange={e=>setValue(e.target.value)
                      }
                      ref={inputRef}
                      />
                      
                </form>
            </div>
            <ul>
                {
                    todos.map(item => (
                        <li key={item.id} className={classNames({completed:item.completed})}>
                        <input type="checkbox" checked={item.completed}
                         onChange={()=>onItemChange(item)} />
                        {item.title}
                        <button>delete</button>
                    </li>

                    ))

                }
              
            </ul>
        </div>
    )
}
export default Todoapp;