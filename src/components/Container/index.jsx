import { useState } from 'react';
import '../Container/style.css'

import Card from '../Card';

import TextArea from '../textarea';

import { DataContext } from "../../components/context/dataContext";
import { useContext } from 'react';




function ContainerTask(prop) {
    

    const [dataState, uploadDataState] = useContext(DataContext);
    


    const [newTask, uploadNewTask] = useState(false);

    const handleNewTask = e => {
        if(newTask === false){
            uploadNewTask(true)
        } else {
            uploadNewTask(false)
        }
    }

    const handleDeleteAll = e => {
       
        let cleanArray = dataState.filter(element => element.status != 'done')
        
        console.log(cleanArray)
        uploadDataState(cleanArray)
        
    }

console.log(prop.prop)

    return (

        <section className='ContTask'>
            <div className="headerContTask">
                <div className='numberContTask'>
                    <p>{prop?.prop.task.length}</p>
                 </div>
                <p className='titleContTask'>{prop?.prop.name}</p>
                {prop?.prop.id === 3 ? <button className='deleteAll' onClick={handleDeleteAll}> &#128465; </button> : <></>}
                <div>
                <button className='plusContTask' onClick={handleNewTask}>+</button></div>
            </div>
            <div className="ContainerTask">
                {
                   newTask ? <div className='task'><TextArea cancel={uploadNewTask} prop={prop.prop.id}></TextArea></div> : <></>
                }
                {
                    // prop?.prop.id === 1 ? dataState?.filter(e=> e.status === 'to_do').map((e,i) => <Card key={i} info={e}></Card> ): <></>
                }
                {
                    // prop?.prop.id === 2 ? dataState?.filter(e=> e.status === "in_progress").map((e,i) => <Card key={i} info={e}></Card> ): <></>
                }
                {
                    // prop?.prop.id === 3 ? dataState?.filter(e=> e.status === "done").map((e,i) => <Card key={i} info={e}></Card> ): <></>
                }
                {
                    prop?.prop.task.map((e,i) => <Card key={e.num} info={e}></Card> )
                }

            </div>
        </section>

    )
}

export default ContainerTask;
