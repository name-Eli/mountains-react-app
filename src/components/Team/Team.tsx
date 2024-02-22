import { useState } from "react";
import './Team.css'
import NavBar from "../NavBar/NavBar";
import events from '../Data/events'
import Schedule from "../Schedule/Schedule";

export interface Tab {
    id: number,
    name: string
}

const Team = () => {

    const tabs = { tab1: { id: 1, name: 'Mountain 1' }, tab2: { id: 2, name: 'Mountain 2' } }

    const [activeTab, setActiveTab] = useState<Tab>(tabs.tab1)

    return (
        <>
            <div className={`${activeTab.id === 1 ? 'teamTab1Background' : 'teamTab2Background'} background`}></div >

            <NavBar />

            <div className="tabs">
                <span className={`${activeTab.id === 1 ? 'activeTab' : ''} tab`} onClick={() => setActiveTab(tabs.tab1)}><a>MOUNTAIN 1</a></span>
                <span className={`${activeTab.id === 2 ? 'activeTab' : ''} tab`} onClick={() => setActiveTab(tabs.tab2)}><a>MOUNTAIN 2</a></span>
            </div>


            <div className="content teamContent">
                <h1 className='title'>{activeTab.name}</h1>
                <p>Cras scelerisque id quam sed dignissim Pellentesque urna nunc, gravida quis hendrerit ac, tristique ut quam. Vivamus suscipit dignissim tortor nec congue. </p>

                <Schedule events={events.filter(event => event.tabId === activeTab.id)} />
            </div>


            <div className="footer footerTeam">
                <p>COPYRIGHT 2024. ALL RIGHTS RESERVED.</p>
            </div>

        </>
    )
}

export default Team;