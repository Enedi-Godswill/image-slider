
export const sideMenu = [
    {
        label:"Home",
        to:"/"
    },
    {
        label:"profile",
        to:"/profile",
        children : [
            {
                label:"details",
                to:"details",
                children: [
                    {
                        label:"location",
                        to:"location"
                    }
                ]
            },
        ]
    },
    {
        label:"settings",
        to:"/settings",
        children:[
            {
                label:"account",
                to:"account"
            },
            {
                label:"security",
                to:"security",
                children:[
                    {
                        label:"login",
                        to:"login"
                    },
                    {
                        label:"register",
                        to:"register"
                    }
                ]
            }
        ]
    }
]
