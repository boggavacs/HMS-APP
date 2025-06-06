import React from 'react';
import Button from '@mui/material/Button';

export default function JobListingInfo() {
    return (
        <div>
            <h3>About the role</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam blanditiis saepe harum error necessitatibus fugit sint, voluptas quia consectetur molestias, deleniti quo porro laboriosam maiores beatae minima minus temporibus. Modi! </p>
            <h3>Requirements</h3>
            <ul>
                <li>Experience with React and TypeScript</li>
                <li>Strong understanding of web development principles</li>
                <li>Ability to work in a team and communicate effectively</li>
            </ul>
            <h3>Compensation & Benefits</h3>
            <p>We offer a competitive salary, health insurance, and a flexible work environment.</p>
            <Button color="primary">Custom Primary Button</Button>
        </div>
    )
}

