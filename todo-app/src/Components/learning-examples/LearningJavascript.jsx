
const person = {
    name: 'Sagar Sunar',
    address: {
        street:'123 Sarjapura Road',
                Area: 'Doddakannahalli',
                City: 'Bengaluru',
                Country: 'India',
            },
    profiles: ['twitter', 'linkedin','instagram'],
    printProfile: () => {
        person.profiles.map(
            (profile) => {
                console.log(profile)
            }
        )
        console.log(person.profiles[0])
    }
}

export default function LearningJavascript(){
    return (
        <>
            <div>{person.name}</div>
            <div>{person.address.street}</div>
            <div>{person.profiles[1]}</div>
            <div>{ person.printProfile() }</div>
        </>
    )
}