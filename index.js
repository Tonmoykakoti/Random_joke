const jokes = [
    "My advice to you is get married If you find a good wife you’ll be happy if not, you’ll become a philosopher.",
    "If you want to be sure that you never forget your wife’s birthday, just try forgetting it once.” —Aldo Cammarota",
    "Before you marry a person, you should first make them use a computer with slow Internet service to see who they really are.” —Will Ferrell",
    "Never criticize your spouse’s faults; if it weren’t for them, your mate might have found someone better than you.” —Jay Trachman"
]

const heading = document.querySelector('.heading')

const btn = document.querySelector('.btn')
btn.addEventListener('click', function() {    
    const jokesIndex = Math.floor(Math.random() * 4)
    heading.innerHTML = jokes[jokesIndex]
})

