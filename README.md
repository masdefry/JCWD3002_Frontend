Hello, JCWD3002!

- How to Setup React JS with Vite?

            1. Create Project

                    npm create vite@latest
            
            2. Inside Your New Vite Project

                    npm i 
            
            3. Execute Vite Project

                    npm run dev

- How to Setup React Router Dom?

            0. Install

                    npm i react-router-dom@6

            1. Import Component `BrowserRouter` at `main.jsx`

                    import { BrowserRouter } from 'react-router-dom'

                    createRoot(document.getElementById('root')).render(
                        <BrowserRouter>
                                <App />
                        </BrowserRouter>,
                    )


            2. Import `Routes` and `Route` at `App.jsx`
                
                    import Profile from './pages/Profile';
                    
                    import Login from './pages/Login';

                    <Routes>
                        <Route path='/profile' element={<Profile />} />
                        <Route path='/login' element={<Login />} /> 
                    </Routes>