let data= [
    {
      "title": "Work",
      "timeframes": {
        "daily": {
          "current": 5,
          "previous": 7
        },
        "weekly": {
          "current": 32,
          "previous": 36
        },
        "monthly": {
          "current": 103,
          "previous": 128
        }
      }
    },
    {
      "title": "Play",
      "timeframes": {
        "daily": {
          "current": 1,
          "previous": 2
        },
        "weekly": {
          "current": 10,
          "previous": 8
        },
        "monthly": {
          "current": 23,
          "previous": 29
        }
      }
    },
    {
      "title": "Study",
      "timeframes": {
        "daily": {
          "current": 0,
          "previous": 1
        },
        "weekly": {
          "current": 4,
          "previous": 7
        },
        "monthly": {
          "current": 13,
          "previous": 19
        }
      }
    },
    {
      "title": "Exercise",
      "timeframes": {
        "daily": {
          "current": 1,
          "previous": 1
        },
        "weekly": {
          "current": 4,
          "previous": 5
        },
        "monthly": {
          "current": 11,
          "previous": 18
        }
      }
    },
    {
      "title": "Social",
      "timeframes": {
        "daily": {
          "current": 1,
          "previous": 3
        },
        "weekly": {
          "current": 5,
          "previous": 10
        },
        "monthly": {
          "current": 21,
          "previous": 23
        }
      }
    },
    {
      "title": "Self Care",
      "timeframes": {
        "daily": {
          "current": 0,
          "previous": 1
        },
        "weekly": {
          "current": 2,
          "previous": 2
        },
        "monthly": {
          "current": 7,
          "previous": 11
        }
      }
    }
  ]

  const buttons = document.querySelectorAll('.option')

  const activateClickedButton= (button) =>{
    buttons.forEach(b=>b.classList.remove('active'))
    button.classList.add("active")
  }
  
  const clearActivities = () =>{
    const activities = document.querySelectorAll('.activity')
        activities.forEach(a => a.remove())
      }

  const renderCards = (clickedOption) => {

    clearActivities()

    const activityTracker = document.querySelector('section.activity-tracker')

    const calcTimeframe = (option) => {
        if(option==='daily'){
            return 'Yesterday'
        }
        if(option==='weekly'){
            return 'Last Week'
        }
        if(option==='monthly'){
            return 'Last Month'
        }

    }

    data.forEach(oneactivity=>{
        const name=oneactivity.title
        const activityClass = name.toLowerCase().replace(' ','-')
        const timeframeData = oneactivity.timeframes[clickedOption]
        const previousTimeframe=calcTimeframe(clickedOption)

        const section= document.createElement('section')
        section.classList.add('activity',activityClass)
        const stringToInject = `
            <div class="activity_bg">
                <img src="images/icon-${activityClass}.svg" alt="">
            </div>

        <div class="activity_info">
            <header class="activity_header">
                <h2 class="activity_name">${name}</h2>
                <button class="activity_options">
                    <img  src="images/icon-ellipsis.svg" alt="">
                </button>
            </header>

            <div class="activity_timeframe">
                <h3 class="current_timeframe">${timeframeData.current}hrs</h3>
                <div class="previous_timeframe">
                <p class="time-words">${previousTimeframe}</p>
                <p class="">-</p>
                <p class="time">${timeframeData.previous}hrs</p>

                </div>
            </div>
        </div>
        `

        section.innerHTML = stringToInject
        activityTracker.append(section)
    })
  }

  buttons.forEach(button => {
    button.addEventListener("click",() =>{
        activateClickedButton(button)
        const clickedOption = button.dataset.option
        renderCards(clickedOption)
        
    })
  })

  buttons[1].click();