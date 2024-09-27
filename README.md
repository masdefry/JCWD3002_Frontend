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

- How to Setup Tailwind CSS?
            
            https://tailwindcss.com/docs/guides/vite

- How to Setup React Toastify?

                0. Install

                        npm i react-toastify

                1. Put `ToastContainer` Component at `App.jsx'

                        import {ToastContainer} from 'react-toastify';

                        function App(){
                                return(
                                        <>
                                        <ToastContainer />
                                                <Routes>
                                                ...
                                                ...
                                                ...
                                                </Routes>
                                        </>
                                )
                        }

                        export default App

                2. Use `toast.success` or `toast.error` or Any toast Method as Modern Alert

                        toast.success('Delete Todo Success!')

- Using JSON-SERVER as Fake API 

                0. Install JSON-SERVER (Install on Global/System Computer)

                    npm i -g json-server

                1. Create New Directory `db` and New File `db.json` Inside Your React Project 

                2. Running JSON-SERVER on Your Terminal CMD. Makesure Your Terminal Already Inside `db` Directory 

                    json-server --watch db.json --port 5000



