import React, { ChangeEvent, useState } from 'react';
import { Dog } from '../models/dog';


interface MyProps {
}


const DogComponent: React.FC<MyProps> = (props: MyProps) => {

    //Demo's State
    const [dogName, setDogName] = useState("");
    const [dogBreed, setDogBreed] = useState("");
    const [dogAge, setDogAge] = useState(0);
    const [allDogs, setAllDogs] = useState<Dog[]>([]);


    const dogOnChangeFunction = (synthEvent: ChangeEvent<HTMLInputElement>) => {
        //you can put whatever complex logic you want in here.
        if (synthEvent.target.name === "dogName")
            setDogName(synthEvent.target.value);
        else if (synthEvent.target.name === "dogBreed")
            setDogBreed(synthEvent.target.value);
        else if (synthEvent.target.name === "dogAge")
            setDogAge(parseInt(synthEvent.target.value));
    }

    const addDogEvent = () => {
        /*
            TODO: your task is to take the form input field data and add a new dog object with those attributes to the dog array; then ensue the component rerenders

            TIP: React components only rerender when the state, props, or elements keys change. Also, remember that arrays hold references not data values,
                so if you are updating an array with ".push()" you can't simply call the state's "setArrayname(arrayName)" to rerender because the value
                hasn't actually change, the reference is identical. SO...the tip for this lab is that you can create a new reference for an array by
                using "setArrayName([...arrayName])". This is utilizing a JavaScript/TypeScript concept called "desctructuring"; if you're unfamiliar
                consider looking into it later.
        */
    }




    return (
        <React.Fragment>
            <h3>Dog Input</h3>

            <form>
                Name: <input type="text" value={dogName} onChange={dogOnChangeFunction} name="dogName"></input>
                <br />
                Breed: <input type="text" value={dogBreed} onChange={dogOnChangeFunction} name="dogBreed"></input>
                <br />
                Age: <input type="number" value={dogAge} onChange={dogOnChangeFunction} name="dogAge"></input>
            </form>

            {/* TODO: complete the event function that makes this button function */}
            <button onClick={addDogEvent}>Submit Dog</button>

            <br/>
            <br/>
            <h3>All Dogs</h3>
            
            {/* Here we are displaying the list of dogs */}
            {allDogs.map((dogObject) => {return <div key={dogObject.name + ":" + dogObject.breed}>
                    <span>Name: {dogObject.name}</span>
                    <span>Breed: {dogObject.breed}</span>
                    <span>Age: {dogObject.age}</span>
                </div>})}

        </React.Fragment>
    );
}

export default DogComponent;