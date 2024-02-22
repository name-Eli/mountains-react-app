
export interface ScheduleEvent {
    id: number;
    date: string;
    description: string;
    tabId: number;
}

const events: ScheduleEvent[] = [
    {
        id: 1,
        date: '25 Nov 2024',
        description: 'Vestibulum viverra',
        tabId: 1
    },
    {
        id: 2,
        date: '13 Feb 2024',
        description: 'Vestibulum viverra',
        tabId: 1
    },
    {
        id: 3,
        date: '18 Feb 2024',
        description: 'Vestibulum viverra',
        tabId: 1
    },
    {
        id: 4,
        date: '25 Feb 2024',
        description: 'Vestibulum viverra',
        tabId: 1
    },
    {
        id: 5,
        date: '16 Feb 2024',
        description: 'Vestibulum viverra',
        tabId: 2
    },
    {
        id: 6,
        date: '20 Feb 2024',
        description: 'Vestibulum viverra',
        tabId: 2
    },
    {
        id: 7,
        date: '28 Feb 2024',
        description: 'Vestibulum viverra',
        tabId: 2
    },
    {
        id: 8,
        date: '19 Mar 2024',
        description: 'Vestibulum viverra',
        tabId: 2
    },
    {
        id: 9,
        date: '20 Feb 2024',
        description: 'Vestibulum viverra',
        tabId: 2
    },
    {
        id: 10,
        date: '28 Feb 2024',
        description: 'Vestibulum viverra',
        tabId: 2
    },
    {
        id: 11,
        date: '19 Mar 2024',
        description: 'Vestibulum viverra',
        tabId: 2
    },
]


export default events;