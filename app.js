const ninjaGenerator = () => { //creates an empty object to later be filled with ninja stats
    return {}
}

const ninja = ninjaGenerator() // stores object to the variable ninja to make it callable


const ninjaStats = (ninja) => {
    ninja.Ninjutsu = Math.floor(Math.random() * 6)
    ninja.Genjutsu = Math.floor(Math.random() * 6)
    ninja.Taijustsu = Math.floor(Math.random() * 6)
    ninja.Stamina = Math.floor(Math.random() * 5) + 1
    ninja.Speed = Math.floor(Math.random() * 5) + 1
}

const belongsToClan = (ninja) => {
    let yesOrNo = Math.floor(Math.random() * 2)
    const clans = ['Uchiha', 'Sarutobi', 'Akimichi', 'Aburame', 'Senju', 'Nara', 'Uzumaki', 'Yamanaka', 'Hyūga']
    if (yesOrNo === 1) {
        let randomNum = Math.floor(Math.random() * clans.length)
        ninja.Clan = `${clans[randomNum]}`
    } else {
        ninja.Clan = 'None'
    }
}

belongsToClan(ninja)
ninjaStats(ninja)

const giveSensei = (ninja) => {
    let statAvg = ((ninja.Ninjutsu + ninja.Genjutsu + ninja.Taijustsu + ninja.Stamina + ninja.Speed) / 5).toFixed(1)
    const teachers = ['Kakashi', 'Asuma', 'Minato', 'Hiruzen', 'Jiraiya', 'Kurenai', 'Tsunade', 'Yamato', 'Guy', 'Sakura', 'Anko', 'Tobirama']
    ninja.Rating = statAvg

    if (ninja.Rating >= 3.5) {
        const highLevelTeachers = ['Naruto', 'Sasuke', 'Hashirama']
        ninja.Rating = statAvg + ' PRODIGY'
        ninja.Sensei = highLevelTeachers[Math.floor(Math.random() * highLevelTeachers.length)]
    } else {
        ninja.Sensei = teachers[Math.floor(Math.random() * teachers.length)]
    }
}

const giveChakraNature = (ninja) => {
    const natures = ['Water', 'Fire', 'Lightning', 'Wind', 'Earth']
    if (ninja.Clan === 'Uchiha' || ninja.Clan === 'Sarutobi') {
        ninja.Nature = natures[1]
    } else {
        ninja.Nature = natures[Math.floor(Math.random() * natures.length)]
    }
}

giveChakraNature(ninja)
giveSensei(ninja)

console.log(`Congratulations, You have graduated from the Hidden Leaf Ninja Academy! Here are you official ninja skills: \n\n
            Your Clan: ${ninja.Clan}\n
            Ninjutsu Proficiency: ${ninja.Ninjutsu}\n
            Genjutsu Proficiency: ${ninja.Genjutsu}\n
            Taijutsu Proficiency: ${ninja.Taijustsu}\n
            Stamina: ${ninja.Stamina}\n
            Speed: ${ninja.Speed}\n
            Skill Average: ${ninja.Rating}\n\n
            Based on your proformance, we have decided to pair you with ${ninja.Sensei} Sensei. Hopefully that will be a good fit for you.\n
            You are now ready to start your training with your new squad led by ${ninja.Sensei}.\n
            Good luck shinobi!`)