import React from 'react';
import '../App.css';
import resume from '../resume.pdf';
import img from '../images/resumeimg.PNG';

class DownloadLink extends React.Component {
    render() {
        return (
            <a href={this.props.src} download>{this.props.children}</a>
        )
    }
}

export default function Resume() {
  return (
    <main>
        <div className="resume">
            <h2>- Resume -</h2>
            <DownloadLink src={resume}><img id="resumeimg" src={img} /><br />Click to download</DownloadLink>
        </div>
    </main>
  );
}