import React from 'react'

const Base = "http://127.0.0.1:8000"

class ApiUrl{
    
    static LogIn = `${Base}/login/`
    static LogOut = `${Base}/logout/`

}

export default ApiUrl