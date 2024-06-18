

import Button from '@/app/components/Button';
import Image from 'next/image';
import React from 'react';
import Exercise from "@/public/Exercise.jpeg"
const MissionAbout = () => {
    return (
        <main className='mt-10'>
            <h2>About us for our new mission</h2>
            <Image src={Exercise} alt='Exercise Pic' placeholder='blur' quality={100}></Image>
            <Button></Button>
            
        </main>
    );
};

export default MissionAbout;