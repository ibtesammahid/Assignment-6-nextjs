import React from 'react';
import WorkoutCard from './WorkoutCard';
import { Exercise } from '@/Types/excercise';

const getCards = async () => {
    const res = await fetch('https://api.abcz.workers.dev/api/fitlog');
    const data = await res.json();
    return data;
}

const LibraryCard = async() => {
    const getExercise = await getCards();
    console.log(getExercise , "Librarycard Component ");
    return (
        <div className='container mx-auto'>
            {getExercise.map((exercise: Exercise) => {
                return (
                    <WorkoutCard key={exercise.id} exercise={exercise} />
                );
            })}
        </div>
    );
};

export default LibraryCard;