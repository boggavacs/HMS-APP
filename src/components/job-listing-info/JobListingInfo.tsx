import React from 'react';
import Button from '@mui/material/Button';
import {button} from '../common/CommonComponents';
import './joblistinginfo.css';

export default function JobListingInfo() {
    return (
        <div className='job-listing-info'>
            <div>
                <button className='btn-secondary'>Request</button>
            </div>
            <div>
                <h2>About the role</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam blanditiis saepe harum error necessitatibus fugit sint, voluptas quia consectetur molestias, deleniti quo porro laboriosam maiores beatae minima minus temporibus. Modi! </p>
                <h2>Requirements</h2>
                <ul>
                    <li>Experience with React and TypeScript</li>
                    <li>Strong understanding of web development principles</li>
                    <li>Ability to work in a team and communicate effectively</li>
                    <li>Experience with React and TypeScript</li>
                    <li>Strong understanding of web development principles</li>
                    <li>Ability to work in a team and communicate effectively</li>
                </ul>
                <h2>Compensation & Benefits</h2>
                <p>We offer a competitive salary, health insurance, and a flexible work environment.</p>
            </div>
        </div>
    )
}

