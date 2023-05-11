import React, { useState } from 'react'

const App = () => {

  const [inputVal, SetInputVal] = useState("");
  const [inputArr, SetInputArr] = useState([]);

  //add items in listfunction
  const addItems = () => {
    if (!inputVal) {
      alert("please enter some data");
    } else {
      SetInputArr([...inputArr, inputVal]);
      SetInputVal("")
    }
  }
  //delete items in listfunction
  const DeleteItem = (id) => {
    const newArr = inputArr.filter((val, ind) => {
      return id !== ind
    });
    SetInputArr(newArr)

  }


  return (
    <div style={{ textAlign: "center" }}>
      <div>
        Todo-List <br />
        <input type='text' value={inputVal} onChange={(e) => { SetInputVal(e.target.value) }}
        />
        <button onClick={addItems}>AddItems</button>
      </div>
      <div>
        <ul>
          {
            inputArr.map((val, ind) => {
              return <li key={ind}>{val} <button onClick={() => DeleteItem(ind)}>delete</button></li>

            })
          }
        </ul>

      </div>

    </div>
  )
}

export default App